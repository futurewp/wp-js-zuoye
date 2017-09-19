/*
* @Author: Administrator
* @Date:   2017-09-19 19:21:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 22:08:06
*/
window.onload=function(){
	let aside=document.getElementsByClassName('word')[0];
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
    let banner=document.getElementsByClassName('banner')[0];
	let bar=document.getElementsByClassName('bar-list')[0];
	let list=bar.getElementsByTagName('li');
	let barr=document.getElementsByClassName('banner-img');
	let lefts=document.getElementsByClassName('banner-left')[0];
	let rights=document.getElementsByClassName('banner-right')[0];
    //左右箭头
    rights.onclick = function(){
          move()
    }
    lefts.onclick = function(){
    	  moveL()
    }
    //时间函数----自动轮播
    let t=setInterval(move, 1000);
    
    banner.onmouseover = function(){
    	clearInterval(t);
    }
    banner.onmouseout = function(){
    	t=setInterval(move, 1000);
    }
    
    let num=0; //记录窗口显示的下标
    function move(){
    	num++;
    	if(num == barr.length){
    		num=0; 
    	}
    	for(let i=0;i<barr.length;i++){
    		barr[i].style.display = 'none';
    		list[i].style.background='#555171'

    	}
        barr[num].style.display = 'block';
        list[num].style.background='#abc9fa'

    }
    //左点击
    function moveL(){
    	num--;
    	if(num <0){
    		num=barr.length-1; 
    	}
    	for(let i=0;i<barr.length;i++){
    		barr[i].style.display = 'none';
    		list[i].style.background='#555171'

    	}
        barr[num].style.display = 'block';
        list[num].style.background='#abc9fa'

    }
   
    //鼠标移入
    for(let i=0;i<5;i++){
        list[i].onmouseover=function(){
               list[i].style.background='#abc9fa';  
            }
        list[i].onmouseout=function(){
               list[i].style.background='#555171';
            }       
    }
    //鼠标点击
	for(let i=0;i<5;i++){
		list[i].onclick=function(){
			for(let i=0;i<5;i++){
				barr[i].style.display='none';
                list[i].style.background='#555171';
			}
			barr[i].style.display='block';	
			list[i].style.background='#abc9fa';	
			num=i;
		}

	}



}