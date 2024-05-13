import character from './data/character.js'
import weapon from './data/weapon.js'
import skillArray from './data/skill.js'
import combo from './data/combo.js'
import abilityArray from './data/ability.js'
import wrightstone from './data/wrightstone.js'

const wrightstoneNumberArray = [...Array(3).keys()].map(i => `wrightstone${i + 1}`)

const sigilnum = [...Array(24).keys()].map(i => `sigilnum${i + 1}`);

class Update{
	static status(charaName, eventType){
		this.calc(charaName)
		const statusTypeArray = ["hp", "atk", "cri", "stun"]
		statusTypeArray.forEach(statusType => {
			const 暴君 = (parseFloat(localStorage.getItem(charaName+"暴君")) + 100) / 100
			const クイックチャージ = (100 + parseFloat(localStorage.getItem(charaName+"クイックチャージ")))/ 100
			const 窮鼠 = (100 + parseFloat(localStorage.getItem(charaName+"窮鼠")))/ 100
			const 紙一重 = (100 + parseFloat(localStorage.getItem(charaName+"紙一重")))/ 100
			const 守護 = (100 + parseFloat(localStorage.getItem(charaName+"守護")))/ 100
			const 金剛 = (100 + parseFloat(localStorage.getItem(charaName+"金剛")))/ 100
			const フラジャイルドッジ = (100 - parseFloat(localStorage.getItem(charaName+"フラジャイルドッジ")))/ 100
			const カニの共鳴 = parseFloat(localStorage.getItem(charaName+"カニの共鳴"))
			const カニの恩返し = (100 + parseFloat(localStorage.getItem(charaName+"カニの恩返し")))/ 100
			let characterInt = 0
			let weaponInt = 0
			let plusnum = 0
			if(localStorage.getItem(charaName+"weaponname") !== null && statusType === "atk" || localStorage.getItem(charaName+"weaponname") !== null &&  statusType === "hp"){
				weaponInt = weapon[localStorage.getItem(charaName+"weaponname")][statusType]
			}
			if(statusType === "hp"){
				characterInt = parseFloat(localStorage.getItem(charaName+"体力")) + parseFloat(localStorage.getItem(charaName+"weaponcollecthp")) + parseFloat(localStorage.getItem(charaName+"skilltreehp")) + parseFloat(localStorage.getItem(charaName+"limitbreakhp")) + character[charaName].status[statusType]
				plusnum = 10
			}else if(statusType === "atk"){
				characterInt = Math.round(parseFloat(localStorage.getItem(charaName+"攻撃力")) + parseFloat(localStorage.getItem(charaName+"weaponcollectatk")) + parseFloat(localStorage.getItem(charaName+"skilltreeatk")) + parseFloat(localStorage.getItem(charaName+"limitbreakatk")) + character[charaName].status[statusType])
				plusnum = 2
			}else if(statusType === "cri"){
				characterInt = Math.min(100, parseFloat(localStorage.getItem(charaName+"クリティカル確率")) + parseFloat(localStorage.getItem(charaName+"weaponcollectcri")) + parseFloat(localStorage.getItem(charaName+"skilltreecri")) + parseFloat(localStorage.getItem(charaName+"limitbreakcri")) + 15)
			}else if(statusType === "stun"){
				characterInt = parseFloat(localStorage.getItem(charaName+"スタン")) + parseFloat(localStorage.getItem(charaName+"weaponcollectstun")) + parseFloat(localStorage.getItem(charaName+"skilltreestun")) + parseFloat(localStorage.getItem(charaName+"limitbreakstun")) + 0
			}
			const plusvalue = Number(localStorage.getItem(charaName+"plus")*plusnum)
			const getItem = (key) => localStorage.getItem(charaName + key)
			const setItem = (key, value) => localStorage.setItem(charaName + key, value)
			const getElement = (id) => document.getElementById(id)

			const calculateHP = () => {
				let hp = Math.round((characterInt + (getItem("weaponname") !== null ? weaponInt + plusvalue : 0)) * 守護 * 金剛 * カニの恩返し * (Math.min(Math.max(getItem("暴君") || 0, 0), 1) === 0 ? 1 : 0.8))
				setItem("hp", hp)
				if (eventType !== "clac") {
					getElement(charaName + "hp").innerHTML = hp
					if (getItem("weaponname") !== null) {
						getElement(charaName + "hp" + "weapon").innerHTML = weaponInt + plusvalue
					}
				}
			}

			const calculateATK = () => {
				let カタストロフィ = 1
				if (getItem("hp") <= 45000 && getItem("hp") !== null && JSON.parse(getItem("weapon")) !== null) {
					JSON.parse(getItem("weapon")).forEach(obj => {
						if ("カタストロフィ" in obj) {
							カタストロフィ = (100 + 50) / 100
						}
					})
				}
				let atk = Math.round((characterInt + (getItem("weaponname") !== null ? weaponInt + plusvalue : 0) + カニの共鳴) * クイックチャージ * 窮鼠 * 暴君 * 紙一重 * フラジャイルドッジ * カタストロフィ);
				setItem("atk", atk);
				if (eventType !== "clac") {
					getElement(charaName + "atk").innerHTML = atk
					if (getItem("weaponname") !== null) {
						getElement(charaName + "atk" + "weapon").innerHTML = weaponInt + plusvalue
					}
				}
			}

			const calculateStatus = (statusType) => {
				if (statusType === "hp") {
					calculateHP()
				} else if (statusType === "atk") {
					calculateATK()
				} else {
					let value = Math.round(characterInt)
					setItem(statusType, value)
					if (eventType !== "clac") {
						getElement(charaName + statusType).innerHTML = value
					}
				}
			}

			if (getItem("weaponname") === null) {
				calculateStatus(statusType)
			} else {
				calculateStatus(statusType)
			}
		})
	}
	
	static calc(charaName){
		const skillListObj = JSON.parse(localStorage.getItem(charaName+"skillListObj"))
		let skillStatus
		Object.keys(skillArray).forEach(skillName => {
			if(skillListObj !== null && skillListObj[skillName] !== undefined){
				if (skillListObj.hasOwnProperty(skillName) && skillListObj[skillName] >= 1 && skillListObj[skillName] <= skillArray[skillName].lv.length && Number.isFinite(skillListObj[skillName])){
					skillStatus = skillArray[skillName].lv[skillListObj[skillName] - 1]
				} else {
					if (skillListObj[skillName] > skillArray[skillName].lv.length) {
						skillStatus = skillArray[skillName].lv[skillArray[skillName].lv.length - 1]
					} else {
						skillStatus = 0
					}
				}
			}else{
				skillStatus = 0
			}
			localStorage.setItem(charaName+skillName, skillStatus)
		})
	}
	
	static sigil(charaName, categoryName, eventType, array){
		const sigilArray = sigilnum.map(i => {
			const sigilName = localStorage.getItem(charaName+i+"name")
			const sigilLv = Math.min(15, localStorage.getItem(charaName+i+"lv"))
			if(sigilName == null){
				return {}
			}else if(sigilLv == null){
				return {}
			}else {
				return {[sigilName]:parseInt(sigilLv)}
			}
		})
		if(eventType === "push"){
			sigilArray.push({[array]:Math.min(15, localStorage.getItem(charaName+categoryName+"lv"))})
		}
		
		if(JSON.parse(localStorage.getItem(charaName+"weapon")) !== null){
			var hasGeneEnhancement = false
			JSON.parse(localStorage.getItem(charaName+"weapon")).forEach(function(obj) {
				if ("ジーン強化" in obj) {
					hasGeneEnhancement = true
				}
			})
			if (hasGeneEnhancement) {
				sigilArray.forEach(function(obj) {
					var keys = Object.keys(obj)
					keys.forEach(function(key) {
						obj[key] = (obj[key] || 0) + 1
					})
				})
			}
		}
		
		if(localStorage.getItem(charaName+"weapon") !== null){
			JSON.parse(localStorage.getItem(charaName+"weapon")).forEach(weaponSkill => {
				sigilArray.push(weaponSkill)
			})
		}
		
		//sigilArray.push({[testobj]:testlv})
		wrightstoneNumberArray.forEach(wrightstoneNumber =>{
			let lvMin
			if(wrightstoneNumber == "wrightstone1"){
				lvMin = 10
			}else if(wrightstoneNumber == "wrightstone2"){
				lvMin = 7
			}else if(wrightstoneNumber == "wrightstone3"){
				lvMin = 5
			}
			if(localStorage.getItem(charaName+wrightstoneNumber+"name") !== null){
				sigilArray.push({[localStorage.getItem(charaName+wrightstoneNumber+"name")]:Math.min(lvMin, localStorage.getItem(charaName+wrightstoneNumber+"lv"))})
			}
		})
		
		// 同名加算処理
		const resultMap = {};
		sigilArray.forEach(obj => {
		    for (const key in obj) {
		        if (resultMap.hasOwnProperty(key)) {
		            resultMap[key] += obj[key];
		        } else {
		            resultMap[key] = obj[key];
		        }
		    }
		})
		
		let sigilObj
		if(Object.keys(resultMap).length == 0){
			sigilObj = {}
		}else {
			sigilObj = resultMap
		}
		localStorage.setItem(charaName+"skillListObj", JSON.stringify(sigilObj))
	}
}



