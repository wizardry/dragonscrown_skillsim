/*------------------------------------------------------
FIGTHER
--------------------------------------------------------*/
	var sFig=[[
			['サイクロンマッシャー'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
				//cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,10,19,30,45]
			},{
				title:'威力',
				cont:[20,22,23,25,30]
			},{
				title:'落下速度（％）',
				cont:[30,45,60,75,95]
			},{
				title:'攻撃範囲（％）',
				cont:[100,105,110,115,125]
			}]
		],[
			['ソニックブーム'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,8,16,26,40]
			},{
				title:'威力（％）',
				cont:[15,18,23,30,45]
			},{
				title:'衝撃波数',
				cont:[2,2,3,3,4]
			}]
		],[
			['フォールスラスト'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[3,12,21,30,39,48,57]
			},{
				title:'威力',
				cont:[40,44,46,48,50,52,60]
			},{
				title:'衝撃波範囲（％）',
				cont:[100,120,140,160,180,200,300]
			}]
		],[
			['パニッシャーインパクト'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[6,14,22,31,40,49,58]
			},{
				title:'威力',
				cont:[440,480,520,560,600,640,800]
			},{
				title:'威力（衝撃波）',
				cont:[165,180,195,210,225,240,300]
			},{
				title:'衝撃波範囲（％）',
				cont:[115,130,145,160,175,185,285]
			}]
		],[
			['ソードテンペスト'],
			[10],
			[{
				title:'消費SP',
				cont:[3,1,1,2,2,3,3,4,4,6]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[15,20,25,30,35,40,45,50,55,60]
			},{
				title:'威力',
				cont:[30,33,36,41,45,50,54,60,66,75]
			},{
				title:'持続時間（秒）',
				cont:[1.5,1.9,2.2,2.4,2.7,2.9,3.2,3.4,3.7,4.2]
			}]
		],[
			['カバーアライズ'],
			[3],
			[{
				title:'消費SP',
				cont:[1,2,3]
			},{
				title:'取得SLv',
				cont:[0,0,3]
			},{
				title:'取得Lv',
				cont:[1,17,36]
			},{
				title:'効果範囲（％）',
				cont:[100,125,200]
			},{
				title:'攻撃上昇率（％）',
				cont:[40,70,100]
			}]
		],[
			['クイックガード'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,7,16,27,35]
			},{
				title:'成功確率（％）',
				cont:[25,30,35,40,50]
			}]
		],[
			['バッシュ'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,2,3,3,4,6]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[4,9,14,19,24,29,34,40,47,54]
			},{
				title:'威力',
				cont:[20,24,28,32,36,40,44,48,52,60]
			},{
				title:'スタン確率（％）',
				cont:[20,25,30,35,40,45,50,55,60,80]
			},{
				title:'盾ダメージ上昇率（％）',
				cont:[10,20,40,60,80,100,120,140,160,200]
			}]
		],[
			['リフレクトミサイル'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,2,3,3,4,6]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[11,16,21,27,32,37,43,48,53,58]
			},{
				title:'反射確率（％）',
				cont:[20,25,30,35,40,45,50,55,60,80]
			},{
				title:'反射弾威力（％）',
				cont:['-',20,40,65,90,115,140,165,200,250]
			}]
		],[
			['アトラクト'],
			[3],
			[{
				title:'消費SP',
				cont:[1,2,3]
			},{
				title:'取得SLv',
				cont:[0,0,3]
			},{
				title:'取得Lv',
				cont:[1,12,24]
			},{
				title:'使用回数',
				cont:[5,5,5]
			},{
				title:'ひきつけられる敵の数',
				cont:[5,6,9]
			},{
				title:'ダメージ増加率（％）',
				cont:[10,20,30]
			}]
		],[
			['サクリファイス'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[5,11,19,29,42]
			},{
				title:'使用回数',
				cont:[3,3,3,3,3]
			},{
				title:'ダメージカット率（％）',
				cont:[30,40,50,60,70]
			}]
		],[
			['ハードシールド'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,4,4,5,6]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[9,13,18,23,28,33,38,44,50,56]
			},{
				title:'ガード耐久度上昇率（％）',
				cont:[20,30,40,50,60,70,85,100,120,150]
			}]
		]];



