//var iScale=1/window.devicePixelRatio;
//document.write('<meta name="viewport" content="width=device-width,initial-scale='+iScale+',minimum-scale='+iScale+',maximum-scale='+iScale+',user-scalable=no"/>');
//var iWidth=document.documentElement.clientWidth;
//document.getElementsByTagName('html')[0].style.fontSize=iWidth/54+ 'px';

var num = 1 / window.devicePixelRatio;
			document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale='+num+',minimum-scale='+num+',maximum-scale='+num+'" />')
			
			var fontNum = document.documentElement.clientWidth / 18;
			var html = document.getElementsByTagName('html')[0];
			html.style.fontSize = fontNum + 'px';