class Html{
	static button_create(typeArray, typeName, buttonText, charaName , buttonWidth, buttonHeight, textValue){
		document.addEventListener("DOMContentLoaded", () => {
			if(typeName === "wrightstone1"){
				document.getElementById(charaName+typeName+"radio").innerHTML = `
				<div style="margin-top:20px; margin-left:10px; background-color: #e6f4ff; width: fit-content; border:1px solid; border-radius: 5px;">
				<input type=radio id="${charaName+typeName}はずす" name=${charaName+typeName} value=${buttonText} style="display:none;">
				<label for="${charaName+typeName}はずす" style="padding: 0 50px">はずす</label>
				</div>
				${this.radio_create(typeArray, typeName, charaName)}`
			}else if(typeName.includes("sigilnum") || typeName === "wrightstone2" || typeName === "wrightstone3"){
				const basicArray = Object.keys(skillArray).filter(key => skillArray[key].type === "基礎")
				const attackArray =  Object.keys(skillArray).filter(key => skillArray[key].type === "攻撃")
				const defenseArray =  Object.keys(skillArray).filter(key => skillArray[key].type === "耐久")
				const supportArray =  Object.keys(skillArray).filter(key => skillArray[key].type === "支援")
				const specialArray =  Object.keys(skillArray).filter(key => skillArray[key].type === "特殊")
				const specificArray =  Object.keys(skillArray).filter(key => skillArray[key].type === "専用")
				const matchedSigils = character[charaName].sigil.filter(sigil => specificArray.includes(sigil));
				document.getElementById(charaName+typeName+"radio").innerHTML = `
				<button id=${charaName+typeName}ダメージソート style="margin-top:20px; margin-bottom:20px; border: 1px solid; background: white; padding: .8rem; cursor: pointer;">
					ダメージ順
				</button>
				<button id=${charaName+typeName}IDソート style="margin-bottom:20px; border: 1px solid; background: white; padding: .8rem; cursor: pointer;">
					初期ID順
				</button>
				<div id=${charaName+typeName}sigilradio></div>`
				
				document.getElementById(charaName+typeName+"sigilradio").innerHTML = `
				<div style="margin-bottom:20px; margin-left:10px; background-color: #e6f4ff; width: fit-content; border:1px solid; border-radius: 5px;">
				<input type=radio id="${charaName+typeName}はずす" name=${charaName+typeName} value=${buttonText} style="display:none;">
				<label for="${charaName+typeName}はずす" style="padding: 0 50px">はずす</label>
				</div>
				<div style="text-align: center;  border-bottom:1px solid;">
					基礎
				</div>
				${this.radio_create(basicArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					攻撃
				</div>
				${this.radio_create(attackArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					耐久
				</div>
				${this.radio_create(defenseArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					支援
				</div>
				${this.radio_create(supportArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					特殊
				</div>
				${this.radio_create(specialArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					専用
				</div>
				${this.radio_create(matchedSigils, typeName, charaName)}`
			}else if(typeName === "weapon"){
				document.getElementById(charaName+typeName+"radio").innerHTML = this.radio_create(typeArray, typeName, charaName)
			}else{
				const damageAbility = typeArray.filter(key => abilityArray[key].type === "ダメージアビリティ")
				const buffAbility = typeArray.filter(key => abilityArray[key].type === "強化アビリティ")
				const debuffAbility = typeArray.filter(key => abilityArray[key].type === "弱体アビリティ")
				const healingAbility = typeArray.filter(key => abilityArray[key].type === "回復アビリティ")
				
				document.getElementById(charaName+typeName+"radio").innerHTML = `
				<button id=${charaName+typeName}ダメージソート style="margin-top:20px; margin-bottom:20px; border: 1px solid; background: white; padding: .8rem; cursor: pointer;">
					ダメージ順
				</button>
				<button id=${charaName+typeName}IDソート style="margin-bottom:20px; border: 1px solid; background: white; padding: .8rem; cursor: pointer;">
					初期ID順
				</button>
				<div id=${charaName+typeName}skillradio></div>`
				
				document.getElementById(charaName+typeName+"skillradio").innerHTML = `
				<div style="margin-bottom:20px; margin-left:10px; background-color: #e6f4ff; width: fit-content; border:1px solid; border-radius: 5px;">
				<input type=radio id="${charaName+typeName}はずす" name=${charaName+typeName} value=${buttonText} style="display:none;">
				<label for="${charaName+typeName}はずす" style="padding: 0 50px">はずす</label>
				</div>
				<div style="text-align: center;  border-bottom:1px solid;">
					ダメージアビリティ
				</div>
				${this.radio_create(damageAbility, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					強化アビリティ
				</div>
				${this.radio_create(buffAbility, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					弱体アビリティ
				</div>
				${this.radio_create(debuffAbility, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					回復アビリティ
				</div>
				${this.radio_create(healingAbility, typeName, charaName)}`
			}
			this.event_create(typeName, charaName, textValue, buttonText)
		})
		let textBox
		if(typeName.includes("sigil") || typeName.includes("wrightstone")){
			textBox = `<input style="width: 5%; height: ${buttonHeight}%; box-sizing: border-box; margin:0.3% 0.5%" id="${charaName+typeName}" type="number" value="${textValue}">`
		}else{
			textBox = ""
		}
		return `${this.css_create(typeName, charaName)}
		<button class=${charaName+typeName}buttonmodal style="width: ${buttonWidth}%; height: ${buttonHeight}%; border: 1px solid; box-sizing: border-box; background: transparent; cursor: pointer; margin:0.3% 0">
			${buttonText}
		</button>
		${textBox}
		<div style="display:flex; flex-direction: column;" class=${charaName+typeName}modal>
			<button class=${charaName+typeName}exit style="height:5%; border: 1px solid; background: white; padding: .8rem; cursor: pointer;">
				閉じる
			</button>
			<div id=${charaName+typeName}radio style="display:flex; flex-direction: column;"></div>
		</div>`
	}
	
	
	static radio_create(typeArray , typeName, charaName){
		return  typeArray.map(typeKey => {
			let text = ""
			if(typeName.includes("sigilnum") || typeName === "wrightstone2" || typeName === "wrightstone3"){
				text = skillArray[typeKey].text
			}else if(typeName === "wrightstone1"){
				text = wrightstone[typeKey].text
			}else if(typeName === "weapon"){
				text = weapon[typeKey].type
			}else if(typeName.includes("skill")){
				text = abilityArray[typeKey].text
			}
			let color = "#000000"
			if(typeName.includes("sigilnum") || typeName === "wrightstone2" || typeName === "wrightstone3"){
				if(skillArray[typeKey].type === "攻撃"){
					color = "#000000"
				}else if(skillArray[typeKey].type === "耐久"){
					color = "#000000"
				}
			}
			return `
			<div style="background-color: #e6f4ff; margin-top:10px; margin-left:10px; width: fit-content; border:1px solid; border-radius: 5px;">
			<input type=radio id="${charaName+typeName+typeKey}" name=${charaName+typeName} value=${typeKey} style="color: ${color}; display:none;">
			<label for="${charaName+typeName+typeKey}" style="padding: 0 50px; color: ${color}; cursor: pointer;">${typeKey}</label>
			</div>
			<div style="margin-left:10px; color: #000000">${text}</div>`
		}).join('')
	}
	
	
	
