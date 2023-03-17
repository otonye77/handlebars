const testFunc = (num, callback) => {
  let result = num * num;
  callback(result);
};

console.log(testFunc(3, (data) => {
    console.log(data);
}));
