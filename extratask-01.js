const elemBigger10 = (elem) => elem > 10;
const elemSmaller10 = (elem) => elem < 10;
console.log([1, 2, 3, 4, 5].every(elemSmaller10));
console.log([2, 45, 67, 34].every(elemBigger10));