	static event_create(typeName, charaName, textValue, buttonText){
		const radioButtons = document.querySelectorAll('input[type="radio"]')
		radioButtons.forEach(radioButton => {
			const storedRadioValue = localStorage.getItem(charaName+typeName+"name")
			if (storedRadioValue !== null && storedRadioValue === radioButton.value) {
				radioButton.checked = true
				if(storedRadioValue === "クリティカル確率" && typeName === "wrightstone1"){
					document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML = "息吹"
				}else if(storedRadioValue === "弱点攻撃" && typeName === "wrightstone1"){
					document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML = "隔絶"
				}else if(storedRadioValue === "体力" && typeName === "wrightstone1"){
					document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML = "鎮守"
				}else if(storedRadioValue === "スタン" && typeName === "wrightstone1"){
					document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML = "畏怖"
				}else {
					document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML = localStorage.getItem(charaName+typeName+"name")
				}
			}
		})
		if(typeName.includes("sigilnum")  || typeName === "wrightstone2" || typeName === "wrightstone3"){
			document.getElementById(charaName+typeName+"ダメージソート").addEventListener('click', () => {
				localStorage.setItem(charaName+typeName+"lv", document.getElementById(charaName+typeName).value)
				var basicClacArray = []
				var attackClacArray = []
				var capClacArray = []
				const attackArray = Object.keys(skillArray).filter(key => skillArray[key].type === "攻撃")
				const specificArray =  Object.keys(skillArray).filter(key => skillArray[key].type === "専用")
				const matchedSigils = character[charaName].sigil.filter(sigil => specificArray.includes(sigil))
				const dpsArray = [...attackArray, "カニの共鳴"]
				const basicArray = [...matchedSigils, "クリティカル確率", "攻撃力", "クイックアビリティ", "アルファ・コード", "ベータ・コード", "ガンマ・コード"]
				
				basicArray.forEach(pushName => {
					Update.sigil(charaName, typeName, "push", pushName)
					Update.status(charaName, "clac")
					Build.damage(charaName, "clac", pushName, basicClacArray)
				})
				const basicClacArraySortedData = basicClacArray.sort((a, b) => {
					const aValue = parseInt(a[Object.keys(a)[0]][0].replace(",", ""), 10)
					const bValue = parseInt(b[Object.keys(b)[0]][0].replace(",", ""), 10)
					return bValue - aValue
				})
				const basicKeyArray = basicClacArraySortedData.map(obj => Object.keys(obj)[0])
				
				dpsArray.forEach(pushName => {
					Update.sigil(charaName, typeName, "push", pushName)
					Update.status(charaName, "clac")
					Build.damage(charaName, "clac", pushName, attackClacArray)
				})
				const attackClacArraySortedData = attackClacArray.sort((a, b) => {
					const aValue = parseInt(a[Object.keys(a)[0]][0].replace(",", ""), 10)
					const bValue = parseInt(b[Object.keys(b)[0]][0].replace(",", ""), 10)
					return bValue - aValue
				})
				const attackKeyArray = attackClacArraySortedData.map(obj => Object.keys(obj)[0])
				
				document.getElementById(charaName+typeName+"sigilradio").innerHTML = `
				<div style="margin-bottom:20px; margin-left:10px; background-color: #e6f4ff; width: fit-content; border:1px solid; border-radius: 5px;">
				<input type=radio id="${charaName+typeName}はずす" name=${charaName+typeName} value=${buttonText} style="display:none;">
				<label for="${charaName+typeName}はずす" style="padding: 0 50px">はずす</label>
				</div>
				
				<div style="text-align: center;  border-bottom:1px solid;">
					その他
				</div>
				${this.radio_create(basicKeyArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					攻撃
				</div>
				${this.radio_create(attackKeyArray, typeName, charaName)}`
				const elements = document.getElementsByName(charaName+typeName)
				for(var i = 0; i < elements.length; i++) {
					elements[i].addEventListener('change', () => {
						for(var i = 0; i < elements.length; i++) {
							if(elements[i].checked) {
								const radioValue = elements[i].value
								localStorage.setItem(charaName+typeName+"name", radioValue)
								localStorage.setItem(charaName+typeName+"lv", document.getElementById(charaName+typeName).value)
								document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
								Update.sigil(charaName, typeName)
								Build.skill(charaName)
								Update.status(charaName)
								Build.damage(charaName, "html")
							}
						}
					})
				}
			})
			
			document.getElementById(charaName+typeName+"IDソート").addEventListener('click', () => {
				const basicArray = Object.keys(skillArray).filter(key => skillArray[key].type === "基礎")
				const attackArray = Object.keys(skillArray).filter(key => skillArray[key].type === "攻撃")
				const defenseArray =  Object.keys(skillArray).filter(key => skillArray[key].type === "耐久")
				const supportArray =  Object.keys(skillArray).filter(key => skillArray[key].type === "支援")
				const specialArray =  Object.keys(skillArray).filter(key => skillArray[key].type === "特殊")
				const specificArray =  Object.keys(skillArray).filter(key => skillArray[key].type === "専用")
				const matchedSigils = character[charaName].sigil.filter(sigil => specificArray.includes(sigil))
				document.getElementById(charaName+typeName+"sigilradio").innerHTML = `
				<div style="margin-bottom:20px; margin-left:10px; background-color: #e6f4ff; width: fit-content; border:1px solid; border-radius: 5px;">
				<input type=radio id="${charaName+typeName}はずす" name=${charaName+typeName} value=${buttonText} style="display:none;">
				<label for="${charaName+typeName}はずす" style="padding: 0 50px">はずす</label>
				</div>
				<div style="text-align: center;  border-bottom:1px solid;">
					基礎
				</div>
				${this.radio_create(basicArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					攻撃
				</div>
				${this.radio_create(attackArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					耐久
				</div>
				${this.radio_create(defenseArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					支援
				</div>
				${this.radio_create(supportArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					特殊
				</div>
				${this.radio_create(specialArray, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					専用
				</div>
				${this.radio_create(matchedSigils, typeName, charaName)}`
				
				const elements = document.getElementsByName(charaName+typeName)
				for(var i = 0; i < elements.length; i++) {
					elements[i].addEventListener('change', () => {
						for(var i = 0; i < elements.length; i++) {
							if(elements[i].checked) {
								const radioValue = elements[i].value
								localStorage.setItem(charaName+typeName+"name", radioValue)
								localStorage.setItem(charaName+typeName+"lv", document.getElementById(charaName+typeName).value)
								document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
								Update.sigil(charaName, typeName)
								Build.skill(charaName)
								Update.status(charaName)
								Build.damage(charaName, "html")
							}
						}
					})
				}
			})
		}else if(typeName.includes("skill")){
			document.getElementById(charaName+typeName+"ダメージソート").addEventListener('click', () => {
				var skillClacArray = []
				const skillArray = character[charaName].skill.filter(key => abilityArray[key].type === "ダメージアビリティ")
				const abillitySelectArray = []
				for (let i = 1; i <= 4; i++) {
					localStorage.setItem(`${charaName}abillityDamage${i}`, 0)
					if(localStorage.getItem(`${charaName}skill${i}name`) !== null){
						abillitySelectArray.push(localStorage.getItem(`${charaName}skill${i}name`))
					}
				}
				const resultArray = skillArray.filter(key => !abillitySelectArray.includes(key))
				resultArray.forEach(pushName => {
					Build.damage(charaName, "skillclac", pushName, skillClacArray)
				})
				
				const skillClacArraySortedData = skillClacArray.sort((a, b) => {
					const aValue = parseInt(a[Object.keys(a)[0]][0].replace(",", ""), 10)
					const bValue = parseInt(b[Object.keys(b)[0]][0].replace(",", ""), 10)
					return bValue - aValue
				})
				
				const skillKeyArray = skillClacArraySortedData.map(obj => Object.keys(obj)[0])
				
				document.getElementById(charaName+typeName+"skillradio").innerHTML = `
				<div style="margin-bottom:20px; margin-left:10px; background-color: #e6f4ff; width: fit-content; border:1px solid; border-radius: 5px;">
				<input type=radio id="${charaName+typeName}はずす" name=${charaName+typeName} value=${buttonText} style="display:none;">
				<label for="${charaName+typeName}はずす" style="padding: 0 50px">はずす</label>
				</div>
				
				<div style="text-align: center;  border-bottom:1px solid;">
					ダメージアビリティ
				</div>
				${this.radio_create(skillKeyArray, typeName, charaName)}`
				
				const elements = document.getElementsByName(charaName+typeName)
				for(var i = 0; i < elements.length; i++) {
					elements[i].addEventListener('change', () => {
						for(var i = 0; i < elements.length; i++) {
							if(elements[i].checked) {
								const radioValue = elements[i].value
								localStorage.setItem(charaName+typeName+"name", radioValue)
								document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
								Update.sigil(charaName, typeName)
								Build.skill(charaName)
								Update.status(charaName)
								Build.damage(charaName, "html")
							}
						}
					})
				}
			})
			
			document.getElementById(charaName+typeName+"IDソート").addEventListener('click', () => {
				const damageAbility = character[charaName].skill.filter(key => abilityArray[key].type === "ダメージアビリティ")
				const buffAbility = character[charaName].skill.filter(key => abilityArray[key].type === "強化アビリティ")
				const debuffAbility = character[charaName].skill.filter(key => abilityArray[key].type === "弱体アビリティ")
				const healingAbility = character[charaName].skill.filter(key => abilityArray[key].type === "回復アビリティ")
				
				document.getElementById(charaName+typeName+"skillradio").innerHTML = `
				<div style="margin-bottom:20px; margin-left:10px; background-color: #e6f4ff; width: fit-content; border:1px solid; border-radius: 5px;">
				<input type=radio id="${charaName+typeName}はずす" name=${charaName+typeName} value=${buttonText} style="display:none;">
				<label for="${charaName+typeName}はずす" style="padding: 0 50px">はずす</label>
				</div>
				<div style="text-align: center;  border-bottom:1px solid;">
					ダメージアビリティ
				</div>
				${this.radio_create(damageAbility, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					強化アビリティ
				</div>
				${this.radio_create(buffAbility, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					弱体アビリティ
				</div>
				${this.radio_create(debuffAbility, typeName, charaName)}
				<div style="text-align: center;  border-bottom:1px solid;">
					回復アビリティ
				</div>
				${this.radio_create(healingAbility, typeName, charaName)}`
				
				const elements = document.getElementsByName(charaName+typeName)
				for(var i = 0; i < elements.length; i++) {
					elements[i].addEventListener('change', () => {
						for(var i = 0; i < elements.length; i++) {
							if(elements[i].checked) {
								const radioValue = elements[i].value
								localStorage.setItem(charaName+typeName+"name", radioValue)
								document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
								Update.sigil(charaName, typeName)
								Build.skill(charaName)
								Update.status(charaName)
								Build.damage(charaName, "html")
							}
						}
					})
				}
			})
		}
		
		
		let storedTextValue
		if(typeName.includes("sigilnum") || typeName.includes("wrightstone")){
			storedTextValue = localStorage.getItem(charaName+typeName+"lv")
			if (storedTextValue !== null && storedTextValue !== undefined) {
				document.getElementById(charaName+typeName).value = storedTextValue
			}
		}
		
		
		function openModal() {
			document.querySelector("." + charaName + typeName + "modal").classList.add("open")
		}
		function closeModal() {
			document.querySelector("." + charaName + typeName + "modal").classList.remove("open")
		}
		document.addEventListener("click", (event) => {
			const modal = document.querySelector("." + charaName + typeName + "modal")
			const target = event.target
			const modalButton = document.querySelector("." + charaName + typeName + "buttonmodal")
			if (target === modalButton) {
				openModal()
			} else if (!modal.contains(target) && modal.classList.contains("open")) {
				closeModal()
			}
		})
		document.querySelector("." + charaName + typeName + "exit").addEventListener("click", () => {
			closeModal()
		})
		
		
		let textBox
		if(typeName.includes("sigilnum") || typeName.includes("wrightstone")){
			textBox = document.getElementById(charaName+typeName).addEventListener("input", (event) => {
				localStorage.setItem(charaName+typeName+"lv", Math.min(textValue , document.getElementById(charaName+typeName).value))
				Update.sigil(charaName, typeName)
				Build.skill(charaName)
				Update.status(charaName)
				Build.damage(charaName, "html")
			})
		}
		textBox
		const elements = document.getElementsByName(charaName+typeName)
		for(var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('change', () => {
				for(var i = 0; i < elements.length; i++) {
					if(elements[i].checked) {
						const radioValue = elements[i].value
						if(radioValue === "息吹"){
							localStorage.setItem(charaName+typeName+"name", "クリティカル確率")
							localStorage.setItem(charaName+typeName+"lv", document.getElementById(charaName+typeName).value)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = "息吹"
						}else if(radioValue === "隔絶"){
							localStorage.setItem(charaName+typeName+"name", "弱点攻撃")
							localStorage.setItem(charaName+typeName+"lv", document.getElementById(charaName+typeName).value)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = "隔絶"
						}else if(radioValue === "鎮守"){
							localStorage.setItem(charaName+typeName+"name", "体力")
							localStorage.setItem(charaName+typeName+"lv", document.getElementById(charaName+typeName).value)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = "鎮守"
						}else if(radioValue === "畏怖"){
							localStorage.setItem(charaName+typeName+"name", "スタン")
							localStorage.setItem(charaName+typeName+"lv", document.getElementById(charaName+typeName).value)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = "畏怖"
						}else if(typeName.includes("sigilnum") || typeName.includes("wrightstone")){
							localStorage.setItem(charaName+typeName+"name", radioValue)
							localStorage.setItem(charaName+typeName+"lv", document.getElementById(charaName+typeName).value)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
						}else if(typeName === "weapon" && weapon[radioValue].type === "防御特化"){
							localStorage.setItem(charaName+typeName, JSON.stringify([{体力:25},{堅守:15}]))
							localStorage.setItem(charaName+typeName+"name", radioValue)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
						}else if(typeName === "weapon" && weapon[radioValue].type === "覚醒"){
							localStorage.setItem(charaName+typeName, JSON.stringify([{攻撃力:25},{体力:15},{ダメージ上限:5},{ジーン強化:15}]))
							localStorage.setItem(charaName+typeName+"name", radioValue)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
						}else if(typeName === "weapon" && weapon[radioValue].type === "弱点ダメージ特化"){
							localStorage.setItem(charaName+typeName, JSON.stringify([{弱点攻撃:25},{ブレイク特効:15}]))
							localStorage.setItem(charaName+typeName+"name", radioValue)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
						}else if(typeName === "weapon" && weapon[radioValue].type === "クリティカル特化"){
							localStorage.setItem(charaName+typeName, JSON.stringify([{クリティカル確率:25},{クリティカルダメージ:15}]))
							localStorage.setItem(charaName+typeName+"name", radioValue)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
						}else if(typeName === "weapon" && weapon[radioValue].type === "スタン特化"){
							localStorage.setItem(charaName+typeName, JSON.stringify([{スタン:25},{連携攻撃:15}]))
							localStorage.setItem(charaName+typeName+"name", radioValue)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
						}else if(typeName === "weapon" && weapon[radioValue].type === "究極"){
							localStorage.setItem(charaName+typeName, JSON.stringify([{カタストロフィ:25},{リジェネレーション:15},{ダメージ上限:5},{ジーン強化:15}]))
							localStorage.setItem(charaName+typeName+"name", radioValue)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
						}else if(typeName === "weapon"){
							localStorage.removeItem(charaName+typeName)
						}else{
							localStorage.setItem(charaName+typeName+"name", radioValue)
							document.querySelector("."+charaName+typeName+"buttonmodal").innerHTML  = localStorage.getItem(charaName+typeName+"name")
						}
						Update.sigil(charaName, typeName)
						Build.skill(charaName)
						Update.status(charaName)
						Build.damage(charaName, "html")
					}
				}
			})
		}
	}
	
	
	static css_create(typeName, charaName){
		return `<style>
		.${charaName+typeName}modal{
			background: #f4faff;;
			white-space: nowrap;
			position: fixed;
			height: 100%;
			top: 0;
			left: 0;
			width: 0;
			z-index: 1;
			overflow-x: hidden;
			text-align: start;
			transition: .5s;
			object-fit: contain;
		}
		.${charaName+typeName}modal.open{
				width: 25%;
				height: 100%;
		}
		@media only screen and (max-width: 600px) {
			.${charaName+typeName}modal.open{
				width: 100%;
				height: 100%;
			}
		}
		</style>`
	}
	
