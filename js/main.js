//生成时间，如果是一位数，就前面补0
function getTime(time) {
	if (time < 10) {
		return "0" + time
	}
	return time;
}

function getCurrentTime() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var currentTime = getTime(hours) + ":" + getTime(minutes) + ":"
			+ getTime(seconds);
	return currentTime;
}

function getCurrentSeconds() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	return (hours * 3600 + minutes * 60 + seconds);
}

var minuteArr = [];

//生成有范围的随机数字
function randomRange(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}
//随机生成0-count的数字
function randomNum(count) {
	return parseInt(Math.random() * count);
}
var arr = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c',
		'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
		'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E',
		'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
		'T', 'U', 'V', 'W', 'S', 'Y', 'Z' ];
function randomAudi() {
	var xin = randomRange(4, 10);
	var xinNum = "";
	for (var i = 0; i < xin; i++) {
		xinNum += "*";
	}
	return arr[randomNum(arr.length)] + xinNum + arr[randomNum(arr.length)];

}
//console.log("观众"+randomAudi(arr,randomRange(2,20)));	

function compareSeconds(time) {
	var time = time.split(":");
	var s = time[0] * 3600 + time[1] * 60 + time[2] * 1;
	return s;
}

$(function() {

//	$(".main_pro span").each(function(i){
//		var content = $(this).html();
//		if( content.length > 24){
//			content = content.substr(0,38) + "...";
//			$(this).html(content);
//		}
//	})
	
	function cutContent(obj,zishu){
	   var content = $(obj).html();
		if( content.length > zishu){
			content = content.substr(0,zishu) + "...";
			$(obj).html(content);
		}	
	}
	//公告栏超过5行截断
    cutContent("#note ul li",110);
  
	// 首页进入展台按钮
	$(".zs_model .zs_box").hover(function() {
		$(this).find(".zs_btn").addClass("zs_btn_red").stop().animate({
			'width' : '150px'
		}, 500);

	}, function() {
		$(this).find(".zs_btn").removeClass("zs_btn_red").stop().animate({
			'width' : '80px'
		}, 500);
	})

	// 登录提示
	$("#tip_fixed .close").click(function() {
		$("#tip_fixed").hide();
	})

	// 样品申请页
	$("#pro_nav ul li").click(
			function() {
				$(this).addClass("on").siblings("li").removeClass("on");
				$(".main_right").eq($(this).index()).show().siblings(
						".main_right").hide();
			})

	// 搜索框
	var isShow = false;
	$(".search .pull_list").click(function() {
		if (isShow == false) {
			$(this).find("p").show();
			isShow = true;
		} else {
			$(".search .pull_list .other").hide();
			isShow = false;
		}
	})

	$(".search .pull_list p").click(function() {

		var thisText = $(this).text();

		var otherText = $(this).siblings().text();

		$(".search .pull_list .current").text(thisText);

		$(".search .pull_list .other").text(otherText);

		if (isShow == true) {
			$(".search .pull_list .other").hide();
		}
	})

	// 首页聊天窗
	//$("#livechat_main").addClass("opa").find("object").addClass("opa");

	$("#livechat .live_mr").click(function() {
		$(this).hide();
		// $("#livechat_main").show();
		$("#livechat_main").animate({
			'bottom' : 0
		}, 500);
		//$("#livechat_main").removeClass("opa").find("object").removeClass("opa");
	})

	$("#livechat #close").click(function() {
		// $("#livechat #livechat_main").hide();
		$("#livechat_main").animate({
			'bottom' : -520
		}, 500);
		//$("#livechat_main").addClass("opa").find("object").addClass("opa");;
		$("#livechat .live_mr").show();
	})

	$("#livechat .chat_nav ul li").click(
			function() {
				$(this).addClass("on").siblings("li").removeClass("on");
				$("#livechat .chat_msg").eq($(this).index()).show().siblings(
						".chat_msg").hide();
			})

	// 首页公告超过两条滚动
	$.fn.extend({
		Scroll : function(opt, callback) {
			// 参数初始化
			if (!opt)
				var opt = {};
			var _this = this.eq(0).find("ul:first");
			var lineH = _this.find("li:first").height(), // 获取行高
			line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height()
					/ lineH, 10),
			// 每次滚动的行数，默认为一屏，即父容器高度
			speed = opt.speed ? parseInt(opt.speed, 10) : 500, // 卷动速度，数值越大，速度越慢（毫秒）
			timer = opt.timer ? parseInt(opt.timer, 10) : 3000; // 滚动的时间间隔（毫秒）
			if (line == 0)
				line = 1;
			var upHeight = 0 - line * (lineH + 12);
			// 滚动函数
			scrollUp = function() {
				_this.animate({
					marginTop : upHeight
				}, speed, function() {
					for (i = 1; i <= line; i++) {
						_this.find("li:first").appendTo(_this);
					}
					_this.css({
						marginTop : 0
					});
				});
			}
			// 鼠标事件绑定
			_this.hover(function() {
				clearInterval(timerID);
			}, function() {
				timerID = setInterval("scrollUp()", timer);
			}).mouseout();
		}
	});

	// 超过两条时滚动
	
	if ($("#scroll_note li").lenght > 2) {
		$("#scroll_note").Scroll({
			line : 2,
			speed : 1000,
			timer : 3000
		});
	}
	

	// 导航最近展会下拉效果
	$("#last_zhanhui").hover(
			function() {
				$(this).find(".zh_list").show();
				$(".zh_list dt").mouseover(
						function() {
							$(this).addClass("selected").siblings("dt")
									.removeClass("selected");
						})
			}, function() {
				$(this).find(".zh_list").hide();
			})

	// 导航hover效果
	$("#g_nav li").not(".line").hover(function() {
		$(this).addClass("on");
	}, function() {
		$(this).removeClass("on");
	})

})

