// 미해결 문제 다시해보기
// 큐 만들어서 다시 풀어보기

function solution(n, edge) {
  // 그래프 구축하기
  const myGraph = Array.from(Array(n+1), () => []);
  for (const [src, dest] of edge) {
    myGraph[src].push(dest);
    myGraph[dest].push(src);
  }

  let distance = Array(n+1).fill(0);
  distance[1] = 1;
  const queue = [1];
  while(queue.length > 0) {
    const src = queue.shift();
    for (const dest of myGraph[src]) {
      if(distance[dest] == 0) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const maxValue = Math.max(...distance);
  return distance.filter(item => item === maxValue).length;
}
let nn = 6;
let vertex = [[3,6],[4,3],[3,2],[1,3],[1,2],[2,4],[5,2]];
console.log(solution(nn, vertex));
