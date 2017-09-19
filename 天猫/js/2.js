/*
* @Author: Administrator
* @Date:   2017-09-19 17:33:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 22:10:30
*/
window.onload=function(){
	let aside=document.getElementsByClassName('banner-left')[0];
	let lis=aside.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');

	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			item[i].style.display='block';
		}

		lis[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}
//banner    
    let banner=document.getElementsByClassName('banner1')[0];
	let bar=document.getElementsByClassName('bar-list')[0];
	let list=bar.getElementsByTagName('li');
	let barr=document.getElementsByClassName('banner-img');

    let t=setInterval(move, 3000);
    //时间函数----自动轮播
    banner.onmouseover = function(){
    	clearInterval(t);
    }
    banner.onmouseout = function(){
    	t=setInterval(move, 3000);
    }
    

    let num=0; //记录窗口显示的下标
    function move(){
    	num++;
    	if(num == barr.length){
    		num=0; 
    	}
    	for(let i=0;i<barr.length;i++){
    		barr[i].style.display = 'none';
    		list[i].style.background='#a2a2a2'

    	}
        barr[num].style.display = 'block';
        list[num].style.background='#fff'

    }
    //鼠标移入
	for(let i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			//所有的消失（遍历），对应的显示
			for(let i=0;i<list.length;i++){
				barr[i].style.display='none';
                list[i].style.background='#a2a2a2';
			}
			barr[i].style.display='block';	
			list[i].style.background='#fff';	
			num=i;
		}
	}











}