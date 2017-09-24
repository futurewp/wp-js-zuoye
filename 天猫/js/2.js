/*
* @Author: Administrator
* @Date:   2017-09-19 17:33:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-24 18:12:53
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
    let barrBox=document.getElementsByClassName('banner-list')[0];
    let barrli=barrBox.getElementsByTagName('li');
	let barr=barrBox.getElementsByClassName('banner-img');
    let imgw=parseInt(getComputedStyle(barrBox,null).width);
    let now=0;
    let next=0;
    let t=setInterval(move, 3000);
    //时间函数----自动轮播
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
        list[now].style.background = '#a2a2a2';
        list[next].style.background = '#fff';
        barrli[next].style.left = imgw+'px';
        animate(barrli[now],{left:-imgw});
        animate(barrli[next],{left:0});
        now=next;
    }


    //鼠标点击
	for(let i=0;i<barrli.length;i++){
        list[i].onclick=function(){
            if(now==i){return;}
            list[now].style.background = '#a2a2a2';
            list[i].style.background = '#fff';
            barrli[i].style.left = imgw+'px';
            animate(barrli[now],{left:-imgw});
            animate(barrli[i],{left:0});
            now=next=i;
        }
    }

//按需加载  楼层跳转
    let byleft=document.querySelectorAll('.bkleft>li>a');
    let ch=innerHeight;
    let floor=document.querySelectorAll('.floor');
    let floorArr=[];
    let color = ['#64c333','#ff6700','#ea5f8d','#0aa6e8','#64c333','#f15453','#19c8a9','#0aa6e8','#ea5f8d']
    floor.forEach(element=>{
        floorArr.push(element.offsetTop)
    })
    let flag=true;
        console.log(floorArr);
    window.onscroll = function(){
        if(!flag){
            return;
        }
        // console.log(document.documentElement.scrollTop)
        // console.log(document.body.scrollTop)
        let scrolltop=document.documentElement.scrollTop;
        floorArr.forEach((value,index)=>{
            if(scrolltop+ch>=value+200){

                for(let i=0;i<byleft.length;i++){
                    byleft[i].style.background='none';
                }
                 byleft[index].style.background=color[index];

                //index
                let imgs=floor[index].getElementsByTagName('img');
                // console.log(imgs)
                for(let i=0;i<imgs.length;i++){
                    imgs[i].src = imgs[i].getAttribute('imgpath');
                }
            }
        })
    }

    byleft.forEach((element,index)=>{
        element.onclick=function(){
            for(let i=0;i<byleft.length;i++){
                byleft[i].style.background='none';
            }
               element.style.background=color[index];
            
             flag=false;
           // document.documentElement.scrollTop=floorArr[index];
            animate(document.documentElement,{scrollTop:floorArr[index]},function(){
                flag=true;
            })
        }

    })
        // byleft.onmouseover=function(){
        //     byleft[index].style.background=color[index];
        //     byleft[byleft.length-1].style.background='#999';
        // }
        // byleft.onmouseout=function(){
        //     byleft[index].style.background='rgba(0,0,0,0.6)';
        //     byleft[byleft.length-1].style.background='#999';
        // }







}