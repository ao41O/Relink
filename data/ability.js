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
		text:"前方に魔法の矢を降らせる遠距離範囲攻撃。<br>命中時に攻撃DOWN効果を付与する。<br>Class Lvに応じて効果量と効果時間が増加する。",
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
	"スピットファイア":{
		multiplier:[
			121, 342
		],
		hit:[
			1, 1
		],
		cap:[
			{start: 1, end: 2, max: 44999},
		],
		motionspeed: [1.55, 0],
		cd: [23, 0],
		charge: [0],
		range: [1, 2],
		text:"前方の敵へ銃撃による遠距離攻撃。<br>命中時の防御DOWN効果を付与する。",
		type:"ダメージアビリティ"
	},
	"バレットヘイル":{
		multiplier:[
			1
		],
		hit:[
			15
		],
		cap:[
			{start: 1, end: 1, max: 6999},
		],
		motionspeed: [1.56, 0],
		cd: [48, 10],
		charge: [0],
		range: [1],
		text:"前方に弾丸の雨を降らせる遠距離範囲攻撃。<br>攻撃範囲が広く、長時間連続ヒットする。",
		type:"ダメージアビリティ"
	},
	"ダブルタップ":{
		text:"一定時間□攻撃のヒット数が増加する",
		type:"強化アビリティ"
	},
	"デュレーション":{
		text:"滑るように素早く移動する回避技。<br>発動中に敵の攻撃を避けるとヒートゲージが最大になる。",
		type:"強化アビリティ"
	},
	"コフィンメーカー":{
		multiplier:[
			-67
		],
		hit:[
			44
		],
		cap:[
			{start: 1, end: 1, max: 5999},
		],
		motionspeed: [5.75, 0],
		cd: [64, 0],
		charge: [0],
		range: [1],
		text:"ボタン長押しで攻撃動作を延長可能な連続射撃。<br>クールタイムの終了を待たずに再使用することができる。",
		type:"ダメージアビリティ"
	},
	"荒野の硝煙":{
		text:"自分に攻撃UP/クリティカル確率UP/防御DOWNを付与し、<br>ヒートゲージを即時に最大にする。<br>また、一定時間ヒートゲージが減少しなくなる。",
		type:"強化アビリティ"
	},
	"スラッグショット":{
		multiplier:[
			-77.7, -27
		],
		hit:[
			27, 9
		],
		cap:[
			{start: 1, end: 2, max: 4999},
		],
		motionspeed: [1.9, 0],
		cd: [48, 0],
		charge: [0],
		range: [1, 2],
		text:"自分の前方と側面の敵に対して<br>風属性の弾丸を打ち込み、炸裂させる攻撃",
		type:"ダメージアビリティ"
	},
	"コラテラルダメージ":{
		multiplier:[
			4361
		],
		hit:[
			1
		],
		cap:[
			{start: 1, end: 1, max: 249999},
		],
		motionspeed: [3.4, 0],
		cd: [123, 0],
		charge: [0],
		range: [1],
		text:"周囲の敵を自分ごと吹き飛ばす一か八かの大爆発。<br>高威力だがハイリスクなため、使いどころは難しい。",
		type:"ダメージアビリティ"
	},
}
export default abilityArray