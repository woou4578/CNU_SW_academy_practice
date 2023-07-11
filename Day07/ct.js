// 다시 풀어보기 
// 지금 방식 그대로 말고 map 이용해보기

function solution(genres, plays) {
    var answer = [];
    const best = {};
    let cnt = 0;
    for(let i = 0; i < genres.length; i++) {
        if(best[genres[i]] == undefined) {
            best[genres[i]] = cnt;
            cnt++;
        }
    }

    const arr = Array(cnt).fill(null).map(() => Array());
    for(let i = 0; i < genres.length; i++) {
        let nowIdx = best[genres[i]];
        arr[nowIdx].push([plays[i], i]);
    }
    let maxPlay = [];
    for(let i = 0; i < cnt; i++) {
        arr[i].sort(function(a, b) { 
            return b[i] - a[i];
        });
        let sumPlay = 0; 
        for(let j = 0; j < arr[i].length; j++) {
            sumPlay += arr[i][j][0];
        }
        maxPlay.push([sumPlay, i]);
    }
    maxPlay.sort(function(a, b) { 
        return b[0] - a[0];
    });
    for(let i = 0; i < cnt; i++) {
        let nowIdx = maxPlay[i][1];
        if(arr[nowIdx].length < 2) {
            answer.push(arr[nowIdx][0][1]);
        }else {
            answer.push(arr[nowIdx][0][1]);
            answer.push(arr[nowIdx][1][1]);
        }
    }

    return answer;
}