var React = require("react") ;
var Loading = require("app/components/loading");
var Alert = require("app/components/Alert") ;
Loading.show();
/*setTimeout(function(){
	Alert.show({
		title:"警告",
		content:"确定删除吗",
		button:{
			buttonName:"我知道了",
			callback:function(){
				Loading.show();
				Alert.destroy();
			}
		}
	});
},3000)*/

var Dialog = require("app/components/Dialog");

Dialog.show({
	title:"删除确认",
	content:'确定要删除吗？',
	container:document.getElementById('dialog')
});



