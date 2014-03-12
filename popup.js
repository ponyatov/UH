
var USER = 'dponyatov';
var SERVER = '127.0.0.1:1979';

function lds() {
    var plain = document.createElement("iframe");
    plain.name='ya';
    //plain.src='http://ya.ru';
    document.body.appendChild(plain);
    var img = document.createElement("img"); 
    img.src="icon-quality-collaboration.png";
    img.scale='50%';
    img.style.border=1;
    document.body.appendChild(img);
    //var us = document.getElementById("user");
    us=USER;
//   window.location.assign('http://ya.ru');
    //document.body='ya!';
}

window.onload = lds;
