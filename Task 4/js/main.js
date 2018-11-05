function task1() {
  var el = document.getElementById("1");
  var value = el.value;
  var res = document.getElementById("r1");
  res.textContent = "Результат : " + primeBefore(value);
}

function task2() {
  var el = document.getElementById("2");
  var value = el.value;
  var res = document.getElementById("r2");
  res.textContent = "Результат : " + primeCount(value);
}

function task3() {
  var el = document.getElementById("3");
  var value = el.value;
  var res = document.getElementById("r3");
  res.textContent = "Результат : " + fiboSum(value);
}

function task4() {
  var el = document.getElementById("4");
  var value = el.value;
  var res = document.getElementById("r4");
  res.textContent = "Результат : " + lastNums(value);
}

function task5() {
  var el = document.getElementById("5");
  var value = el.value;
  var res = document.getElementById("r5");
  if (typeof value == "string") {
    value = value.slice(1, -1).split(", ");
    for (var i = 0; i < value.length; i++) {
      value[i] = +value[i];
    }
  }

  res.textContent = "Результат : " + arithmetic(value);
}

function task6() {
  var el = document.getElementById("6");
  var value = el.value;
  var res = document.getElementById("r6");
  if (typeof value == "string") {
    value = value.slice(1, -1).split(", ");
    for (var i = 0; i < value.length; i++) {
      value[i] = +value[i];
    }
  }

  res.textContent = "Результат : " + maxNumOfArray(value);
}

function task7() {
  var el = document.getElementById("7");
  var value = el.value;
  var res = document.getElementById("r7");
  if (typeof value == "string") {
    value = value.slice(1, -1).split(", ");
  }

  res.textContent = "Результат : [" + uniqieStringOfArray(value) + "]";
}

function task8() {
  var el = document.getElementById("8");
  var value = el.value;
  var res = document.getElementById("r8");
  if (isPalindrom(value)) {
    res.textContent = 'Фраза "' + value + '"- является палиндромом';
  } else {
    res.textContent = 'Фраза "' + value + '"- не является палиндромом';
  }
}

function task9() {
  var el = document.getElementById("9");
  var value = el.value;
  var res = document.getElementById("r9");
  res.textContent = "Результат : " + sumOfNumber(value);
}
