# 2017.09.04

## javascript

浏览器里运行的脚本语言

## 能干什么（作用）

1.数据验证

2.操作dom元素的 内容、样式、属性

3.通过js 动态的创建、动态删除 元素

4.通过js来写动画

5.cookie、本地存储

06.ajax(动态获取数据)

7.******......

******

## js的组成

#### 1.ECMAScript

​        基础语法：变量的声明、数据类型、运算符、执行流程、函数、对象

#### 2.Bom

​        浏览器对象模型（browser object model）:地址、历史记录、dom、屏幕

#### 3.Dom

​      文档对象模型（document object model）:节点

## js的引入方式

```html
1.通过“script标签对”来写（可以写在html中的任意位置）

2.引入外部js文件
  html： <script src="js文件路径"></script>
  js：   写入对应的js代码

注意事项：
    1.引入多个js文件，js文件整体，相互联系相互影响相互作用；
    2.在外部js文件中，不允许有“script标签对”；
    3.当引入外部js文件时，不允许在“script标签对”（html中引入外部js文件的script标签对）中间有代码；
```

## js的调试工具

```js
调试工具：
  弹框：alert();                 当括号内是汉子、字符时，需加引号（单引号''、双引号""都可以）
  显示在控制台：console.log();    当括号内是汉子、字符时，需加引号（单引号''、双引号""都可以）
  显示在文档： document.write();  当括号内是汉子、字符时，需加引号（单引号''、双引号""都可                                      以）；括号内可加其他标签。
  prompt ("","")                 输入框
 
例：
<script>
	alert(1);
    alert('wangpeng');
	alert("wangpeng");
	
    console.log(1); 
	console.log('wp'); 
	console.log("wp"); 
   
	document.write(1);
	document.write('wp');
	document.write("wp");
	document.write('<b>wp</b>');
	document.write("<b>wp</b>");
</script>
```

## js的特点

基于对象和事件驱动的松散型解释性语言

   松散型：变量声明（var）中“;”可有可无

​                   代码可以  无先后顺序

## 一. 变量  （节省、快捷）          

### 1.概念：用来存储数据的容器

### 2.声明：

##### var变量

```js
var a；
var:变量声明
a:  变量名称（由 数字、字母、_下划线(英文状态下shift+“-”)、$ 组成）；
    可由这四种随意搭配（数字不可以开头写）；
    变量名称中有大小写的区分；
    不能用 关键字、保留字 来作为变量名；
    命名要有意义、有规则（首字母大写、驼峰命名法）
```
##### 拓展---let变量

```js
let a;
let 1. 在变量声明之前不能调用（一定要先声明在调用）
    {
      console.log(str);
       let str=10;           //报错
    }
    2. 在同一个作用域内不能重复声明同一个变量
    var num=10;
    let num=5;
    console.log(num); //报错
    
```
##### let与var的区别：

1.let 不存在变量的提升

​       var为什么能用？（var变量的提升---将作用域扩大）

2.let 暂时性的死区（let声明之前的区域叫做 暂时性的死区----只能先声明在调用）

```JS
  console.log(str);  //报错  暂时性的死区
  let str=10;           
```

3.let 识别块级作用域

##### 块级作用域

​        任何一对花括号中的语句集都属于一个块，在这之中定义的所有变量在代码块外都是不可见的，我们称之为块级作用域

```JS
{
  let num=10;

  var str='abcd'

  console.log(str);

  console.log(num); //  10
}
  console.log(str);
  console.log(num);//   undefined
```

##### 块级作用域的嵌套

    {
      let num=10;
      {
         let num=20;
         console.log(num);//20
      }
    
      console.log(num);//10
    
    } 
##### var 缺点

 1.内存的泄露（for循环不会释放一个全局变量）

    var num ='a';
    function fn(){
      alert(num);
      if(true){
         var num=10;
         alert(num);
      } 
    }
2.局部变量会变成全局变量

##### const 变量

变量的值不允许变动时，成为常量；const定义的就是常量（定值）。

1.声明完成后不允许修改..

2.声明的同时进行赋值，不允许先声明后赋值

3.识别块级作用域

4.常量一般定义在代码前面，变量大写（大众习惯）

### 3.赋值

```JS
1.方法一：先声明后赋值

               var a; a=1;

  方法二：声明的同时进行赋值

              var a=1;

2.一次性声明多个变量，然后赋值
             var x,y,z;
             x=10;
             y=20;
             z=30;

  一次性声明多个变量，同时赋值
             var x=10,y=20,z=30；
```

### 注意事项：

```JS
1.变量值可以修改；
 	var a;
	a=10;
	alert(a);
	
    a=20;
	alert(a);

2.变量允许进行重复声明同一个变量

           如果不给新变量赋值，则还为原来的值；
               	var a;
	            a=10;
	            alert(a);
	            var a;
	            alert(a);

            如果给新变量赋值，则新值会覆盖原来的值
            	var a;
	            a=10;
	            alert(a);
	            var a;
	            a=20;
	            alert(a);

3.声明变量需要var 去修饰

      当没用var修饰且没有进行赋值时，浏览器会提示  报错；
          	alert(a);

      当没用var修饰但是进行了赋值时，则会变成全局变量（不推荐）
 	        a=10;
	        alert(a);

4.当变量声明但没有进行赋值，浏览器会默认为 undefined；
	var a;
	alert(a);

5.赋值之前调用变量（赋值在最后时），浏览器会默认为 undefined；
	var a;
	alert(a);
	a=10;
```

## 二.数据类型（变量可以存储哪些数据）

根据它在内存中存储的位置可分为2种（初始数据类型、复合数据类型）

### 1.初始数据类型

存储在栈区-数据简单，读取块，信息量小

​      （1）undefined

```js
undefined，表示“未定义”。
```

​      （2）number

```js
JavaScript不区分整数和浮点数，统一用Number表示，以下都是合法的Number类型：

123; // 整数123
0.456; // 浮点数0.456
1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为               Infinity
计算机由于使用二进制，所以，有时候用十六进制表示整数比较方便，十六进制用0x前缀和0-9，a-f表示，例如：0xff00，0xa5b4c3d2，等等，它们和十进制表示的数值完全一样。
```

​      （3）string

```js
字符串

1.字符串是以单引号'或双引号"括起来的任意文本，比如'abc'，"xyz"等等。请注意，''或""本身只是一种表示方式，不是字符串的一部分，因此，字符串'abc'只有a，b，c这3个字符。

2.\n  表示字符串换行（\起到转义的作用）
3.``（英文状态下esc下方的键）---模板字符串（在其内的内容可以保留编辑时的格式）
    var num1=43;
	var num2=40;
	var info=`我们班由两个班组成，第一个班505班有${num1}人，第二个班507班有${num2}人，总共               有${num1+num2}人`;
	document.write(info)
```

​      （4）boolean

```js
布尔值和布尔代数的表示完全一致，一个布尔值只有true、false两种值，要么是true，要么是false，可以直接用true、false表示布尔值，也可以通过布尔运算计算出来：

true; // 这是一个true值
false; // 这是一个false值
2 > 1; // 这是一个true值
2 >= 3; // 这是一个false值
```

​      （5）null（代表什么都没有)

```js
null表示一个“空”的值，它和0以及空字符串''不同，0是一个数值，''表示长度为0的字符串，而null表示“空”。

在其他语言中，也有类似JavaScript的null的表示，例如Java也用null，Swift用nil，Python用None表示。但是，在JavaScript中，还有一个和null类似的undefined，它表示“未定义”。

JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用null。undefined仅仅在判断函数参数是否传递的情况下有用。
```

### 2.复合数据类型

存储在堆区-数据复杂，读取慢，信息量大

   object

### 3.检查数据方法

typeof(variab)         

|   数据类型    |             值             |  typeof   |
| :-------: | :-----------------------: | :-------: |
| undefined |         undefined         | undefined |
|  boolean  |        true、false         |  boolean  |
|   null    |      null（空、代表什么都没有）      |  object   |
|  number   |   十进制、十六进制、二进制、八进制、特殊值等   |  number   |
|  string   | 通过单引号或者双引号包裹起来的（数字、字符、汉字） |  string   |
|  object   |        属性和方法的无序结合         |  object   |

##   三.运算符（如何操作数据）

### 1.算术运算符

```JS
+ - * / %(取余)

% 可以得到某一个范围之内的数
1.+的第一个用法：四则运算的求和运算（都是数字）
  +的第二个用法：字符串的连接（有一个或两个不是数字）

  例：	
    var num1=43;
	var num2=40;
	var info="我们班由两个班组成，第一个班505班有"+num1+"人，第二个班507班有"+num2+"人，总共               有"+(num1+num2)+"人";
	document.write(info)

2.var ++ ：先参与运算，后自增;
  ++ var ：先自增，后参与运算;

  例：
	var num=20;          
	                    // 表达式结果     num值
	alert(5+num++);           25             21
	alert(--num);             20             20
	alert(num+5);             25             20
    alert(num--);             20             19
    num=num+5;                24             24
    alert(num)                24             24
```
# 2017.09.05

### 2.赋值运算符

```JS
= += -= *= /= %=

例：a=a+5      a+=5
（注： +可以表示求和，也可表示连接）
```

### 3.关系（比较）运算符

