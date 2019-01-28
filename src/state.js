export const getXY = (source) => {
  const y = source.findIndex(arr => arr.includes(null));
  const x = source[y].findIndex(x => x === null);

  return { y, x };
};

// const bad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14, null];

const assertSolvable = function (shallowArr) {
  const switchCount = shallowArr.map((val, ind) => {
    let switches = 0;
    for (let i = ind + 1; i <= 16; i++) {
      if (shallowArr[i] && shallowArr[i] < val) switches++;
    }

    return switches;
  });

  return (switchCount.reduce((sum, num) => sum += num, 0) % 2) === 0;
};

// console.log(assertSolvable(bad));

export const shuffleState = (state) => {
  const shuffleArr = (inputArr) => {
    const arr = [...inputArr];
    for (var j, x, i = arr.length; i;
      j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);

    return arr;
  };

  const flattenArr = state.reduce((acc, val) => [...acc, ...val], []);

  let shuffledArr;
  do {
    shuffledArr = shuffleArr(flattenArr);
    // console.log(assertSolvable(shuffledArr));
  }
  while (!assertSolvable(shuffledArr));

  return [
    shuffledArr.slice(0, 4),
    shuffledArr.slice(4, 8),
    shuffledArr.slice(8, 12),
    shuffledArr.slice(12, 16),
  ];
};
