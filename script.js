var list1 = ["wow", "woah", "hey", 4, 5];

consoleLog = a => {
	console.log(a);
};

each = (list, action) => {
	for (var i = 0; i < list1.length; i++) {
		action(list[i]);
	}
};

// each(list1, consoleLog);

let list2 = [29, 76, 41, 85, 46, 5, 12, 28];

// let sum = list2.reduce((total, amount) => total + amount);
// console.log(sum);

// let sum = list => {
// 	let arr = [...list];
// 	console.log(arr.length);
// 	for (var i = 0; i < list.length; i++) {
// 		console.log(i);
// 		let num = arr[0] + arr[1];
// 		arr.shift();
// 		arr.shift();
// 		arr.unshift(num);
// 		console.log(arr);
// 	}
// };
// // sum(list2);

// reduce = (list, reducer) => {
// 	reducer(list);
// };
// reduce(list2, sum);

reduce = (array, reducer, accumulator) => {
	each(array, function(item) {
		accumulator = reducer(accumulator, item);
	});
	return accumulator;
};

let answer = reduce(
	list2,
	(mainNum, nextNum) => {
		return mainNum + nextNum;
	},
	0
);
console.log(answer);