/*------------------------------------------------------
AMAZON 12
--------------------------------------------------------*/
var sAma = [[
			['スタンウェイブ'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[1,6,12,18,25,33,42]
			},{
				title:'威力（％）',
				cont:[20,24,28,32,36,40,60]
			},{
				title:'衝撃波距離（％）',
				cont:[10,20,30,40,50,60,100]
			}]
		],[
			['ネックスプリッター'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,6]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[3,8,14,20,26,32,38,44,50,56]
			},{
				title:'威力',
				cont:[150,155,162,169,176,182,189,196,203,230]
			},{
				title:'ダウン中の敵へのダメージ増加率（％）',
				cont:[100,105,110,115,120,130,140,155,170,200]
			},{
				title:'威力（衝撃波）',
				cont:[55,58,60,63,65,68,70,73,75,85]
			}]
		],[
			['デッドリーリボルヴ'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[11,17,23,29,36,45,54]
			},{
				title:'威力',
				cont:[18,20,22,24,26,28,30]
			},{
				title:'反転回数（+n回）',
				cont:[2,2,2,3,3,3,4]
			},{
				title:'空中の敵へのダメージ増加率（％）',
				cont:[30,35,45,55,70,85,100]
			}]
		],[
			['ブルータルドライブ'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,6]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,6,12,18,24,30,37,44,51,60]
			},{
				title:'威力',
				cont:[440,480,520,560,600,640,680,720,760,880]
			},{
				title:'威力（衝撃波）',
				cont:[165,180,195,210,225,240,255,270,285,375]
			},{
				title:'衝撃波範囲（％）',
				cont:[110,115,120,125,130,135,140,145,150,200]
			}]
		],[
			['パリィ'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,2,3,3,3,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[4,9,14,20,26,32,38,45,52,59]
			},{
				title:'威力',
				cont:[100,110,120,130,140,150,160,180,190,250]
			},{
				title:'無敵時間（秒）',
				cont:[2.0,2.3,2.7,3.0,3.3,3.7,4.0,4.3,4.7,5.0]
			}]
		],[
			['オーバーラップ'],
			[3],
			[{
				title:'消費SP',
				cont:[1,2,3]
			},{
				title:'取得SLv',
				cont:[0,0,3]
			},{
				title:'取得Lv',
				cont:[10,21,40]
			},{
				title:'威力',
				cont:[20,40,60]
			}]
		],[
			['ブランディッシュ'],
			[5],
			[{
				title:'消費SP',
				cont:[3,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[15,22,30,39,48]
			},{
				title:'威力',
				cont:[100,110,120,130,150]
			},{
				title:'連撃回数',
				cont:[1,2,3,4,5]
			}]
		],[
			['バーサーク'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,6]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,7,13,19,25,31,37,43,49,55]
			},{
				title:'ダメージ上昇率（％）',
				cont:[10,15,20,25,30,35,40,45,50,60]
			}]
		],[
			['アドレナリン'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[1,6,12,20,28,38,51]
			},{
				title:'ダメージ上昇率（％）',
				cont:[30,40,50,60,70,80,100]
			}]
		],[
			['ウォーペイント'],
			[3],
			[{
				title:'消費SP',
				cont:[2,3,4]
			},{
				title:'取得SLv',
				cont:[0,0,3]
			},{
				title:'取得Lv',
				cont:[5,27,46]
			},{
				title:'使用回数',
				cont:[3,3,3]
			},{
				title:'分身数',
				cont:[1,1,2]
			},{
				title:'持続時間（秒）',
				cont:[10,15,20]
			}]
		],[
			['ルナティック'],
			[3],
			[{
				title:'消費SP',
				cont:[1,2,3]
			},{
				title:'取得SLv',
				cont:[0,0,3]
			},{
				title:'取得Lv',
				cont:[9,20,34]
			},{
				title:'使用回数',
				cont:[3,4,5]
			},{
				title:'HP減少量（％）',
				cont:[30,50,70]
			},{
				title:'バーサークLv',
				cont:[1,2,3]
			}]
		],[
			['イモータル'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[13,21,29,40,52]
			},{
				title:'使用回数',
				cont:[3,3,4,4,5]
			},{
				title:'持続時間（秒）',
				cont:[8,12,12,16,20]
			}]
		]]



