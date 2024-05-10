export const abilityArray = {
	"レギンレイヴ":{
		multiplier:[
			55
		],
		hit:[
			5
		],
		cap:[
			{start: 1, end: 1, max: 14999},
		],
		motionspeed: [0.86, 0],
		cd: [15, 0],
		charge: [0],
		range: [1],
		text:"前方に波動を放つ遠距離攻撃。<br>Class Lvに応じてヒット数が増加する",
		type:"ダメージアビリティ"
	},
	"ディストリーム":{
		multiplier:[
			78
		],
		hit:[
			11
		],
		cap:[
			{start: 1, end: 1, max: 19999},
		],
		motionspeed: [1.66, 0],
		cd: [30, 0],
		charge: [0],
		range: [0],
		text:"連続ヒットする斬撃。<br>範囲が広く、前方の敵を巻き込みやすい。<br>Class Lvに応じてヒット数が増加する。",
		type:"ダメージアビリティ"
	},
	"ドライブバースト":{
		multiplier:[
			627
		],
		hit:[
			1
		],
		cap:[
			{start: 1, end: 1, max: 89999},
		],
		motionspeed: [1.49, 0],
		cd: [30, 0],
		charge: [0],
		range: [0],
		text:"敵に強力な蹴りを浴びせる攻撃で、スタン値が高い。<br>Class Lvに応じてダメージとスタン値が上昇する。",
		type:"ダメージアビリティ"
	},
	"アーマーブレイク":{
		multiplier:[
			542
		],
		hit:[
			1
		],
		cap:[
			{start: 1, end: 1, max: 39999},
		],
		motionspeed: [0.89, 0],
		cd: [45, 0],
		charge: [0],
		range: [0],
		text:"前方の敵に高速接近する攻撃。<br>命中時に防御DOWN効果を付与する。<br>Class Lvに応じて効果量と効果時間が増加する",
		type:"ダメージアビリティ"
	},
	"アローレイン":{
		multiplier:[
			42
		],
		hit:[
			4
		],
		cap:[
			{start: 1, end: 1, max: 14999},
		],
		motionspeed: [1.51, 0],
		cd: [45, 0],
		charge: [0],
		range: [0],
		text:"",
		type:"ダメージアビリティ"
	},
	"ディスペル":{
		multiplier:[
			60
		],
		hit:[
			1
		],
		cap:[
			{start: 1, end: 1, max: 14999},
		],
		motionspeed: [1.12, 0],
		cd: [60, 10],
		charge: [0],
		range: [1],
		text:"範囲内の敵の強化効果をひとつ消し、ダメージを与える。<br>ボタン長押しで発動位置を指定可能。<br>Class Lvに応じてダメージが上昇する",
		type:"ダメージアビリティ"
	},
	"ミゼラブルミスト":{
		multiplier:[
			0
		],
		hit:[
			0
		],
		cap:[
			{start: 0, end: 0, max: 14999},
		],
		motionspeed: [0, 0],
		cd: [0, 0],
		charge: [0],
		range: [0],
		text:"範囲内の敵に攻撃DOWN/防御DOWN効果を付与する。<br>ボタン長押しで発動位置を指定可能。<br>Class Lvに応じて効果量と効果時間が増加する。",
		type:"弱体アビリティ"
	},
	"ディレイ":{
		multiplier:[
			0
		],
		hit:[
			0
		],
		cap:[
			{start: 0, end: 0, max: 14999},
		],
		motionspeed: [0, 0],
		cd: [0, 0],
		charge: [0],
		range: [0],
		text:"範囲内の敵にスロウ効果を付与する。<br>ボタン長押しで発動位置を指定可能。<br>Class Lvに応じて効果時間が増加する。",
		type:"弱体アビリティ"
	},
	"ファランクス":{
		multiplier:[
			0
		],
		hit:[
			0
		],
		cap:[
			{start: 0, end: 0, max: 14999},
		],
		motionspeed: [0, 0],
		cd: [0, 0],
		charge: [0],
		range: [0],
		text:"自分と近くの仲間に被ダメージカット効果を付与する。<br>Class Lvに応じて効果量と効果時間が増加する。",
		type:"強化アビリティ"
	},
	"レイジ":{
		multiplier:[
			0
		],
		hit:[
			0
		],
		cap:[
			{start: 0, end: 0, max: 14999},
		],
		motionspeed: [0, 0],
		cd: [0, 0],
		charge: [0],
		range: [0],
		text:"自分と仲間全員に攻撃UP効果を付与する。<br>Class Lvに応じて効果量と効果時間が増加する。",
		type:"強化アビリティ"
	},
	"ベール":{
		multiplier:[
			0
		],
		hit:[
			0
		],
		cap:[
			{start: 0, end: 0, max: 14999},
		],
		motionspeed: [0, 0],
		cd: [0, 0],
		charge: [0],
		range: [0],
		text:"自分と仲間全員に弱体無効の効果を付与する。<br>Class Lvに応じて効果時間が増加する。",
		type:"強化アビリティ"
	},
	"コンダクション":{
		multiplier:[
			0
		],
		hit:[
			0
		],
		cap:[
			{start: 0, end: 0, max: 14999},
		],
		motionspeed: [0, 0],
		cd: [0, 0],
		charge: [0],
		range: [0],
		text:"自分の奥義ゲージを仲間全員に分配する。<br>Class Lvに応じて奥義ゲージ増加量が上昇する。",
		type:"強化アビリティ"
	},
	"かばう":{
		multiplier:[
			0
		],
		hit:[
			0
		],
		cap:[
			{start: 0, end: 0, max: 14999},
		],
		motionspeed: [0, 0],
		cd: [0, 0],
		charge: [0],
		range: [0],
		text:"仲間全員への攻撃を代わりに引き受けつつ、<br>ジ便に防御UP効果を付与する。<br>Class Lvに応じて効果量と効果時間が増加する。",
		type:"強化アビリティ"
	},
	"ヒールオール":{
		multiplier:[
			0
		],
		hit:[
			0
		],
		cap:[
			{start: 0, end: 0, max: 14999},
		],
		motionspeed: [0, 0],
		cd: [0, 0],
		charge: [0],
		range: [0],
		text:"範囲内の仲間のHPを回復する。<br>ボタン長押しで発動位置を指定可能。<br>Class Lvに応じて回復量が増加する",
		type:"回復アビリティ"
	},
	"クリアオール":{
		multiplier:[
			0
		],
		hit:[
			0
		],
		cap:[
			{start: 0, end: 0, max: 14999},
		],
		motionspeed: [0, 0],
		cd: [0, 0],
		charge: [0],
		range: [0],
		text:"範囲内の仲間の弱体効果をすべて解除し、再生効果を付与する。<br>ボタン長押しで発動位置を指定可能。<br>Class Lvに応じて再生効果の回復量が上昇する。",
		type:"回復アビリティ"
	},
	"リヴァイヴ":{
		multiplier:[
			0
		],
		hit:[
			0
		],
		cap:[
			{start: 0, end: 0, max: 14999},
		],
		motionspeed: [0, 0],
		cd: [0, 0],
		charge: [0],
		range: [0],
		text:"範囲内の仲間の瀕死状態を回復する。<br>ボタン長押しで発動位置を指定可能。<br>Class Lvに応じて復活時のHP回復量が増加する。",
		type:"回復アビリティ"
	},
}
export default abilityArray