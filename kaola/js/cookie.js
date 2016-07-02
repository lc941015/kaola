//document.cookie
			function setCookie(cookieName,val,time) {
				//document.cookie = "名称=值";
				//document.cookie = "名称=值;expires=时间";
				var d = new Date().getTime();
				d= new Date(d+time);
				document.cookie = cookieName+'='+val+";expires="+d+';path=/';
			}
			function getCookie(cookName) {
				var cookie = document.cookie;
				console.info("获取cookie", cookie);
				var cookArr = cookie.split('; ');
				console.info('cookie数组', cookArr);
				for (var i = 0; i < cookArr.length; i++) {
					//cook = ["名称","值"]
					var cook = cookArr[i].split('=');
					if (cook[0] == cookName) {
						return cook[1];
					}
				}
				return '';
			}
			
			function delCookie(cookieName) {
				document.cookie = cookieName+"=;expires=-1;path=/"
			}
			