/*------------------------------------------------------
DWARF 12
--------------------------------------------------------*/
var sDwa = [[
			['グランドスラム'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,6,11,16,22,28,34,40,47,55]
			},{
				title:'投げ技ダメージ増加率（％）',
				cont:[20,30,40,50,60,75,90,105,120,150]
			},{
				title:'落下衝撃範囲（％）',
				cont:[100,105,110,115,120,125,130,135,140,180]
			}]
		],[
			['リーサルフィスト'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,7,12,18,23,29,35,41,48,56]
			},{
				title:'素手ダメージ増加率（％）',
				cont:[20,40,60,80,100,120,140,160,180,250]
			}]
		],[
			['イーグルダイブ'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[3,10,19,30,42]
			},{
				title:'爆弾威力',
				cont:[50,60,70,80,90]
			},{
				title:'爆弾個数',
				cont:[0,3,4,5,6]
			}]
		],[
			['トールハンマー'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[9,17,27,39,53]
			},{
				title:'威力',
				cont:[120,130,140,155,180]
			},{
				title:'発生する雷撃の数',
				cont:[3,5,7,9,12]
			},{
				title:'威力（雷）',
				cont:[36,39,42,47,55]
			}]
		],[
			['フレンジィ'],
			[5],
			[{
				title:'消費SP',
				cont:[3,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[15,25,36,48,60]
			},{
				title:'威力',
				cont:[30,36,42,48,60]
			},{
				title:'威力（フィニッシュ）',
				cont:[50,60,70,80,100]
			},{
				title:'持続時間（秒）',
				cont:[1.5,2,2.5,3,4]
			}]
		],[
			['ボムザック'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,8,20,33,46]
			},{
				title:'使用回数',
				cont:[4,6,8,10,15]
			}]
		],[
			['ファイアーバレル'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[9,13,24,38,52]
			},{
				title:'使用回数',
				cont:[3,4,5,6,9]
			}]
		],[
			['ラーヴァバングル'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[10,17,25,34,45]
			},{
				title:'使用回数',
				cont:[3,4,5,6,12]
			},{
				title:'持続時間（秒）',
				cont:[15,18,21,25,35]
			},{
				title:'炎上確率（％）',
				cont:[10,15,20,25,50]
			},{
				title:'爆発発生間隔（フレーム）',
				cont:[20,19,18,17,12]
			}]
		],[
			['アウトバースト'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[14,19,24,29,34,39,44,49,54,59]
			},{
				title:'炎ダメージ上昇率（％）',
				cont:[20,25,30,35,40,50,60,70,80,100]
			}]
		],[
			['ジュエルフリーク'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,2,3,3,4,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,6,11,16,21,26,32,38,45,51]
			},{
				title:'HP回復量増加',
				cont:[2,3,4,5,6,7,8,9,10,15]
			}]
		],[
			['ロックスキン'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[5,13,22,33,46]
			},{
				title:'ダメージ減少率（％）',
				cont:[20,25,30,35,50]
			}]
		],[
			['タフネス'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[12,20,30,41,54]
			},{
				title:'耐えられるダメージ',
				cont:[30,45,60,80,120]
			}]
		]]



