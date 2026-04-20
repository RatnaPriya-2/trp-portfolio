const arr = [3, 2, 0, 7, 5, 0, 6, 4, 8, 1];

let max = arr.reduce((acc, val) => (acc > val ? acc : val));
console.log(max);
function findMax(arr) {
  let max = arr[0];
  for (let val of arr) {
    if (max > val) {
      max = max;
    } else {
      max = val;
    }
  }
  return max;
}

console.log(findMax(arr));

// let index = arr.findIndex((e) => e === 9);
function findIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 9) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex(arr));

function rev(arr) {
  let first = 0;
  let last = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[first], arr[last]] = [arr[last], arr[first]];
    first++;
    last--;
  }

  return arr;
}

console.log(rev(arr));

function nonZero(arr) {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
      pos++;
    }
  }
  return arr;
}

console.log(nonZero(arr));
