// JavaScript Document

$(document).ready(function (e) {
	document.addEventListener("Deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizó a la izquierda",function(){"Aplicacion7","OK"});
		});
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Qué deseas hacer?",function(op){
				switch(op)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(1500);
					break;
				}
			},"Aplicacion7","Sonar,Vibrar,Cancelar");	
		});
	},false);
});