	static damage(charaName){
		return `
		<div style="width: 58%; border-bottom:1px solid;">
			スキル
		</div>
		<div style="width: 40%; margin-left:2%; border-bottom:1px solid;">
			DPS
		</div>
		<div id="${charaName}damage" style="width: 100%; display:flex; flex-wrap: wrap"></div>`
	}
	
	static text(charaName, typeName, textValue, size){
		document.addEventListener("DOMContentLoaded", () => {
			let storedTextValue
			if(typeName === "plus"){
				storedTextValue = localStorage.getItem(charaName+"plus")
				if (storedTextValue !== null) {
					document.getElementById(charaName+"plus").value = storedTextValue
				}
			}else{
				storedTextValue = localStorage.getItem(charaName+typeName)
				if (storedTextValue !== null && storedTextValue !== undefined) {
					document.getElementById(charaName+typeName).value = storedTextValue
				}
			}
			if(typeName.includes("limitbreak")){
				if(localStorage.getItem(charaName+typeName) === 0 || localStorage.getItem(charaName+typeName) === null){
					localStorage.setItem(charaName+typeName, 0)
					document.getElementById(charaName+typeName).value = 0
				}
			}else{
				localStorage.setItem(charaName+typeName, document.getElementById(charaName+typeName).value)
			}
			
			document.getElementById(charaName+typeName).addEventListener("input",function(){

				localStorage.setItem(charaName+typeName, Math.min(textValue ,this.value))
				Update.status(charaName)
				Build.damage(charaName, "html")
			})
		})
		return `<input id="${charaName+typeName}" type="number" value="${textValue}" style="width: ${size}%">`
	}
}