```JS
  >    <     >=      <=        ==     ===        !=       !==
大于  小于 大于等于 小于等于  是否相等 是否相等  是否不相等 是否不相等

比较规则：
1.两个数字比较： 正数>0>负数
    num1=10;
    num2=20;
    alert(num1<num2);       // true
2.两个字符串比较时,比较字符串首字符的ASCII码值，ASCII码值大的所在字符串就大；如果第一个字符相同，则依次类推比较第二个、第三个。
    num1='a';
    num2='b';
    alert(num1<num2);       // true
3.数字型的字符串比较，   同上
    num1='10';
    num2='2';
    alert(num1<num2);       // true
4.数字与字符串进行比较时，尝试着将字符串转化为数字，按照数字的规则比较，
    num1=10;
    num2='2';
    alert(num1<num2);       // true
   如果转换不成功则返回NAN，整个表达式返回false；
    num1=10;
    num2='2px';   //
    alert(num1<num2);      // false
5.数字与布尔值  true   1         
               false  0   
6.undefined==null          // true

==比较，它会自动转换数据类型再比较（只需数值大小是否相等），很多时候，会得到非常诡异的结果；
===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。(推荐使用)

注：
1.运算结果是一个布尔值
2.NaN这个特殊的Number与所有其他值都不相等，包括它自己；
  NaN === NaN; // false
```

### 4.逻辑运算符

```JS
1.&&(与、且 and)
2.||(或 or)
3.!(非 not)

false、 0、null、undefined、''（空字符串）、NaN   都表示false
```

## 四.执行流程

### 1.顺序结构

### 2.分支（选择）结构

#### 分支结构种类

```JS
a.单路分支
  if(条件){
    //条件成立时执行的代码
  }
      
   例：
	   var num=10
	   if(num>5){
         alert('wp')
       }
b.双路分支
  if(条件){
    //条件成立时执行的代码
  }else{
    //条件不成立时执行的代码
  }

    例：
	   var num=10
	   if(num%2===0){
         alert(true)
       }else{
       	alert(false)
       }

c.多路分支
  第一种情况：if else   条件是范围时
  
  if(条件1){
    //条件1成立时执行的代码
  }else if(条件2){
    //条件2成立时执行的代码
  }else if(条件3){
    //条件3成立时执行的代码
  }else if(条件4){
    //条件4成立时执行的代码
  }else if(条件5){
    //条件5成立时执行的代码
  }else if(条件6){
    //条件6成立时执行的代码
  }else{
    //上述条件都不成立时执行的代码
  }

    例：
	   var score=prompt('请输入你的成绩',60);
	   if(score>=90 && score<=100){
         alert('优秀')
       }else if(score>=80 && score<90){
       	alert('良好')
       }else if(score>=70 && score<80){
       	alert('中等')
       }else if(score>=60 && score<70){
       	alert('及格')
       }else if(score>=0 && score<60){
       	alert('不及格')
       }else{
       	alert('您的输入有误，请重新输入')
       }
  第二种情况：switch   条件是定值，情况可数时，优先考虑用switch
       switch(值){
         case 情况1 :
         代码
         break
         
         case 情况2 :
         代码
         break
         
         case 情况3 :
         代码
         break
         
         case 情况4 :
         代码
         break
         
         default:
         以上情况都不满足时的代码
     }

  例：
    var week=prompt('请输入日期',1,);
    switch(week){
         case '1' :
         alert('一组');
         break;
         
         case '2' :
         alert('二组');
         break;
         
         case '3' :
         alert('三组');
         break;
         
         case '4' :
         alert('四组');
         break;

         case '5' :
         alert('五组');
         break;
         
         case '6' :
         alert('六组');
         break;

         case '7' :
         alert('七组');
         break;
         
         default:
         alert('您的输入有误，请重新输入');
     }

注：prompt('请输入日期',1,);中的 1 是字符串
     代码中的case 和prompt后跟的数据类型应相同
```

#### 分支结构条件

条件不要有重复，逻辑清晰

### 3.循环

#### 1.循环种类

```JS
1.在满足条件的情况下，不停的执行某一段代码。
for(条件初始话；终止条件；变化量){
  循环代码（循环体）
}
    
     例1：   列出1~10以内的自然数
     for(var i=1;i<11;i++){
     	alert(i);
     }
     例2：   10以内的自然数和
     var sum=0;
     for(var i=1;i<11;i++){
     	sum+=i;
     }
     alert(sum);
     例3：   10以内的偶数和
     var sum=0;
     for(var i=0;i<11 && i%2===0;i+=2){
     	sum=sum+i;
     }
     alert(sum);
     例4：   10以内的奇数和
     var sum=0;
     for(var i=1;i<11 && i%2===1;i+=2){
     	sum=sum+i;
     }
     alert(sum);

2.while  先判断条件，然后执行循环体，如果条件成立继续执行循环体，直到条件不成立将退出循环；
变量声明
while(循环条件){
    循环代码；
    变化量；
}
        例1:
         var x=1;
         while(x<=10){
         	document.write(x);
         	x++;
         }

3.do while   先执行循环体，然后判断条件，如果条件成立继续执行循环体，直到条件不成立将退出循环；
  do{
    循环体
  }while（条件）
         
        例2：
         do{
           sum+=i；
           i++；
         }while(i<=10)
           
```

注：循环次数由   初始值、最终值、变化量    决定

#### 2.循环对比

1.知道循环“次数”，优先考虑for；

   知道循环“条件”，考虑while、do while；

2.do while、 while 当初始值不满足循环条件时，

​                   while 一次循环都不做；

​                   .do while 只做一次循环；

#### 3.循环跳转

continue   跳过当前（本次）循环

​                    如果条件成立，他将继续执行循环体；

break：终止整个循环

#### 4.循环应用

##### 4.1表格

```js
		document.write('<table border="1px" cellspacing="0" cellpadding="15px"                                  width="80%" align="center">');
		   for(var i=1;i<=9;i++){
		   document.write('<tr>');
		     for(var j=1;j<=9;j++){
		      document.write('<td align="center">'+i+'-'+j+'</td>');
		     }
		   document.write('</tr>');
		   document.write('<br />');
		   }
		document.write('</table>');
```

##### 4.2九九乘法表

```js
		document.write('<table border="1px" cellspacing="0" cellpadding="15px"                                  width="80%" align="center">')
		   for(var A=1;A<=9;A++){
		   document.write('<tr>')
		     for(var B=1;B<=A;B++){            //变化处
		      document.write('<td align="center">'+B+'*'+A+'='+A*B
		      	+'</td>')
		     }
		   document.write('</tr>')
		   document.write('<br />')
		   }
		document.write('</table>')
```

##### 4.3九九乘法表+换色

```js
// 九九乘法表+隔行换色
		document.write('<table border="1px" cellspacing="0" cellpadding="15px"                                    width="80%" align="center">')
		for(var C=1;C<=9;C++){
		   if(C%2===1){
		   document.write('<tr bgcolor="red">')
		     for(var D=1;D<=C;D++){
		      document.write('<td align="center">'+D+'*'+C+'='+C*D
		      	+'</td>')
		     }
		   document.write('</tr>')
		   document.write('<br />')	
		   }

		   if(C%2===0){
		   document.write('<tr bgcolor="yellow">')
		     for(var D=1;D<=C;D++){
		      document.write('<td align="center">'+D+'*'+C+'='+C*D
		      	+'</td>')
		     }
		   document.write('</tr>')
		   document.write('<br />')	
		   }

		}
		document.write('</table>')
// 九九乘法表+隔列换色
		document.write('<table border="1px" cellspacing="0" cellpadding="15px"                                 width="80%" align="center">')
		   for(var E=1;E<=9;E++){
		   document.write('<tr>')
		     for(var F=1;F<=E;F++){
		     	if(F%2===1){
		           document.write('<td align="center"                                                      bgcolor="blue">'+F+'*'+E+'='+E*F+'</td>')
		     	}
		     	if(F%2===0){
		           document.write('<td align="center"                                                                     bgcolor="green">'+F+'*'+E+'='+E*F+'</td>')
		     	}
		     }
		   document.write('</tr>')
		   document.write('<br />')
		   }
		document.write('</table>')

// 九九乘法表+综合换色
		document.write('<table border="1px" cellspacing="0" cellpadding="15px"                                    width="80%" align="center">')
		for(var G=1;G<=9;G++){
		   if(G%2===1){
		   document.write('<tr bgcolor="red">')
		     for(var H=1;H<=G;H++){
		     	if(H%2===1){
		           document.write('<td align="center"                                                                       bgcolor="blue">'+H+'*'+G+'='+G*H+'</td>')
		     	}
		     	if(H%2===0){
		           document.write('<td align="center">'+H+'*'+G+'='+G*H+'</td>')
		     	}
		     }
		   document.write('</tr>')
		   document.write('<br />')	
		   }

		   if(G%2===0){
		   document.write('<tr bgcolor="yellow">')
		     for(var H=1;H<=G;H++){
		     	if(H%2===1){
		           document.write('<td align="center">'+H+'*'+G+'='+G*H+'</td>')
		     	}
		     	if(H%2===0){
		           document.write('<td align="center"                                                                      bgcolor="green">'+H+'*'+G+'='+G*H+'</td>')
		     	}
		     }
		   document.write('</tr>')
		   document.write('<br />')	
		   }

		}
		document.write('</table>')
//九九乘法表换色 方法二：
		var table="<table>";
		for(var K=1;K<=9;K++){
			var color;
			if(K%2===0){
               color= 'red';
			}
			else{
               color= 'blue';
			}
			table+= '<table border="1px" cellspacing="0" cellpadding="15px" ><tr                                bgcolor='+color+'>';
			  for(var L=1;L<=K;L++){
			  	table+='<td>'+K+'-'+L+'</td>';
              }
            table+= "</tr></table>";	  
		}
        document.write(table);
```

##### 4.4金字塔

```js
		var row=5;
		for(var i=1;i<=row;i++){
			for(var j=1;j<=row-i;j++){
				document.write('&nbsp');
			}
			for(var j=1;j<=2*i-1;j++){
				document.write('*');
			}
        document.write('<br />');
		}
```

##### 4.5找规律

```js
	// 1 1 2 3 5 8 13 21......根据前面数字的规律来写出100以内的数字
	   var c=0,d=1,e=1;
	   for(;e<=100;){
	   	 document.write(e+'&nbsp');
	   	 e=c+d;
	   	 c=d;
	   	 d=e;
	   }
```

# 2017.09.06

