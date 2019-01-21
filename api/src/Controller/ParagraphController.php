<?php
/**
 * Developed by Vladyslav Drybas (https://github.com/vladyslavdrybas)
 */

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class ParagraphController extends AbstractController
{
    public function lecture($p_id, $l_id): Response
    {
        return $this->render(
            'base.html.twig',
            [
                'lectureId' => $l_id,
                'paragraphId' => $p_id,
            ]
        );
    }
}