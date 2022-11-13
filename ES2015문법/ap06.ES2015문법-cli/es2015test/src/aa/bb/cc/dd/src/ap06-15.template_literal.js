/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.
    template literal 용도
    다중 문자열 생성시 사용.
    변수 치환
*/

const name = 'gh';
const age = '20';

const str = `
 abc ${name}
 df
 dsf
`;
console.log(str);

const product = { name: '도서', price: '4200won' };
const message = `
 이 제품 ${product.name}의 가격은 ${product.price}입니다.
`;

console.log(message);
