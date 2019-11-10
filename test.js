module.exports = test = (result, expectedResult) => {
  if (result === expectedResult) {
    console.log('Pass');
  } else {
    console.log('Fail');
  }
}
