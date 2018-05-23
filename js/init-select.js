{
  let schoolnames = {
    "北京大学": "圆明园职业技术学院",
    "清华大学": "五道口理工学院",
    "中国人民大学": "第二中央党校",
    "北京师范大学": "积水潭师专",
    "北京理工大学": "魏公村汽配维修服务站",
    "中国人民公安大学": "中国转正工具生产厂一厂",
    "中国农业大学": "海定种猪选育基地",
    "中国石油大学": "中国石油天然气集团公司子弟学校",
    "国际关系学院": "北京国安局岗前培训中心",
    "北京语言大学": "中央统战部亚非拉司",
    　"北京航空航天大学": "二炮部队技术研发中心",
    　"北京邮电大学": "明光村中学附属大学",
    　"北京科技大学": "京津唐地区炼钢工人培训学院",
    　"中国传媒大学": "中央宣传部储备干部培训中心",
    　"北京协和医科大学": "五道口理工学院东单屠宰培训基地",
    　"北京电影学院": "蓟门桥北爱情动作片拍摄中心兼青年男女伦理研究与实践基地",
    "北京外国语大学": "中国抗“日”军政大学俄文大队",
    "中国真嘎大学": "昌平法律职业技术培训学校",
    　"西南政法大学": "壮志路街道辩论队",
    　"西北政法大学": "延安讲武堂西安分堂",
    　"华东政法大学": "长宁区瓜果副食公司",
    　"中南财经政法": "中共中央党校华中地区二分校茶山刘法商会计管理计算机工程高等职业技术学院",
    　"南京大学": "浦口农民运动讲习所",
    　"南京财经大学": "仙林香樟园周末情侣房消费主力小分队",
    　"河海大学": "江苏水利高专",
    　"东南大学": "九龙湖高级技工学校",
    　"南京师范大学": "江苏职教师资培训专科",
    　"南京邮电大学": "三牌楼业余无线电俱乐部",
    　"上海交通大学": "东川路男子职业技术学院",
    　"复旦大学": "五角场文秘职业技术学院",
    　"同济大学": "上海市第一建筑施工队文化中心",
    　"上海大学": "宝山区落榜青年高复学校",
    　"上海外国语大学": "松江俄文高专",
    　"东华大学": "国立黄道婆高专",
    　"上海海洋大学": "中国大闸蟹良种选育基地",
    　"上海海事大学": "黄浦江驾船员培训基地",
    　"华东理工大学": "徐汇区家电维修站",
    　"华东师范大学": "普陀师专",
    　"上海师范大学": "徐汇区下岗青年再就业培训基地",
    　"上海体育学院": "五角场武术学校",
    　"中山大学": "广东应用文理综合学院、海珠区青年康乐中心",
    　"华南理工大学": "五山镇理工学院、五山禅寺",
    　"华南师范大学": "天河区幼教师资培训基地",
    　"华南农业大学": "中科院华南自由落体研究所",
    　"广东外语外贸大学": "白云山麓高级公关小姐兼语言培训基地",
    　"广州中医药大学": "三元里中医职业技术学院",
    　"南方医科大学": "中国人民解放军截肢研究所",
    　"深圳大学": "南山区青年创业培训中心",
    　"汕头大学": "中央驻港联络办汕头统战办公室",
    　"武汉大学": "珞珈山综合职业技术培训学院",
    　"山东师范大学": "中华联合考研培训基地济南实验学校",
    　"厦门大学": "厦门反散步协会附属实验学院",
    　"吉林大学": "东北人民大学即中央党校东北军法专校",
    　"西安交大": "西安铁道医院泌尿外科专门医院",
    　"华东师范大学": "闵行女子高等师范专科学院",
    　"华中科技大学": "关山口职业技术学院",
    　"首都师范大学": "北京高大小学初中高中的老师基地",
    　"浙江大学玉泉校区": "老河山职业技术学校",
    　"大连理工大学": "搬家公司人才培训基地",
    　"中国医科大学": "北二马路医学院",
    　"华中农业大学": "湖北春耕夏耘秋收冬藏大学堂",

    　"中国民航大学": "张贵庄飞机驾驶培训及考核基地",
    　"天津大学": "七里台男子职业技术学院",
    "南开大学": "八里台女子文理学院",
    　"中国海洋大学": "青岛水产基地",
    　"江苏科技大学": "小牛村养蚕所",
    　"成都电子科技大学": "郫县高级男子技术学院",
    　"外交学院": "展览路加油站附属大学　　",
    　"安徽财经大学": "华东脑组织病变儿童康乐中心",
    　"湖南师范大学": "岳麓区教师进修学校",
    　"青岛农业大学": "城阳实验中学附属大学古庙头牛学院",
    　"海南大学": "海甸岛人民免费公园",
    　"河北大学": "上古村职业技术专修学院",
    　"大连海事大学": "栾金村渔业运输劳力资源中心",
    　"中国农业大学食品学院": "海淀区新东方职业厨师进修学校",
    　"四川外语学院": "歌乐山女子翻译职业技术学院",
    　"中国矿业大学": "徐州煤炭职业计术专修学院",
    　"哈尔滨工程大学": "马家沟轮船修造高级专科学校",
    　"大连理工": "红凌路职业技术培训中心",
    　"兰州大学": "榆中高原夏菜研究与生产基地",
    　"武汉理工大学": "与华中师范大学合称华中高等情侣培养技术中心",
    　"华中师范大学": "与武汉理工大学合称华中高等情侣培养技术中心",
    　"山东工商学院": "煤炭孤儿疗养院渤海分院",
    　"上海交通大学医学院": "重庆南路教育超市附属鲜肉加工厂",

    　"长安大学": "中国道路桥梁隧道客服中心",
    　"上海海事大学": "黄浦江驾船员培训基地",
    　"西安电子科技大学": "出门被雷光棍博物馆",
    　"山东科技大学": "呼啸山庄",
    　"西北大学": "西北农林第二研究所",
    　"对外经济贸易大学": "太阳宫女子职业技术高等专科学校",
    　"青岛大学": "青岛市南黄金路段最粗钉子户",
    　"中央民族大学": "魏公村清真餐饮培训基地",
    　"北京物资学院": "邓家窑村立大学",
    　"江苏警官学院": "中国专政工具生产集团江苏分公司",
    　"哈尔滨理工大学（东区）": "三大动力家电维修中心",
    　"哈尔滨理工大学（西区）": "哈西锅炉制造厂子弟学校",
    　"哈尔滨理工大学（南区）": "征仪路翻译职业学院兼信息管理通讯中心",
    　"北京建筑工程学院": "二里沟走读学院",
    　"天津音乐学院": "大光明桥琴瑟歌舞协会",
    　"南京信息工程大学": "龙王子弟学校",
    　"安徽农业大学": "华东地区化肥销售总代理",
    　"大连海事大学": "交通部嫡系部队",
    　"东北财经大学": "大连男子会计学院或东北青年疗养院",
    　"中央戏剧学院": "南锣鼓巷第250小学",
    　"湖北经济学院": "湖北停水停电断网学院",

    　"北京石油化工学院": "中常委指定高校生自杀心理学及边缘崩溃学说临床实验基地大兴分部",
    　"中国传媒大学南广学院": "南广生态园",
    　"桂林电子科技大学": "广西养牛基地",
    　"扬州大学": "纵贯线综合农牧场",
    　"东北师范大学": "教育部赴日留学预校",
    　"江西财经大学": "老区高考高分撞车遇难者收容所一部",
    　"湖南大学": "岳麓山管理处附属学院",
    　"阜阳师范学院": "阜阳三中附属大学",
    　"北京第二外国语学院": "韩国驻京子弟学校",
    　"华侨大学厦门校区": "兑山小学附属华侨大学",
    　"四川外国语大学": "歌乐山皇家女子学院",
    　"湖南商学院": "桐梓坡职业技术学院",
    　"山东大学兴隆山校区": "南外环理工大学",
    　"第二军医大学": "虬江尸体回收中心",
    　"湘潭大学": "羊梏塘土地开发基地",
    　"南京信息工程大学": "盘城气象预报中心",
    　"华中师范大学": "广埠屯女子师范专科学校",
    　"中南财经政法大学": "茶山刘大学",
    　"湖北大学": "徐东村幼儿园附属大",
    　"浙大紫金港校区": "三墩工学院",
    　"天津财大": "天津村党委财务科",
    　"中国人民解放军西安陆军学院": "西北第一监狱",
    　"成都理工大学": "成都市二仙桥石头研究基地",
    　"中国人民解放军重庆通信学院": "总参谋部歌乐山疗养院",
    　"华侨大学": "国立华侨待业青年疗养基地",
    　"首都医科大学": "（凉水）河北菜户营大学",
    　"北京体育大学": "亚洲第一青年疗养院",

    　"东北大学": "沈阳南湖职业技术学校",
    　"西南大学": "北碚天生路老师和农民专业培训中心",
    　"西安电子科技大学": "徐家庄电器装修学校",
    　"内蒙古农业大学": "呼市二苗圃军事管理监狱",
    　"四川大学": "成都七中附属大学",
    　"福州大学至诚学院": "福州第二福利院",
    　"北京交通大学": "北京地铁公司西直门分公司",
    　"南京农业大学": "卫岗乳业附属学校",
    　"中央司法警官学院": "司法部直属监狱",
    　"同济大学嘉定校区": "黄渡镇男子职业技术学校",
    　"广东工业大学": "大学城男性监狱",
    　"山东科技大学泰安校区": "山东煤炭工人扫盲基地",
    　"中科院研究生院": "中科院系统临时工入岗培训班",
    "江苏大学京江学院英语系": "镇江师专",
    　"中国科技大学": "南七技校",
    　"江西理工大学": "金沙湾大学（黄金校区）",
    　"成都电子科大": "高新西区多功能娱乐休闲庄（可免费享受无线上网），附鸵鸟免费参观",
    　"安徽大学磬苑校区": "肥西县综合职业技术学院",
    　"安徽大学龙河校区": "肥西县综合职业技术学院龙河路分部",
    　"湖北大学": "沙湖职业技术学院",
    　"武汉音乐学院": "解放路连锁KTV",
    　"三江学院": "警嫂学院",
    　"南京信息工程大学": "丁解村气象站",
    　"黑龙江科技学院": "哈尔滨市江北地区糖厂职业技工学校",
    　"上海海事大学（新校区）": "东海渔船舰队",
    　"北京舞蹈学院": "中国对外交流演出团或魏公村歌舞团",
    　"武汉理工大学": "出版城猥琐男教育中心",
    　"华中科技大学文华学院": "华中科技大学管子工玻璃工搬运工学院",

    　"天津师范大学": "姚村第三产业发展基地",
    　"武汉工业学院": "常青花园老年大学附属学院",
    　"辽宁师范大学": "辽宁吃饭大学",
    　"西华大学": "成都农家乐大学",
    　"南京中医药大学": "南京药代第二培训基地",
    　"首都经济贸易大学": "樊家村附属大学",
    　"南京理工大学": "孝陵卫军械厂",
    　"武汉体育学院": "马家庄高等体育运动技术学校",
    　"河北师范大学": "喝水吃饭大学",
    　"中南大学": "打铁的、修路的与当郎中的联合大学",
    　"西南财经大学": "光华村银行综合柜员培训中心",
    　"中南民族大学": "石板头歌舞表演学校",
      "湖北工业大学": "南湖农民工大学"
  }

  let $selUl = $('.select-ul')
  for(let key in schoolnames){
    let value = schoolnames[key]
    
    let $selLi = $('<div></div>').attr("class","weui-cell select-li")
    let $bd = $('<div></div>').attr("class","weui-cell__bd")
    let $p = $("<p></p>").text(value)
    let $ft = $('<div></div>').attr("class","weui-cell__ft").text(key)
    $bd.append($p)
    $selLi.append($bd).append($ft)
    $selUl.append($selLi)
  }
}