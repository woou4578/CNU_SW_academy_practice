// 추상화하기
function ToggleButton({ $target, text, onClick }) {
    const $button = document.createElement('button');
    $target.appendChild($button);
    let clickCount = 0;

    this.render = () => {
        $button.textContent = text;
    }
    
    $button.addEventListener('click', () => {
        clickCount++;
        if($button.style.textDecoration === 'line-through') {
            $button.style.textDecoration = 'none';
        } else {
            $button.style.textDecoration = 'line-through';
        }

        // if(onclick) {
        //     onClick(clickCount);
        // }

        if(clickCount % 3 === 0) {
            alert("3번째 클릭함!");
        }
    })
    this.render();
}

const $app = document.querySelector('#app');

const button1 = new ToggleButton({
    $target: $app,
    text: 'Button1',
    // onClick: (clickCount) => {
    //     console.log(clickCount);

    //     if(clickCount % 3 === 0) {
    //         alert("3번째 클릭!");
    //     } else {
    //         console.log("hello");
    //     }
    // }
})
new ToggleButton({
    $target: $app,
    text: 'Button2'
})
new ToggleButton({
    $target: $app,
    text: 'Button3'
})
new ToggleButton({
    $target: $app,
    text: 'Button4'
})

// 버튼을 3개 만든다.
// const $btn1 = document.createElement('button');
// $btn1.textContent = 'Button1';
// $btn1.className = 'button1';
// let button1ClickCount = 0;

// const $btn2 = document.createElement('button');
// $btn2.textContent = 'Button2';
// $btn2.className = 'button2';
// let button2ClickCount = 0;

// const $btn3 = document.createElement('button');
// $btn3.textContent = 'Button3';
// $btn3.className = 'button3';
// let button3ClickCount = 0;


// 만든 버튼을 화면에 그린다.
// const $main = document.querySelector('#app');
// $main.appendChild($btn1);
// $main.appendChild($btn2);
// $main.appendChild($btn3);

// 버튼을 클릭하면 삭선이 그어진다.
// 간단한 표현
// document.querySelectorAll('button').forEach($button => {
//     $button.addEventListener('click', (e) => {
//         const {target} = e;
//         if(target.style.textDecoration === 'line-through') {
//             target.style.textDecoration = 'none';

//             console.log(target.className);
//             if(target.className === 'button1') {
//                 button1ClickCount++;
//                 target.textContent = `버튼1 토글 횟수: ${button1ClickCount}`;
//             }
//         } else {
//             target.style.textDecoration = 'line-through';
//         }
//     })
// })

// 단순 반복형 표현
// $btn1.addEventListener('click', () => {
//     if($btn1.style.textDecoration === 'line-through') {
//         $btn1.style.textDecoration = 'none';
//     } else {
//         $btn1.style.textDecoration = 'line-through';
//     }
// })
// $btn2.addEventListener('click', () => {
//     if($btn2.style.textDecoration === 'line-through') {
//         $btn2.style.textDecoration = 'none';
//     } else {
//         $btn2.style.textDecoration = 'line-through';
//     }
// })
// $btn3.addEventListener('click', () => {
//     if($btn3.style.textDecoration === 'line-through') {
//         $btn3.style.textDecoration = 'Done';
//     } else {
//         $btn3.style.textDecoration = 'line-through';
//     }
// })