# iwu.team
Demonstration of knowledge on the example of tasks
<p><b>1.</b>Написать функцию, которая считает слова в предложении, состоящие из 4х букв. 
В предложении нет знаков припенания и все слова разделены пробелом.
В качестве входных данных - предложение
В качестве выходных данных - число слов,соответствующих параметрам
Example:
input: "Five words in this sentence"
output: "2"</p>

<p><b>2.</b>Напишите функцию, которая проверяет, можно ли из комбинации букв первой строки получить вторую строку. 
Каждый символ первой строки может быть использован только один раз. Строки состоят только из букв русского 
алфавита в нижнем регистре без пробелов и знаков пунктуации   

На входе: две непустые строки
На выходе: true - если возможно получить вторую строку из комбинации букв первой, иначе false</p>
  
<p><b>3.</b>Дан массив целых чисел. Найдите сумму чисел, которые в m подряд идущих числах повторяются не менее n раз. Каждое число, удовлетворяющее условию, должно учитываться только один раз.   

<i>Пример: 

numbers = [1, 3, 5, 6, 5, 7, 5, 3, 3], m = 3, n = 2  
sum_of_unique(numbers, m, n) -->  8 // 5 + 3
Интервалы по m чисел:  [1, 3, 5], [3, 5, 6], [5, 6, 5], [6, 5, 7], [5, 7, 5], [7, 5, 3], [5, 3, 3]

5 повторяется n раз в интервалах [5, 6, 5] и [5, 7, 5],  но по условию 5 должно учитываться только один раз
3 повторяется n раз в интервале [5, 3, 3]  
На входе:   

numbers - массив целых чисел длиной не менее m  
m - величина диапазона для поиска повторяющихся значений, m больше или равен 2
n - количество повторов в заданном диапазоне (m), n больше или равен 2  
На выходе: сумма уникальных чисел, удовлетворяющих условию</i></p>

<p><b>4.</b>Реализуйте функцию takeMyMoney
function takeMyMoney(prices, n, m) {}

Петя решил прогуляться по ближайшим кафе и узнать, в каком из них готовят самую вкусную шаверму. Петя знает стоимость шавермы в каждом из них. При этом он хочет попробовать ровно N шаверм, на которые у него есть M рублей. Определите, какую максимальную сумму потратит Петя. Функция должна возвращать максимально возможную сумму за N шаверм меньшую или равную бюджету. Если на M рублей невозможно купить N шаверм, то функция должна вернуть 0.  

На входе: 
1. prices - массив чисел (int) - стоимость шавермы в разных заведениях
2. N - число (int) - количество шаверм, которые собирается съесть Петя
3. M - число (int) - максимальная сумма, которую Петя может потратить

На выходе: число (int) - максимальная сумма, удовлетворяющая условиям  

<i>Пример:   
стоимость шаверм в кафе
prices = [350, 250, 100, 1600, 500, 150, 150] 
количество шаверм, которые собирается съесть Петя  
N = 2 доступный бюджет
M = 1672 максимальная сумма за 2 шавермы в рамках досупного бюджета
take_my_money(prices, N, M) --> 850</p></i>
