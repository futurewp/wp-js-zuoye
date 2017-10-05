/*
* @Author: Administrator
* @Date:   2017-10-03 17:36:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-04 00:57:17
*/
window.onload=function(){
	let bannerBox=document.querySelector('.banner-list');
	let banner=document.querySelectorAll('.banner-list>li');
	let btn1=document.querySelector('.banner-btn1');
	let btn2=document.querySelector('.banner-btn2');
	let imgw=parseInt(getComputedStyle(bannerBox,null).width);
	let next=0;
	let now=0;
	let flag=true;
    btn2.onclick = function(){
        if (!flag) {
            return;
        }
          move();
          flag=false;
    }
    btn1.onclick = function(){
        if (!flag) {
            return;
        }
          moveL();
          flag=false;
    	 
    }	
    function move(){
        next++;
        if(next== banner.length){
            next=0;
        }
        banner[next].style.left = imgw+'px';
        animate(banner[now],{left:-imgw});
        animate(banner[next],{left:0},function(){
            flag=true;
        });
        now=next;
    }
    function moveL(){
        next++;
        if(next== banner.length){
            next=0;
        }
        banner[next].style.left = -imgw+'px';
        animate(banner[now],{left:imgw});
        animate(banner[next],{left:0},function(){
            flag=true;
        });
        now=next;
    }




}