
documentReady(function(){
		
	//放大镜---------------------------------------
	var details_pic=document.getElementById('details_pic');
	var aImg=details_pic.getElementsByTagName('img');	
	var details_tab=document.getElementById('details_tab');	
	var aLi=details_tab.getElementsByTagName('li');
	var n=0
	for (var i=0;i<aLi.length;i++) {		
		(function(index){					
			aLi[i].onmouseover=function(){
				for (var j=0;j<aLi.length;j++) {
					aLi[j].className='';
					aImg[j].style.display='none'
					bigImg[j].style.display='none'	
				};
				this.className='ac'
				aImg[index].style.display='block'
				bigImg[index].style.display='block'	
				n=index;				
			};			
		})(i);		
	};	
		
	var handle=document.getElementById('handle');
	var big_glass=document.getElementById('big_glass')
	var bigImg=big_glass.getElementsByTagName('img');
	
	
		details_pic.onmousemove=function(ev){
			handle.style.display=big_glass.style.display='block';
			
			var oEv=ev||event;
			
			//获取滚动条  chrome不识别 documentElement.scrollTop
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			
			//鼠标在span的中心位置
			var l=oEv.clientX-hxsd_tools.offsetLeft( details_pic )-handle.offsetWidth/2; 
			var t=oEv.clientY+scrollTop-hxsd_tools.offsetTop( details_pic )-handle.offsetHeight/2;
			
			//限制范围 
			if(l<0)l=0;
			if(l>=details_pic.offsetWidth-handle.offsetWidth){
				l=details_pic.offsetWidth-handle.offsetWidth;
			}
	
			if(t<0)t=0;
			if(t>=details_pic.offsetHeight-handle.offsetHeight){
				t=details_pic.offsetHeight-handle.offsetHeight;
			}
			handle.style.left=l+'px';
			handle.style.top=t+'px';	
					
			var l_rate=l / (details_pic.offsetWidth-handle.offsetWidth);
			var t_rate=t / (details_pic.offsetHeight-handle.offsetHeight);
			
			//console.log(big_glass.offsetWidth-bigImg[].offsetWidth)
		
			bigImg[n].style.left= (big_glass.offsetWidth-bigImg[n].offsetWidth)*l_rate +'px'; //外box 减 内部大图片，为负值
			bigImg[n].style.top= (big_glass.offsetHeight-bigImg[n].offsetHeight)*t_rate +'px';
			
		};
		
		details_pic.onmouseout=function(){
			handle.style.display=big_glass.style.display='none';	
		};

	//选择手表数量-------------------------
	
	var shopCat=hxsd_tools.getByClass(document,'shop_cat')[0];	
	var oInput=shopCat.getElementsByTagName('input')[0];	
	var Add=hxsd_tools.getByClass(shopCat,'add')[0];
	var Minus=hxsd_tools.getByClass(shopCat,'minus')[0];
	var Num=0;
	//增加数量
	Add.onclick=function(){
		Num++;
		oInput.value=Num+1;	
		Minus.className='minus'
	};	
	//减少数量
	Minus.onclick=function(){						
		Num--;
		if(Num<0){
			Num=0
			Minus.className='minus dp'//num为0时鼠标变圆形
		};				
		oInput.value=Num+1;			
	};	
	if(Num==0){
		Minus.className='minus dp'//鼠标变圆形
	};
	
	
	//选择型号--------------------------
	function serch(){
		var oColor=hxsd_tools.getByClass(document,'ser_color')[0];				
		var ColorLi=oColor.getElementsByTagName('li');
		//循环绑事件
		for (var i=0;i<ColorLi.length;i++) {
			
			ColorLi[i].onclick=function(){
				for (var j=0;j<ColorLi.length;j++) {
					ColorLi[j].className=''
				};
				this.className='now'				
			};			
		};
		
	};
	serch();
	
	//选择分期-------------------------------
	function white_bar(){
		var white_bar=hxsd_tools.getByClass(document,'white_bar')[0];		
		var aLi=white_bar.getElementsByTagName('li');
		var noMoney=document.getElementById('no_money');
		var noMoney_a=noMoney.getElementsByTagName('a')[0];
		for (var j=0;j<aLi.length;j++) {
			aLi[j].onclick=function(){
				//点击增加本省的类并显示'打白条'----------
				if(this.className==''){
					for (var k=0;k<aLi.length;k++) {
						aLi[k].className='';						
					}				
					this.className='now'
					noMoney_a.style.display='block'
				}else if (this.className=='now') {//再次点击删除类并且隐藏‘打白条’--
					this.className=''
					noMoney_a.style.display='none'
				};			
			};
		};	
	};
	white_bar(); //调用函数


	//推荐商品区域的选项卡
		
	function tab(){
		var tab_rmd=document.getElementById('tab_rmd');
		var aLi=tab_rmd.getElementsByTagName('li');	
		var armature=hxsd_tools.getByClass(document,'armature');
		//所有li绑定事件
		for (var i=0;i<aLi.length;i++) {
			aLi[i].index=i;//发牌照
			aLi[i].onclick=function(){
				for (var j=0;j<aLi.length;j++) {//循环全部干掉
					aLi[j].className=''
					armature[j].style.display='none';				
				};
				this.className='present';
				armature[this.index].style.display='block';			
			};	
		};
	};
	tab();//调用函数

	
	
});	
	
		

