class Build{
	static damage(charaName, eventType, array, newArray){
		var カタストロフィ = 0
		if(localStorage.getItem(charaName+"hp") <= 45000 && localStorage.getItem(charaName+"hp") !== null && JSON.parse(localStorage.getItem(charaName+"weapon")) !== null){
			JSON.parse(localStorage.getItem(charaName+"weapon")).forEach(function(obj) {
				if ("カタストロフィ" in obj) {
					カタストロフィ = 100
				}
			})
		}
		const charaAtk = parseFloat(localStorage.getItem(charaName+"atk"))
		const criDamage = parseFloat(localStorage.getItem(charaName+"クリティカルダメージ")) + parseFloat(localStorage.getItem(charaName+"weaponcollectcridamage")) + parseFloat(localStorage.getItem(charaName+"skilltreecridamage")) + 20
		const 背水 = (100 + parseFloat(localStorage.getItem(charaName+"背水")))/ 100
		const 渾身 = (100 + parseFloat(localStorage.getItem(charaName+"渾身")))/ 100
		const 捨て身 = (100 + parseFloat(localStorage.getItem(charaName+"捨て身")))/ 100
		const アビリティダメージ = (100 + parseFloat(localStorage.getItem(charaName+"アビリティダメージ")))/ 100
		const コンボボーナス = (100 + parseFloat(localStorage.getItem(charaName+"コンボボーナス")))/ 100
		const 追撃 = parseFloat(localStorage.getItem(charaName+"追撃"))
		const コンボフィニッシュ = (100 + parseFloat(localStorage.getItem(charaName+"コンボフィニッシュ")))/ 100
		const チャージアタック = (100 + parseFloat(localStorage.getItem(charaName+"チャージアタック")))/ 100
		const 溜め会心 = (parseFloat(localStorage.getItem(charaName+"溜め会心")) && parseFloat(localStorage.getItem(charaName+"溜め会心")) !== 0) ? parseFloat(localStorage.getItem(charaName+"溜め会心")) : 0
		const 集中砲火 = (100 + parseFloat(localStorage.getItem(charaName+"集中砲火")))/ 100
		const 弱体状態特効 = (100 + parseFloat(localStorage.getItem(charaName+"弱体状態特効")))/ 100
		const オーバードライブ特効 = (100 + parseFloat(localStorage.getItem(charaName+"オーバードライブ特効")))/ 100
		const ブレイク特効 = (100 + parseFloat(localStorage.getItem(charaName+"ブレイク特効")))/ 100
		const 先制 = (100 + parseFloat(localStorage.getItem(charaName+"先制")))/ 100
		const 修羅 = (100 + parseFloat(localStorage.getItem(charaName+"修羅")))/ 100
		const ガードリベンジ = (100 + parseFloat(localStorage.getItem(charaName+"ガードリベンジ")))/ 100
		const 回避リベンジ = (100 + parseFloat(localStorage.getItem(charaName+"回避リベンジ")))/ 100
		const 有利属性変換 = parseFloat(localStorage.getItem(charaName+"有利属性変換"))
		const クイックアビリティ = parseFloat(localStorage.getItem(charaName+"クイックアビリティ"))
		const ブレイブオーラ = (100 + parseFloat(localStorage.getItem(charaName+"ブレイブオーラ")))/ 100
		const ブレイブハート = parseFloat(localStorage.getItem(charaName+"ブレイブハート"))
		const 操舵士の戦気 = parseFloat(localStorage.getItem(charaName+"操舵士の戦気"))
		const 魔導士の戦気 = parseFloat(localStorage.getItem(charaName+"魔導士の戦気"))
		const 聖騎士の威風 = (100 + parseFloat(localStorage.getItem(charaName+"聖騎士の威風")))/ 100
		const 聖騎士の戦気 = parseFloat(localStorage.getItem(charaName+"聖騎士の戦気"))
		const 真紅の気焔 = parseFloat(localStorage.getItem(charaName+"真紅の気焔"))
		const 真紅の戦気 = parseFloat(localStorage.getItem(charaName+"真紅の戦気"))
		
		
		let アルベス_フェルマーレ = 1
		if(charaName === "ゼタ"){
			アルベス_フェルマーレ = (100 + (30 + 真紅の気焔))/ 100
		}
		const 追撃期待値 = (1 - 追撃 / 100 + 追撃 / 100 * 1.2).toFixed(2)
		const 与ダメージ強化 = (100 + (ブレイブハート + 操舵士の戦気 + 真紅の戦気 + 聖騎士の戦気)) / 100
		
		const abillitySelectArray = []
		for (let i = 1; i <= 5; i++) {
			localStorage.setItem(`${charaName}abillityDamage${i}`, 0)
			abillitySelectArray.push(localStorage.getItem(`${charaName}skill${i}name`))
		}
		
		if(eventType === "skillclac"){
			abillitySelectArray[4] = (array)
		}
		
		let count = 0
		for (let i = 0; i < abillitySelectArray.length; i++) {
			if (abillitySelectArray[i] !== null && abillitySelectArray[i] !== "スキル選択") {
				count++
			}
		}
		const 裸一貫 = (100 + parseFloat(localStorage.getItem(charaName+"裸一貫")) * (4 - count))/ 100
		let 有利 = 1
		if(有利属性変換 === 1){
			有利 = 1.2
		}
		
		
		abillitySelectArray.forEach((abillityName, index) => {
			const newIndex = index + 1
			localStorage.setItem(`${charaName}abillityCd${newIndex}`, 0)
			localStorage.setItem(`${charaName}abillityMotionspeed${newIndex}`, 0)
			if(abillityName !== null && abillityName !== undefined && abillityName !== "スキル選択" && abilityArray[abillityName].type === "ダメージアビリティ"){
				const クイックチャージ = (parseFloat(localStorage.getItem(charaName+"クイックチャージ")) && parseFloat(localStorage.getItem(charaName+"クイックチャージ")) !== 0) ? ((100 - parseFloat(localStorage.getItem(charaName+"クイックチャージ"))*1.5) / 100) : 1
				localStorage.setItem(`${charaName}abillityCd${newIndex}`, abilityArray[abillityName].cd[0] * ((100 - (クイックアビリティ + abilityArray[abillityName].cd[1])) / 100))
				localStorage.setItem(`${charaName}abillityMotionspeed${newIndex}`, abilityArray[abillityName].motionspeed[0] + abilityArray[abillityName].motionspeed[1] * クイックチャージ)
				const hit = abilityArray[abillityName].hit
				let totalDamage = 0
				abilityArray[abillityName].cap.forEach(cap => {
					for (let i = cap.start - 1; i < cap.end; i++) {
						let chargeattack = 1
						let luckycharge = 0
						let rangeattack = 1
						if (abilityArray[abillityName].charge.includes(i + 1)) {
							chargeattack = チャージアタック
							luckycharge = 溜め会心
						}
						if (abilityArray[abillityName].range.includes(i + 1)) {
							rangeattack = 集中砲火
						}
						let 真紅の戦気cri = 0
						if(真紅の戦気 !== 0){
							真紅の戦気cri = 100
						}
						const damageCap = (100 + parseFloat(localStorage.getItem(charaName+"ダメージ上限")) + parseFloat(localStorage.getItem(charaName+"紙一重")) + parseFloat(localStorage.getItem(charaName+"ベータ・コード")) + parseFloat(localStorage.getItem(charaName+"ガンマ・コード")) + カタストロフィ + parseFloat(localStorage.getItem(charaName+"weaponcollectnormalcap")) + parseFloat(localStorage.getItem(charaName+"skilltreenormalcap")) + parseFloat(localStorage.getItem(charaName+"limitbreaknormalcap"))) / 100
						const criticalChance = Math.min(100, parseFloat(localStorage.getItem(charaName+"cri")) + luckycharge + 真紅の戦気cri)
						const criAverage = (1 - criticalChance / 100 + criticalChance / 100 * (1 + (criDamage / 100))).toFixed(2)
						const skillMultiplier = 背水 * 渾身 * 捨て身 * アビリティダメージ * コンボボーナス * chargeattack * rangeattack * 弱体状態特効 * オーバードライブ特効 * ブレイク特効 * 先制 * 修羅 * ガードリベンジ * 回避リベンジ * 裸一貫 * ブレイブオーラ * 聖騎士の威風 * アルベス_フェルマーレ
						const damageMultiplier = ((100 + abilityArray[abillityName].multiplier[i]) / 100)
						let product = charaAtk * damageMultiplier * criAverage * skillMultiplier
						let newValue = Math.round(Math.min(product, damageCap * cap.max) * 追撃期待値 * 有利 * 与ダメージ強化 * hit[i])
						totalDamage += newValue
						localStorage.setItem(`${charaName}abillityDamage${newIndex}`, totalDamage)
					}
				})
			}
		})
		
		let clacType = Object.keys(combo[charaName])
		if(eventType === "clac" || eventType === "skillclac" ){
			clacType = JSON.parse(localStorage.getItem(charaName+"topsort"))
		}
		const totalDamageArray = clacType.map(comboName => {
			let 魔導士の願い = 0
			if(charaName === "イオ" && comboName === "コンボ攻撃HOLD + スターゲイズ" && parseFloat(localStorage.getItem(charaName+"魔導士の願い")) !== 0){
				魔導士の願い = parseFloat(localStorage.getItem(charaName+"魔導士の願い"))
			}
			const クイックチャージ = (parseFloat(localStorage.getItem(charaName+"クイックチャージ")) && parseFloat(localStorage.getItem(charaName+"クイックチャージ")) !== 0) ? (100 - (parseFloat(localStorage.getItem(charaName+"クイックチャージ"))*1.5 + 魔導士の願い)) / 100 : (100 - (0 + 魔導士の願い)) / 100
			const hit = combo[charaName][comboName].hit
			let 操舵士の導き = 0
			if(charaName === "ラカム" && localStorage.getItem(charaName+"操舵士の導き") === "1"){
				if(comboName === "基本攻撃"){
					操舵士の導き = 0.14
				}else if(comboName === "基本攻撃+ブルスナイプ"){
					操舵士の導き = 0.14 * 3
				}
			}
			const motionspeed = (combo[charaName][comboName].motionspeed[0] + combo[charaName][comboName].motionspeed[1] * クイックチャージ) + 操舵士の導き
			let totalDamage = 0
			combo[charaName][comboName].cap.forEach(cap => {
				for (let i = cap.start - 1; i < cap.end; i++) {
					let 魔導士の機転 = 0
					if(charaName === "イオ" && comboName === "コンボ攻撃HOLD + スターゲイズ" && parseFloat(localStorage.getItem(charaName+"魔導士の機転")) !== 0 && i + 1 === 4){
						魔導士の機転 = parseFloat(localStorage.getItem(charaName+"魔導士の機転"))
					}
					let 操舵士の意地 = 0
					if(charaName === "ラカム" && comboName === "基本攻撃+ブルスナイプ" && localStorage.getItem(charaName+"操舵士の意地") !== null && i + 1 === 4 || i + 1 === 5){
						操舵士の意地 = parseFloat(localStorage.getItem(charaName+"操舵士の意地"))
					}
					let 操舵士の導きhit = 0
					if(charaName === "ラカム" && localStorage.getItem(charaName+"操舵士の導き") === "1"){
						if(comboName === "基本攻撃" && i + 1 === 1){
							操舵士の導きhit = 1
						}else if(comboName === "基本攻撃+ブルスナイプ" && i + 1 === 1 || i + 1 === 2 || i + 1 === 3){
							操舵士の導きhit = 1
						}
					}
					let combofinisher = 1
					let chargeattack = 1
					let luckycharge = 0
					let rangeattack = 1
					if (combo[charaName][comboName].finisher.includes(i + 1)) {
						combofinisher = コンボフィニッシュ
					}
					if (combo[charaName][comboName].charge.includes(i + 1)) {
						chargeattack = チャージアタック
						luckycharge = 溜め会心
					}
					if (combo[charaName][comboName].range.includes(i + 1)) {
						rangeattack = 集中砲火
					}
					const damageCap = (100 + 魔導士の機転 + 操舵士の意地 + parseFloat(localStorage.getItem(charaName+"ダメージ上限")) + parseFloat(localStorage.getItem(charaName+"紙一重")) + parseFloat(localStorage.getItem(charaName+"アルファ・コード")) + parseFloat(localStorage.getItem(charaName+"ガンマ・コード")) + カタストロフィ + parseFloat(localStorage.getItem(charaName+"weaponcollectnormalcap")) + parseFloat(localStorage.getItem(charaName+"skilltreenormalcap")) + parseFloat(localStorage.getItem(charaName+"limitbreaknormalcap"))) / 100
					const skillMultiplier = 背水 * 渾身 * 捨て身 * コンボボーナス * combofinisher * chargeattack * rangeattack * 弱体状態特効 * オーバードライブ特効 * ブレイク特効 * 先制 * 修羅 * ガードリベンジ * 回避リベンジ * 裸一貫 * ブレイブオーラ * 聖騎士の威風 * アルベス_フェルマーレ
					const criticalChance = Math.min(100, parseFloat(localStorage.getItem(charaName+"cri")) + luckycharge)
					const criAverage = (1 - criticalChance / 100 + criticalChance / 100 * (1 + (criDamage / 100))).toFixed(2)
					const damageMultiplier = ((100 + combo[charaName][comboName].multiplier[i]) / 100)
					let product = charaAtk * damageMultiplier * criAverage * skillMultiplier
					let newValue = Math.min(product, damageCap * cap.max) * 追撃期待値 * 有利 * 与ダメージ強化 * (hit[i] + 操舵士の導きhit) / motionspeed
					totalDamage += newValue
				}
			})
			
			
			let totalSkillDamage = 0
			for (let i = 1; i <= 5; i++) {
				let skillDamage = 0
				const damage = parseFloat(localStorage.getItem(`${charaName}abillityDamage${i}`))
				const cd = parseFloat(localStorage.getItem(`${charaName}abillityCd${i}`))
				const motionspeed = parseFloat(localStorage.getItem(`${charaName}abillityMotionspeed${i}`))
				skillDamage = (totalDamage * (cd - motionspeed) + damage) / cd - totalDamage
				if(isNaN(skillDamage)){
					skillDamage = 0
				}
				totalSkillDamage += skillDamage
			}
			return {[comboName] : totalDamage = Intl.NumberFormat().format(Math.round(totalDamage + totalSkillDamage))}
		})
		
		if(eventType !== "clac" || eventType !== "skillclac"){
			totalDamageArray.sort(function(a, b) {
				let aValue = parseInt(Object.values(a)[0].replace(/,/g, ""))
				let bValue = parseInt(Object.values(b)[0].replace(/,/g, ""))
				return bValue - aValue
			})
			localStorage.setItem(charaName+"topsort", JSON.stringify(Object.keys(totalDamageArray[0])))
		}
		
		if(eventType === "html"){
			document.getElementById(charaName+"damage").innerHTML = totalDamageArray.map(obj => {
				return Object.entries(obj).map(([key, value]) => {
					return `<div style="width: 58%; border-bottom:1px solid;">
						${key}
					</div>
					<div style="width: 40%; margin-left:2%; border-bottom:1px solid;">
						${value}
					</div>`
				}).join("")
			}).join("")
			localStorage.setItem(charaName+"damagelist", JSON.stringify(totalDamageArray))
		}else if(eventType === "clac" || eventType === "skillclac"){
			newArray.push({[array]:Object.values(totalDamageArray[0])})
		}
	}
	
	
	static skill(charaName){
		const wrightsigilNumberArray = [...sigilnum]
		wrightsigilNumberArray.push("wrightstone1", "wrightstone2", "wrightstone3")
		wrightsigilNumberArray.forEach(categoryName => {
			if(JSON.parse(localStorage.getItem(charaName+"skillListObj")) !== null){
				const sigilObj = JSON.parse(localStorage.getItem(charaName+"skillListObj"))
				if(sigilObj !== null){
					//順番ソート
					const sortedObj = {};
					Object.keys(skillArray).forEach(key => {
						if (sigilObj.hasOwnProperty(key)) {
							sortedObj[key] = sigilObj[key];
						}
					});
					document.getElementById(charaName+"skilllist").innerHTML = 
					Object.keys(sortedObj).map(sigilKey => {
						return `
						<div style="display: flex; width: 50%;">
							<div style="width: 85%; border-bottom:1px solid; text-align:center;">
								${sigilKey}
							</div>
							<div style="width: 15%; border-bottom:1px solid; text-align:center;">
								${sortedObj[sigilKey]}
							</div>
						</div>`
					}).join("")
				}
			}
		})
	}
	
