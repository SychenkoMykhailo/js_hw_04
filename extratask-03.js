function compact(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (Boolean(element)) {
      newArr.push(element);
    }
  });
  console.log(newArr);
}
compact([1, 0, "", null, "Hello"]);
