function leftTriangle(long) {
    let result = '';
    for (let a = 0; a < long; a++) {
        for (let b = 0; b <= a; b++) {
            result += '* ';
        }
        result += '\n';
    }
    return result;
}
console.log('\n');
console.log(leftTriangle(6));

function rightTriangle(long) {
    let result = '';
    for (let a = 1; a <= long; a++) {
        for (let b = long-1;b>= a; b--) {
            result += '  ';
        }
        for (let c = 1; c <=a; c++){
            result += ' *'
        }
        result += '\n';
    }
    return result;
}
console.log('\n');
console.log(rightTriangle(6));