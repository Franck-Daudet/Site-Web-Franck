var x = document.cookie; 
style1 = document.getElementById("theme1");
style2 = document.getElementById("theme2");
var CvManquant="Mon Cv n'est pas encore finis, je le mettrais dès que possible";

function ChangeStylesheet () {
	if ( getCookie('Style') == "1") {
		document.cookie = "Style=2";
		style1.setAttribute('media', '');
		style2.setAttribute('media', 'none');
	} else {
		document.cookie = "Style=1";
		style1.setAttribute('media', 'none');
		style2.setAttribute('media', '');
		location.reload()
		// sans reload la page ne prend pas le order:3 de la seconde page de script 
		// sans ce reload de la page le boutton se place au dessus des 3 liens
	}
}

function OnLoadStylesheet () {
	if ( getCookie('Style') == "1") {
		style1.setAttribute('media', 'none');
		style2.setAttribute('media', '');
	} else {
		style1.setAttribute('media', '');
		style2.setAttribute('media', 'none');
	}
}

//https://www.analyste-programmeur.com/javascript/cookies/lire-un-cookie-javascript
function  getCookie(name){
	if(document.cookie.length == 0)
	  return null;
	var regSepCookie = new RegExp('(; )', 'g');
	var cookies = document.cookie.split(regSepCookie);

	for(var i = 0; i < cookies.length; i++){
	  var regInfo = new RegExp('=', 'g');
	  var infos = cookies[i].split(regInfo);
	  if(infos[0] == name){
		return unescape(infos[1]);
	  }
	}
	return null;
}

//https://www.equinode.com/blog/article/executer-du-code-javascript-au-chargement-de-la-page
function monScript() {
	console.log('HTML prêt !');
  }
  if (document.readyState === 'complete') {
	OnLoadStylesheet ();
  } else {
	document.addEventListener('DOMContentLoaded', function() {
	OnLoadStylesheet ();
	});
  }


  function Cv(txt) {
	var msg=txt;
	console.log(msg)
	alert(msg);
}