function query(urlRequired, page) {
    var keyword = $("#keyword").val();
    var form = $("#searchForm");
    var text = $(".search .pull_list .current").text();
    var methodName = '';
    if (text == '参展商') {
        methodName = 'queryExhibitor';
    } else {
        methodName = 'queryProduct';
    }
    var url = "/exhibition/index.xhtml?" + urlRequired + "&method=" + methodName;
    if (page) {
        url = url + "&page=" + page;
    }
    form.attr("action", url);
    form.submit();
	
}

document.onkeydown = function(e) {
	var theEvent = window.event || e;
	var code = theEvent.keyCode || theEvent.which;
	if (code == 13) {
		//query(theme, mode, page);
	}
}

// 首页推荐展商滚动
function leftscroll(speed, demo) {

	function Marquee() {
		if (demo2.offsetWidth - demo.scrollLeft <= 0)
			demo.scrollLeft -= demo1.offsetWidth;
		else {
			demo.scrollLeft++;
		}
	}

	if ($("#" + demo).length) {
		var speed = speed;
		var c2 = demo + '1';
		var c3 = demo + '2';
		var scrname = setInterval(Marquee, speed);
		var demo = document.getElementById(demo);
		var demo1 = document.getElementById(c2);
		var demo2 = document.getElementById(c3);
		demo2.innerHTML = demo1.innerHTML;
		demo.onmouseover = function() {
			clearInterval(scrname)
		}
		demo.onmouseout = function() {
			scrname = setInterval(Marquee, speed);
		}
	}

}



function notifyUserEnterExhibition(notification) {
	try {
		//        var notification = eval(msgText);
		if (notification) {
			var user = notification.user;
			if (user.userType == 1) {
				/** <li>
				        <span class="msg_date">15:00:25</span>
				        <p class="padleft30 font14">观众张三进入展厅</p>
				    </li>*/
				var elementText = "<li><span class='msg_date'>"
						+ notification.time
						+ "</span><p class='padleft30 font14'>观众" + user.name
						+ "进入展厅</p></li>";
				var element = $(elementText);
				var area = $("#gz_msg");
				var exists = area.find("li");
				if (exists.length >= 3) {
					exists[0].remove();
				}
				element.appendTo(area);
			}
		}
	} catch (e) {
	}
}

$(document).ready(
		function() {
			//   setInterval(function() {
			//       var data =  {time:'xxx', user:{userType:1, name: 'test' + new Date().getTime()}};
			//       notifyUserEnterExhibition(data);
			//   }, 1000)

			$(".active_list li:even:not(.act_head)").css("background",
					"#fafafa");
			$(".active_list li").eq(1).find(".act_con").append(
					"<dd class='first_bg'></dd>");
			$(".active_list li:last").find(".act_con").append(
					"<dd class='last_bg'></dd>");
			if ($(".active_list li").length % 2 == 0) {
				$(".active_list .act_con .last_bg").css("background", "#fff");
			} else {
				$(".active_list .act_con .last_bg")
						.css("background", "#fafafa");
			}
			//大厅分享活动
			$("#share").hover(function() {
				$(this).find(".jiathis_style").show();
			}, function() {
				$(this).find(".jiathis_style").hide();
			})

			/*  $(".act_ifr_box iframe").attr("id","act_ifr")
			 var ifrH= $(window.frames["act_ifr"].document).find("body").height();
			 alert(ifrH);*/
			$(".act_ifr_box iframe").height(153); //离上面距离30px，body高+30

		});


