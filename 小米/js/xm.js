/*
* @Author: Administrator
* @Date:   2017-09-19 19:21:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-24 22:17:00
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
    let barrBox=document.getElementsByClassName('banner-list')[0];
    let barrli=barrBox.getElementsByTagName('li');
	let barr=barrBox.getElementsByClassName('banner-img');
    // console.log(barr);
	let lefts=document.getElementsByClassName('banner-left')[0];
	let rights=document.getElementsByClassName('banner-right')[0];
    let imgw=parseInt(getComputedStyle(barrBox,null).width);
    // console.log(imgw);
    let now=0;
    let next=0;
    let flag=true;
    // 左右箭头
    rights.onclick = function(){
        if (!flag) {
            return;
        }
          move();
          flag=false;
    }
    lefts.onclick = function(){
        if (!flag) {
            return;
        }
          moveL();
          flag=false;
    	 
    }
    // 时间函数----自动轮播
    let t=setInterval(move,3000);
    
    banner.onmouseover = function(){
    	clearInterval(t);
    }
    banner.onmouseout = function(){
    	t=setInterval(move, 3000);
    }
    
    function move(){
        next++;
        if(next==barrli.length){
            next=0;
        }
        list[now].style.background = '#555171';
        list[next].style.background = '#abc9fa';
        barrli[next].style.left = imgw+'px';
        animate(barrli[now],{left:-imgw});
        animate(barrli[next],{left:0},function(){
            flag=true;
        });
        now=next;
    }
    function moveL(){
        next--;
        if(next<0){
            next=barrli.length-1;
        }
        list[now].style.background = '#555171';
        list[next].style.background = '#abc9fa';
        barrli[next].style.left = -imgw+'px';
        animate(barrli[now],{left:imgw});
        animate(barrli[next],{left:0},function(){
            flag=true;
        });
        now=next;
    }

    for(let i=0;i<barrli.length;i++){
        list[i].onclick=function(){
            if(now==i){return;}
            list[now].style.background = '#555171';
            list[i].style.background = '#abc9fa';
            barrli[i].style.left = imgw+'px';
            animate(barrli[now],{left:-imgw});
            animate(barrli[i],{left:0});
            now=next=i;
        }
    }


//明星产品
    // let starBox=document.getElementsByClassName('sb-bottom')[0];
    // let star=document.getElementsByClassName('star-box-bottom')[0];
    // let starli=star.getElementsByTagName('li')[0];
    // let sLefts=document.getElementsByClassName('star-box-top-jiantou1')[0];
    // let sRights=document.getElementsByClassName('star-box-top-jiantou2')[0];
    // let sw=(starli.offsetWidth+parseInt(getComputedStyle(starli,null).marginRight))*5
    // let i=0;
    // console.log(sw);

    // sLefts.onclick=function(){
    //     if(i==0){
    //         i++;
    //     }
    //     star.style.transform=`translateX(-${i*sw}px)`;
    //     sLefts.style.color=`#e0e0e0`;
    //     sRights.style.color=`#666666`;
    //     sRights.onmouseover=function(){
    //         // sLefts.style.color=`#e0e0e0`;
    //         sRights.style.color=`#ff6700`;
    //     }
    //     // sRights.onmouseout=function(){
    //     //     // sLefts.style.color=`#e0e0e0`;
    //     //     sRights.style.color=`#666666`;
    //     // }
    // }
    // sRights.onclick=function(){
    //     if(i==1){
    //         i--;
    //     }
    //     star.style.transform=`translateX(-${i*sw}px)`;
    //     sLefts.style.color=`#666666`;
    //     sRights.style.color=`#e0e0e0`;

    //     sLefts.onmouseover=function(){
    //         sLefts.style.color=`#ff6700`;
    //         // sRights.style.color=`#e0e0e0`;
    //     }
    //     // sLefts.onmouseout=function(){
    //     //     sLefts.style.color=`#666666`;
    //     //     // sRights.style.color=`#e0e0e0`;
    //     // }
    // }
    // setInterval(function(){
    //     // animate(star,{left:0})
    //     star.style.transform='translateX(0px)';
    //     sLefts.style.color=`#666666`;
    //     sRights.style.color=`#e0e0e0`;
    // },3000);
    // setInterval(function(){
    //     // animate(star,{left:-sw})
    //     star.style.transform='translateX(-1240px)';
    //     sLefts.style.color=`#e0e0e0`;
    //     sRights.style.color=`#666666`;
    // },3000); 
  let star=document.querySelector('.star-box-bottom');
  let zuohua=document.querySelector('.star-box-top-jiantou1');
  let youhua=document.querySelector('.star-box-top-jiantou2');
  let num=0;
  setInterval(function(){
    if(num==2){
      num=0;
    }
  star.style.marginLeft=-num*1226+'px';
  star.style.transition='all 1s';
  num++;
  },3000);
  youhua.onclick=function(){
    if(num===1){
      return;
    }
    // clearInterval(starT);
    zuohua.style.color=`#666666`;
    youhua.style.color=`#e0e0e0`;
    star.style.marginLeft=-num*1226+'px';
    num++;
  }
  zuohua.onclick=function(){
    if(num===0){
         return;
    }
    // clearInterval(starT);
    zuohua.style.color=`#e0e0e0`;
    youhua.style.color=`#666666`;
    star.style.marginLeft=-num*1226+'px';
    num--;
  }

   






















}