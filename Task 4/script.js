function task1() {
    var el = document.getElementById('1');
    var value = el.value;    
    simpleTo(value);

    /* 1. Найти все простые числа до заданного n. 
    Простые числа - это те числа, которые делятся только на себя и на 1. 1 <= n 1 000 000 000*/
    function simpleTo(n) {
        var result = [];
        //Создаю последовательность чисел до n.
        var arr = [];
        for (var i = 2; i < n; i++) {
            arr[i] = true;
        }

        var p = 2;

        do {
            //Зачеркиваем все значения кратные p
            for (var i = 2 * p; i < n; i += p) {
                arr[i] = false;
            }

            //Меняем значение p на последующее не зачеркнутое число из последовательности
            for (var i = p + 1; i < n; i++) {
                if (arr[i]) break;
            }
            p = i;
        } while (p * p < n); //Повторяем do, пока не перестанет работать условие

        for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
                result.push(i);
            }
        }

        el.nextElementSibling.nextElementSibling.textContent = 'Результат : ' + result;
        return result;

    };
}


function task2() {
    var el = document.getElementById('2');
    var value = el.value;   
    simple(value);

    // 2. Найти первые n простых чисел. 1 =< n <= 1000000
    function simple(n) {
        var result = [];
        for (var i = 2; result.length < n; i++) {
            if (isPrime(i)) {
                result.push(i);
            }
        }

        el.nextElementSibling.nextElementSibling.textContent = 'Результат : ' + result;
        return result;
        
        
        function isPrime(n) {
            if (n < 2) {
                return false
            };

            for (var i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                    return false;
                }
            } 
            return true;
        }
    };
}


function task3() {
    var el = document.getElementById('3');
    var value = el.value;     
    evenFibSum(value);

    /* 3. Найти сумму первых n четных чисел фибоначчи. 
    Числа фибоначчи - первые два числа равны 1 и 1, 
    а каждое последующее число равно сумме двух предыдущих чисел. 1 <= n <= 100000 */
    function evenFibSum(n) {
        var result = 0;
        var arr = [];
        var fibArr = [0,1];
        for (var i = 2; arr.length < n; i++) {
            fibArr[i] = fibArr[i-1] + fibArr[i-2];
            if (fibArr[i] % 2 === 0) {
                arr.push(fibArr[i]);
            }
        }
        for (var i = 0; i < arr.length; i++) {
            result += arr[i];
        }

        
        el.nextElementSibling.nextElementSibling.textContent = 'Результат : ' + result;
        return result;
    };
}


function task4() {
    var el = document.getElementById('4');
    var value = el.value;   
    sequence(value);
    
    /* 4. Серия чисел, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317 (^ - степень числа). 
    Найдите 10 последних цифр результата такой последовательности, для заданного n. 1 <= n <= 1000 */
    function sequence(n) {
        var result = 0;
        for (var i = 1; i <= n; i++) {
            result += Math.pow(i, i);
        }
        result = "" + result;
        result = result.slice(-10);

        
        el.nextElementSibling.nextElementSibling.textContent = 'Результат : ' + result;
        return result;
    };
}


function task5() {
    var el = document.getElementById('5');
    var value = el.value;   
    average(value);
    
    // 5. Найти среднее арифметическое чисел из массива.
    function average(arr) {
        if(typeof arr == 'string') {
            arr = arr.slice(1, -1).split(', ');
        }
        var result = 0;
        for (var i = 0; i < arr.length; i++) {
            result += +arr[i];
        }
        result /= arr.length;

        el.nextElementSibling.nextElementSibling.textContent = 'Результат : ' + result;
        return result;
    };
}

function task6() {
    var el = document.getElementById('6');
    var value = el.value;   
    max(value);
    
    // 6. Найти максимальное число в массиве.
    function max(arr) {
        if(typeof arr == 'string') {
            arr = arr.slice(1, -1).split(', ');
            console.log(arr);
        }

        var result = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (+arr[i] > +result) {
                result = arr[i];
            }
        } 
        el.nextElementSibling.nextElementSibling.textContent = 'Результат : ' + result;
        return result;
    };
}

function task7() {
    var el = document.getElementById('7');
    var value = el.value;   
    uniqie(value);
    
    // 7. Найдите все уникальные строки в массиве.
    function uniqie(arr) {
        if(typeof arr == 'string') {
            arr = arr.slice(1, -1).split(', ');
        }
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) == -1 ) {
                result.push(arr[i]);
            }
        }
        
        el.nextElementSibling.nextElementSibling.textContent = 'Результат : [' + result + ']';
        return result;
    };
}

function task8() {
    var el = document.getElementById('8');
    var value = el.value;   
    isPalindrom(value);
    
    // 8. Определить, является ли фраза/слово палиндромом
    function isPalindrom(phrase) {
        var arr = phrase.split('');
        var result = arr.reverse().join('');

        if (result == phrase) {
            el.nextElementSibling.nextElementSibling.textContent = "Фраза \"" + phrase + "\"- является палиндромом";
            return true;
        }
        el.nextElementSibling.nextElementSibling.textContent = "Фраза \"" + phrase + "\"- не является палиндромом"; 
        return false;
    };
}

function task9() {
    var el = document.getElementById('9');
    var value = el.value;   
    sum(value);
    
    // 9. Найти сумму цифр данного числа
    function sum(str) {
        var arr = str.split('');
        var count = 0;

        for (var i = 0; i < arr.length; i++) {
            count += +arr[i];
        }
        
        el.nextElementSibling.nextElementSibling.textContent = 'Результат : ' + count;
        return count;
    };
}