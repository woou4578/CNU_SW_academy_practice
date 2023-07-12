// js로 그래프 만들기

// 인접 행렬
const graph1 = Array.from(
    Array(5),
    () => Array(5).fill(false)
);
graph1[0][1] = true;
graph1[0][3] = true;
graph1[1][2] = true;
graph1[2][0] = true;
graph1[2][4] = true;
graph1[3][2] = true;
graph1[4][0] = true;

console.log(graph1);

// 인접 리스트
const graph2 = Array.from(
    Array(5),
    () => []
);
graph2[0].push(1);
graph2[0].push(3);
graph2[1].push(2);
graph2[2].push(1);
graph2[2].push(4);
graph2[3].push(2);
graph2[4].push(0);

console.log(graph2);
