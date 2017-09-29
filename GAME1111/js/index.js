		function Game(){
		this.charArr=[
			['A','img/a.jpg'],
			['B','img/b.jpg'],
			['C','img/c.jpg'],
			['E','img/e.jpg'],
			['F','img/f.jpg'],
			['G','img/g.jpg'],
			['I','img/i.jpg'],
			['J','img/j.jpg'],
			['L','img/l.jpg'],
			['N','img/n.jpg'],
			['X','img/x.jpg'],
			['Z','img/z.jpg'],
			['T','img/t.jpg'],
			['M','img/m.jpg']
			]
	          //存储页面元素
			this.current=[]; //---存储元素
			this.number=5;
			this.position=[];
			this.speed=1;
			this.gk=10;
			this.arr=[];
            this.score=0;
            this.hp=10;
			this.scoreobj=document.querySelector('.box>span')
			this.hpobj=document.querySelector('.hp>span')
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
				divs.innerText=this.charArr[num][0];
                //////////////添加类名
				divs.classList.add('char');
                /////// 元素距离浏览器边框的距离 top left
				let tops=Math.random()*250;
				let lefts=(innerWidth-500)*Math.random()+250;
				///////水平方向不发生重叠
				while(this.checkPosition(lefts)){
					lefts=(innerWidth-500)*Math.random()+250;
				};
				divs.style.cssText=`
				 top:${tops}px;
				 left:${lefts}px;
                 background-image:url('${this.charArr[num][1]}');
                 font-size:0;
				`
				document.body.appendChild(divs);
				this.current.push(divs);
				this.position.push(lefts);
				this.arr.push(this.charArr[num]);
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

						if(tops>=500){
							document.body.removeChild(that.current[i]);
							that.current.splice(i,1);
							that.position.splice(i,1);
							that.arr.splice(i,1);
							that.hpobj.innerText=that.hp--
							that.getChar();
							if(that.hp<0){
								let flag=confirm('你不想玩了吗');
								if(flag){
									close();
								}else{
									that.report();
								}
							}

							
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
							that.score++;
							that.scoreobj.innerText=that.score
							if(that.score==that.gk){
								let flag=confirm('确定进入下一关吗');
								if(flag){
									that.next();
								}else{
									close();
								}
								
							}
							defen.innerHTML=`${that.score}`
						}
					}
				}
				
			},
			/////////下一关
			next:function(){
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
                this.score=0;
                this.hp=10;
			},
		}









