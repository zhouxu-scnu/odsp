import {ServerHost} from './projectConfig.js';
//将token附加在http请求头中，并封装起来供外部调用，此处基于原生js封装仅供示例，后续会换成基于axios封装
const customXhr = (function(){	
	return {
		get_t: function(url,cb){
			const token = window.localStorage.getItem("token");
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
						cb(JSON.parse(xhr.responseText), xhr.status);
					}else{
						cb(new Error(), xhr.status);
					}
				}
			}
			xhr.open("get", ServerHost + url, true);
			xhr.setRequestHeader("Authorization", token);
			xhr.send(null);
		},
		post_t: function(url,data,cb){
			const token = window.localStorage.getItem("token");
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
						cb(JSON.parse(xhr.responseText), xhr.status);
					}else{
						cb(new Error(), xhr.status);
					}
				}
			}
			xhr.open("post", ServerHost + url, true);
			xhr.setRequestHeader("Authorization", token);
			xhr.send(data);
		}
	}
})();

export {customXhr};