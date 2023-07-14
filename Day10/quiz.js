// [Day 16] VanillaJS 테스트 사전 문제 풀이

// 문제 3

var idiots = {
    name: 'idiots',
    genre: 'punk rock',
    members: {
        roto: {
            memberName: 'roto',
            play: function() {
                console.log(`band ${this.name} ${this.memberName} play start`)
            }
        }
    }
}

idiots.members.roto.play();
// play함수 내에서 this는 roto객체를 가리킨다.
// 그래서 roto 객체 내에 name이 없기 때문에 undefined가 출력된다.

// 예시
var thisTest = {
    whoAmI: function () {
        console.log(this)
    },
    testInTest: {
        whoAmI: function() {
            console.log(this)
        }
    }
}

thisTest.whoAmI();
// 이 코드는 thisTest 자체를 가리키게 된다.

thisTest.testInTest.whoAmI();
// 이 코드는 thisTest안에 testInTest를 가리키게 된다.

console.clear();
// 문제 4
function RockBand(members) {
    this.members = members;
    this.perform = function() {
        setTimeout(function() {
            this.members.forEach(function(member) {
                // 여기의 this는 RockBand의 this를 가리키지 않음
                // function 안을 가리킨다.
                // 이 function안에는 members가 없다.
                member.perform();
            })
        }, 1000)
    }
}
// 수정된 버전 1 - arrow function
function RockBand(members) {
    this.members = members;
    this.perform = function() {
        setTimeout( () => {
            this.members.forEach(function(member) {
                member.perform();
            })
        }, 1000)
    }
}
// 수정된 버전 2 - bind 사용
function RockBand(members) {
    this.members = members;
    this.perform = function() {
        setTimeout(function() {
            this.members.forEach(function(member) {
                member.perform();
            })
        }.bind(this), 1000)
        // bind의 this는 위에 밖에 있는 같은 this(rockband의 this)를 의미
    }
}
// 수정된 버전 3 - 클로져 사용
function RockBand(members) {
    // this를 다른 변수에 넣어둔다.
    var that = this;
    this.members = members;
    this.perform = function() {
        setTimeout(function() {
            that.members.forEach(function(member) {
                member.perform();
            })
        }, 1000)
        // bind의 this는 위에 밖에 있는 같은 this(rockband의 this)를 의미
    }
}

var theOralCigarttes = new RockBand([
    {
        name: 'takuya',
        perform: function() {
            console.log('Sing: a e u i a e u i')
        }
    }
]);

// theOralCigarttes.perform();

console.clear();
// 문제 5 - 클로져 문제
const numbers = [0, 1, 2, 3, 4];

for(var i = 0; i < numbers.length; i++) {
    setTimeout(function() {
        console.log(`${i} number ${numbers[i]} turn!`);
    }, i*1000)
}
// setTimeout 이후 참조한 i는 
// 이미 for 루프가 끝난 이후의 i이기 때문에 항상 5
// 그렇기 때문에 numbers[5]는 undefined

// 해결법 1
for(var i = 0; i < numbers.length; i++) {
    (function(index) {
        setTimeout(function() {
            console.log(`${index} number ${numbers[index]} turn!`);
        }, i*1000)
    })(i)
}
// 해결법 2
// var 대신 let 쓰기
// 해결법 3
// for 대신 forEach 쓰기

// 문제 6
// var, let, const의 차이는?
// var, let은 변수 재할당 가능 / const는 변수 재할당 불가능
// var로 선언된 변수, 함수는 호이스팅이 일어난다.
// 실행할 때 function상 맨 위로 var 선언이 끌어올려진다.
// let, const의 경우에도 hoisting이 일어나지만 할당되기 전에 호출하면 에러가 난다.

// 문제 7
// 클로져는 무엇인가?
// 클로져를 이용해 private 효과를 얻을 수 있다.
