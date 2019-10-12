function myOwnSplice(str, index, num) {
    var i = 0;
    newString = "";

    while (str[i]) {
      if (i != index) {
        newString += str[i];
      } else {
        i = i + num - 1;
      }
      i++;
    }
    return newString;
  }

  function canMakeString(s1, s2) {
    var i1 = 0;
    var i2 = 0;
    var flag = 1;

    while (s1[i1]) {
      i2 = 0;
      while (s2[i2]) {
        flag = 0;
        if (s1[i1] == s2[i2]) {
          flag = 1;
          s2 = myOwnSplice(s2, i2, 1);
          break;
        }
        i2++;
      }
      if (flag == 0) {
        return "false";
      }
      i1++;
    }
    return "True";
  }