/*------------------------------------------------------
ELF 12
--------------------------------------------------------*/
var sElf = [[
			['パワーショット'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,6]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,5,11,17,24,31,38,45,52,60]
			},{
				title:'威力',
				cont:[210,220,230,240,250,260,270,280,290,320]
			},{
				title:'威力（衝撃波）',
				cont:[24,26,28,30,32,34,36,38,40,50]
			},{
				title:'範囲（％）',
				cont:[100,105,110,115,120,125,130,135,140,170]
			}]
		],[
			['ラピッドショット'],
			[4],
			[{
				title:'消費SP',
				cont:[1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3]
			},{
				title:'取得Lv',
				cont:[1,9,18,30]
			},{
				title:'連射数（+n回）',
				cont:[1,2,3,4]
			}]
		],[
			['アローストック'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[3,12,23,36,50]
			},{
				title:'最大所持数（+n本）',
				cont:[2,4,7,10,15]
			}]
		],[
			['インパクトアロー'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[8,14,20,27,33,40,49]
			},{
				title:'威力',
				cont:[50,65,80,95,110,125,175]
			},{
				title:'範囲',
				cont:[100,105,110,115,120,125,145]
			}]
		],[
			['マルチプルショット'],
			[4],
			[{
				title:'消費SP',
				cont:[1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3]
			},{
				title:'取得Lv',
				cont:[15,26,39,53]
			},{
				title:'同時発射数（+n本）',
				cont:[1,2,3,4]
			}]
		],[
			['トキシックエキス'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,7,16,25,35]
			},{
				title:'所持本数',
				cont:[20,20,20,20,20]
			},{
				title:'1本あたりの使用回数',
				cont:[20,25,30,35,50]
			}]
		],[
			['オプションダガー'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[4,10,19,30,46]
			},{
				title:'使用回数',
				cont:[3,4,5,6,9]
			}]
		],[
			['サラマンドラオイル'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[13,22,33,44,57]
			},{
				title:'所持本数',
				cont:[20,20,20,20,20]
			},{
				title:'1本あたりの使用回数',
				cont:[20,25,30,35,50]
			}]
		],[
			['エレメンタルロアー'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,2,3,3,4,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,6,11,16,21,26,32,37,43,50]
			},{
				title:'Lv',
				cont:[0,1,2,3,4,5,6,7,8,9]
			},{
				title:'各属性の精霊魔法の与ダメージ（％）',
				cont:[0,20,30,40,50,60,70,80,90,100]
			}]
		],[
			['ブーツエンハンス'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,6]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,7,12,17,23,29,35,41,47,54]
			},{
				title:'キック威力（防御力のn％）',
				cont:[50,75,100,125,150,175,200,230,260,300]
			}]
		],[
			['バックスタッブ'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[5,10,15,20,25,30,36,42,48,55]
			},{
				title:'ダメージ上昇率（％）',
				cont:[80,100,120,135,155,175,195,210,230,300]
			}]
		],[
			['レデュースダメージ'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[9,18,28,39,51]
			},{
				title:'ダメージ軽減率（％）',
				cont:[20,25,30,35,50]
			},{
				title:'ノックバック耐性',
				cont:[50,66,75,80,83]
			}]
		]]



/*------------------------------------------------------
WIZARD 14
--------------------------------------------------------*/
var sWiz = [[
			['コンセントレート'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,6,11,16,21,27,33,39,45,51]
			},{
				title:'MPチャージ速度上昇率（％）',
				cont:[10,14,18,22,26,30,34,38,42,50]
			}]
		],[
			['エクストラクト'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[1,7,13,19,26,34,42]
			},{
				title:'MP回復増加量',
				cont:[5,7,9,11,13,15,20]
			}]
		],[
			['メンタルアブソーブ'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[4,10,17,25,35]
			},{
				title:'MP回復量',
				cont:[15,18,21,24,30]
			}]
		],[
			['マジックポイントアップ'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[9,18,28,38,49]
			},{
				title:'MP最大値増加',
				cont:[30,50,70,100,150]
			}]
		],[
			['ファイアーゲート'],
			[3],
			[{
				title:'消費SP',
				cont:[1,3,5]
			},{
				title:'取得SLv',
				cont:[0,3,6]
			},{
				title:'取得Lv',
				cont:[8,24,40]
			},{
				title:'使用回数',
				cont:[3,5,7]
			},{
				title:'持続時間（秒）',
				cont:[15,20,30]
			},{
				title:'炎ダメージ増加（％）',
				cont:[20,35,50]
			},{
				title:'効果範囲（％）',
				cont:[100,150,200]
			}]
		],[
			['ブレイズ'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,6,12,20,29]
			},{
				title:'使用回数',
				cont:[3,4,5,6,9]
			},{
				title:'威力',
				cont:[25,30,35,40,50]
			}]
		],[
			['ストーム'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[1,7,14,22,31,41,52]
			},{
				title:'使用回数',
				cont:[3,3,4,4,5,6,9]
			},{
				title:'威力',
				cont:[10,12,14,16,18,20,25]
			}]
		],[
			['フレイムバースト'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[3,9,16,23,32,43,56]
			},{
				title:'使用回数',
				cont:[3,3,4,4,5,6,9]
			},{
				title:'威力',
				cont:[30,35,39,44,45,50,60]
			}]
		],[
			['サンダーストラック'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[7,12,17,22,28,34,40,46,53,60]
			},{
				title:'使用回数',
				cont:[3,3,3,4,4,4,5,5,5,7]
			},{
				title:'威力',
				cont:[40,46,52,58,64,70,76,82,88,110]
			}]
		],[
			['メテオスウォーム'],
			[3],
			[{
				title:'消費SP',
				cont:[3,4,5]
			},{
				title:'取得SLv',
				cont:[0,3,6]
			},{
				title:'取得Lv',
				cont:[15,30,50]
			},{
				title:'使用回数',
				cont:[3,3,3]
			},{
				title:'威力',
				cont:[1200,1350,1500]
			},{
				title:'隕石の個数',
				cont:[3,4,5]
			}]
		],[
			['クリエイトゴーレム'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,8,16,25,36]
			},{
				title:'ゴーレムのレベル（プレイヤーレベルのn％）',
				cont:[50,60,70,80,100]
			},{
				title:'連続使用時の強化上限（回）',
				cont:[0,1,2,3,3]
			}]
		],[
			['レヴィテーション'],
			[3],
			[{
				title:'消費SP',
				cont:[1,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3]
			},{
				title:'取得Lv',
				cont:[1,14,29]
			},{
				title:'浮遊時間（秒）',
				cont:[2,3,4]
			},{
				title:'空中魔法のダメージ上昇率（％）',
				cont:[20,35,50]
			}]
		],[
			['スロウ'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,2,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[5,11,18,26,35]
			},{
				title:'使用回数',
				cont:[4,5,6,7,9]
			},{
				title:'効果範囲（％）',
				cont:[100,105,110,120,130]
			},{
				title:'速度低下率（％）',
				cont:[60,65,70,75,85]
			},{
				title:'持続時間（フレーム）',
				cont:[600,900,1200,1500,1800]
			}]
		],[
			['エクスティンクション'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[13,21,30,39,48]
			},{
				title:'使用回数',
				cont:[3,4,5,6,9]
			}]
		]]



