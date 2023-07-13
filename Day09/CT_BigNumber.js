// 미해결 문제
// 시간초과로 실패한 문제로
// 좀더 복잡도 측면에서 생각

function solution(number, k) {
    let max = "";
    let cnt = 0;
    do {
        max = number.slice(1, number.length);
        for(let i = 1; i < number.length; i++) {
            let nowNum = number.slice(0, i);
            if(max.slice(0, i) < nowNum) {
                nowNum += number.slice(i+1, number.length);
                if(nowNum > max) {
                    max = nowNum;
                }
            }
        }
        cnt++;
        number = max;
    } while(cnt < k);
    return max;
}
