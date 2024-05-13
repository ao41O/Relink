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
			range: [0],
			default: 17624
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
			range: [0],
			default: 18648
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
			range: [0],
			default: 13483
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
			range: [0],
			default: 19468
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
			range: [0],
			default: 15929
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
			range: [0],
			default: 20438
		},
	},
	"ラカム":{
		"基本攻撃":{
			multiplier:[
				-67
			],
			hit:[
				3
			],
			cap:[
				{start: 1, end: 1, max: 5499},
			],
			motionspeed: [0.71, 0],
			finisher: [0],
			charge: [0],
			range: [1],
			default: 12775
		},
		"基本攻撃+ブルスナイプ":{
			multiplier:[
				-67, -67, -67, 168, 389
			],
			hit:[
				3, 3, 3, 1, 1
			],
			cap:[
				{start: 1, end: 3, max: 5499},
				{start: 4, end: 5, max: 39999},
			],
			motionspeed: [4.74, 0],
			finisher: [0],
			charge: [4, 5],
			range: [1, 2, 3, 4, 5],
			default: 20373
		},
	},
	"イオ":{
		"コンボ攻撃HOLD + スターゲイズ":{
			multiplier:[
				315, 323, 348, 2752
			],
			hit:[
				1, 1, 1, 1
			],
			cap:[
				{start: 1, end: 3, max: 39999},
				{start: 4, end: 4, max: 299990},
			],
			motionspeed: [10.15, 6.83],
			finisher: [0],
			charge: [1, 2, 3, 4],
			range: [1, 2, 3, 4],
			default: 22346
		},
	},
	"シャルロッテ":{
		"コンボ攻撃 + コンボフィニッシュ":{
			multiplier:[
				0, 43, 28, -3, 196, 268, 403
			],
			hit:[
				1, 1, 2, 2, 1, 1, 1
			],
			cap:[
				{start: 1, end: 4, max: 6999},
				{start: 5, end: 7, max: 39999},
			],
			motionspeed: [4.49, 0],
			finisher: [0],
			charge: [0],
			range: [0],
			default: 37777
		},
		"コンボ攻撃 + 派生フィニッシュ(突進)":{
			multiplier:[
				0, 43, 28, -3, -37, 328
			],
			hit:[
				1, 1, 2, 2, 3, 1
			],
			cap:[
				{start: 1, end: 4, max: 6999},
				{start: 5, end: 6, max: 39999},
			],
			motionspeed: [4.21, 0],
			finisher: [0],
			charge: [0],
			range: [0],
			default: 28310
		},
		"コンボ攻撃 + 派生フィニッシュ(落下)":{
			multiplier:[
				0, 43, 28, -3, 758
			],
			hit:[
				1, 1, 2, 2, 1
			],
			cap:[
				{start: 1, end: 4, max: 6999},
				{start: 5, end: 5, max: 39999},
			],
			motionspeed: [4.24, 0],
			finisher: [0],
			charge: [0],
			range: [0],
			default: 31181
		},
		"□ボタン連打":{
			multiplier:[
				-3
			],
			hit:[
				2
			],
			cap:[
				{start: 1, end: 1, max: 6999},
			],
			motionspeed: [0.42, 0],
			finisher: [0],
			charge: [0],
			range: [0],
			default: 42354
		},
	},
	"ゼタ":{
		"エアリアルコンボ":{
			multiplier:[
				216, 305, 356, 403, 487, 30, 47, 64, 82, 83
			],
			hit:[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1
			],
			cap:[
				{start: 1, end: 5, max: 44999},
				{start: 6, end: 10, max: 22999},
			],
			motionspeed: [5.91, 0],
			finisher: [0],
			charge: [0],
			range: [0],
			default: 61982
		},
		"コンボ + アルベス・スウィング":{
			multiplier:[
				26, 88, 161, 91, 216, 305, 356, 30, 47, 64, 123, 3114
			],
			hit:[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
			],
			cap:[
				{start: 1, end: 4, max: 22999},
				{start: 5, end: 7, max: 44999},
				{start: 8, end: 10, max: 22999},
				{start: 11, end: 12, max: 99999},
			],
			motionspeed: [8.036, 0],
			finisher: [11, 12],
			charge: [0],
			range: [0],
			default: 60324
		},
		"コンボ + エアリアルフィニッシュ":{
			multiplier:[
				26, 88, 161, 91, 40, 879
			],
			hit:[
				1, 1, 1, 1, 1, 1
			],
			cap:[
				{start: 1, end: 4, max: 22999},
				{start: 5, end: 6, max: 59999},
			],
			motionspeed: [4.23, 0],
			finisher: [5, 6],
			charge: [0],
			range: [0],
			default: 50212
		},
	},
	"ソーン":{
		"コンボA攻撃":{
			multiplier:[
				-65, 45, 98
			],
			hit:[
				1, 1, 1
			],
			cap:[
				{start: 1, end: 1, max: 3499},
				{start: 2, end: 3, max: 19999},
			],
			motionspeed: [3.62, 0.93],
			finisher: [2, 3],
			charge: [2],
			range: [1, 2, 3],
			default: 7066
		},
		"コンボB攻撃":{
			multiplier:[
				-65, -42, -67
			],
			hit:[
				3, 18, 18
			],
			cap:[
				{start: 1, end: 1, max: 3499},
				{start: 2, end: 3, max: 3499},
			],
			motionspeed: [3.90, 0.93],
			finisher: [2, 3],
			charge: [2],
			range: [1, 2, 3],
			default: 30694
		},
		"コンボC攻撃":{
			multiplier:[
				-65, 201, 275
			],
			hit:[
				6, 1, 1
			],
			cap:[
				{start: 1, end: 1, max: 3499},
				{start: 2, end: 3, max: 34999},
			],
			motionspeed: [5.11, 0.93],
			finisher: [2, 3],
			charge: [2],
			range: [1, 2, 3],
			default: 12477
		},
	},
}
export default combo