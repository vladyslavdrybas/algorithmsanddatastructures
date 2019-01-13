function isAlphaNumeric(char)
{
    let code = char.charCodeAt(0);
    if (code > 47 && code < 123) {
        // numeric
        if (code < 59) {
            return true;
        }

        // alpha lowercase
        if (code > 96) {
            return true;
        }

        // alpha uppercase
        if (code > 64 && code < 91) {
            return true;
        }
    }

    return false;
}

function charCount(str)
{
    let result = {};
    str = str.toLowerCase();

    for (let char of str) {
        if (isAlphaNumeric(char)) {
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}

r = charCount('0123456789 qwertyuiopasdfghjklzxcvbnm my nAme is vlad !');

console.log(r);