	static localDamage(charaName){
		if(JSON.parse(localStorage.getItem(charaName+"damagelist")) !== null){
			const damageList = JSON.parse(localStorage.getItem(charaName+"damagelist"))
			document.getElementById(charaName+"damage").innerHTML = damageList.map(obj => {
				return Object.entries(obj).map(([key, value]) => {
					return `<div style="width: 58%; border-bottom:1px solid;">
						${key}
					</div>
					<div style="width: 40%; margin-left:2%; border-bottom:1px solid;">
						${value}
					</div>`
				}).join("")
			}).join("")
		}else{
			const sortedEntries = Object.entries(combo[charaName]).sort(([, a], [, b]) => b.default - a.default)
			document.getElementById(charaName + "damage").innerHTML = sortedEntries.map(([charaKey, obj]) => {
				return Object.entries(obj).map(([key, value]) => {
					if(key === "default"){
						return `<div style="width: 58%; border-bottom:1px solid;">
							${charaKey}
						</div>
						<div style="width: 40%; margin-left:2%; border-bottom:1px solid;">
							${Intl.NumberFormat().format(value)}
						</div>`
					}
				}).join("")
			}).join("")
			localStorage.setItem(charaName+"topsort", JSON.stringify([sortedEntries[0][0]]))
		}
	}
	
