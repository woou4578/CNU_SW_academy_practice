// 미해결 문제
// 인접리스트로 다시풀기

function solution(tickets) {
    let newSet = new Set();
    for(let i = 0; i < tickets.length; i++) {
        newSet.add(tickets[i][0]);
    }
    let myList = Array.from(
        Array(newSet.size),
        () => []
    );
    let cnt = 0;
    newSet.forEach(function(value) {
        myList[cnt][0] = value;
        cnt++;
    }); 
    for(let i = 0; i < tickets.length; i++) {
        for(let j = 0; j < myList.length; j++) {
            if(myList[j][0] == tickets[i][0]) {
                myList[j].push(tickets[i][1]);
            }
        }
    }

    console.log(myList);

}

function getFirst(a, b) {
    if(a[0] === b[0]) {
        if(a[1] === b[1]) {
            if(a[2] === b[2]) {
                return [a, b];
            }else {
                return a[2] < b[2] ? [a, b] : [b, a];
            }
        }else {
            return a[1] < b[1] ? [a, b] : [b, a];
        }
    }else {
        return a[0] < b[0] ? [a, b] : [b, a];
    }
}

function setPriority(queue) {
    for(let i = 0; i < queue.length; i++) {
        for(let j = i+1; j < queue.length; j++) {
            let newValue = getFirst(queue[i][1], queue[j][1]);
            if(newValue[0] !== queue[i][1]) {
                let temp = queue[i];
                queue[i] = queue[j];
                queue[j] = temp;
            }
        }
    }
    return queue;
}