/*------------------------------------------------------
SORSERER 15
--------------------------------------------------------*/
var sSor = [[
			['メンタルアブソーブ'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,6,11,16,21,27,33,39,45,51]
			},{
				title:'MP回復量',
				cont:[15,18,21,24,27,30,34,38,42,50]
			}]
		],[
			['エクストラクト'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[1,7,13,19,26,34,42]
			},{
				title:'MP回復増加量',
				cont:[5,7,9,11,13,15,20]
			}]
		],[
			['コンセントレート'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[4,10,17,25,35]
			},{
				title:'MPチャージ速度上昇率（％）',
				cont:[10,14,18,22,30]
			}]
		],[
			['マジックポイントアップ'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[9,18,28,38,49]
			},{
				title:'MP最大値増加',
				cont:[30,50,70,100,150]
			}]
		],[
			['アイスジェイル'],
			[3],
			[{
				title:'消費SP',
				cont:[1,3,5]
			},{
				title:'取得SLv',
				cont:[0,3,6]
			},{
				title:'取得Lv',
				cont:[1,14,30]
			},{
				title:'使用回数',
				cont:[5,7,9]
			},{
				title:'威力',
				cont:[50,63,75]
			},{
				title:'持続時間（秒）',
				cont:[8,12,20]
			}]
		],[
			['プロテクション'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[5,13,22,33,45]
			},{
				title:'使用回数',
				cont:[3,3,4,4,5]
			},{
				title:'持続時間（秒）',
				cont:[20,24,28,32,40]
			},{
				title:'ダメージ軽減率（％）',
				cont:[25,30,35,40,50]
			}]
		],[
			['グラヴィティ'],
			[3],
			[{
				title:'消費SP',
				cont:[1,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3]
			},{
				title:'取得Lv',
				cont:[11,24,40]
			},{
				title:'使用回数',
				cont:[3,5,8]
			},{
				title:'威力',
				cont:[10,16,25]
			},{
				title:'吸引力',
				cont:[400,750,1200]
			},{
				title:'持続時間（秒）',
				cont:[5,10,15]
			}]
		],[
			['サンダークラウド'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[1,6,12,18,25,32,41]
			},{
				title:'使用回数',
				cont:[3,3,4,4,5,5,7]
			},{
				title:'威力',
				cont:[80,92,104,116,128,140,160]
			},{
				title:'持続時間（秒）',
				cont:[20,22,24,26,28,30,32]
			},{
				title:'発生間隔（フレーム）',
				cont:[60,57,54,51,48,45,42]
			}]
		],[
			['ロックプレス'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[7,13,20,27,35,44,53]
			},{
				title:'使用回数',
				cont:[5,5,6,6,7,7,9]
			},{
				title:'威力',
				cont:[350,420,490,560,665,770,875]
			}]
		],[
			['ブリザード'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[14,23,34,46,58]
			},{
				title:'使用回数',
				cont:[3,3,4,4,5]
			},{
				title:'威力',
				cont:[35,40,42,44,50]
			},{
				title:'持続時間（秒）',
				cont:[4,5,6,7,10]
			}]
		],[
			['アニメイトスケルトン'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,8,16,25,36]
			},{
				title:'スケルトンのレベル（プレイヤーレベルのn％）',
				cont:[50,60,70,80,100]
			},{
				title:'最大召喚数',
				cont:[1,2,2,3,4]
			}]
		],[
			['レヴィテーション'],
			[3],
			[{
				title:'消費SP',
				cont:[1,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3]
			},{
				title:'取得Lv',
				cont:[1,14,29]
			},{
				title:'飛行時間（フレーム）',
				cont:[17,20,23]
			},{
				title:'空中魔法のダメージ上昇率（％）',
				cont:[20,35,50]
			}]
		],[
			['クリエイトフード'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,2,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[3,9,17,26,35]
			},{
				title:'使用回数',
				cont:[5,5,7,7,9]
			},{
				title:'生成される個数',
				cont:[4,5,6,7,8]
			},{
				title:'スキルレベル（ショットから取得するよう',
				cont:[1,2,3,4,5]
			}]
		],[
			['カース'],
			[3],
			[{
				title:'消費SP',
				cont:[1,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3]
			},{
				title:'取得Lv',
				cont:[6,16,31]
			},{
				title:'使用回数',
				cont:[5,7,9]
			},{
				title:'発生数',
				cont:[1,2,3]
			}]
		],[
			['ペトリフィケーション'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[15,22,29,36,43,51,60]
			},{
				title:'使用回数',
				cont:[3,3,4,4,5,5,7]
			},{
				title:'持続時間（秒）',
				cont:[5,6,7,8,9,10,15]
			}]
		]]



