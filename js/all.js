// 計算機實例(1)
// parseInt 代表數字

document.getElementById('countId').onclick = function(){
	var hamPrice = 50
	var cokePrice = 30
    var hamNum = parseInt(document.getElementById('hamNumId').value)*hamPrice;
    var cokeNum = parseInt(document.getElementById('cokeNumId').value)*cokePrice;
    document.getElementById('totalId').textContent = hamNum + cokeNum
    }
