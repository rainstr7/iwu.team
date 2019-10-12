function sortArray(array) {
    var i = 0;
    var j = 0;
    var tmp = array[0];

    while (i < array.length) {
      j = 0;
      while (j < array.length) {
        if (array[j] > array[j + 1]) {
          tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        }
        j++;
      }
      i++;
    }
    return array;
  }

  function takeMyMoney(prices, n, m) {
    var i = 0;
    var j = 0;
    var sum = 0;
    var sumMax = 0;
    prices = sortArray(prices);
    while (i < prices.length) {
      j = 0;
      sum = 0;
      while (j < n) {
        sum += prices[i + j];
        j++;
      }
      if (sum > m && sumMax == 0) {
        return 0;
      } else if (sum < m){ 
        sumMax = sum;
      } else{
        return(sumMax);
      }
      i++;
    }
    return sumMax;
  }
