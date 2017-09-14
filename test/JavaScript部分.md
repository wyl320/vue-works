# 

####JavaScript部分

#####1、谈谈你对Ajax的理解？(概念、特点、作用)
	
	AJAX全称为“Asynchronous JavaScript And XML”（异步JavaScript和XML） 是指一种创建交互式网页应用的开发技术、改善用户体验，实现无刷新效果。
	优点
	a、不需要插件支持
	b、优秀的用户体验
	c、提高Web程序的性能
	d、减轻服务器和带宽的负担
	缺点
	a、浏览器对XMLHttpRequest对象的支持度不足，几乎所有浏览器现在都支持
	b、破坏浏览器“前进”、“后退”按钮的正常功能，可以通过简单的插件弥补
	c、对搜索引擎的支持不足
	
什么是跨域，如何实现跨域访问?
跨域是指不同域名之间相互访问。
JavaScript同源策略的限制，A域名下的JavaScript无法操作B或是C域名下的对象

#####2、什么是跨域，如何实现跨域访问?

	跨域是指不同域名之间相互访问。
	JavaScript同源策略的限制，A域名下的JavaScript无法操作B或是C域名下的对象
	
<img src="http://files.jb51.net/file_images/article/201612/20161228112652435.jpg">
	
	实现：
	(1)、JSONP跨域：利用script脚本允许引用不同域下的js实现的，将回调方法带入服务器，返回结果时回调。
	(2)、跨域资源共享（CORS）
	跨域资源共享（CORS）是一种网络浏览器的技术规范，它为Web服务器定义了一种方式，允许网页从不同的域访问其资源。
	
	CORS与JSONP相比:
	
	a、 JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求。
	b、 使用CORS，开发者可以使用普通的XMLHttpRequest发起请求和获得数据，比起JSONP有更好的错误处理。
	c、 JSONP主要被老的浏览器支持，它们往往不支持CORS，而绝大多数现代浏览器都已经支持了CORS。
	
#####3、为什么要使用模板引擎？
		
	a、模板引擎（这里特指用于Web开发的模板引擎）是为了使用户界面与业务数据（内容）分离而产生的，它可以生成特定格式的文档，用于网站的模板引擎就会生成一个标准的HTML文档。
	
	b、在一些示例中javascript有大量的html字符串，html中有一些像onclick样的javascript，这样javascript中有html，html中有javascript，代码的偶合度很高，不便于修改与维护，使用模板引擎可以解决问题。

#####4、JavaScript的数据类型有哪些？

	基本数据类型：字符串 String、数字 Number、布尔Boolean
	复合数据类型：数组 Array、对象 Object
	特殊数据类型：Null 空对象、Undefined 未定义


#####5、根据你的理解,请简述JavaScript脚本的执行原理?
		
	JavaScript是一种动态、弱类型、基于原型的语言，通过浏览器可以直接执行。
	当浏览器遇到<script> 标记的时候，浏览器会执行之间的javascript代码。嵌入的js代码是顺序执行的，每个脚本定义的全局变量和函数，都可以被后面执行的脚本所调用。 变量的调用，必须是前面已经声明，否则获取的变量值是undefined。

#####6、DOM操作怎样添加、移除、移动、复制、创建和查找节点?
	
创建新节点
	
	createDocumentFragment() //创建一个DOM片段
	createElement() //创建一个具体的元素
	createTextNode() //创建一个文本节点

添加、移除、替换、插入

	appendChild()
	removeChild()
	replaceChild()
	insertBefore() //在已有的子节点前插入一个新的子节点

查找

	getElementsByTagName() //通过标签名称
	getElementsByName() //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
	getElementById() //通过元素Id，唯一性
   document.querySelector('selectors')
   document.querySelectorAll

#####7、说说你对json的理解?

	a、JSON对象：以“{”开始，以“}”结束，里面则是一系列的键（key）值（value）对，键和值用“:”分开，每对键值对之间用“,”分开。
	b、可以是一个数组，数组里面又是一些JSON对象，这种表示稍微复杂一些，但是参照这些理解可以很容易分辨出来。
	
	优点
	数据格式简单, 易于读写, 占用带宽小.

