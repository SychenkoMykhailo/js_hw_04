const elemBigger10 = (elem) => elem > 10;
const elemSmaller10 = (elem) => elem < 10;
console.log([1, 2, 3, 23, 5].some(elemBigger10));
console.log([12, 45, 67, 34].some(elemSmaller10));
