// 명령형, 선언형 프로그래밍 비교

function double1(arr) {
	let results = [];
	for(let i = 0; i < arr.length; i++) {
		if(typeof arr[i] === 'number') {
			results.push(arr[i]*2);
		}		
	}
	return results;
}

console.log(double1([1,2,3, ' ', undefined, 5, 10]));


function double2(arr) {
	return arr.filter(param => typeof param === 'number')
		.map(val => val*2);
}

console.log(double2([1,2,3, ' ', undefined, 5, 10]));

// document.querySelector('body').innerHTML = double([1,2,3]);

// console.clear();

const data = [
	{
		name: '나나',
		colors: ['yellow', 'white'],
		age: 7,
		ear: 'unfolded'
	},
	{
		name: '차이',
		colors: ['yellow', 'white', 'brown'],
		age: 3,
		ear: 'unfolded'
	},
	{
		name: '모나',
		colors: ['black', 'white'],
		age: 2,
		ear: 'unfolded'
	},
	{
		name: '레이',
		colors: ['gray', 'white'],
		age: 7,
		ear: 'folded'
	},
	{
		name: '초코',
		colors: ['black'],
		age: 5,
		ear: 'folded'
	}
]

function filterCats1(cats) {
	let results = [];
	for(let i = 0; i < cats.length; i++) {
		const cat = cats[i];
		if(cat && cat.colors.includes('white') &&
			cat.ear === 'unfolded') {
			results.push(cat.name);
		}
	}
	return results;
}

const filteredCatsName1 = filterCats1(data);
console.log(filteredCatsName1);

function filterCats2(cats) {
	return cats.filter(param => param && 
                                param.colors.includes('white') &&
								param.ear === 'unfolded'
                                ).map(val => val.name) 
}

const filteredCatsName2 = filterCats2(data);
console.log(filteredCatsName2);
// document.querySelector('body').innerHTML = filterCatsName2;