#####8、谈谈你对闭包的理解?

	(1)、使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。
	(2)、闭包有三个特性：
		a、函数嵌套函数
		b、函数内部可以引用外部的参数和变量
		c、参数和变量不会被垃圾回收机制回收


#####9、谈谈你This对象的理解?

	(1)、js的this指向是不确定的，也就是说是可以动态改变的。call/apply 就是用于改变this指向的函数，这样设计可以让代码更加灵活，复用性更高
	(2)、this 一般情况下，都是指向函数的拥有者。
	(3)、在函数自执行里，this 指向的是 window 对象。
	
#####10、js数组主要有哪些方法？主要参数你了解吗？  
	   1 、shift():删除数组的第一个元素,返回删除的值。这里是0   
		2 、unshift(3,4):把参数加载数组的前面，返回数组的长度。现在list:中是. 3,4,0,1,2<br>
		3、pop():删除数组的最后一个元素，返回删除的值。这里是2.  
		4、push(3):将参数加载到数组的最后，返回数组的长度，现在List中时：0,1,2,3<br>
		5、concat(3,4):把两个数组拼接起来。
		6、splice(start,deleteCount,val1,val2,...)：从start位置开始删除<br>deleteCount项，并从该位置起插入val1,val2,...
		7、reverse：将数组反序
		var a = [1,2,3,4,5]; 
		var b = a.reverse(); //a：[5,4,3,2,1] b：[5,4,3,2,1]  
		8、sort(orderfunction)：按指定的参数对数组进行排序 var a = [1,2,3,4,5]; var b = a.sort(); //a：[1,2,3,4,5] b：[1,2,3,4,5]
		9、slice(start,end)：返回从原数组中指定开始下标到结束下标之间的项组成的新数组
		var a = [1,2,3,4,5]; 
		var b = a.slice(2,5); //a：[1,2,3,4,5] b：[3,4,5]
	
#####11、js数组去重和排序.    
	   一、简单的去重方法.   
	   var aa = [1,2,2,4,9,6,7,5,2,3,5,6,5];  
		* 新建一新数组，遍历传入数组，值不在新数组就push进该新数组中.
		* IE8以下不支持数组的indexOf方法<br>
		function uniq(array){ <br>
		    var temp = []; //一个新的临时数组
		    for(var i = 0; i < array.length; i++){
		        if(temp.indexOf(array[i]) == -1){
		            temp.push(array[i]);
		        }
		    }
		    return temp;
		}  
	   二、排序后相邻去除法.     
		* 给传入数组排序，排序后相同值相邻，
		* 然后遍历时,新数组只加入不与前一值重复的值。
		* 会打乱原来数组的顺序
		function uniq(array){
		    array.sort();
		    var temp=[array[0]];
		    for(var i = 1; i < array.length; i++){
		        if( array[i] !== temp[temp.length-1]){
		            temp.push(array[i]);
		        }
		    }
		    return temp;
		}
		var aa = [1,2,"2",4,9,"a","a",2,3,5,6,5];
	
#####12 call() 和 apply() 的区别和作用？
	apply()函数有两个参数：第一个参数是上下文，第二个参数是参数组成的数组。如果上下文是null，则使用全局对象代替。   	
	如：function.apply(this,[1,2,3]);
	call()的第一个参数是上下文，后续是实例传入的参数序列。
	如：function.call(this,1,2,3);
#####13.HTTP状态码知道哪些？
	100  Continue  继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
	200  OK   正常返回信息
	201  Created  请求成功并且服务器创建了新的资源
	202  Accepted  服务器已接受请求，但尚未处理
	301  Moved Permanently  请求的网页已永久移动到新位置。
	302 Found  临时性重定向。
	303 See Other  临时性重定向，且总是使用 GET 请求新的 URI。
	304  Not Modified  自从上次请求后，请求的网页未修改过。
	400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
	401 Unauthorized  请求未授权。
	403 Forbidden  禁止访问。
	404 Not Found  找不到如何与 URI 相匹配的资源。
	500 Internal Server Error  最常见的服务器端错误。
	503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
