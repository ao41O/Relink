export const combo = {
	"ジータ":{
		"コンボA":{
			multiplier:[
				2, 30, 87
			],
			hit:[
				1, 1, 1
			],
			cap:[
				{start: 1, end: 1, max: 9999},
				{start: 2, end: 3, max: 29999}
			],
			motionspeed: [2.18, 0],
			finisher: [2, 3],
			charge: [0],
			range: [0]
		},
		"コンボB":{
			multiplier:[
				1, 30, 87, 22.5
			],
			hit:[
				1, 1, 1, 2
			],
			cap:[
				{start: 1, end: 2, max: 9999},
				{start: 3, end: 4, max: 29999}
			],
			motionspeed: [3.26, 0],
			finisher: [3, 4],
			charge: [0],
			range: [0]
		},
		"コンボC":{
			multiplier:[
				2, 30, 10, -38, -70, 28
			],
			hit:[
				1, 1, 1, 1, 3, 1
			],
			cap:[
				{start: 1, end: 4, max: 9999},
				{start: 5, end: 6, max: 29999}
			],
			motionspeed: [4.23, 0],
			finisher: [5, 6],
			charge: [0],
			range: [0]
		},
		"コンボD":{
			multiplier:[
				2, 30, -42, 10, -7, 47, 2, -22, 80
			],
			hit:[
				1, 1, 1, 1, 1, 1, 1, 1, 1
			],
			cap:[
				{start: 1, end: 6, max: 9999},
				{start: 7, end: 9, max: 29999}
			],
			motionspeed: [4.71, 0],
			finisher: [7, 8, 9],
			charge: [0],
			range: [0]
		},
		"パワーレイズ":{
			multiplier:[
				31, 255
			],
			hit:[
				4, 1
			],
			cap:[
				{start: 1, end: 2, max: 29999}
			],
			motionspeed: [3.06, 2],
			finisher: [0],
			charge: [1, 2],
			range: [0]
		},
		"コンボD＋パワーレイズ":{
			multiplier:[
				2, 30, -42, 10, -7, 47, 2, -22, 80, 31, 255
			],
			hit:[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1
			],
			cap:[
				{start: 1, end: 6, max: 9999},
				{start: 7, end: 11, max: 29999}
			],
			motionspeed: [7.43, 1],
			finisher: [7, 8, 9],
			charge: [10, 11],
			range: [0]
		},
	}
}
export default combo