//展会大厅悬浮
$(window).scroll(function() {
	var winScroll = $(window).scrollTop();
	if (winScroll > 75) {
		$(".main-header .we_nav").addClass("we_nav_fixed");
	} else if (winScroll < 75) {
		$(".main-header .we_nav").removeClass("we_nav_fixed");
	}
})

$(function(){

	function topscroll(speed,demo){
	  //已注册听众滚动
	 if($("#"+demo).length){
	  var speed = speed;
	  var c2 = demo+'1';
	  var c3 = demo+'2';
	   function Marquee(){
	  if(demo2.offsetHeight-demo.scrollTop<=0)
	     demo.scrollTop-=demo1.offsetHeight
	  else{
	     demo.scrollTop++
	  }
	}
	  var scrname=setInterval(Marquee,speed); 
	  var demo = document.getElementById(demo);
	  var demo1 = document.getElementById(c2);
	  var demo2 = document.getElementById(c3);
		  
	  demo2.innerHTML=demo1.innerHTML;
	  demo.onmouseover=function(){ clearInterval(scrname) }
	  demo.onmouseout=function(){ scrname=setInterval(Marquee,speed) }
	 
	 	
	 }
	
	  
	  
	
	}
//leftscroll(40, "tuijian");
//topscroll(40,"note");

//右边公告栏滚动
/*$("#note_a1 ul").each(function(i){
	if($(this).find("li").height()>100){
		topscroll(70,"note_a1");	
	 }	
	});
	
//左边公告栏滚动
//alert($("#ricehng_a1").find("ul").height())
$("#richeng_a1").each(function(i){
	if($(this).find("ul").height()>190){
		topscroll(70,"richeng_a1");	
	 }	
	});	
	

//整点开奖滚动效果
$(".winners-list dl").each(function(i){
	if($(this).hasClass("active") && $(this).find("p").html().length>30){
		topscroll(70,"winner_a"+(i+1));	
	 }
	
	});
*/





/*右侧客服*/
$(".float_nav .fsub").hover(function(){
	$(this).children("p,.kfu_wrap").toggle();
	
	});
	
	
 $(".winners-tabs li").hover(function(){
	 var index=$(this).index();
	  $(this).addClass("active").siblings().removeClass("active");
	$(".winners-list").eq(index).show().siblings(".winners-list").hide();
	 
	 });
  //鼠标滚动固定顶部
			 if($(".banner_index").length){
			      var w_top = $(".banner_index").offset().top;   
			   }
			$(window).bind("scroll",function(){
				//alert(124);
				//nav
				var s_top = $(window).scrollTop();
				if(s_top > w_top)
				{
					$(".float-right").addClass("float-small");
				}
				else
				{
					$(".float-right").removeClass("float-small");
				}
		
			})
	//回到顶部
	$(".f_top").click(function(){
		$("html,body").animate({'scrollTop':0},100);
		
		});

})

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
} 

$(function(){

	//页面加载判断url参数，切换tab
	if( $(".zs_classify").size() == 0 ){
		return;
	}
	var url = window.location.href;
	var posStr = getQueryString("pos");
	var i = -1;
	if(posStr != null){
		i = parseInt(posStr);
	}
	var scrollTop = $(".zs_classify").offset().top;

	if( i != -1 ){
		$("html,body").animate({'scrollTop':scrollTop},400);
		$(".zs_classify td").removeClass("active").eq(i).addClass("active");
		$(".zs_model").hide().eq(i).show();
	}

	//展厅分类tab切换
	$(".zs_classify li:first,.zs_classify li:last").find("i").hide();
	
	$(".zs_classify").on("click","li",function(){
		$(".zs_classify li:not(:last)").find("i").show();
		var index = $(this).index(".zs_classify li");
		$(this).find("i").hide().closest("li").prev().find("i").hide();
		$(".zs_classify li").removeClass("active").eq(index).addClass("active");
		$(this).closest(".zs_classify").siblings(".zs_model").hide().eq(index).show();

	});

	//点击左悬浮导航，tab切换
	$(".wn_tab_btn").on("click","li",function(){

		var index = $(this).index(".wn_tab_btn li");
		
		$("html,body").animate({'scrollTop':scrollTop},400);
		$(".zs_classify td").removeClass("active").eq(index).addClass("active");
		$(".zs_model").hide().eq(index).show();
	});

});