#####14.你有哪些性能优化的方法？
	（1） 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
	（2） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
	（3） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
	（4） 当需要设置的样式很多时设置className而不是直接操作style。
	（5） 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
	（6） 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
	（7） 图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳。
	（8） 开发智能事件处理程序
	    （有时候我们会感觉到页面反应迟钝，这是因为DOM树元素中附加了过多的事件句柄并且些事件句病被频繁地触发。这就是为什么说使用event delegation（事件代理）是一种好方法了。如果你在一个div中有10个按钮，你只需要在div上附加一次事件句柄就可以了，而不用去为每一个按 钮增加一个句柄。事件冒泡时你可以捕捉到事件并判断出是哪个事件发出的。

你同样也不用为了操作DOM树而等待onload事件的发生。你需要做的就是等待树结构中你要访问的元素出现。你也不用等待所有图像都加载完毕）
#####15.什么叫优雅降级和渐进增强？
优雅降级：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效.
渐进增强：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。
#####16.哪些常见操作会造成内存泄漏？
内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。
setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
#####17.线程与进程的区别
一个程序至少有一个进程,一个进程至少有一个线程. 
线程的划分尺度小于进程，使得多线程程序的并发性高。 
另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。 
线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。 
从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。
#####18.box-sizing常用的属性有哪些？分别有什么作用？
(Q1)box-sizing: content-box|border-box|inherit;
(Q2)content-box:宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框(元素默认效果)。
border-box:元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
#####19.Doctype作用？标准模式与兼容模式各有什么区别?
(Q1)<!DOCTYPE>告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
(Q2)标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。
#####21.HTML5 为什么只需要写 <!DOCTYPE HTML>？
HTML5不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。
而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
#####22.页面导入样式时，使用link和@import有什么区别？
	（1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
	（2）页面被加载的时link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
	（3）import是CSS2.1提出的，只在IE5以上才能被识别而link是XHTML标签，无兼容问题;
#####23.XHTML和HTML有什么区别
	HTML是一种基本的WEB网页设计语言，XHTML是一个基于XML的置标语言
	最主要的不同：
	XHTML 元素必须被正确地嵌套。
	XHTML 元素必须被关闭。
	标签名必须用小写字母。
	XHTML 文档必须拥有根元素。
#####24.请描述一下 cookies，sessionStorage 和 localStorage 的区别？
	cookie在浏览器和服务器间来回传递。 sessionStorage和localStorage不会
	sessionStorage和localStorage的存储空间更大；
	sessionStorage和localStorage有更多丰富易用的接口；
	sessionStorage和localStorage各自独立的存储空间；
#####25.如何实现浏览器内多个标签页之间的通信?
调用localstorge、cookies等本地存储方式
#####26.Doctype作用？标准模式与兼容模式各有什么区别?
!DOCTYPE声明位于位于HTML文档中的第一行，处于html 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。
#####27.谈一谈JavaScript作用域与作用域链
简单的说，作用域就是变量与函数的可访问范围，即作用域控制着变量与函数的可见性和生命周期。在JavaScript中，变量的作用域有全局作用域和局部作用域两种。
当执行一段JavaScript代码（全局代码或函数）时，JavaScript引擎会创建为其创建一个作用域又称为执行上下文（Execution Context），在页面加载后会首先创建一个全局的作用域，然后每执行一个函数，会建立一个对应的作用域，从而形成了一条作用域链。每个作用域都有一条对应的作用域链，链头是全局作用域，链尾是当前函数作用域。
作用域链的作用是用于解析标识符，当函数被创建时（不是执行），会将this、arguments、命名参数和该函数中的所有局部变量添加到该当前作用域中，当JavaScript需要查找变量X的时候（这个过程称为变量解析），它首先会从作用域链中的链尾也就是当前作用域进行查找是否有X属性，如果没有找到就顺着作用域链继续查找，直到查找到链头，也就是全局作用域链，仍未找到该变量的话，就认为这段代码的作用域链上不存在x变量，并抛出一个引用错误（ReferenceError）的异常。
#####28.如何理解JavaScript原型链
所谓原型链，就是由对象原型所构成的访问链，我称之为“原型继承链”。一个JS对象的原型指向其父类对象，而父类对象的原型又指向父类对象的父类对象，这种通过原型层层连接起来的关系就是原型链,每一个对象都会有原型，并与它生关联，原型本身也是一个对象，其他对象可以通过它实现属性的继承，也可以将任何一个对象作为自身对象的原型
原型链的作用是用于对象继承，函数A的原型属性(prototype property)是一个对象，当这个函数被用作构造函数来创建实例时，该函数的原型属性将被作为原型赋值给所有对象实例，比如我们新建一个数组，数组的方法便从数组的原型上继承而来。
当访问对象的一个属性时, 首先查找对象本身, 找到则返回; 若未找到, 则继续查找其原型对象的属性(如果还找不到实际上还会沿着原型链向上查找, 直至到根). 只要没有被覆盖的话, 对象原型的属性就能在所有的实例中找到，若整个原型链未找到则返回undefined
#####29.JavaScript如何实现继承？
	构造继承 原型继承 实例继承 拷贝继承
	原型prototype机制或apply和call方法去实现较简单，建议使用构造函数与原型混合方式。
	        function Parent(){
	            this.name = 'wang';
	        }
	        function Child(){
	            this.age = 28;
	        }
	        Child.prototype = new Parent();//继承了Parent，通过原型
	        var demo = new Child();
	        alert(demo.age);
	        alert(demo.name);//得到被继承的属性
