<?php
/**
 * Created by Vladyslav Drybas.
 */

declare(strict_types=1);

/*
 * Last update by PHP CS Fixer of Vladyslav Drybas <ukdvvw@gmail.com>
 */

namespace App\EventSubscriber;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Component\HttpKernel\KernelEvents;

class ExceptionSubscriber implements EventSubscriberInterface
{
    private $params;

    public function __construct(ParameterBagInterface $params)
    {
        $this->params = $params;
    }

    public function onKernelException(GetResponseForExceptionEvent $event)
    {
        $e = $event->getException();

        $class = \get_class($e);
        $classImplements = class_implements($class);

        if (\in_array(HttpExceptionInterface::class, $classImplements, true)) {
            $code = $e->getStatusCode();
        } else {
            $code = JsonResponse::HTTP_BAD_REQUEST;
        }

        $responseAnswer = [
            'message' => $e->getMessage(),
            'code' => $code,
        ];

        if ('dev' === $this->params->get('environment')) {
            $responseAnswer['exception'] = [
                'class' => $class,
                'implements' => $classImplements,
            ];
            $responseAnswer['file'] = $e->getFile();
            $responseAnswer['line'] = $e->getLine();
            $responseAnswer['trace'] = $e->getTrace();
        }

        $response = new JsonResponse(
            $responseAnswer,
            $code
        );

        $response->headers->set('Content-Type', 'application/json; charset=UTF-8');
        $response->setCharset('UTF-8');
        $event->setResponse($response);
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::EXCEPTION => 'onKernelException',
        ];
    }
}