/*------------------------------------------------------
COMMON 9
--------------------------------------------------------*/
var sCom = [[
			['スライディング'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,10,20,31,40]
			},{
				title:'威力',
				cont:[30,34,40,46,60]
			},{
				title:'ダウン値増加',
				cont:[30,40,55,70,100]
			}]
		],[
			['ゴールドヒーリング'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,5,14,27,42]
			},{
				title:'HP回復量',
				cont:[2,3,5,7,10]
			}]
		],[
			['ゴールドスコアリング'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[1,8,17,29,43]
			},{
				title:'取得スコア',
				cont:[10,20,40,60,100]
			}]
		],[
			['ヒットポイントアップ'],
			[10],
			[{
				title:'消費SP',
				cont:[1,1,1,2,2,3,3,4,4,6]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9,9,12,12]
			},{
				title:'取得Lv',
				cont:[1,7,13,19,25,31,38,45,52,59]
			},{
				title:'HP最大値増加',
				cont:[20,35,50,65,80,100,120,145,170,200]
			}]
		],[
			['フードサイトロジー'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[3,11,24,37,51]
			},{
				title:'回復量増加率（％）',
				cont:[20,25,30,35,50]
			}]
		],[
			['メンテナンス'],
			[5],
			[{
				title:'消費SP',
				cont:[1,1,2,3,4]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6]
			},{
				title:'取得Lv',
				cont:[6,13,23,34,47]
			},{
				title:'使用回数が減らない確率（％）',
				cont:[20,25,30,35,50]
			}]
		],[
			['アイテムユーザー'],
			[7],
			[{
				title:'消費SP',
				cont:[1,1,2,2,3,3,5]
			},{
				title:'取得SLv',
				cont:[0,0,3,3,6,6,9]
			},{
				title:'取得Lv',
				cont:[9,16,22,29,36,44,53]
			},{
				title:'再使用時間低減率（％）',
				cont:[10,15,20,25,30,35,50]
			}]
		],[
			['イヴェイド'],
			[3],
			[{
				title:'消費SP',
				cont:[2,3,4]
			},{
				title:'取得SLv',
				cont:[0,3,6]
			},{
				title:'取得Lv',
				cont:[12,32,52]
			},{
				title:'連続使用回数',
				cont:[1,2,3]
			}]
		],[
			['エクストラポケット'],
			[3],
			[{
				title:'消費SP',
				cont:[2,4,6]
			},{
				title:'取得SLv',
				cont:[0,3,6]
			},{
				title:'取得Lv',
				cont:[15,30,50]
			},{
				title:'アイテムスロット数',
				cont:[8,9,10]
			}]
		]]