#####30.JavaScript的typeof返回哪些数据类型
Ｏbject number function boolean underfind;
#####31.例举3种强制类型转换和2种隐式类型转换?
强制（parseInt,parseFloat,number）隐式（== – ===）；
#####32.split() join() 的区别
前者是切割成数组的形式，后者是将数组转换成字符串
#####33.数组方法pop() push() unshift() shift()
Push()尾部添加 pop()尾部删除
Unshift()头部添加 shift()头部删除
#####34.IE和DOM事件流的区别
执行顺序不一样、参数不一样.事件加不加on.this指向问题
#####36.事件委托是什么
让利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行！
#####37.如何解决跨域问题
	1.JSONP：原理是：动态插入script标签，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入。
	优点是兼容性好，简单易用，支持浏览器与服务器双向通信。缺点是只支持GET请求
	2.CORS：服务器端对于CORS的支持，主要就是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax进行跨域的访问
	3.document.domain：通过修改document.domain来跨子域
	将子域和主域的document.domain设为同一个主域.前提条件：这两个域名必须属于同一个基础域名!而且所用的协议，端口都要一致，否则无法利用document.domain进行跨域
	4.window.postMessage使用HTML5中新引进的window.postMessage方法来跨域传送数据
	5.window.name：使用window.name来进行跨域window对象有个name属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的
#####38.XML和JSON的区别？
	(1).数据体积方面。JSON相对于XML来讲，数据的体积小，传递的速度更快些。
	(2).数据交互方面。JSON与JavaScript的交互更加方便，更容易解析处理更好的数据交互。
	(3).数据描述方面.JSON对数据的描述性比XML较差。
	(4).传输速度方面.JSON的速度要远远快于XML。
#####39.谈谈你对webpack的看法
	WebPack 是一个模块打包工具，你可以使用WebPack管理你的模块依赖，并编绎输出模块们所需的静态文件。它能够很好地管理、打包Web开发中所用到的HTML、JavaScript、CSS以及各种静态文件（图片、字体等），让开发过程更加高效。对于不同类型的资源，webpack有对应的模块加载器。webpack模块打包器会分析模块间的依赖关系，最后 生成了优化且合并后的静态资源。
	webpack的两大特色：
	1.code splitting（可以自动完成）
	2.loader 可以处理各种类型的静态文件，并且支持串联操作
	webpack 是以commonJS的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。
	webpack具有requireJs和browserify的功能，但仍有很多自己的新特性：
	1. 对 CommonJS 、 AMD 、ES6的语法做了兼容
	2. 对js、css、图片等资源文件都支持打包
	3. 串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如提供对CoffeeScript、ES6的支持
	4. 有独立的配置文件webpack.config.js
	5. 可以将代码切割成不同的chunk，实现按需加载，降低了初始化时间
	6. 支持 SourceUrls 和 SourceMaps，易于调试
	7. 具有强大的Plugin接口，大多是内部插件，使用起来比较灵活
	8.webpack 使用异步 IO 并具有多级缓存。这使得 webpack 很快且在增量编译上更加快
