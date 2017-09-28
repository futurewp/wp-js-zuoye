		function Game(){
			this.charArr=['A','B','C','D','E','F','G','H','I','J','K','L','I','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	          //存储页面元素
			this.current=[]; //---存储元素
			this.number=5;
			this.position=[];
			this.speed=1;
			this.gk=10;
			this.score=0;
			this.arr=[];
		}
		Game.prototype={
			start:function(){
				this.getChars();
				this.drop();
				this.key();
			},
			getChars:function(){
				for(let i=0;i<this.number;i++){
					this.getChar();
				}
			},
			getChar:function(){
				let num=Math.floor(Math.random()*this.charArr.length);			
				while(this.repeat(this.charArr[num])){
					 num=Math.floor(Math.random()*this.charArr.length);					
				};
				let divs=document.createElement('div');
				divs.innerText=this.charArr[num];
                //////////////添加类名
				divs.classList.add('char');
                /////// 元素距离浏览器边框的距离 top left
				let tops=Math.random()*100;
				let lefts=(innerWidth-500)*Math.random()+250;
				///////水平方向不发生重叠
				while(this.checkPosition(lefts)){
					lefts=(innerWidth-500)*Math.random()+250;
				};
				divs.style.top=tops+'px';
				divs.style.left=lefts+'px';
				divs.style.background=this.color();
				document.body.appendChild(divs);
				this.current.push(divs);
				this.position.push(lefts);
				this.arr.push(this.charArr[num]);
			},
			/////元素颜色随机
			color:function(){
				let ar=[]
				for(let i=0;i<3;i++){
					ar.push(Math.round(Math.random()*255))
				}
			    let str1=ar.join();
			    str='rgb('+str1+')';
			    return str;
			},
			///////水平方向不发生重叠
			checkPosition:function(element){
				let flag=this.position.some(function(value){
					return Math.abs(value-element)<80;
				})
				return flag;
			},
            ///////////////元素去重
			repeat:function(peat){
				let flag=this.arr.some(function(value){
					return value==peat;
				})
				return flag;
			},
			//////向下落
			drop:function(){
				let that=this;
				this.t=setInterval(function(){
					for(let i=0;i<that.current.length;i++){
						let tops=that.current[i].offsetTop+that.speed;
						that.current[i].style.top=tops+'px';

						if(tops>=600){
							document.body.removeChild(that.current[i]);
							that.current.splice(i,1);
							that.position.splice(i,1);
							that.arr.splice(i,1);
							that.getChar();
							
						}
					}

				},30)
			},
			/////点击删除----------玩法
			key:function(){
				let that=this;
				let defen=document.querySelector('span');
				console.log(defen)
				document.onkeydown=function(e){
					for(let i=0;i<that.current.length;i++){
						if(that.current[i].innerText==String.fromCharCode(e.keyCode)){
							document.body.removeChild(that.current[i]);
							that.current.splice(i,1);
							that.position.splice(i,1);
							that.arr.splice(i,1);
							that.getChar();
							that.score+=2;
							if(that.score==that.gk+2){
								that.next();
							}
							defen.innerHTML=`${that.score}`
						}
					}
				}
				
			},
			/////////下一关
			next:function(){
				confirm('确定进入下一关吗');
				clearInterval(this.t);
				for(let i=0;i<this.current.length;i++){
					document.body.removeChild(this.current[i]);
				}
				this.current.length=0;
				this.position.length=0;
				this.arr.length=0;
				this.number++;
				this.gk+=10;
				this.start();
			},
			///////重新开始
			report:function(){
				clearInterval(this.t);
				for(let i=0;i<this.current.length;i++){
					document.body.removeChild(this.current[i]);
				}
				this.current.length=0;
				this.position.length=0;
				this.arr.length=0;
				this.number=5;
				this.gk=10;
				this.start();
			},
		}