## 六.数组

存储一系列相关数据的容器；

#### 1.优点

1.方便管理数据；

2.看着逻辑清晰

3.代码方便管理维护

#### 2.如何创建数组？

```JS
1.var arr=[];
2.var arr1=new Array();
```

#### 3.赋值

##### 3.1声明同时赋值

```JS
var arr=[1,2,3,4,5,6,7,8,9];
```



##### 3.2声明之后赋值

```JS
var arr=[];
arr[0]=1;
arr[1]=2;
arr[2]=3;
.
.
.
arr[8]=9;
```

#### 4.通过下标访问

```JS
var arr=[1,2,3,4,5,6,7,8,9];
arr[0]=1;
arr[1]=2;
arr[2]=3;
```

下标从  0   开始， 最大是    arr.length-1

#### 5.遍历

所谓遍历(Traversal)，是指沿着某条搜索路线，依次对树中每个结点均做一次且仅做一次访问。访问结点所做的操作依赖于具体的应用问题。 遍历是[二叉树](https://baike.baidu.com/item/%E4%BA%8C%E5%8F%89%E6%A0%91)上最重要的运算之一，是二叉树上进行其它运算之基础。当然遍历的概念也适合于多元素集合的情况，如[数组](https://baike.baidu.com/item/%E6%95%B0%E7%BB%84)。

for

```JS
for(var i=0;i<arr.length;i++){
  arr(i)
}
```



#### 6.注意

6.1 数组元素默认 undefined；

6.2 数组长度可变；

6.3 数组元素可以是任意数据类型；



#### 7.应用

##### 7.1数组

```js
  数组
        var arr=[10,9,7,6,16,21,93];
        console.log(arr);
  选出数组中第五位数
        var arr=[10,9,7,6,16,21,93];
        console.log(arr[4]);
  选出数组中最大的数
        var arr=[10,9,7,6,16,21,93];
        var max=arr[0];
        for(var n=1;n<arr.length;n++){
        	if(max<arr[n]){
        		max=arr[n];
        	}
        }
        console.log(max);
  将数组中的数据进行降序排列 
        var arr=[10,9,7,6,16,21,93]; 
        for(var m=0;m<arr.length;m++){
        	for(var v=m+1;v<arr.length;v++){
        	     if(arr[m]<arr[v]){
        	     	 var temp=arr[m];             
        		     arr[m]=arr[v];
        		     arr[v]=temp;
        		 }
            }
        }
        console.log(arr);
```

##### 7.2二维数组求最大值

```js
  // var zhangsan=[70,80,90];
  // var lisi=[75,85,95];
  // var wangwu=[60,65,70];
  // var classes=[zhangsan,lisi,wangwu];
  var classes1=[[70,80,90],[75,85,95],[60,65,70]]
  //classes1[0][0]表示zhangsan的70（二维数组中的数据的表示方法）
  var max=classes1[0][0];    
  for(var i=0;i<classes1.length;i++){
  	for(var j=0;j<classes1[i].length;j++){
  		if(max<classes1[i][j]){
  			max=classes1[i][j]
  		}
  	}
  }
  console.log(max);
```

##### 7.3数组去空（undefined）

```js
去空：将原数组的未定义空格取消掉
  （方法一：创建新数组，把原数组中定义过的数据重新放入新数组中）
        var arr=[1,2,3,,4,5,6,7,8];
        var arr1=[];
        var j=0;
        for(var i=0;i<arr.length;i++){
        	if(arr[i]!==undefined){
        		arr1[j]=arr[i];
        		j++;
        	}
        }
        console.log(arr1);

  （方法二：创建新数组，把原数组中定义过的数据重新放入新数组中）
        var arr=[1,2,3,,4,5,6,7,8];
        var arr1=[];
        for(var i=0;i<arr.length;i++){
        	if(arr[i]!==undefined){
    //注意这里的arr1[arr1.length]是指新数组中的最后一位
        		arr1[arr1.length]=arr[i];   
        	}
        }
        console.log(arr1);

  （方法三：创建新数组，把原数组中定义过的数据重新放入新数组中）
        var arr=[1,2,3,,4,5,6,7,8];
        var arr1=[];
        for(var i=0;i<arr.length;i++){
        	if((typeof arr[i]) !=='undefined'){    
    //注意这里的undefined是字符串
        		arr1[arr1.length]=arr[i];
        	}
        }
        console.log(arr1);     
```

##### 7.4数组去重(delRepeat)

```JS
//数组去重  方法一：
//    比较newarr中的当前元素是否有重复的元素
        let arr6=[1,2,3,4,5,1,2,3];
        function delRepeat(arr6){
          let newarr=[];
          for(let i=0;i<arr6.length;i++){
          	if(newarr.includes(arr6[i])){
          		continue;
          	}
          	newarr.push(arr6[i]);
          }
          return newarr
        }
        let res=delRepeat(arr6);
        console.log(res);//[1, 2, 3, 4, 5]
//数组去重  方法二：
//    比较arr6中的当前元素是否有重复的元素
        function delRepeat1(arr6){
          let newarr=[];
          for(let i=0;i<arr6.length;i++){
          	let flag = true;           //目的：让每个人i有一个判断依据
          	for(let j=i+1;j<arr6.length;j++){
          	   if(arr6[i]==arr6[j]){
          	   	   flag = false;
          	   	   break;
          	   }
          	}
          	if(flag==true){
          		newarr.push(arr6[i]);
          	}
          } 
            return newarr;
        }
        let res1=delRepeat1(arr6);
        console.log(res1);// [4, 5, 1, 2, 3]
```

##### 7.5 从数组中取任意个元素

```JS
任意：用到了Math.random()  求随机数
//方法一：
        var arr=[1,2,3,4,5,6,7,8];
        function ry(arr,n){
        	var newarr=[];
        	for(let i=0;i<n;i++){
        		let x=Math.floor(Math.random()*arr.length);
        		if(newarr.includes(arr[x])){
        			i--;
        		}else{
        		   newarr.push(arr[x])	
        		}  
            }
        	return newarr;
        }	

        console.log(ry(arr,5));
// 方法二：
        function ry1(arr,n){
        	var newarr=[];
        	while(newarr.length<n){
        		let x=Math.floor(Math.random()*arr.length);
        		while(newarr.includes(arr[x])){
                    x=Math.floor(Math.random()*arr.length);
        		}
        		newarr.push(arr[x])	
        		 
        	}
        	return newarr;
        }	

        console.log(ry1(arr,5));
```



# 2017.09.07

## 七.函数

#### 1.概念

将实现某一个特定功能的代码段进行封装，能够实现重复调用。

#### 2.优点

2.1可以重复调用

2.2逻辑结构清晰

2.3维护、开发

#### 3.声明函数

方法一：基本语法

```JS
function fnname(形参1,形参2,形参3,....){
  //函数体
  [return]
}
```



方法二：字面量

```JS
var fn=function(){}
```

方法三：面向对象

```JS
new function (形参1,形参2,形参3,....){}
```

#### 4.调用函数

4.1.1 函数名()             函数前后都可调用

4.1.2 自变量()             只能在函数后调用

4.1.3自调用函数

```JS
(function (){
  alert('1234')
})()
```

#### 5.注意

5.1 函数名相同，后面的函数会覆盖前面的函数；

5.2 基本语法声明的函数在声明前后都可以调用；

​      以字面量声明的函数只能在赋值之后调用；

#### 6.参数

通过动态的去改变函数体内部的变量，从而使函数灵活强大。

##### 6.1 参数类型

6.1.1 形参

​    函数定义时，小括号内的内容，形参没有实际的值，接受实参的值

6.1.2 实参

​     函数调用时，小括号内的内容，实参给形参传递值；

##### 6.2 arguments

函数内部自动生成对象，只能通过函数内部调用，保存了函数调用时实参的信息。-----函数内部的对象

```js
// 在数组元素后面添加任意个数组、元素
      var arr=[1,2,3,4,5,6];
      push(arr,'a','b');
      function push(arr){
        for(var i=1;i<arguments.length;i++){
           arr[arr.length]=arguments[i];
          }
        console.log(arr);
      } 
```

函数内部自动生成对象，只能通过函数内部调用，保存了函数调用时实参的信息。

##### 6.3 默认参数

参数：传值，传进来的值，不给默认值；

方法一：分支

```js
        if(type===undefined){
          type=默认值;
        }
```

方法二：三元表达式

```JS
type=type===undefined ? 默认值:type;
```

方法三：逻辑||

```JS
type=type||默认值;
```

方法四：ES6

```JS
function fn(type=默认值){}
```

 注：带有默认值的参数，放置到最后，undefined触发默认值

```
例：
 //函数---将数组中的数据进行有规则的排列 
var arr=[51,21,31,45,42,43,2,5,6,7,8];
   // sort(arr,'<')
   // sort(arr,'>')
   sort(arr)
function sort(arr2,type){
  //分支
        if(type===undefined){
          type='<';
        }
  // 三元表达式
        // type=type===undefined ? '<':type;
  //逻辑运算符||
        // type=type||'<'; 
  // ES6
        //把sort(arr2,type)改成sort(arr2,type='<') 

  if(type==='<'){
    sortdown(arr2);
  }else if(type==='>'){
    sortup(arr2);
  }
    // var arr=[51,21,31,45,42,43,2,5,6,7,8];
    // Arr(arr);
 //函数---将数组中的数据进行升序排列 
    function sortup(arr2){
        var arr2; 
        for(var m=0;m<arr2.length;m++){
          for(var v=m+1;v<arr2.length;v++){
               if(arr2[m]>arr2[v]){
                 var temp=arr2[m];             
                 arr2[m]=arr2[v];
                 arr2[v]=temp;
             }
            }
        }
        console.log(arr2);
    }
    // var arr3=[51,21,31,45,42,43,2,5,6,7,8];
    // sortup(arr3);
 //函数---将数组中的数据进行降序排列 
    function sortdown(arr2){
        var arr2; 
        for(var m=0;m<arr2.length;m++){
        	for(var v=m+1;v<arr2.length;v++){
        	     if(arr2[m]<arr2[v]){
        	     	 var temp=arr2[m];             
        		     arr2[m]=arr2[v];
        		     arr2[v]=temp;
        		 }
            }
        }
        console.log(arr2);
    }
    // var arr3=[51,21,31,45,42,43,2,5,6,7,8];
    // sortdown(arr3);
} 
```

##### 6.4 剩余参数（rest参数）

用来接收剩余（没有形参对应的实参）参数，是一个数组;

没有剩余参数是空数组；

rest参数必须在最后；

```JS
function fn(arr,...rest){
  //函数体
}

例：
// 在数组元素后面添加任意个数组、元素
      var arr=[1,2,3,4,5,6];
      push(arr,'a','b');
      function push(arr,...value){
        for(var i=0;i<value.length;i++){
           arr[arr.length]=value[i];
          }
        console.log(arr);
      } 
```

# 2017.09.08

#### 7.返回值---return

用途

1.在函数调用地方返回一个值，默认undefined；

2.函数的返回值可以是任意的数据类型；

3.函数中允许写多个return（分支中常出现），但是只会执行一个return；

4.终止函数执行（return后面的代码不会执行）；

```JS
	//indexof 将数组中某一特定值第一次出现的位置弹出;
		var arr=[1,2,3,4,5,6,7,5,4,2,5,3,1];
		var result=indexof(arr,8);
		alert(result);
	
	function indexof(arr,one){
		for (var i=0;i<arr.length;i++){
			if(arr[i]==one){
				return i;
			}
		}
		return -1;
	} 
	
	//lastindexof 将数组中某一特定值最后一次出现的位置弹出;
		var arr=[1,2,3,4,5,6,7,5];
		var result=lastindexof(arr,5);
		alert(result);
	
	function lastindexof(arr,one){
		for (var i=arr.length-1;i>=0;i--){
			if(arr[i]==one){
				return i;
			}
		}
		return -1;
	} 
    //reverse 将数组水平翻转180度成为一个新数组
    var arr1=[1,2,3,4,5,6];
    var res=reverse(arr1);
    console.log(res);
    
    function reverse(arr1){
    var newarr=[];
    for(var a=arr1.length-1;a>=0;a--){
          push(newarr,arr1[a])
    }
    return newarr;
    }
    
    //push 将某一元素移到一个数组上；
    var arr2=[1,2,3,4];
    var res1=push(arr2,'a','b')
    console.log(res1);
    
    function push(arr2,...rest){
    	for(var b=0;b<rest.length;b++){
    		arr2[arr2.length]=rest[b];
    	}
    return arr2;
    }
   
    //万能的删除与添加
         //万能的删除   splice
         //pos 要删除的元素下标  num 要删除的元素数量
         var arr3=[1,2,3,4,5,6,7,8];
         var res2=splicecancel(arr3,1,2);
         console.log(res2);
         
         function splicecancel(arr3,pos,num){
         	var newarr1=[];
         	for(var c=0;c<arr3.length;c++){
         	    if(c>=pos && c<pos+num){
         		continue;
         	    }
         	    newarr1[newarr1.length]=arr3[c];
         	}
         	return newarr1;
         }
         
         //万能的添加   spliceadd
         //pos 某个特定元素（在这元素前添加新的元素）的下标  
         var arr4=[1,2,3,4,5,6,7,8];
         var res3=spliceadd(arr4,2,'a','b','c');
         console.log(res3);
         
         function spliceadd(arr4,pos,...rest){
         	var newarr2=[];
         	//将原数组中pos前的元素放入新数组
            for(var d=0;d<pos;d++){          
                newarr2[newarr2.length]=arr4[d];	
            }
            //将需要添加元素放入新数组
            for(var e=0;e<rest.length;e++){
            	newarr2[newarr2.length]=rest[e];
            }
            //将原数组中pos后（连同pos）的元素放入新数组
            for(var d=pos;d<arr4.length;d++){
            	newarr2[newarr2.length]=arr4[d];
            }
         	return newarr2;
         }
         
         // 万能的删除与添加
        function splice(arr5,pos,num,...rest){
        	var newarr2=splicecancel(arr5,pos,num);
        	if(rest.length>num){
        	    newarr2=spliceadd(newarr2,pos,...rest)
        	}
            return newarr2;
        }
       
        arr5=[1,2,3,4,5,6,7,8,9]
        var res4=splice(arr5,2,2,'a','b','c');
        console.log(res4);
```



#### 8.作用域

##### 8.1 分类

​     8.1.1全局作用域（任意）

```js
1.函数最外层
2.变量不用var去声明
```

​      8.1.2 局部作用域（某一个函数）

```js
定义在函数的内部
```

##### 8.2 环境

​        宿主(浏览器)

​        执行

##### 8.3 预编译

​        按照从上到下，script；

​         var function 变量名和函数名预先放置内存，并能记录声明的环境；

#### 9.应用

##### 9.1 回调函数---（映射）

```JS
  // 映射  将数组内的每个元素翻倍
  arr=[1,2,3,4,5,6,7,8]
   function map(arr,fn){
    var newarr=[];
    for (var i=0;i<arr.length;i++){
      newarr[newarr.length]=fn(arr[i]);
    }
    return newarr;
   }
  
 var res=map(arr,function(value){
    return value*2
  })
  console.log(res);

  // 将数组内大于3元素找出来----回调函数
   arr=[1,2,3,4,5,6,7,8]
   function filter(arr,fn){
    var newarr=[];
    for (var i=0;i<arr.length;i++){
      if(fn(arr[i])){
        newarr[newarr.length]=arr[i];
      }
    }
    return newarr;
   }
  
 var rese=filter(arr,function(value){
    return value>3;
  })
  console.log(rese);
// some every-----映射
      // some  满足某一条件弹true
      function some(arr,fn){
        for(var f=0;f<arr.length;f++){
            if(fn(arr[f])){
                return true;
            }
        }
        return false;
      }
     
      var arr6=[1,2,3,4,5,6,7,8,9]
      var res5=some(arr6,function(value){
           return value<5;
      })
      console.log(res5)
      //every 满足所有一条件弹true
      function every(arr,fn){
        for(var g=0;g<arr.length;g++){
            if(!fn(arr[g])){
                return false;
            }
        }
        return true;
      }

      var arr7=[1,2,3,4,5,6,7,8,9];
      var res6=every(arr7,function(value){
              return value<10;
      })
      console.log(res6);

```

##### 9.2递归函数

（不是循环）  在函数内部，函数自己间接或直接调用自己

```JS
 // 例1 fn(1);
          function fn(num){
            // alert(num);
            if(num<5){
                fn(++num)
            }
            alert(num);
          }
      // 完全拷贝数组的两种方法的区别：  
          var arr=[1,2,3,4];
          arr1=arr;     //赋值的是地址（浅拷贝）
          arr[1]='a';
          arr1[2]='b';
          console.log(arr);
          console.log(arr1);
          
          var arr=[1,2,3,4];
          newarr3=[];    //赋值的是传值（深拷贝）
          for(var h=0;h<arr.length;h++){
              newarr3[newarr3.length]=arr[h]
          }
         
          arr[1]='a';
          newarr3[2]='b';
          console.log(arr);
          console.log(newarr3);

          // 例：---递归函数
          var arr=[1,2,3,4,['a','b','c']];
          var arr1=copy(arr);
           // arr[4][1]='e';    //检测‘赋值---传值’方法的不同处
          console.log(arr);
          console.log(arr1);

          function copy(arr){
            var newarr4=[];
            for(var j=0;j<arr.length;j++){
                if(typeof arr[j]=='object'){
                    newarr4[j]=copy(arr[j]);      //函数自己调用自己---递归函数
                }else{
                    newarr4[j]=arr[j];
                }
            }
            return newarr4;
          }
```

# 2017.09.11

##### 9.3 闭包函数

​      在一个函数内部嵌套一个函数。而且，这些内部函数可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。当把内部函数作为返回值返回时，就会形成闭包。

​       也就是说，内部函数会在外部函数返回后被执行。而当这个内部函数执行时，它仍然必需访问其外部函数的局部变量、参数以及其他内部函数。这些局部变量、参数和函数声明（最初时）的值是外部函数返回时的值，但也会受到内部函数的影响。

```JS
	    function fn(){
            var num=10;
            return fn1;
            function fn1(){
              num++; 
              return num;
            }
          }
        alert(fn());  //弹出fn1函数
        result=fn();
        alert(result()); //弹出  11
```

##### 9.4 箭头函数

```js
箭头函数：es6新加的函数;  一般用于回调函数
用法：        当没有形参a时，需添加小括号();
             当形参数量多(例：a、b)时，需添加小括号(a,b);
             当函数体内容多时，需添加大括号{};
注意事项：    在箭头函数中没有 arguments
```
```JS
    var fn = a=>a; //箭头函数
    alert(fn(10));
等价于
   	var fn = function(a){
		return a
	}
    alert(fn(2));
```

## 八.内置顶层函数

　　内置: 

​       ECMAscript (ECMA前身为[欧洲计算机制造商协会](https://baike.baidu.com/item/%E6%AC%A7%E6%B4%B2%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%88%B6%E9%80%A0%E5%95%86%E5%8D%8F%E4%BC%9A),英文名称是European Computer Manufacturers          Association)自带的函数，ECMAscript将我们常用的一些功能封装起来，我们不需要知道他是怎么实                                                                 现的，只需要知道怎么调用即可。

　   顶层:

在页面当中的任何地方都可以调用函数。

### 1.强制类型转换

#### 1.1 escape unescape

```JS
	//汉字编码escape();   对非字母数字的字符进行编码
		console.log(escape('张三'));
	//汉字解码unescape();    对编码后的字符进行解码
	    console.log(unescape("%u5F20%u4E09"));
```

#### 1.2 Number

```JS
	//把其他类型转化为数字类型（严谨型转换，只识别数字型的数字串）Number();
		console.log(Number(123));         //123
      进制转化为十进制 
		console.log(Number(0b1111));      //15  二进制
       布尔值：
		console.log(Number(false));          //0
		console.log(Number(true));          //1
      null会转换为0
		console.log(Number(null));           //0
      undefined会转换为NaN 
		console.log(Number(undefined));     //NaN 
      数字型的字符串 会忽略无意义的0
		console.log(Number(01239));         //1239
		console.log(Number('0123'));        //123
		console.log(Number(12300));        //12300
		console.log(Number('123.00'));    //123
		console.log(Number('123.01'));    //123.01
		console.log(Number('123.01.2')); //NaN
       空字符串会转换为0
        console.log(Number('')); //0 

		console.log(Number('123px'));    //NaN   只识别数字型的数字串   
		console.log(Number('abcd')); //NaN       只识别数字型的数字串
		console.log(Number('true')); //NaN       只识别数字型的数字串
```

#### 1.3 Boolean

```JS
	//把其他类型转化为布尔类型 Boolean();
        //false null 0 '' NaN undefined   这六大类为false，其余都为true
		console.log(Boolean([])); //ture
		console.log(Boolean(function(){})); //ture
```

#### 1.4 String

```JS
    //把其他类型转化为字符串类型 String();
		console.log(String(123));   //123
```

#### 1.5 parseInt

```JS
    //把字符串类型转化为整数 parseInt();
    //以数字、空格、‘+’、‘-’开头，从第一个数字字符到第一个非数字字符结束的整数
		console.log(parseInt('1234'));          //1234
		console.log(parseInt('0b1234'));        //0
		console.log(parseInt('100px'));         //100
		console.log(parseInt('100px200'));      //100
		console.log(parseInt('-100px200'));     //-100
		console.log(parseInt('  -100px200'));   //-100
		console.log(parseInt('-1.00px200'));    //-1
		console.log(parseInt('abc100px200'));   //NaN
```

#### 1.6 parseFloat

```JS

	//把字符串类型转化为浮点数 parseFloat(); 
	//规则与parseInt()相同；当字符串中的数字无浮点时，转换过来的数字也无浮点（不会专门添小数       点）
		console.log(parseFloat('100.5px'));      //100.5
		console.log(parseFloat('100px'));       //100
```

#### 1.7 isNaN

```JS
    //isNaN---is not a number 
	//这里的number不是很严谨，只要能转换成数字的都是number
	    console.log(isNaN(123));    //false
		console.log(isNaN(false));  //false
		console.log(isNaN('abcd'));  //true
```

### 2.隐式类型转换

#### 2.1算术运算符

```JS
算术运算符（- * / %） 把数字型字符串转化为number
     var num1='11';
     var num2=4;
     console.log(num1-num2);  //7 
```

#### 2.2关系运算符

```JS
     var num1='11';
     var num2=4;
     console.log(num1>num2);  // true
```

#### 2.3逻辑运算符

```js
    var num1='11';
    var num2=4;
    if(typeof num1=='string' && typeof num2=='number'){
    	console.log(true);
    }else{
    	console.log(false);
    }
```

#### 2.4 if

```JS
		var num=12;
		if(num==undefined){
           num='x';
		}else{
			num=num;
		}
		alert(num);
   等价于
		var num=12;
		if(num){
           num=num;
		}else{
			num='x';
		}
		alert(num);
```

#### 2.5 while

```js
		var num3;
		while(num3==undefined){
           num3='x';
		}
		alert(num3);
    // 等价于
		var num4;
		while(!num4){
           num4='m';
		}
		alert(num4);
```

#### 2.6 三元表达式

```JS
//函数---将数组中的数据进行有规则的排列 
var arr=[51,21,31,45,42,43,2,5,6,7,8];
   sort(arr)
function sort(arr2,type){
  // type=type===undefined ? '<':type;
  type=type ? type:'<';
  if(type==='<'){
    sortdown(arr2);
  }else if(type==='>'){
    sortup(arr2);
  }
 //函数---将数组中的数据进行升序排列 
    function sortup(arr2){
        var arr2; 
        for(var m=0;m<arr2.length;m++){
          for(var v=m+1;v<arr2.length;v++){
               if(arr2[m]>arr2[v]){
                 var temp=arr2[m];             
                 arr2[m]=arr2[v];
                 arr2[v]=temp;
             }
            }
        }
        console.log(arr2);
    }
 //函数---将数组中的数据进行降序排列 
    function sortdown(arr2){
        var arr2; 
        for(var m=0;m<arr2.length;m++){
        	for(var v=m+1;v<arr2.length;v++){
        	     if(arr2[m]<arr2[v]){
        	     	 var temp=arr2[m];             
        		     arr2[m]=arr2[v];
        		     arr2[v]=temp;
        		 }
            }
        }
        console.log(arr2);
    }
} 
```



# 九.对象

### 1.如何创建对象

#### 1.1方法一---josn

```JS
	//json    json的默认函数是object()   ,js系统默认
		let wp={}  ------let wp= new object()
		console.log(typeof wp)
```

#### 1.2方法二---构造函数

```JS
//构造函数
	function person(){}          //类
	let wp1= new person()        //对象1
	let wp2= new person()        //对象2
	console.log(typeof wp1)
	console.log(typeof wp2)
```

#### 1.3方法三---类

```JS
class Student2{
	constructor(){
		this.name='zhangsan';
		this.age=18;
		this.say=function(){
			alert('abcd')
		}
	}
	study(){
		alert('学习')
	}
	play(){
		alert('play')
	}
}	

var zhangsan2= new Student2();
zhangsan2.say();
zhangsan2.study();
zhangsan2.play();
```

### 2.属性、方法

constructor 是每个对象都有的属性-----返回构造函数

#### 2.1 如何添加属性、方法

```JS
方法一：
    wp1.age=18;
	wp1.name='王朋';
	wp2.age=22;
	wp2.name='王鹏';
    wp1.say=function(){
		alert(wp1.name)
	}
    
方法二：
    let zhangsan = {
      "age":18,
      "sex":'nan',
      name:'zhangsan',        //属性的引号 可加可不加
      say:function(){
        alert(1)
}
    };

console.log(zhangsan);
zhangsan.say();
```

#### 2.2如何访问属性、方法

```JS
方法一：对象名.方法名/属性名	
    alert(wp1.age);
	alert(wp1.name);
	alert(wp2.age);
	alert(wp2.name);
    wp1.say();
```

```JS
方法二：对象名['方法名/属性名']
```

```js
     iphone.sss   //访问没有的属性  不会报错，默认undefined；
     iphone.sss()   //访问没有的属性  报错
```

#### 2.3 遍历

```js
for(let.方法名和属性名的概括..in.对象名..){
  console.log(`${方法名和属性名的概括}=${对象名[方法名和属性名的概括]}`)
}
例： for(let i in iphone8){                      //i 是字符串
     	console.log(`${i}=${iphone8[i]}`)       //``  反引号  （英文状态下esc下方的键）
     }
```
#### 2.4 如何创建自己的数组对象

```JS
     //MY Array   我的数组
     // var arr= new Array('a','b','c');      //一个数组（js自带）
     // console.log(arr);
      var arr= new myArray('a','b','c','d',4,5,6,7,8,9,1,2,3);
      console.log(arr);
      function myArray(){
        for(var i=0;i<arguments.length;i++){
            this[i] = arguments[i];
        }
        this.length = arguments.length
      }
```

# 2017.09.13

#### 2.5 prototype---原型对象

所有new 出来的对象都有此构造函数

 作用：节省内存（代码段）；结构看起来清晰

```JS
1.每个构造函数都有一个属性prototype，也叫原型对象（原型）

  构造函数名.prototype={
      方法名:function(){        //构造函数原型对象中放方法
        //方法
      },
      属性名:属性值    //也可以在构造函数原型对象中放属性
}

2.添加方法，可以在prototype外面写方法，（把构造函数名.prototype当做对象名）
     构造函数名.prototype.方法 = function(){
       //方法
     }
     
 例1：
		function sss(){
			this.name='wp';
			this.age=20;
			this.study=function(){
				alert('学习')
			}
		}

		//每个构造函数都有一个属性prototype，也叫原型对象（原型）
        sss.prototype={
           eat:function(){        
             alert('吃')
           },
           //也可以在构造函数原型对象中放属性
           classes:'wuif1707-1 '   
        }
		
        var wp=new sss();
		console.log(wp);
		wp.study();
		wp.eat();
		
        //添加方法，可以在prototype外面写方法，（把构造函数名.prototype当做对象名）
		sss.prototype.play = function(){
          alert('玩')
        }
        wp.play();
例2：
//把"数组去重"变成"数组的方法"
Array.prototype.delRepeat= function(){
          let newarr= new Array();
          for(let i=0;i<this.length;i++){
            if(newarr.includes(this[i])){
              continue;
            }
            newarr.push(this[i]);
          }
          return newarr
     }   
      let arr8= new Array(1,2,3,4,5,2,3,4);
      console.log(arr8.delRepeat());// [1, 2, 3, 4, 5]
```

#### 2.6 删除方法/属性/对象 delete

```js
    1.delete 对象名.方法/属性;  //删除一个对象的方法和属性
        delete wp.name;
        alert(wp.name)      //undefined
        console.log(wp);   //name 没有 
        delete eat;
        wp.study();         //报错
    （注意：删除方法时，如果方法在原型中，则其他对象也无法用此方法）
        delete sss.prototype.eat;
        wp.eat();        //报错
    2.对象名=null;  //删除一个对象
         wp1=null;
        console.log(wp1); //null
```
#### 2.7 instanceof  

对象名 instanceof  构造函数; //判断一个对象是否是从某个构造函数中实例化出来的

```JS
例：
		function ttt(){
			this.name='wh';
			this.age=20;
		}
		function vvv(){
			this.name='zs';
			this.age=20;
		}

		let wh = new ttt();
		let zs = new vvv();
		//判断对象是否是从某一构造函数中实体化（具体化）出来的
		console.log(wh instanceof ttt);   //true
		console.log(zs instanceof ttt);   //false
```

#### 2.8 继承

通过'原型对象'来实现继承

继承者的构造函数.prototype = new 被继承者的构造函数;

 //访问的优先级：

构造函数的方法和属性     >    原型对象中的属性和方法

继承者本身的方法和属性  >     被继承的方法和属性 

```JS
//继承
		function person(){
			this.name='wp';
			this.age=20;
			this.study=function(){
				alert('学习')
			}
			this.aa = function(){
				alert('person构造函数中的aa')
			}
		}
		function student(){
			this.classes='wuif1707-1';
			this.number='wuif1707001';
			this.skill=function(){
				alert('fullstuck')
			}
			this.aa = function(){
				alert('student构造函数中的aa')
			}
		}

		student.prototype = new person();
        student.prototype.aa = function(){
        	alert('student原型中的aa')
        }
        // let ww = new person();
        //如何让ls也有ww的属性---继承(见上五行)
        let ls = new student();
       

        console.log(ls);
        ls.aa();
注：创建对象  要在 继承 后
```

##### 2.9 __proto__

查看属性方法

```JS
对象名.__proto__  指向构造函数原型，相当于 对象名.__proto__==构造函数.prototype ；
构造函数.prototype.__proto__ 指向构造函数,
```



### 3.内置对象

#### 3.1 分类

#####    3.1.1 string---基本语法对象 

```js
		let str='asaddad';
		console.log(str.__proto__);
属性：
length 返回字符串的长度，不区分中英文，（只读  不能设置）
		console.log(str.length);    //7
constructor  返回构造函数
		console.log(str.constructor);//
方法：
//查找类
str.charAt(num);    返回指定位置的字符
        console.log(str.charAt(1));  //s
str.charCodeAt(num);  返回指定位置字符对应的Unicode编码
		console.log(str.charCodeAt(1)); //115
String.fromCharCode(Unicode编码);  返回Unicode编码所对应的字符串
		console.log(String.fromCharCode(115));  //s
//位置类
indexOf()            字符首次出现的位置；当没有这个字符时出现-1
        console.log(str.indexOf('d')); //3
		console.log(str.indexOf('e'));  //-1
lastIndexOf()        字符最后一次出现的位置；当没有这个字符时出现-1
		console.log(str.lastIndexOf('d')); //6
		console.log(str.lastIndexOf('e'));  //-1
可以模拟某一特定值是否存在  存在（有位置下标）不存在（-1）
//存在
includes()           判断字符串中是否存在某一特定值  存在true、不存在false
		console.log(str.includes('d')); //true
		console.log(str.includes('e')); //false
//截取
slice(a,b);         a:开始截取时的位置下标  b:结束截取的位置下标（不包含该下标）；
		console.log(str.slice(0,3));//asa
                    原字符串不会改变；
		console.log(str);//asaddad 
                    b可以为负数，是从末尾计数；
		console.log(str.slice(0,-1));//asadda
		console.log(str.slice(0,str.length-1));//asadda
                    省略掉结束位置，从指定的开始位置，截取到末尾；
		console.log(str.slice(3));//ddad
substring(a,b);      规则与  slice(a,b); 相同；只是不支持 负数；
substr(x,y);        x:开始截取时的位置下标  y:截取长度；
		console.log(str.substr(0,3));//asa
                    如果没有y，则默认截取到末尾；
		console.log(str.substr(3));//ddad
//替换
replace(c,d)           c:被替换的字符串 d：替换的字符串 只能替换一个
		console.log(str.replace('asa','ee'));//eeddad
        console.log(str);//asaddad
//重复
repeat(重复次数)      将某字符串重复多次
        console.log(str.repeat(2));//asaddadasaddad
//匹配（正则）
match(rstr)        在某一字符串中匹配另一个字符串rstr；
                   匹配成功： 返回 数组(0,index,input)
        console.log(str.match('ad'));//["ad", index: 2, input: "asaddad"]
                   匹配失败： 返回 null
        console.log(str.match('e'));//null
search()            查找
//去空
        let strr='  asaddad  ';
        console.log(strr);//  asaddad  
trim()                  去掉字符串两端的空格；去完后对原字符串无影响
        console.log(strr.trim());//asaddad
trimLeft()              去掉字符串左端的空格；去完后对原字符串无影响
        console.log(strr.trimLeft());//asaddad        
trimRight()             去掉字符串右端的空格；去完后对原字符串无影响
        console.log(strr.trimRight());//  asaddad
//转换
split(分割位置，length) 把字符串转换成数组；
        let str2='a-b-c-d'
        console.log(str2.split('-',2));//["a", "b"]
        console.log(str2.split('-',4));//["a", "b", "c", "d"]
        console.log(str2.split('-',6));//["a", "b", "c", "d"]
str2.toUpperCase()     把字符串转换成大写；
        let str3='a,b,c,d'
        console.log(str3.toUpperCase());//A,B,C,D
str2.toLowerCase()     把字符串转换成小写；
        let str4='A,B,C,D'
        console.log(str4.toLowerCase());//a,b,c,d

例1：将字符串中某一特定字符串全部替换     
        function replaceAll(str,rstr,rep){
        	//方法一：使被替换的字符数与被替换的字符数相同
        	// let aaa = '';
        	// for(let i=0;i<rstr.length;i++){
        	// 	aaa+=rep;
        	// }
        	//方法二：使被替换的字符数与被替换的字符数相同
        	let aaa=rep.repeat(rstr.length)

        	while(str.includes(rstr)){
        		str=str.replace(rstr,aaa);
        	}
        	return str;
        }
        //str='asaddad'
        var sss=replaceAll(str,'ad','e');
        console.log(sss);//'aseedee'

        console.log(str.match('d'));//asaddadasaddad
        
        let str2='a-b-c-d'
        console.log(str2.split('-'));//asaddadasaddad
        console.log(str2.toUpperCase());//asaddadasaddad
        console.log(str2.toLowerCase());//asaddadasaddad
例2. 找baidu在字符串中的所有位置下标
//      方法一：
        let url = "https://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.comhttps://www.baidu.com"
        function position(url,bd,rep){
        	let newarr=[];
        	let aaa=rep.repeat(bd.length);
           while(url.includes(bd)){
           	 // newarr[newarr.length]=url.indexOf(bd);
           	 newarr.push(url.indexOf(bd));
           	 url=url.replace(bd,aaa)
           }
           return newarr;
        }
        console.log(position(url,'baidu','*'));
//      方法二：
        function pos(url,bd){
        	let arr=[];
        	for(let i=0;i<url.length;i++){
                 let bbb=url.slice(i,i+5);
                 if(bbb==bd){
                 	arr.push(i)
                 }
        	}
        	return arr;
        }
        console.log(pos(url,'baidu'));
```
##### 3.1.2 Array---基本语法对象

```js
     1. let i=0;//全局作用域
		for(let i=0;i<arr.length;i++){     //独立作用域
             let i=10                      //块级作用域
		}
	 2. //Array(x) 是数组的构造函数, 当参数x是数字且只有一个时----代表数组的长度length
		let arr1 = new Array('a','b','c','d');
		console.log(arr1);                     //['a','b','c','d']
		let arr2 = new Array(3);
		console.log(arr2);                     //[empty × 3]
		//想让参数x表示数组元素时，可以用以下方法：
		//.of()是构造函数Array的方法
		let arr3 =Array.of(3);
		console.log(arr3);                     //[3]
     3.Array.from(div)  //把集合（类似 数组 结构）转化为数组
       Array.isArray(arr);   //判断arr是不是一个数组
       Array.prototype.forEach.call( div,function(element){console.log(element)} )
       //把数组的方法--遍历  冒充  给div

//属性
arr.length=0;      //删除数组（arr.lengtn 可读可写）
arr.constructor        //返回构造函数 Array()
//方法
let arr=['a','b','c','d'];
//添加和删除
arr.push()    //在arr数组的末尾添加一个或多个元素,返回值为新数组的长度
		arr.push(1,2,3,4);//arr=["a", "b", "c", "d", 1, 2, 3, 4,]
arr.unshift() //在arr数组的开头添加一个或多个元素,返回值为新数组的长度
		arr.unshift(1,2,3,4);//arr=[1, 2, 3, 4, "a", "b", "c", "d", 1, 2, 3, 4]
arr.pop()     // 删除arr数组的最后一个元素，返回值为被删除的元素，()内无参数
		arr.pop();//arr=[1, 2, 3, 4, "a", "b", "c", "d", 1, 2, 3]
		arr.pop();//arr=[1, 2, 3, 4, "a", "b", "c", "d", 1, 2]
arr.shift()  // 删除arr数组的第一个元素，返回值为被删除的元素，()内无参数
		arr.shift()//arr=[2, 3, 4, "a", "b", "c", "d", 1, 2]
		arr.shift()//arr=[3, 4, "a", "b", "c", "d", 1, 2]
//万能的添加和删除
arr.splice(pos,num,...rest) // pos---删除位置  num---删除个数  ...---需要添加的元素
                   //从指定位置（pos）删除num个元素，在pos位置...rest添加进去
        arr.splice(1,2,1,2);//arr=[3, 1, 2, "b", "c", "d", 1, 2]
                 //返回值是被删除的元素组成的数组。如果删除个数为0，则返回空数组
arr.splice(pos,num)  //单独实现删除
		arr.splice(1,2); //arr=[3, "b", "c", "d", 1, 2] 
arr.splice(pos,0，...rest)  //单独实现添加
        arr.splice(1,0,3,4);//arr=[3, 3, 4, "b", "c", "d", 1, 2]
//合并
arr.concat(arr);     //合并一个或多个数组，返回值为合并后的新数组，并对原数组无影响
        let arr4 = new Array('a','b','c','d');
        let arr5 = new Array(1,2,3,4);
        console.log(arr5.concat(arr4));[1, 2, 3, 4, "a", "b", "c", "d"]
//转换
arr.join();       //把数组转化为字符串，()内的参数为连接符  例： '-';
        let arr5 = new Array(1,2,3,4);//[1, 2, 3, 4]
        console.log(arr5.join('-'));//1-2-3-4
                  //当()内的参数为空时，默认为','连接
        console.log(arr5.join());//1,2,3,4
//翻转
arr.reverse();      //数组翻转180度成为新数组；
        let arr6 = new Array(1,2,3,4);//[1, 2, 3, 4]
        console.log(arr6.reverse());//[4, 3, 2, 1]
//排序-----以下都用到回调函数
arr.sort();        //升序排序（按Unicode编码排序--先比较第一位，在比较第二位），改变原数组
       let ar1=[1,21,31,23,3,2];
       ar1.sort();
       console.log(ar1);//[1, 2, 21, 23, 3, 31]

arr.sort(function(a,b){
  return a-b<0
});                //按大小进行降序排列
                   //（原理：数组内元素两个两个进行比较，当a-b<0时，a会排在b的后面）
       ar1.sort(function(a,b){
       	return a-b<0;
       });
       console.log(ar1);//[31, 23, 21, 3, 2, 1]
//条件
arr.some();       //满足一个条件就弹true
       let ar2=[1,2,3,4,5];
       let result=ar2.some(function(value){
       	return value>3;
       });
       console.log(result);//true
arr.every();       //满足所有条件就弹true
       let ar3=[1,2,3,4,5];
       let result1=ar3.every(function(value){
       	return value<6;
       });
       console.log(result1);//true
//映射
arr.map();
       let ar4=[1,2,3,4];
       let result2=ar4.map(function(value){
       	return value*2;
       });
       console.log(result2);//[2,4,6,8];
      //arr.map()转化为箭头函数
       let ar5=[1,2,3,4];
       let map=ar5.map((value) =>value *2);
       let map1=ar5.map((value,index) =>value+index);
       let map2=ar5.map(() => true );
       console.log(map);
       console.log(map1);
       console.log(map2);
       // 1.箭头函数没有arguments这个对象；
       // 2.箭头函数不能当做构造函数去实例化对象
       // 当想用箭头函数返回一个对象时，加一个()
       let fn = (num)=>({name:'zhangsan',age:18});//会返回一个对象
       console.log(fn());//{name: "zhangsan", age: 18}
       let aa =(num)=>{
       	   return {name:num}
       };//返回一个对象的另一个方法
       console.log(aa(2));//{name: 2}
//筛选符合条件的元素
arr.filter();             //返回值为true的元素，function的参数与foreach相同
       let ar6=[1,2,3,4];
       let result3=ar6.filter(function(value){
       	return value>2;
       });
       console.log(result3);//[3,4];
//数组遍历
arr.forEach();-----无返回值
       let ar7=[1,2,3,4];
       let result4=ar7.forEach(function(value){
       	return value>2;
       });
       console.log(result4);//undefined;
```

##### 3.1.3 Math---基本语法对象

```JS
//绝对值
		console.log(Math.abs(-10));  //  10
		console.log(Math.abs(-20));   //20
//最值	  
		console.log(Math.max(1,2,3,4,5));   //5
		console.log(Math.min(1,2,3,4,5));   //1
//近似值（四舍五入）	
		console.log(Math.round(10.5));   //11
		console.log(Math.round(10.45));   //10
		console.log(Math.round(0.45));   //0
		console.log(Math.round(-0.45));   //-0
		console.log(Math.round(-10.5));   //-10
		console.log(Math.round(-10.4));   //-10
//向上取整		
	    console.log(Math.ceil(10.5));   //11
		console.log(Math.ceil(10.4));   //11
		console.log(Math.ceil(5.5));   //6
		console.log(Math.ceil(5.3));   //6
		console.log(Math.ceil(-5.3));   //-5
		console.log(Math.ceil(-0.3));   //-0

//向下取整		
	    console.log(Math.floor(10.5));   //10
		console.log(Math.floor(10.4));   //10
		console.log(Math.floor(5.5));   //5
		console.log(Math.floor(5.3));   //5
		console.log(Math.floor(-5.3));   //-6
		console.log(Math.floor(-0.3));   //-1
//求随机数----系统随机给出
       //求x~y内的任意值 x<y  *表示x、y间的距离   +表示x~y的平移
       // console.log(Math.random()*'y-x'+x);
		console.log(Math.random());   //0~1内的任意值  例：0.11902426453967685
		console.log(Math.random()*10); //0~10内的任意值 例：3.295062647295197
		console.log(Math.random()*-20);//-20~0内的任意值例：-12.479248458486389
        console.log(Math.random()*10+10);//10~20内的任意值 
        console.log(Math.random()*7+3);//3~10内的任意值
        console.log(Math.random()*8-3);//-3~5内的任意值
//求x的y次方
    //console.log(Math.pow(x,y)); 
		console.log(Math.pow(2,3));   //2的3次方  8
//求平方根
    //console.log(Math.sqrt(x)); 
		console.log(Math.sqrt(4));   //根号4=2  
		console.log(Math.sqrt(64));   //根号64=8
```

```JS
//随机颜色
//HTML:
       <div id="box" style="width: 200px;height: 200px;background: red;"></div>

//JS:   用Math.random()做出随机变换的rgb()  
        function color(){
        	let ar=[]
        	for(let i=0;i<3;i++){
        		ar.push(Math.round(Math.random()*255))
        	}
            let str1=ar.join();
            str='rgb('+str1+')';
            return str;
        }    

       //把随机变换的rgb()添加到盒子效果中
        let box=document.getElementById("box");
        box.onmouseover =function(){
        	box.style.background=color();
        }
```

## 十. bom---浏览器对象

```JS
window是bom的对象
window组成（window的子对象）：历史、地址栏、dom、screen（屏幕）、frames navigator.....
```

了解

```JS
//属性     
        alert(window.screenLeft); //浏览器到屏幕左边的距离
        alert(window.screenX); //浏览器到屏幕左边的距离  低版本ie没有

        alert(window.screeTop); //浏览器到屏幕上边的距离
        // alert(window.screenY); //浏览器到屏幕上边的距离  低版本ie没有

        window.frames  //window 的子窗口
        window.top     //window 的顶层窗口
        window.parent  //window 的父窗口
        window.self//===(window.window) //window 自己本身 
        
        alert(window==self);
        alert(window.innerWidth);
//方法 
        moveTo(100, 100);   移动到(100, 100)
        resizeTo(100, 100);
        moveBy(100, 100);   从当前位置移动了(100, 100)
        
//提示框 
        confirm('确定退出吗');//带有确定和退出的弹框
        alert('确定退出吗');//带有确定的弹框

//在新窗口打开一个页面  
        open(地址,新窗口名字,新窗口样式,是否要有历史记录（true/false）)
//在新窗口关闭一个页面  
        close()
```

重点

```JS
alert(window.innerWidth); //获取浏览器可视区域（视口）的宽度
alert(window.innerHeight); //获取浏览器可视区域（视口）的高度

alert(window.outerWidth); //获取浏览器的宽度
alert(window.outerHeight); //获取浏览器的高度

//兼容性的方法获取浏览器的宽度(内容)  
//documentElement文本元素 clientWidth:兼容性宽度
       alert(window.documentElement.clientWidth); 
//兼容性的方法获取浏览器的高度(内容)
       alert(window.documentElement.clientHeight); 

时间函数   
1. 按照某一个周期一直执行某个函数
   window.setInterval(回调函数,周期--最小为4、默认单位：ms)
      // 方法一
         window.setInterval(function(){alert(1)},500);
      // 方法二
        window.t= window.setInterval(()=>{alert(1)},500);
      // 方法三
          function fn(){alert(1)}
          var t=window.setInterval(fn,500)

  // 清除时间函数
        // 方法一
         window.clearInterval(t)
        // 方法二
         window.clearInterval(window.t)
         
2. 在 指定的周期后 执行 某个函数 只执行一次，不写window时，默认window
         function fn(){alert(1)}
         var a=setTimeout(fn,10);
  // 清除时间函数
         clearTimeout(a);
   
 // 用setTimeout模拟setInterval---------递归函数
   function fn(){
       alert(1);
   	   setTimeout(fn,10);
   }
   fn();
```

### 10.1 history

history是window的子对象;   在js中只写history，则是window.history

```js
//history的属性
        history.length  //历史长度
//history的方法
        history.back()   //后退
        history.forward()  //前进
        history.go(n)  //-1=back   1=forward   0=refesh 刷新
```

### 10.2 location

url------uniform resource locator-------统一资源定位符

```js
// 属性
        location.hash  //设置网页中的锚点
        location.href   //获取或设置网页完整地址
        location.protocol//协议
        location.host     //主机
        location.hostname //主机名
        location.port     //端口号
        location.pathname//路径名   /s
        // 从？开始往后部分  格式：属性：属性值&属性：属性值......
        location.search
//方法
        location.assign();//加载一个新页面   会留下历史记录
        location.reload();//重新加载、刷新;  参数是布尔值,也可以是无参数
        location.replace();//替换掉原页面  不会留下历史记录

//refesh.innerText  改变文本值，即可以获取结设置
```

## 十一、dom---文档对象模型

### dom中的核心对象是 document



```js
console.dir(document);  //当要打印一个对象时，一般用  console.dir();

属性：
		document.title='这是document的标题'; //获取或设置标题
		document.URL='http://www.baidu.com';//只读 获取地址（返回文档的url）
		document.bgColor='#ff6700';//背景色
		document.fgColor='#000';//前景色
方法：
		let box=document.getElementById('id名');//也是个对象  获取拥有指定id的第一个元素
		box.style.height='300px'
        
        
		let divs=document.getElementsByTagName('标签名');//不是个数组，获取指定标签名的元素                                                         集合；通过下标的方式操作元素
		divs[1].style.background='yellow'
		divs.length//返回值为 获取到的元素个数，可以对其进行遍历
        
        
		let cla=document.getElementsByClassName('类名');//不是个数组，获取指定类名的                                                         元素集合；通过下标的方式操作元素 
		cla[2].style.background='yellow';


       document.all  //获取页面中的所有元素
       
       document.getElementsByTagName('*');
       obj.getElementsByTagName('标签名');  //获取指定范围内的元素集合  obj是一个对象


获取或设置文本内容
     对象名.innerText=''          w3c标准   
     对象名.textContent=''          ie   
     对象名.innerHTML=''          可以识别标签对
修改样式
   方法一：通过id、类名修改
     对象名.id          //批量修改
     对象名.className 
   方法二：通过行内样式修改；
     对象名.style.属性名
        例：divs[0].style.borderRadius='50%';
            divs[0].style['border-radius']='50%'
获取样式
方法一：行内样式---只能获取行内设置的样式
    对象名.style.属性名 
方法二：window的方法-----只能获取样式，不能修改
    getComputedStyle(x,y).属性名  x:要获取样式的对象名  y：默认值null
修改属性：
     对象名.属性名=''             //获取或操作该对象的属性
```

### 事件(驱动)

用户的操作，浏览器行为会反馈一些实时的响应

事件(驱动)分为三部分----三要素：

1.  事件：（如何发生）
2.  事件源：（发生在谁身上）
3.  事件处理函数：（事件发生的时候需要干什么）

### 事件的分类

```js
     鼠标：

          click 

          mouseover/mouseenter       mouseout/mouseleave

          mousedown  mouseup  mousemove

    键盘：

        keydown  keyup  keypress

    表单：

         focus    blur    change     input    submit
    浏览器的事件（window）：
        onload//当页面加载完毕时所作的事 
       
         

```

```js
继承：冒充call/apply，并不代表lisi也有这种方法//lisi继承zs的say方法，只能冒充方法，但只能冒充一次
		zhangsan.say.call(要冒充的对象,方法要接收的参数);//参数用逗号隔开
		zhangsan.say.apply(要冒充的对象,[方法要接收的参数]);//参数是一个数组
let zhangsan=new person();
let lisi=new student();
zhangsan.say(1,2);//3
zhangsan.say.call(lisi,3,4);//7
zhangsan.say.apply(lisi,[3,4]);
lisi.say();//报错
```

```js
getComputedStyle(barrBox,null).width  //获取属性值，而不是尺寸
box.offsetwidth//
box.offsetHeight// 获取尺寸

.offsetLeft
//某元素相对于父元素的位置。与元素的left、top属性无关。父元素必须是有定位属性的。即position
//子元素有定位：子position+子margin
//子元素无定位：子margin+父padding
.offsetTop
```

# 节点

文档对象模型是由节点组成一个文档树模型。由元素节点、属性节点、文本节点组成，节点之间相互联系、相互影响，称之为模型

文档：文档节点；标签：元素节点；属性：属性节点；文本：文本节点；注释：注释节点

### 属性节点

```js
1. document.querySelector('div')//选中的是指定选择器的第一个元素（不用加下标--因为获取    的是元素）；
2. document.querySelectorAll('div')// 获取的是指定选择器的全部（集合），需要加下标；
   与document.getElementsByTagname('div')  其区别是__proto__的指向不同；
   可以用数组的遍历  .forEach();
3. document.querySelector('div.box:first-child')

   obj.child       获取某一个元素的所有元素的节点  (nodelist)       可用数组遍历.forEach();
   obj.children     获取某一个元素的元素节点   (HTMLcollection)
   obj.ElementCount  获取
 
   obj.firstChild   获取某一个元素的第一个子元素
   obj.lastChild   获取某一个元素的最后一个子元素
  
   obj.firstElementChild   获取某一个元素的第一个元素节点
   obj.lastElementChild   获取某一个元素的最后一个元素节点 
   
   obj.parentNode   获取某一个元素的父元素
   
   obj.nextSibling   获取某一个元素的(下一个)兄弟节点
   obj.nextElementSibling   获取某一个元素的(下一个)兄弟元素的节点
   
   obj.previousSibling   获取某一个元素的(上一个)兄弟节点
   obj.previousElementSibling   获取某一个元素的(上一个)兄弟元素节点；
   若没有对应的元素则输出 Null
```

|  节点  | nodeName节点名 | nodeType节点类型 | nodeVuale节点值 |
| :--: | :---------: | :----------: | :----------: |
| 元素节点 |    标签大写     |      1       |     null     |
| 文本节点 |    #text    |      3       |     文本内容     |
| 注释节点 |  #comment   |      8       |     注释内容     |
| 文档节点 |  #document  |      9       |     null     |
| 属性节点 |             |              |              |

```js
1.创建元素节点
    document.createElement('tagname');

    let divs = document.createElement('div');  //创建元素
    divs.style.width='300px'；  //修饰元素
2.插入
    parent.insertBefore(element,position);
        拓展：parent.prependChild
             son.pretendTo   son.appendTo()
             element.insertAfter()
             
         
    box.appendChild(divs)  //把divs插入到box中 appendchild()  插入到页面中
 
    //父元素.insertBefore(插入元素,位置元素) //插入到某个元素的前面
     box.insertBefore(divs,span)//在divs中把divs插入到span的前面
	       

    let p = document.createElement('p');  创建元素
    p.className = 'p';   //通过在css中定义的类名给样式
    box.appendChild(p);
3.删除
parent.removeChild(element);//删除一个元素节点element（从页面中移除，但内存还在）
divs=null //在内存中删除
4.替换
 parent.replaceChild(divs,son);
//在parent中用divs替换点son
5.克隆
element.cloneNode()
//复制element  当无参数时默认内容不复制
// 当有参数： false  只复制他自己  true：子元素也复制
```
### 标准属性（元素本来就有的）

```js
box.getAttribute('id')//获取属性（可以自定义属性）
docoment.getElementClassName()//只能获取属性，不能设置
```

### 自定义属性（自己家的）

```js
box.setAttribut('aa','bb')//给box设置一个aa的属性，属性值为bb
当元素使用scroll的时候：
box.scrollTop();   获取超出上边的距离
box.scrollLeft();   获取超出左边的距离
```

```js
overflow:auto//超出部分自动判断是否加滚动条
overflow:scroll//加一个滚动条
```

# 按需加载

# 楼层跳转

# 事件详解

## 事件绑定方式

### 一般的绑定方式：

#### js脚本

```js
obj.onclick=function(){}
```

#### 行内：

```css
onclick="";
```

#### addEventListener

同一个事件类型绑定多个事件处理函数

```js
	box.addEventListener(type,function(){},布尔值)//添加一个事件的监听；用来监听事件类型;参     数为：事件名、执行函数、布尔值默认false，可有可无
	// 给同一个事件类型可以绑定多个执行函数
    例：   box.addEventListener('click',function(){},false)
```

### 事件删除方式

#### js脚本

```JS
obj.onclick=null;
```

#### removeEventListener

同一个事件类型删除多个事件处理函数

```js
	box.removeEventListener(type,function(){},布尔值)//添加一个事件的监听；用来监听事件类型;参     数为：事件名、执行函数、布尔值默认false，可有可无
	// 给同一个事件类型可以删除多个执行函数
    //只能删除以字面量声明的函数
```

# 事件对象

记录当事件触发时的一些相关信息

事件对象只能在事件函数内部调用；事件处理函数结束后会自动销毁

如何获取事件对象

在事件处理函数中传一个参数就是事件对象

# 事件流

当页面中某个元素触发时，本身以及页面中所有的（父辈）元素都会响应 该事件 ，并按照某一特定的顺序去传播。传播顺序（执行顺便）称之为事件流

事件流类型：

冒泡型事件流： 由明确事件到最不明确的事件源（从下往上）

​                   由on绑定的事件

​                    addEventListener（false）   

捕获型事件流：由不明确事件到最明确的事件源（从上往下）                        

​                      addEventListener（true）   

	// ie浏览器中给同一事件添加多个时间函数
	box.attachEvent('onclick', function(0){})
	// addEventListener功能相同，但用法不同，最大区别在于this：attachEvent的this指向window，addEventListener的this指向调用对象，
	
	box.addEventListener('click', function(e){
	   e.stopPropagation();//阻止事件流
	})//冒泡型
	
	box.onclick=function(e){
	    e.target.style.background='red'//e.target为目标对象，当事件触发时，真正的目标执行者
	}//e为事件对象
	   
	e.currentTarget//事件源
	// 事件委派：-------子元素的事件委派给父辈元素  例：棋盘
	大量元素相同事件；
	js动态创建的元素

# 本地存储

localStorage----------是个对象

	  setItem()  //设置
	  localStorage.setItem('name','zhangsan');
	  参数：属性名 属性值
	 
	  getItem()  //获取
	  localStorage.getItem('name');
	  参数：属性名
	  
	  removeItem()//移除
	  localStorage.removeItem('name');
	  参数：属性名
	  
	  clear()//清除
	  localStorage.clear();清空（全部）
sessionStorage----------是个对象
```js
  用法localStorage与相同；
  区别在于sessionStorage只能在当前页面保存、浏览器关掉时数据清除；
  localStorage可以在(同一域名)几个页面中数据共享，浏览器关掉时数据会永久保存，除非手动删除
  json.stringify(arr)  把某一对象转化为字符串
  JSON.parse(json.stringify(arr))  把字符串转化为对象(属性必须有双引号)
```