#####40.创建ajax过程
	(1)创建XMLHttpRequest对象,也就是创建一个异步调用对象.
	(2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
	(3)设置响应HTTP请求状态变化的函数.
	(4)发送HTTP请求.
	(5)获取异步调用返回的数据.
	(6)使用JavaScript和DOM实现局部刷新.
	Ajax的原理简单来说是在用户和服务器之间加了—个中间层(AJAX引擎)，通过 XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。使用户操作与服务器响应异步化。这其中最关键的一步就是从服务器获得请求数据。
	Ajax的过程只涉及JavaScript、XMLHttpRequest和DOM。XMLHttpRequest是ajax的核心机制，它是在IE5中首先引入的，是一种支持异步请求的技术。简单的说，也就是javascript可以及时向服务器提出请求和处理响应，而不阻塞用户。达到无刷新的效果。
#####41.HTTP和HTTPS
HTTP协议通常承载于TCP协议之上，在HTTP和TCP之间添加一个安全协议层（SSL或TSL），这个时候，就成了我们常说的HTTPS。
默认HTTP的端口号为80，HTTPS的端口号为443。
#####42.为什么HTTPS安全
因为网络请求需要中间有很多的服务器路由器的转发。中间的节点都可能篡改信息，而如果使用HTTPS，密钥在你和终点站才有。https之所以比http安全，是因为他利用ssl/tls协议传输。它包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障了传输过程的安全性
#####43.Javascript垃圾回收方法
JavaScript中的垃圾回收，主要是一种针对程序执行环境中内存的管理机制，垃圾收集器，周期性的回收那些程序中，不会再用到的变量，也就是生命周期结束的变量，这种变量多为局部变量，而全局变量只有在关闭浏览器或终止当前运行环境的情况下其生命周期才会结束。所以此时垃圾收集器所要做的就是周期性的检索程序中处于结束状态的变量，同时回收他们所占用的内存资源。而闭包的使用则无疑会增加程序对内存资源的占用，因为在闭包中存储着对外部变量的引用，所以只要闭包中存储的外部引用未停止使用，那么外部变量就永远存在，且其所占用的内存资源无法被垃圾回收机制所释放。因此合理的使用闭包，能优化程序的执行效率及降低程序的资源占有率
#####44.谈谈性能优化问题
	代码层面：避免使用css表达式，避免使用高级选择器，通配选择器。
	缓存利用：缓存Ajax，使用CDN，使用外部js和css文件以便缓存，添加Expires头，服务端配置Etag，减少DNS查找等
	请求数量：合并样式和脚本，使用css图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。
	请求带宽：压缩文件，开启GZIP，
	
	用hash-table来优化查找
	少用全局变量
	用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能
	用setTimeout来避免页面失去响应
	缓存DOM节点查找的结果
	避免使用CSS Expression
	避免全局查询
	避免使用with(with会创建自己的作用域，会增加作用域链长度)
	多个变量声明合并
	避免图片和iFrame等的空Src。空Src会重新加载当前页面，影响速度和效率
	尽量避免写在HTML标签中写Style属性
#####44移动端性能优化
	尽量使用css3动画，开启硬件加速。
	适当使用touch事件代替click事件。
	避免使用css3渐变阴影效果。
	可以用transform: translateZ(0)来开启硬件加速。
	不滥用Float。Float在渲染时计算量比较大，尽量减少使用
	不滥用Web字体。Web字体需要下载，解析，重绘当前页面，尽量减少使用。
	合理使用requestAnimationFrame动画代替setTimeout
	CSS中的属性（CSS3 transitions、CSS3 3D transforms、Opacity、Canvas、WebGL、Video）会触发GPU渲染，请合理使用。过渡使用会引发手机过耗电增加
####45.ES6的了解
新增模板字符串（为JavaScript提供了简单的字符串插值功能）、箭头函数（操作符左边为输入的参数，而右边则是进行的操作以及返回的值Inputs=>outputs。）、for-of（用来遍历数据—例如数组中的值。）arguments对象可被不定参数和默认参数完美代替。ES6将promise对象纳入规范，提供了原生的Promise对象。增加了let和const命令，用来声明变量。增加了块级作用域。let命令实际上就增加了块级作用域。ES6规定，var命令和function命令声明的全局变量，属于全局对象的属性；let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。。还有就是引入module模块的概念
####46.冒泡、快排
	冒泡排序
	<script>
	    var arr = [3, 1, 4, 6, 5, 7, 2];
	
	    function bubbleSort(arr) {
	        var len = arr.length;
	        for (var i = len; i >= 2; --i) {
	            for (var j = 0; j < i - 1; j++) {
	                if (arr[j + 1] < arr[j]) {
	                    var temp;
	                    temp = arr[j];
	                    arr[j] = arr[j + 1];
	                    arr[j + 1] = temp;
	                }
	            }
	        }
	        return arr;
	    }
	
	    function bubbleSort2(arr) {
	        var len = arr.length;
	        for (var i = 0; i <= len - 1; i++) {
	            for (var j = 0; j <= len - i; j++) {
	                if (arr[j + 1] < arr[j]) {
	                    var temp;
	                    temp = arr[j];
	                    arr[j] = arr[j + 1];
	                    arr[j + 1] = temp;
	                }
	            }
	        }
	        return arr;
	    }
	
	    console.log(bubbleSort(arr));
	    console.log(bubbleSort2(arr));
	</script>
	快速排序
	采用二分法，取出中间数，数组每次和中间数比较，小的放到左边，大的放到右边。
	时间复杂度：O(nlog2(n))
	<script>
	    var arr = [3, 1, 4, 6, 5, 7, 2];
	
	    function quickSort(arr) {
	        if(arr.length == 0) {
	            return [];    // 返回空数组
	        }
	
	        var cIndex = Math.floor(arr.length / 2);
	        var c = arr.splice(cIndex, 1);
	        var l = [];
	        var r = [];
	
	        for (var i = 0; i < arr.length; i++) {
	            if(arr[i] < c) {
	                l.push(arr[i]);
	            } else {
	                r.push(arr[i]);
	            }
	        }
	
	        return quickSort(l).concat(c, quickSort(r));
	    }
	
	    console.log(quickSort(arr));
	</script>
####阻止冒泡
	• 在W3c中，使用stopPropagation()方法
	• 在IE下设置oEvent.cancelBubble = true；
####阻止捕获
	阻止事件的默认行为，例如click <a>后的跳转
	• 在W3c中，使用oEvent.preventDefault()方法；
	• 在IE下设置window.event.returnValue = false;
####js迭代的方法
every() 、fliter()、forEach()、map()、some()
####插件开发
	通过$.extend()来扩展jQuery
	通过$.fn 向jQuery添加新的方法
	通过$.widget()应用jQuery UI的部件工厂方式创建
	$.fn.pluginName = function() {
	    //your code here
	}
	var Haorooms= function(el, opt) {
	    this.$element = el,
	    this.defaults = {
	        'color': 'red',
	        'fontSize': '12px',
	        'textDecoration':'none'
	    },
	    this.options = $.extend({}, this.defaults, opt)
	}
	//定义haorooms的方法
	haorooms.prototype = {
	    changecss: function() {
	        return this.$element.css({
	            'color': this.options.color,
	            'fontSize': this.options.fontSize,
	            'textDecoration': this.options.textDecoration
	        });
	    }
	}
	$.extend({}, this.defaults, opt)有{}主要是为了创建一个新对象，保留对象的默认值。
	$.fn.myPlugin = function(options) {
	    //创建haorooms的实体
	    var haorooms= new Haorooms(this, options);
	    //调用其方法
	    return Haorooms.changecss();
	}
	调用这个插件直接如下就可以
	$(function() {
	    $('a').myPlugin({
	        'color': '#2C9929',
	        'fontSize': '20px'
	    });
	})
#### 解决跨域的方案
	CORS与JSONP相比，无疑更为先进、方便和可靠。
	1、 JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求。
	2、 使用CORS，开发者可以使用普通的XMLHttpRequest发起请求和获得数据，比起JSONP有更好的错误处理。
	3、 JSONP主要被老的浏览器支持，它们往往不支持CORS，而绝大多数现代浏览器都已经支持了CORS。[低版本IE7以下不支持，要支持IE7还是要用jsonp方式]
CORS的使用
CORS要前后端同时做配置。
	1、首先我们来看前端。
	纯js的ajax请求。
	
	<script type="text/javascript">
	    var xhr = new XMLHttpRequest(); //ie6以下用new ActiveXObject("Microsoft.XMLHTTP");可以做能力判断。
	    xhr.open("￼GET", "/haorooms",true);
	    xhr.send();
	</script>
	以上的haorooms是相对路径，如果我们要使用CORS，相关Ajax代码可能如下所示：
	
	<script type="text/javascript">
	    var xhr = new XMLHttpRequest();//ie6以下用new ActiveXObject("Microsoft.XMLHTTP");可以做能力判断。
	    xhr.open("￼GET", "http://www.haorooms.com/CORS",true);
	    xhr.send();
	</script>
	当然，你也可以用jquery的ajax进行。
####CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？
	1.id选择器（ # myid）
	2.类选择器（.myclassname）
	3.标签选择器（div, h1, p）
	4.相邻选择器（h1 + p）
	5.子选择器（ul > li）
	6.后代选择器（li a）
	7.通配符选择器（ * ）
	8.属性选择器（a[rel = "external"]）
	9.伪类选择器（a: hover, li:nth-child）
	优先级为:!important > id > class > tag 
	important 比 内联优先级高,但内联比 id 要高
####常见兼容性问题？
	png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.也可以引用一段脚本处理.
	浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。
	IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。
	浮动ie产生的双倍距离（IE6双边距问题：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。）
	.box{ float:left; width:10px; margin:0 0 0 100px;}
	这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入
	_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)
	渐进识别的方式，从总体中逐渐排除局部。
	首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。
	接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

      .bb{
       background-color:#f1ee18;/*所有识别*/
      .background-color:#00deff\9; /*IE6、7、8识别*/
      +background-color:#a200ff;/*IE6、7识别*/
      _background-color:#1e0bd1;/*IE6识别*/
      }
	怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发
	怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。现在
	可以使用[html5](http://www.w3.org/TR/html5/single-page.html)推荐的写法：`<doctype html>`
####上下margin重合问题
	ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。
	解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。
	列举IE 与其他浏览器不一样的特性？

	IE支持currentStyle，FIrefox使用getComputStyle
	IE 使用innerText，Firefox使用textContent
	滤镜方面：IE:filter:alpha(opacity= num)；Firefox：-moz-opacity:num
	事件方面：IE：attachEvent：火狐是addEventListener
	鼠标位置：IE是event.clientX；火狐是event.pageX
	IE使用event.srcElement；Firefox使用event.target
	IE中消除list的原点仅需margin:0即可达到最终效果；FIrefox需要设置margin:0;padding:0以及list-style:none
####IOS键盘字母输入，默认首字母大写
	<input type="text" autocapitalize="off" />
	select 下拉选择设置右对齐 select option { direction: rtl;}
	消除 IE10 里面的那个叉号 input:-ms-clear{display:none;}
	移动端 HTML5 audio autoplay 失效问题 解决方法思路：先通过用户 touchstart 触碰，触发播放并暂停（音频开始加载，后面用 JS 再操作就没问题了
	移动端 HTML5 input date 不支持 placeholder 问题
	<input placeholder="Date" class="textbox-n" type="text" onfocus="(this.type='date')"  id="date"> 
####format-detection 启动或禁用自动识别页面中的电话号码。
<meta name="format-detection" content="telephone=no">
####html5调用安卓或者ios的拨号功能
html5提供了自动调用拨号的标签，只要在a标签的href中添加tel:就可以
<a href="tel:15677776767">点击拨打15677776767</a>
####上下拉动滚动条时卡顿、慢
body {
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
}
####禁止复制、选中文本
Element {
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
     user-select: none;
}
####iphone及ipad下输入框默认内阴影
Element{-webkit-appearance: none; }
####ios和android下触摸元素时出现半透明灰色遮罩
Element {
    -webkit-tap-highlight-color:rgba(255,255,255,0)
}
####旋转屏幕时，字体大小调整的问题
html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {
    -webkit-text-size-adjust:100%;
}
####IOS中input键盘事件keyup、keydownkeypress支持不是很好
<input type="text" id="testInput">
可以用html5的oninput事件去代替keyup
<script type="text/javascript">  document.getElementById('testInput').addEventListener('input', function(e){
        var value = e.target.value;
    });
</script>