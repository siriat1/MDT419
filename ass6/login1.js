window.onload = loginLoad;
function loginLoad(){
	var login = document.getElementById('myLogin')
    login.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
    const urlParans = new URLSearchParams(queryString)
	const username = urlParans.get('username');
	const password = urlParans.get('password');
	
	var username_ = document.forms["myLogin"]["username"]
	var password_ = document.forms["myLogin"]["password"]

	if(username != username_.value){
		alert("username incorrect");
		return false;
	}
	if(password != password_.value){
		alert("password incorrect");
		return false;
	}
	else{
		alert("success")
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			