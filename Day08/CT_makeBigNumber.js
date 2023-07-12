// 미해결문제 다시풀기

function solution(numbers) {
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
      newNumbers.push(String(numbers[i]));
  }
  console.log(newNumbers);
  const result = quickSort(newNumbers);
  console.log(result);
}

function quickSort(arr) {
  if(arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if(arr[i].length == 1) {
      if(Number(arr[i]) < Number(pivot)) {
        left.push(arr[i]);
      }else {
        right.push(arr[i]);
      }
    }else if(arr[i].length == 2) {
      if(Number(arr[i][1]) < Number(pivot)) {
        left.push(arr[i]);
      }else {
        right.push(arr[i]);
      }
    }else if(arr[i].length == 3) {
      if(Number(arr[i][1]) < Number(pivot)) {
        left.push(arr[i]);
      }else if(Number(arr[i][1]) > Number(pivot)){
        right.push(arr[i]);
      }else {
        if(Number(arr[i][2]) < Number(pivot)) {
          left.push(arr[i]);
        }else {
          right.push(arr[i]);
        }
      }
    }else {
      if(pivot == 0) {
        right.push(arr[i]);
      }else {
        left.push(arr[i]);
      }
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}