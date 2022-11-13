"use strict";

/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.
    template literal 용도
    다중 문자열 생성시 사용.
    변수 치환
*/

var name = 'gh';
var age = '20';
var str = "\n abc ".concat(name, "\n df\n dsf\n");
console.log(str);
var product = {
  name: '도서',
  price: '4200won'
};
var message = "\n \uC774 \uC81C\uD488 ".concat(product.name, "\uC758 \uAC00\uACA9\uC740 ").concat(product.price, "\uC785\uB2C8\uB2E4.\n");
console.log(message);