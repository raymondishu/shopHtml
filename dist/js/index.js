window.onload=function() {
	var search=document.getElementsByClassName("header")[0];
	var banner=document.getElementsByClassName("banner")[0];
	var height=banner.offsetHeight;
	window.onscroll=function(){
		var top=document.body.scrollTop;
		if(top>height){
			search.style.background="rgba(201,21,35,0.85)";
		}else{
			var op=top/height*0.55;
			search.style.background="rgba(201,21,35,"+op+")";
		}
	}
	var sp=ScrollPic();
	sp.startInterval();
	secindkill();

}
var secindkill=function(){
	var parentTime=document.getElementsByClassName('sk_time')[0];
	var timeKist=parentTime.getElementsByClassName('num');
	//console.log(timeKist.length);
	var times=4*60*60;
	setInterval(function(){
		times=times-1;
		var h=Math.floor(times/(60*60));
		var m=Math.floor((times-h*3600)/(60));
		var s=times%60;
		//console.log(h+" "+m+" "+s);
		timeKist[0].innerHTML=h>10?Math.floor(h/10):0;
		timeKist[1].innerHTML=h%10;
		timeKist[2].innerHTML=m>10?Math.floor(m/10):0;
		timeKist[3].innerHTML=m%10;
		timeKist[4].innerHTML=s>10?Math.floor(s/10):0;
		timeKist[5].innerHTML=s%10;
	}, 1000);
}


var ScrollPic= function(){
	var obj = new Object();
	// 得到banner对象
	var banner=document.getElementsByClassName("banner")[0];
	var width=banner.offsetWidth;
	// 得到图片盒子
	var imgBox=banner.getElementsByTagName('ul')[0];

	// 得到点盒子
	var pointBox=banner.getElementsByTagName('ul')[1];
	// 得到点列
	var pointList=pointBox.getElementsByTagName('li');
	var index=0;
	for(var item in pointList){
    	pointList[item].onclick=(function(i){ // outer function 
			return function(){ //inner function 
				obj.stopInterval();
				index=i;
				obj.setIndex(i);
				obj.startInterval();
			};
		})(item);

    }  


//加过度
	obj.addTransition=function(){
		imgBox.style.webkitTransition="all 0.3s ease 0s";
		imgBox.style.transition="all 0.3s ease 0s";
		
	}
//减过度
	obj.removeTransition=function(){
		imgBox.style.webkitTransition="all 0s ease 0s";
		imgBox.style.transition="all 0s ease 0s";
		
	}
	//改变位置
	obj.setTransform=function(t){
		imgBox.style.transform="translateX("+t+"px)";
		imgBox.style.webkitTransform="translateX("+t+"px)";
	}

	obj.removeTransform=function(){
		imgBox.style.transform='';
		imgBox.style.webkitTransform='';
	}

	//更改点位置
	obj.setpoint=function(i){
		
		for(var item in pointList)  {
    		removeClass(pointList[item],'active');
    	}  
		var point=pointList[i];
		point.className +='' + 'active';

	}
	var timer=null;
	obj.startInterval=function(){
		timer=setInterval(function(){
			obj.setIndex((index+1)%8);
			obj.addTransition();
			//obj.removeTransition();
		},3000);
	}

	obj.setIndex=function(i){
		index=i;
		obj.setTransform(-width-i*width);
		obj.setpoint(i);
	}
	obj.stopInterval=function(){
		clearInterval(timer);
	}
	var removeClass=function (obj, cls){
  		var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  		obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  		removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  		removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  		obj.className = removed;//替换原来的 class.
	}
	var moveX=0;
	var startX=0;

	banner.addEventListener('touchstart',function(e){
		//e.preventDefault();
		//simgBox.style=null;
		console.log(0);
		startX=event.touches[0].clientX;
        obj.stopInterval();
	},false);
	banner.addEventListener('touchmove',function(e){
    	
    	console.log(1);
        //alert("<br>Touch moved (" + event.touches[0].clientX +"," + event.touches[0].clientY +")");
        moveX=e.touches[0].clientX-startX;
        obj.setTransform(-width-index*width+moveX);
        e.preventDefault();
        obj.removeTransition();
    },false);
	banner.addEventListener('touchend',function(e){
		console.log(2);
		if(moveX>width/3){
			console.log((index-1+8)%8);
			obj.setIndex((index-1+8)%8);
		}else if(-moveX>width/3){
			obj.setIndex((index+1)%8);
		}else{
			obj.setIndex(index);
		}
		obj.startInterval();
	},false);
	banner.addEventListener('touchcancel',touchCancel,false)
	function touchCancel(e){
		e.preventDefalut();
		console.log(event);
	}

	return obj;

}