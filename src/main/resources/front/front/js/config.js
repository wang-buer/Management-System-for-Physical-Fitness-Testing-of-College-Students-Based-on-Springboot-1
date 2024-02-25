
var projectName = '大学生体质测试管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

]


var indexNav = [


{
	name: '论坛信息',
	url: './pages/forum/list.html'
}, 
{
	name: '公告信息',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot6r8mn/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"日常运动","menuJump":"列表","tableName":"richangyundong"}],"menu":"日常运动管理"},{"child":[{"buttons":["查看","修改","删除","报表"],"menu":"运动分析","menuJump":"列表","tableName":"yundongfenxi"}],"menu":"运动分析管理"},{"child":[{"buttons":["查看","修改","删除","报表"],"menu":"成绩信息","menuJump":"列表","tableName":"chengjixinxi"}],"menu":"成绩信息管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"论坛管理","tableName":"forum"}],"menu":"论坛管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[],"roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"日常运动","menuJump":"列表","tableName":"richangyundong"}],"menu":"日常运动管理"},{"child":[{"buttons":["查看"],"menu":"运动分析","menuJump":"列表","tableName":"yundongfenxi"}],"menu":"运动分析管理"},{"child":[{"buttons":["查看"],"menu":"成绩信息","menuJump":"列表","tableName":"chengjixinxi"}],"menu":"成绩信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"论坛管理","tableName":"forum"}],"menu":"论坛管理"}],"frontMenu":[],"roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["查看","运动分析"],"menu":"日常运动","menuJump":"列表","tableName":"richangyundong"}],"menu":"日常运动管理"},{"child":[{"buttons":["查看","修改","删除","报表","发布成绩"],"menu":"运动分析","menuJump":"列表","tableName":"yundongfenxi"}],"menu":"运动分析管理"},{"child":[{"buttons":["查看","修改","删除","报表","新增"],"menu":"成绩信息","menuJump":"列表","tableName":"chengjixinxi"}],"menu":"成绩信息管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"师生沟通管理","tableName":"chat"},{"buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[],"roleName":"教师","tableName":"jiaoshi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