//左侧导航展开收起
$(function(){
	
	$(".unfold").click(function(){
		if($(this).closest("#aside").length){  //首页
		 $(this).hide().prev().show().stop().slideDown(300);
		}else{  //列表页
		   $(this).hide().prev().show().stop().animate({'left':0},500);	
		}
	});
	$(".fold").click(function(){
		if($(this).closest("#aside").length){ //首页
			$(this).parents(".we_nav").stop().slideUp(300,function(){
				$(".unfold").show().css("margin-top",($(".we_nav").outerHeight(true)-$(".unfold ").outerHeight(true))/2);
			})
		}else{ //列表页
			$(this).parents(".we_nav").stop().animate({'left':'-170px'},500,function(){
				$(".unfold").show();
			})
		}
		
		
		
	});
		
	
});

$(function(){
//首页左侧导航接近底部时，取消固定
  $(window).scroll(function(){
     var btop=$(".footer_booking").offset().top,
         headerH=$("#indexheader").outerHeight(true),
         wtop=$(this).scrollTop();
         
     if(wtop+$(window).height()-20>=btop || wtop<headerH){
        $("#aside .we_nav:first").removeClass("we_nav_fixed");
     }else{
         $("#aside .we_nav:first").addClass("we_nav_fixed");
     }
  
  });


	$(".zs_box .concern").mouseenter(function(){
		$(this).addClass("active").html("关注+");
		return false;
	}).mouseleave(function(){
	   $(this).removeClass("active").html("关注");
	}).click(function(){
		$(this).addClass("clickafter").html("已关注");
	    $(this).off("mouseleave mouseenter");
		return false;
	});
	
	/* === 从下向上无缝滚动 ===
 * 参数：只需要两层结构,如ul>li
 * wrap: 外层元素选择器； 类型： 字符串；
 * sub:  内层元素选择器； 类型： 字符串；
 * option: 可选参数； 类型： 对象；
*/
	function scrollTop(wrap,sub,option) {
	  if($(wrap).find(sub).length){
	  var $wrap = $(wrap),  //外层元素
		$element = $(wrap).find(sub),  //子层元素
		$cloneElement = $element.clone(true),  //克隆子层元素
		_height = $element.size() * $element.outerHeight(true),  //总宽度
		_scrollValue = 0,  //偏移量 
		option = option || {},  //可选配置
		t;

	option.speed = option.speed || '30';
	//如果子层元素总宽度小于外层元素宽度，则返回
	if(_height < $wrap.height()) {
		return false;
	}
	//在内层元素中插入克隆子层元素
	$wrap.append($cloneElement);
	//内层元素添加宽度，目的是让子层元素显示为一行
	//$content.css('width', _width * 2);

	//滚动效果
	function marquee() {
	   clearTimeout(t);
		_scrollValue = _scrollValue >= _height ? 0 : _scrollValue;
		$wrap.scrollTop(_scrollValue);
		_scrollValue ++;
		//使用setTimeout和递归调用代替setInterval
		t = setTimeout(function(){
			marquee();
		}, option.speed);
	}

	//执行滚动效果函数
	marquee();

	//鼠标经过，清楚定时器，暂停滚动效果
	$('body').on('mouseover', wrap, function(){
		clearTimeout(t);
	});

	//鼠标离开，回复定时器，开始滚动
	$('body').on('mouseout', wrap, function(){
		t = setTimeout(function(){
			marquee();
		}, option.speed);
	});
	}
  
}
	
	scrollTop("#richenglist","li")
	/*scrollTop("#winner1","dl");
	scrollTop("#winner2","dl");
	scrollTop("#winner3","dl");*/
	
	//中奖观众名单滚动条美化
  $(".winner-wrap").slimScroll({
	height:200,
    alwaysVisible: true,
    color: '#ddd',
    size:'5px'
    
 });
	
	
	
	
	
	
});
