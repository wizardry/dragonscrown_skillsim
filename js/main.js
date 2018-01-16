$(function(){
// console.time('create list');
//elf taso hah hah
//elfBackgroundImages()
setTimeout(function(){
	$('#fc2_ad_box,#fc2_footer,#fc2_bottom_bnr').empty().css({
		display:'none'
		,height:'0'
		,width:'0'
		,position:'fixed'
		,top:'100%'
		,left:'-100%'
		,visibillity:'hidden'
	})
	$('body').removeAttr('style');
},1000)
setTimeout(function(){
$('body').removeAttr('style');
},2000);
function elfBackgroundImages(flag){
	var setter;
	if(flag){
		$('.bgElf').delay(500).show().animate({
			scale:0.7,
			left:'420px',
			top:'320px',
			opacity:'0.2'
		},500)
		//できれば一定時間ごとに1回転？させてみたい。
		// setter = setInterval(function(){
		// 	console.log(1)
		// 	$('.bgElf').transform({rotateY:'-70deg'}).animate({
		// 		rotateY:'0deg'
		// 	},500,function(){
		// 		console.log(2)

		// 		$('.bgElf').animate({
		// 			rotateY:'260deg',
		// 		},500)

		// 	})
		// },1500)
	}else{
		$('.bgElf').animate({
			scale:1,
			left:'0px',
			top:'0px',
			opacity:0
		},1000,function(){
			$(this).hide();
		})
		
	}
}

//elf taso hah hah animate
//elfWorkinAnimateFnc()
function elfWorkinAnimateFnc(flag){
	var setter;
	var counter = 1;

	if(flag){
		$('#elfWorkingAnimate').stop().fadeIn().animate({
			right:'20px',
			opacity:1,
		},1000)
		setter = setInterval(setIntervalFnc,100)
	}else{
		$('#elfWorkingAnimate').stop().animate({
			right:'-50px',
			opacity:0
		},500,function(){
			clearInterval(setter);
			counter = 1;
		})
	}

	function setIntervalFnc(){
		if(counter < 11){
			$('#elfWorkingAnimate').css({
				backgroundPosition:'-'+(166 * counter) +'px 0'
			})
			counter++
			//console.log(166*counter)
		}else{
			$('#elfWorkingAnimate').css({
				backgroundPosition:'-'+(166 * counter) +'px 0'
			})
			counter = 1;
		}
	}
}

//basic
	$('a[href^="http"]').attr('target','_blank');
/*data array*/
/*
*data => 0:skill name 1:maxlv 2:skill detail
*
*/
	var data=[sFig,sAma,sWiz,sElf,sDwa,sSor,sCom];
	var chara = 0;


/*first draw*/
	//common list
	var commonlist = $('#skillCommon');
	var fighterlist = $('#skillUniqFig')

//リスト生成
	listGeneratorFnc(data[6],commonlist)//commonスキル生成
	listGeneratorFnc(data[0],fighterlist)//初回ファイタースキル生成？
	
//詳細テーブル生成
	skillDetailGeneratorFnc(data[0],0)

//キャラクターセレクト
	$('#js-nav li').click(function(e){
		var event = e.target
		var thisEq = $(this).index()
		var idName;
		var enName;
		var jaName;
		if(!$(event).hasClass('current')){
			if(thisEq == 0){
				idName = 'skillUniqFig';
				enName = 'Fighter';
				jaName = 'ファイター';
				chara = 0;
			}else if(thisEq == 1){
				idName = 'skillUniqAma';
				enName = 'Amazon';
				jaName = 'アマゾン';
				chara = 1;
			}else if(thisEq == 2){
				idName = 'skillUniqWiz';
				enName = 'Wizard';
				jaName = 'ウィザード';
				chara = 2;
			}else if(thisEq == 3){
				idName = 'skillUniqElf';
				enName = 'Elf';
				jaName = 'エルフ';
				chara = 3;
			}else if(thisEq == 4){
				idName = 'skillUniqDwa';
				enName = 'Dwarf';
				jaName = 'ドワーフ';
				chara = 4;
			}else if(thisEq == 5){
				idName = 'skillUniqSor';
				enName = 'Sorceress';
				jaName = 'ソーサレス';
				chara = 5;
			}

			$('#js-nav li').removeClass('current');
			$(this).addClass('current');
			$('.js-uniq').children().attr('id',idName)
			$('#type').find('span').fadeOut(300,function(){
				$('#type').find('.en').text(enName).end()
				.find('.ja').text(jaName).end()
				.find('span').fadeIn(300)
			})

			//elf taso hah hah
			if(thisEq == 3){
				elfBackgroundImages(true)
				elfWorkinAnimateFnc(true)
			}else{
				elfBackgroundImages(false)
				elfWorkinAnimateFnc(false)
			}

			resetFnc()
			listGeneratorFnc(data[thisEq],fighterlist)
			skillDetailGeneratorFnc(data[thisEq],0)

		}

	})

/*
sample html(.skillListWrap)

----skill list

	<dl class="current">
		<dt>サイクロンマッシャー</dt>
		<dd>
			<ol>
				<li>LV1</li>
				<li>MAX</li>
			</ol>
		</dd>
	</dl>
---- skill detail table (.skillInfoBoard>)
	<table>
		<tr>
			<th>Lv</th><th>消費SP</th><th>取得SLv</th><th>取得Lv</th>
			<th>威力</th><th>使用回数</th><th>スタン確率</th><th>盾攻撃倍率</th>
		</tr><tr>
			<th>1</th><td>1</td><td>0</td><td>4</td><td>20</td>
			<td>20</td><td>10</td><td>100</td>
		</tr>
	</table>
*/


/*skill tab*/
	$('#js-tabList li').click(function(e){
		var target = $(e.target)
		$('#js-tabList li.current').removeClass('current');
		target.addClass('current');

		var tabEq = $(this).index();
		var tab =$('#js-skillWrap').find('.skillDetail').eq(tabEq)
		if(tab.is(':hidden')){
			$('#js-skillWrap').find('.skillDetail').hide();
			tab.fadeIn(500);
		}
	})

//skill name active
	$('.skillListWrap').on('click','dl',function(){

		$('.skillListWrap dl').removeClass('current')
		$(this).addClass('current')

		//skilldetail
		var thisId=0;
		var thisEq = $(this).index()
		var hasid = $(this).closest('.skillListWrap').attr('id')
		if(hasid =='skillUniqFig'){
			thisId=0;
		}else if(hasid =='skillUniqAma'){
			thisId=1;
		}else if(hasid =='skillUniqWiz'){
			thisId=2;
		}else if(hasid =='skillUniqElf'){
			thisId=3;
		}else if(hasid =='skillUniqDwa'){
			thisId=4;
		}else if(hasid =='skillUniqSor'){
			thisId=5;
		}else if(hasid =='skillCommon'){
			thisId=6;
		}
		skillDetailGeneratorFnc(data[thisId],thisEq)
	})

//skill lv selected
	$('.skillListWrap').on('click','li',function(){
		$(this).addClass('selected')
		.prevAll().addClass('selected').end()
		.nextAll().removeClass('selected')
	})

//simlater script
	//default
	var sp = 155;//現在SP　//計測用
	var playerLv = 99;//レベルのSP
	var questSp = 56;//依頼のSP
	var usedPoint = 0;
	var usedSkill = [];

	var spDef = questSp + playerLv;//絶対値
	var outPutSp = spDef-usedPoint;//出力用

	//skill list
	var uniqSkillPoint = [];
	var commonSkillPoint = [];
	var uTotal=0;
	var cTotal=0;

	//input系初期化
	$('#lvSetInput').val(playerLv);
	$('#questPointsInput').val(questSp)

	//レベル設定
	var lvSetText = 0;
	$('.lvSet p').on('click',function(){
		$('#lvSetInput').val($(this).find('.lv').text()).fadeIn(200).focus()
	})
	$('#lvSetInput').on('blur',function(){
		playerLv = parseInt($(this).val())
		if(playerLv <= 100 && playerLv >= 1){
			$('.lvSet p').removeClass('error')
			$('.lv').text(playerLv);
		}else {
			$('.lvSet p').addClass('error')
		}
		resultFnc()
		$('#lvSetInput').hide()
	})

	//エクストラポケット設定
	$('[name="pocketLv"]').on('change',function(){
		var thisId = $(this).attr('id');
		$('#skillCommon').find('dl').eq(8).find('li').removeClass('selected')
		if(thisId == 'pocketLv0'){
			commonSkillPoint[8] = 0;
			//$('#skillCommon').find('dl').eq(8).find('li').removeClass('selected')
		}else if(thisId == 'pocketLv1'){
			commonSkillPoint[8] = 2;
			$('#skillCommon').find('dl').eq(8).find('li:first-child').addClass('selected')
		}else if(thisId == 'pocketLv2'){
			commonSkillPoint[8] = 2+4;
			$('#skillCommon').find('dl').eq(8).find('li').slice(1,2).addClass('selected')
		}else if(thisId == 'pocketLv3'){
			commonSkillPoint[8] = 2+4+6;
			$('#skillCommon').find('dl').eq(8).find('li').addClass('selected')
		}
		selectEachFnc('common')
		resultFnc()
		//skill list　と連同させなあかん→した
	})
	//依頼取得ポイント　-　入力から部分
	$('#questPointsInput').on('blur',function(){
		var num = parseInt($(this).val())
		
		if(num >= 0 && num <= 56){//正常
			$(this).removeClass('error')
			questSp = parseInt(num);
			outPutSp = questSp + playerLv
					
			resultFnc()
		}else{
			$(this).addClass('error')

		}
	})
	//依頼取得ポイント　一覧から設定部分
	$('#questListView').click(function(){
		//alert('未実装なり');
		$('#modalWrap').fadeIn(300)
		$('.questInfo span').text(questSp)
		questMathFnc()
	})
	$('#modalClose,.overlay').click(function(){
		$('#modalWrap').fadeOut(300)
		$('#questPointsInput').val(questSp)
		resultFnc()
	})

	//modal table 挙動の調整（notシミュ）
	$('#modalWrap table td').click(function(e){
		var node = $(this).closest('tr').find('input')
		var event = $(e.target)
		if(!event.is('input')){
			if(node.prop('checked')){
				node.prop('checked',false)
			}else{
				node.prop('checked',true)
			}
			questMathFnc()
		}
	})
	//inputにdata属性付与
	$('#modalWrap table tr').each(function(){
		var thisPt = parseInt($(this).find('td').eq(3).text());
		$(this).find('input').attr('data-quest',thisPt)
	})

	$('#modalWrap table input').change(function(){
		questMathFnc()
	})

	//thのチェックボックス
	$('#allChecker').click(function(){
		var check = $(this).prop('checked')
		$('#modalWrap table input').prop('checked',check)
		if(check){
			//questSp = 56;
		}else{
			//questSp = 0
		}
	})


	//テキスト出力
	$('#js-skillOutput').click(function(){
		//alert('未実装なり');
		var textSkill=[{name:[],lv:[]}]
		var textUniqSkill;
		var textCommonSkill;
		var currentUniq = $('.js-uniq').find('.selected').closest('dl').length;
		var currentCommon = $('.js-common').find('.selected').closest('dl').length;
		var textHtml = '';
		//console.log(textSkill[0]['name'])

		textHtml += $('#type').text() + '\n' +
		 '-------------------------\n'+'使用SP : ' +(usedPoint) +'\n'+'-------------------------\n';
		textHtml += '■ユニークスキル\n'

		for(var i = 0 ; i < currentUniq ;i++){//uniq
			var thisNode = $('.js-uniq').find('.selected').closest('dl').eq(i);
			
			textSkill[0]['name'][i] = thisNode.find('dt').text().replace('×','');
			textSkill[0]['lv'][i] = thisNode.find('.selected').filter(':last').text();
			textHtml += '　'+textSkill[0]['name'][i]+' : '+ textSkill[0]['lv'][i] + '\n';
		}
		textHtml += '\n\n■コモンスキル\n'

		for(var i = 0 ; i < currentCommon ;i++){//common
			var thisNode = $('.js-common').find('.selected').closest('dl').eq(i);
			
			textSkill[0]['name'][i] = thisNode.find('dt').text().replace('×','');
			textSkill[0]['lv'][i] = thisNode.find('.selected').filter(':last').text();
			textHtml += '　'+textSkill[0]['name'][i]+' : '+ textSkill[0]['lv'][i] + '\n';
		}

		$('.outputArea').val(textHtml);


	})

	//スキルセレクトまわり
	$('.skillDetail').on('click','li',function(e){
		var target = $(e.target)
		var z = 0;
		var a = [];
		var type = '';
		var tableInd = target.index()+1

		//skillDetail連動
		skillDetailTable(tableInd,false)

		//uniqかcommonか判別
		if(target.closest('.skillDetail').hasClass('js-uniq')){
			type = 'uniq'
		}else{
			type = 'common'
		}

		//クリックされたliの合計消費地を取得+計算
		for(var i = 0 ; i < tableInd ; i++){
			z += target.parent().children().eq(i).data('spcost')
		}

		//uniq common分岐
		if(type == 'uniq' ){
			uTotal = 0;
			uniqSkillPoint[target.closest('dl').index()] = z;

			a = uniqSkillPoint.concat();
		}else{
			cTotal = 0;
			commonSkillPoint[target.closest('dl').index()] = z;

			a = commonSkillPoint.concat();
		}

		//配列から合計消費値を計算
		var i = 0;
		$.each(a,function(){
			var b = a.shift()
			if(b == null){
				//なにもしなーい
			}else　if(type == 'uniq'){
				uTotal = uTotal + parseInt(b)
			}else if(type == 'common'){
				cTotal = cTotal + parseInt(b)
			}
			i++
		})

		usedPoint = uTotal+cTotal;
		resultFnc()
	})

	//個別リセット
	$('.skillListWrap').on('click','.js-thisRest',function(e){
		var target = $(e.target)
		var thisEq = target.closest('dl').index()

		target.closest('dl').find('li').removeClass('selected');
		if(target.closest('.skillDetail').hasClass('js-uniq')){
			uniqSkillPoint[thisEq] = 0;
			selectEachFnc('uniq');
		}else{
			commonSkillPoint[thisEq] = 0;
			selectEachFnc('common');
		}
		skillDetailTable(0,true)
		resultFnc()

	})
	//reset
	$('#js-skillReset').click(function(){
		resetFnc()
	})
/*
*
*関数群
*
*/
function questMathFnc(){
	questSp = 0;//reset
	$('#modalWrap table td input').each(function(){
		if($(this).prop('checked')){
			questSp = questSp + $(this).data('quest')
			$(this).closest('tr').addClass('checkedRow')
		}else{
			$(this).closest('tr').removeClass('checkedRow')
		}
	})
	$('.questInfo span').text(questSp)
}
function skillDetailTable(skillLv,reset){
	var flag = reset;
	skillLv = parseInt(skillLv);

	if(!reset){
		$('#skillDetail table').find('.current').removeClass('current').end()
		.find('currented').removeClass('currented').end()
		.find('tr').eq(skillLv).addClass('current').prevAll().addClass('currented')
	}else{
		$('#skillDetail table').find('.current').removeClass('current').end()
		.find('currented').removeClass('currented')
	}
}
function skillDetailGeneratorFnc(dataType,skillEq){
	$('#skillDetail').find('h3 span').text(dataType[skillEq][0]).parent().next('table').empty()

	var tdlist='';
	var tdNode ='';
	for(var i = 0 ; i < dataType[skillEq][2].length ; i++){//thつくる
		tdlist += '<th>'+dataType[skillEq][2][i]['title']+'</th>';
	}

	$('#skillDetail').find('table').html('<tr><th>Lv</th>'+tdlist+'</tr>')
	for(var i = 0 ;i < (dataType[skillEq][1]) ; i++){//Lv分まわす
		tdlist ='';
		for(var z = 0 ; z < dataType[skillEq][2].length ; z++){//要素分まわす
			tdlist += '<td>'+dataType[skillEq][2][z]['cont'][i]+'</td>'
		}
		tdNode += ('<tr><th>'+(i+1)+'</th>'+tdlist+'</tr>');
	}
	$('#skillDetail').find('table').append(tdNode)
}
function listGeneratorFnc(dataType,dataspace){//リスト生成用ファンクション
	var skillListHtml='';
	var i = 0;
	var z = 0;
	var lvCount;
	var lvlist;
	dataspace.children().remove();//初期化

	$.each(dataType,function(){
		lvCount = dataType[z][1]
		lvlist = '';
		//1-maxまでのSlvリスト生成
		for (i=1; i < lvCount ; i++){
			lvlist += '<li data-spcost="'+dataType[z][2][0]['cont'][i-1]+'">Lv'+i+'</li>';
		}
		var arraylast = dataType[z][2][0]['cont'].length;
		lvlist += '<li data-spcost="'+dataType[z][2][0]['cont'][arraylast-1]+'">MAX</li>';

		//スキル一つ分ぶっこみ生成
		skillListHtml += '<dl>'+
							'<dt>'+dataType[z][0]+'<span class="btn-base js-thisRest" title="このスキルをリセット">×</span></dt>'+
							'<dd><ol>'+lvlist+'</ol></dd>'+
						'</dl>';


		//描画直後は最初のdlがcurrent
		z++
	})
	dataspace.html(skillListHtml);
	dataspace.find('dl').eq(0).addClass('current')
}
function selectEachFnc(type){
	var a = [];

	if(type == 'uniq' ){
		uTotal = 0;
		a = uniqSkillPoint.concat();
	}else{
		cTotal = 0;
		a = commonSkillPoint.concat();
	}

	var i = 0;
	$.each(a,function(){
		var b = a.shift()
		if(b == null){
			//なにもしなーい
		}else　if(type == 'uniq'){
			uTotal = uTotal + parseInt(b)
		}else if(type == 'common'){
			cTotal = cTotal + parseInt(b)
		}
		i++
	})
	usedPoint = uTotal+cTotal;
}
function resultFnc(){//Lvと残SP出力
	spDef = questSp + playerLv;//絶対値
	//usedPoint = 
	outPutSp = spDef-usedPoint;//出力用
	$('#resultTable').find('.lv').text(playerLv).end()
	.find('.sp').text(outPutSp )
	//error
	//スキルポイントマイナスのとき
	if(outPutSp <= 0 || outPutSp == null || isNaN(outPutSp)){
		$('#spDraw').addClass('error')
	}else{
		$('#spDraw').removeClass('error')
	}

}	

function resetFnc(){
	sp = 155;//現在SP　//計測用
	playerLv = 99;//レベルのSP
	questSp = 56;//依頼のSP
	usedPoint = 0;
	usedSkill = [];

	spDef = questSp + playerLv;//絶対値
	outPutSp = spDef-usedPoint;//出力用

	//skill list
	uniqSkillPoint = [];
	commonSkillPoint = [];
	uTotal=0;
	cTotal=0;
	$('#pocketLv0').prop('checked',true)
	$('#questPointsInput').val(56)
	$('#resultTable').find('.lv').text(playerLv).end()
	.find('.sp').text(outPutSp)
	$('.skillDetail').find('.selected').removeClass('selected')
	$('#lvSetInput').val(99).prev().find('.lv').text('99')

	skillDetailTable(0,true)

}
//60-80
//58-68
// console.timeEnd('create list');
})



