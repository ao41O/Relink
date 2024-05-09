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