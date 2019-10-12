  function fourLetters() {
    var i1 = 0;
    var i2 = 0;
    var fWord = 0;

    while (words[i1]) {
      if (words[i1] == " ") {
        if (i1 - i2 == 4) {
          fWord += 1;
        }
        i2 = i1 + 1;
      }
      if (!words[i1 + 1]) {
        if (i1 + 1 - i2 == 4) {
          fWord += 1;
        }
      }
      i1++;
    }
    return fWord;
  }
