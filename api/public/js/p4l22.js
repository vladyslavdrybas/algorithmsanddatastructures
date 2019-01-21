function charCount(str)
{
    let result = {};

    str = str.toUpperCase();

    for (let char of str) {
        if (/[A-Z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}

r = charCount('0123456789 qwertyuiopasdfghjklzxcvbnm my nAme is vlad !');

console.log(r);