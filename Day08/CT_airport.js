// 미해결 문제 다시해보기

function solution(n, times) {
  let num = 0;
  while (n > 0) {
      num++;
      for(const val of times) {
          if(num % val == 0) {
              n--;  
          }
      } 
  }
  return num;
}

console.log(solution(6, [7,10]));