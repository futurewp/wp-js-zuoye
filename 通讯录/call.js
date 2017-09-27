window.addEventListener('load', function(){

    let dl=document.querySelector('dl');
    let info = [
       {name:'王鹏',tell:15735801091,pinyin:'wangpeng'},
       {name:'王浩',tell:15735801092,pinyin:'wanghao'},
       {name:'李欣琪',tell:15735801093,pinyin:'lixinqi'},
       {name:'杜晓红',tell:15735801094,pinyin:'duxiaohong'},
       {name:'吴瑞霞',tell:15735801095,pinyin:'wuruixia'},
       {name:'高敏',tell:15735801096,pinyin:'gaomin'},
       {name:'陈旭',tell:15735801097,pinyin:'chenxu'},
       {name:'李淑娴',tell:15735801098,pinyin:'lishuxian'},
       {name:'赵爱珍',tell:15735801099,pinyin:'zhaoaizhen'},
       {name:'吕增生',tell:15735801089,pinyin:'lvcengsheng'},
       {name:'张宏达',tell:15735801088,pinyin:'zhanghongda'}
    ];
    render(info);
    function render(data){
    	dl.innerHTML=''
    	//按照首字母分类
    	let aobj={};
    	data.forEach(function(element){
    	    let first=element.pinyin.charAt(0).toUpperCase();
    	    if(!aobj[first]){
    	    	aobj[first]=[];
    	    }
    	    aobj[first].push(element);
    	})
        //放入页面，并按一定顺序排列
    	let char=Object.keys(aobj).sort();
    	char.forEach(element=>{
    		dl.innerHTML+=`<dt>${element}</dt>`;
    		aobj[element].forEach(value=>{
                dl.innerHTML+=`<dd><a href="${value.tel}">${value.name}</a></dd>`;
    		})
    	})
    }
})

