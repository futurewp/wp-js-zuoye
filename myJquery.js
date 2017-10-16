/*
* @Author: Administrator
* @Date:   2017-10-13 09:22:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-13 17:58:09
*/
function $(select){
   return new aa(select);
}
function aa(select){
	if(typeof select=='string'){
		let reg=/^<[a-z][a-z1-6]{0,10}>$/;////////////正则
		if(reg.test(select)){
			//true
			this[0]=document.createElement(select.slice(1,-1))
			this.length=1;

		}else{
			let leles=document.querySelectorAll(select);
			for(let i=0;i<leles.length;i++){
				this[i]=leles[i];
			}
	        this.length=leles.length;
		}

	

	}else if(typeof select=='function'){
		document.addEventListener('DOMContentLoaded', function(){
			select();
		} ,false)

	}else if(typeof select=='object' && select.nodeType==1 ){
		this[0]=select;
		this.length=1;

	}
}
aa.prototype.each=function(callback){
   for(let i=0;i<this.length;i++){
   	    callback(i,this[i]);
   }
}
aa.prototype.css=function(attrpbj){
	this.each(function(index,obj){
   	    for(let j in attrpbj){
   	    	obj.style[j]=attrpbj[j];
   	    }
	})
	return this;
}
aa.prototype.html=function(value){
	this.each(function(index,obj){
   	    obj.innerHTML=value;
	})
	return this;
}
aa.prototype.click=function(fn){
    this.each(function(index,obj){
   	    obj.onclick=function(){
   	    	// console.log(obj)
             fn.call(obj);
             // fn.apply(obj)
   	    }
	})
	return this;
}
aa.prototype.addclass=function(classes){
    this.each(function(index,obj){
   	    obj.classList.add(classes)
	})
	return this;
}
aa.prototype.appendTo=function(selector){
    let parents=document.querySelectorAll(selector);
    this.length=parents.length;
   	for(let i=0;i<this.length;i++){
   		 let copy=this[0].cloneNode(true);
   		 this[i]=copy;
   		 parents[i].appendChild(copy);
   	}
	return this; 
}
aa.prototype.setattr=function(key,value){
	if(value === undefined){
		return this[0].getAttribute(key);
	}
    this.each(function(index,obj){
   	    obj.setAttribute(key,value)
	})
	return this;
} 