	static export(){
		document.getElementById("main").innerHTML = Object.keys(character).map(charaName => {
			window.addEventListener("load", () => {
				Build.skill(charaName)
				Update.status(charaName)
				Build.localDamage(charaName)
			})
			return`
			<details>
				<summary style="width: 600px">
					<div style="margin-top: 20px; border-left: 2px #cdd3d8 solid; border-right: 2px #cdd3d8 solid; border-bottom: 2px #cdd3d8 solid; height: 100px; width: 600px; background-color: #f4faff;">
						<div class=topline>
							<div style="border: 2px #cdd3d8 solid; margin-top: -0.9em; color: white; border-radius: 10% / 50%; background-color: #9DC4E1;">
								<div style="margin: 0px 50px;">
									${charaName}
								</div>
							</div>
						</div>
						<img src="./image/${charaName}.png" alt="${charaName}.png" style="position: relative; top: -9px; width: 130px; height: 90px"/>
						<div style="position: relative; top: -80px; left: 150px; height: 55%; width: 75%; display:flex; justify-content: space-between; flex-wrap: wrap;">
							<div style="color: #267a67; width: 30%;">
								HP
							</div>
							<div id="${(charaName)}hp" style="color: #267a67; width: 20%; text-align:center;">
								${character[charaName].status.hp}
							</div>
							<div style="width: 30%;">
								クリティカル率
							</div>
							<div id="${(charaName)}cri" style="width: 10%; text-align:right;">
								15
							</div>
							<div id="${(charaName)}cri" style="width: 10%;">
								%
							</div>
							<div style="color: #9b672a; width: 30%;">
								攻撃力
							</div>
							<div id="${(charaName)}atk" style="color: #9b672a; width: 20%; text-align:center;">
								${character[charaName].status.atk}
							</div>
							<div style="width: 30%;">
								スタン値
							</div>
							<div id="${(charaName)}stun" style="width: 20%; text-align:center;">
								0
							</div>
						</div>
					</div>
				</summary>
				<div style="display:flex; height: 614px; width: 1210px">
					<div style="position: relative; bottom:2px; border-left: 2px #cdd3d8 solid; border-right: 2px #cdd3d8 solid; border-bottom: 2px #cdd3d8 solid; height: 614px; width: 600px; background-color: #f4faff;">
						<div class=topline>
							<div style="border: 2px #cdd3d8 solid; margin-top: -0.9em; color: white; border-radius: 10% / 50%; background-color: #9DC4E1;">
								<div style="margin: 0px 50px;">
									装備
								</div>
							</div>
						</div>
						<div style="width: 100%; height: 100%; position: relative; top: 10px; display:flex; flex-wrap: wrap; align-content: flex-start">
							${Html.button_create(character[charaName].weapon, "weapon", "武器選択", charaName, 25, 4)}
							<label style="position: relative; top: 1px; margin-left:0%; width: 10%;">
								＋
								${Html.text(charaName, "plus", 99, 50)}
							</label>
							<div style="position: relative; top: 1px; width: 10%; color: #267a67;">
								HP
							</div>
							<div id="${(charaName)}hpweapon" style="position: relative; top: 1px; color: #267a67; width: 15%;">
							</div>
							<div style="position: relative; top: 1px; width: 10%; color: #9b672a;">
								攻撃力
							</div>
							<div id="${(charaName)}atkweapon" style="position: relative; top: 1px; color: #9b672a; width: 15%;">
							</div>
							${Html.button_create(Object.keys(wrightstone), "wrightstone1", "加護選択", charaName, 27, 4, 10)}
							${Html.button_create(Object.keys(skillArray), "wrightstone2", "加護スキル選択", charaName, 27, 4, 7)}
							${Html.button_create(Object.keys(skillArray), "wrightstone3", "加護スキル選択", charaName, 27, 4, 5)}
							${sigilnum.map(sigilNumber => Html.button_create(Object.keys(skillArray), sigilNumber, "---", charaName, 44, 4, 15)).join("")}
							<div id="${charaName}skilllist" style="display: flex; flex-wrap: wrap; height:35%; width:100%; flex-direction: column; align-content: flex-start;"></div>
						</div>
					</div>
					<div style="height: 720px; position: relative; bottom: 100px; display:flex; flex-direction: column;">
						<div style="position: relative; bottom: 2px; right: 2px; margin-top: 0px; border-left: 2px #cdd3d8 solid; border-right: 2px #cdd3d8 solid; border-bottom: 2px #cdd3d8 solid; height: 100px; width: 500px; background-color: #f4faff;">
							<div class=topline>
								<div style="border: 2px #cdd3d8 solid; margin-top: -0.9em; color: white; border-radius: 10% / 50%; background-color: #9DC4E1;">
									<div style="margin: 0px 50px;">
										スキル
									</div>
								</div>
							</div>
							<div style="height: 70%; position: relative; top: 2px; display: flex; justify-content: space-evenly; flex-wrap: wrap;">
								${Html.button_create(character[charaName].skill, "skill1", "スキル選択", charaName, 45, 40)}
								${Html.button_create(character[charaName].skill, "skill2", "スキル選択", charaName, 45, 40)}
								${Html.button_create(character[charaName].skill, "skill3", "スキル選択", charaName, 45, 40)}
								${Html.button_create(character[charaName].skill, "skill4", "スキル選択", charaName, 45, 40)}
							</div>
						</div>
						<div style="position: relative; bottom: 4px; right: 2px; margin-top: 0px; border-left: 2px #cdd3d8 solid; border-right: 2px #cdd3d8 solid; border-bottom: 2px #cdd3d8 solid; height: 307px; width: 500px; background-color: #f4faff;">
							<div class=topline>
								<div style="border: 2px #cdd3d8 solid; margin-top: -0.9em; color: white; border-radius: 10% / 50%; background-color: #9DC4E1;">
									<div style="margin: 0px 50px;">
										ダメージ
									</div>
								</div>
							</div>
							<div style="position: relative; top: 10px; display: flex; justify-content: space-between; flex-wrap: wrap;">
								${Html.damage(charaName)}
							</div>
						</div>
						<div style="position: relative; bottom: 6px; right: 2px; margin-top: 0px; border-left: 2px #cdd3d8 solid; border-right: 2px #cdd3d8 solid; border-bottom: 2px #cdd3d8 solid; height: 307px; width: 500px; background-color: #f4faff;">
							<div class=topline>
								<div style="border: 2px #cdd3d8 solid; margin-top: -0.9em; color: white; border-radius: 10% / 50%; background-color: #9DC4E1;">
									<div style="margin: 0px 50px;">
										設定
									</div>
								</div>
							</div>
							<div style="position: relative; top: 1%; display: flex; flex-wrap: wrap; height:94%; width:100%; flex-direction: column; align-content: flex-start; gap: 0 4%">
								<div class="clac"></div>
								<div class="clac">HP</div>
								<div class="clac">攻撃力</div>
								<div class="clac">スタン</div>
								<div class="clac">クリ率</div>
								<div class="clac">クリダメ</div>
								<div class="clac">通常上限</div>
								<div class="clac">アビリティ上限</div>
								<div class="clac">アビ威力</div>
								<div class="clac">奥義上限</div>
								<div class="clac">奥義威力</div>
								<div class="setting">スキルツリー</div>
								<div class="setting">${Html.text(charaName, "skilltreehp", character[charaName].status.skilltree.hp, 100)}</div>
								<div class="setting">${Html.text(charaName, "skilltreeatk", character[charaName].status.skilltree.atk, 100)}</div>
								<div class="setting">${Html.text(charaName, "skilltreestun", character[charaName].status.skilltree.stun, 100)}</div>
								<div class="setting">${Html.text(charaName, "skilltreecri", character[charaName].status.skilltree.cri, 100)}</div>
								<div class="setting">${Html.text(charaName, "skilltreecridamage", character[charaName].status.skilltree.cridamage, 100)}</div>
								<div class="setting">${Html.text(charaName, "skilltreenormalcap", character[charaName].status.skilltree.normalcap, 100)}</div>
								<div class="setting">${Html.text(charaName, "skilltreeskillcap", character[charaName].status.skilltree.skillcap, 100)}</div>
								<div class="setting">${Html.text(charaName, "skilltreeskilldamage", character[charaName].status.skilltree.skilldamage, 100)}</div>
								<div class="setting">${Html.text(charaName, "skilltreesbacap", character[charaName].status.skilltree.sbacap, 100)}</div>
								<div class="setting">${Html.text(charaName, "skilltreesbadamage", character[charaName].status.skilltree.sbadamage, 100)}</div>
								<div class="setting">武器収集</div>
								<div class="setting">${Html.text(charaName, "weaponcollecthp", character[charaName].status.weaponcollect.hp, 100)}</div>
								<div class="setting">${Html.text(charaName, "weaponcollectatk", character[charaName].status.weaponcollect.atk, 100)}</div>
								<div class="setting">${Html.text(charaName, "weaponcollectstun", character[charaName].status.weaponcollect.stun, 100)}</div>
								<div class="setting">${Html.text(charaName, "weaponcollectcri", character[charaName].status.weaponcollect.cri, 100)}</div>
								<div class="setting">${Html.text(charaName, "weaponcollectcridamage", character[charaName].status.weaponcollect.cridamage, 100)}</div>
								<div class="setting">${Html.text(charaName, "weaponcollectnormalcap", character[charaName].status.weaponcollect.normalcap, 100)}</div>
								<div class="setting">${Html.text(charaName, "weaponcollectskillcap", character[charaName].status.weaponcollect.skillcap, 100)}</div>
								<div class="setting"></div>
								<div class="setting">${Html.text(charaName, "weaponcollectsbacap", character[charaName].status.weaponcollect.sbacap, 100)}</div>
								<div class="setting"></div>
								<div class="setting">限界突破 </div>
								<div class="setting">${Html.text(charaName, "limitbreakhp", 2000, 100)}</div>
								<div class="setting">${Html.text(charaName, "limitbreakatk", 1000, 100)}</div>
								<div class="setting">${Html.text(charaName, "limitbreakstun", 20, 100)}</div>
								<div class="setting">${Html.text(charaName, "limitbreakcri", 20, 100)}</div>
								<div class="setting"></div>
								<div class="setting">${Html.text(charaName, "limitbreaknormalcap", 20, 100)}</div>
								<div class="setting">${Html.text(charaName, "limitbreakskillcap", 20, 100)}</div>
								<div class="setting">${Html.text(charaName, "limitbreakskilldamage", 20, 100)}</div>
								<div class="setting">${Html.text(charaName, "limitbreaksbacap", 20, 100)}</div>
								<div class="setting">${Html.text(charaName, "limitbreaksbadamage", 20, 100)}</div>
							</div>
						</div>
					</div>
				</div>
			</details>`
		}).join('')
	}
}

//html出力
document.getElementById("reset").addEventListener("click", function() {
	localStorage.clear()
	location.reload()
})
Build.export()