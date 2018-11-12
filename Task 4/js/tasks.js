// Task 1
function primeBefore(n) {
  var result = [];
  for (var i = 2; i < n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

// Task 2
function primeCount(n) {
  var result = [];
  for (var i = 2; result.length < n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Task 3
function fiboSum(n) {
  var arr = [];
  var fibArr = [0, 1];
  for (var i = 2; arr.length < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    if (fibArr[i] % 2 === 0) {
      arr.push(fibArr[i]);
    }
  }
  return arr.reduce((a, b) => a + b);
}

// Task 4
function lastNums(n) {
  var num = 0;
  for (var i = 1; i <= n; i++) {
    num += customMathPow(i);
    if (num > 10000000000) {
      num = num % 10000000000;
    }
  }
  result = String(num);
  return result;
}

function customMathPow(i) {
  var result = i;
  for (var k = 1; k < i; k++) {
    result *= i;
    if (result > 10000000000) {
      result = result % 10000000000;
    }
  }
  return result;
}

// Task 5
function arithmetic(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return (result /= arr.length);
}

// Task 6
function maxNumOfArray(arr) {
  var result = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

// Task 7
function uniqieStringOfArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Task 8
function isPalindrom(phrase) {
  var reversedPhrase = phrase
    .split("")
    .reverse()
    .join("");
  return reversedPhrase == phrase;
}

// Task 9
function sumOfNumber(num) {
  stringNum = String(num);
  var count = 0;
  var arr = stringNum.split("");
  for (var i = 0; i < arr.length; i++) {
    count += Number(arr[i]);
  }
  return count;
}
