var temporizador;
var temporizador1;
var temporizador2;
var temporizador3;


//---------------------------------------------------------------------------------

function iniciar() {

    temporizador = setTimeout("mensaje()", 1800);
    temporizador1 = setTimeout("mensaje1()", 2000);
    temporizador2 = setTimeout("mensaje2()", 5500)
    temporizador3 = setTimeout("mensaje3()", 8500)
	}

//---------------------------------------------------------------------------------

function mensaje() {
	document.getElementById('oak').src = "img/rojo1.jpg";
}

//---------------------------------------------------------------------------------

function mensaje1() {

	 opcionUsuario = prompt("¿Como te llamas?");

		if(opcionUsuario==undefined)
		{
			alert("Porque no quieres decirme tu nombre? vamos intentalo de nuevo");
			return mensaje1()

		}else if(opcionUsuario==""){
			alert("Ha pulsado aceptar con el campo vacio");
			return mensaje1() 
		}else{

			document.getElementById('oak').src = "img/gary1.png";

		}

	}

//---------------------------------------------------------------------------------

	function mensaje2() {

	 opcionRival = prompt("¿Como se llama tu Rival?");

		if(opcionRival==undefined)
		{
			alert("¿No te acuerdas como se llama? vamos intenta de nuevo");
			return mensaje2()

		}else if(opcionRival==""){
			alert("Ha pulsado aceptar con el campo vacio");
			return mensaje2() 
		}else{
			
			document.getElementById('oak').src = "img/oak1.png";
		}
		}

//---------------------------------------------------------------------------------

function mensaje3() 
{
	document.write("<link href='css/estilos.css' rel='stylesheet'>" +

"<body bgcolor='black'>"+
	"<div id='vs1'>"+
		"<table width='1003' border='0' align='center' cellpadding='0' cellspacing='0'>"+
       	 "<tr>"+
          "<td width='89'>"+
            "<div class='letra' id='piedra'>Piedra</div>"+
            "<img src='img/piedra.png' class='box1' style='cursor:pointer;' id='0' onclick='e_v_d(0)'>"+         
          "</td>"+

          "<td width='72' rowspan='5'>&nbsp;</td>"+
          "<td colspan='7' rowspan='5'><img src='img/gs.png' class='box2' id='vs'></td>"+
        "</tr>"+

        "<tr>"+
          "<td>"+ 
            "<div class='letra' id='papel'>Papel</div>"+
            "<img src='img/papel.png' class='box1' style='cursor:pointer;' id='1' onclick='e_v_d(1)'>"+
          "</td>"+
        "</tr>"+

        "<tr>"+
          "<td>"+
            "<div class='letra' id='tijera'>Tijera</div>"+
            "<img src='img/tijera.png' class='box1' style='cursor:pointer;' id='2' onclick='e_v_d(2)'>"+
          "</td>"+
        "</tr>"+

        "<tr>"+
          "<td>"+
            "<div class='letra' id='lagarto'>Lagarto</div>"+
            "<img src='img/lagarto.png' class='box1' style='cursor:pointer;' id='3' onclick='e_v_d(3)'>"+
          "</td>"+
        "</tr>"+

        "<tr>"+
          "<td>"+
            "<div class='letra' id='spock'>Spock</div>"+
            "<img src='img/spock.png' class='box1' style='cursor:pointer;' id='4' onclick='e_v_d(4)'>"+
          "</td>"+
        "</tr>"+

        "<tr>"+
          "<td>&nbsp;</td>"+
            "<td>&nbsp;</td>"+
            "<td colspan='7'>&nbsp;</td>"+
        "</tr>"+

          "<tr>"+
            "<td rowspan='2'>&nbsp;</td>"+
            "<td rowspan='2'>&nbsp;</td>"+
            "<td width='35' rowspan='2'>&nbsp;</td>"+

            "<td width='68' rowspan='2'>"+
              "<img src='img/perfil.png' class='box3'>"+
            "</td>"+

            "<td height='45' colspan='2'><div class='letra1'>"+opcionUsuario+"</div></td>"+
            "<td width='228'><div class='letra2'>"+opcionRival+"</div></td>"+

            "<td width='68' rowspan='2'>"+
              "<img src='img/perfil1.png' class='box3'>"+
            "</td>"+

            "<td width='92' rowspan='2'>&nbsp;</td>"+
          "</tr>"+
          
          "<tr>"+
            "<td width='232'>"+
              "<img src='img/vida/vida.png' id='vida'>"+
            "</td>"+
            "<td width='119'><div align='center' id='reglas'><img src='img/reg.png' style='cursor:pointer;' onclick='reglas()'></div></td>"+
            "<td width='228'>"+
              "<div align='right'>"+
                "<img src='img/vida/vidar.png' id='vidar'>"+
              "</div>"+
            "</td>"+
          "</tr>"+
      "</table>"+
	"</div>"+
	"<br><br><div class='letra2'>Matias Leonel - mejorando.la</font>"+
"</body>") 
};

//--------------------------------------------------------------------------------------------------------------------------------


var pagina="cartel.html";
var pagina1="cartel1.html";

function reglas()
{
document.getElementById('vs').src = "img/reglas.jpg";
document.getElementById('reglas').innerHTML ="<img src='img/reg.png' style='cursor:pointer;' onclick='reglas1()'>";

}

function reglas1()
{
document.getElementById('vs').src = "img/gs.png";
document.getElementById('reglas').innerHTML ="<img src='img/reg.png' style='cursor:pointer;' onclick='reglas()'>";

}


function ganaste() 
{
location.href=pagina
} 

function perdiste()
{
	location.href=pagina1
}

function vidaUsuario()

{

	if (derrotasUsuario==1){
			document.getElementById('vida').src = "img/vida/vida1.png";
		}
					
		else if(derrotasUsuario==2){
			document.getElementById('vida').src = "img/vida/vida2.png";
		}
					
		else if (derrotasUsuario==3){
			document.getElementById('vida').src = "img/vida/vida3.png";
		}
					
		else if (derrotasUsuario==4){
			document.getElementById('vida').src = "img/vida/vida4.png";
		}
					
		else if (derrotasUsuario==5){
			document.getElementById('vida').src = "img/vida/vida5.png";
		}
					
		else if(derrotasUsuario==6) {
			document.getElementById('vida').src = "img/vida/vida6.png";
		}
		else if(derrotasUsuario==7) {

			perdiste();

			}
}

//----------------------------------------------------------------------------------

function vidaRival()
{

	if (derrotasMaquina==1){
		document.getElementById('vidar').src = "img/vida/vidar1.png";
	}
					
	else if(derrotasMaquina==2){
		document.getElementById('vidar').src = "img/vida/vidar2.png";
	}
					
	else if (derrotasMaquina==3){
		document.getElementById('vidar').src = "img/vida/vidar3.png";
	}
					
	else if (derrotasMaquina==4){
		document.getElementById('vidar').src = "img/vida/vidar4.png";
	}
					
	else if (derrotasMaquina==5){
		document.getElementById('vidar').src = "img/vida/vidar5.png";
	}
					
	else if(derrotasMaquina==6) {
		document.getElementById('vidar').src = "img/vida/vidar6.png";
	}
	else if(derrotasMaquina==7) {
		
		ganaste();

		}

}
//----------------------------------------------------------------------------------

var derrotasUsuario=0;
var derrotasMaquina=0;
var id;

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------

function e_v_d (id)

{

	function aleatorio(minimo, maximo)

		{
			var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo)
			return numero;
		}
 //----------------------------------------------------------------------------------

	var piedra = 0;
	var papel = 1;                                                             
	var tijera = 2;
	var lagarto = 3;
	var spock = 4;
	var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
	var opcionUsuario=id;
	var opcionMaquina = aleatorio(0,4);

 //------------------------------------------------------------------------------------------------
 //-------------EMPATE---------EMPATE---------EMPATE-------------EMPATE--------------EMPATE--------

	if (opcionUsuario == piedra && opcionMaquina== piedra || 
		opcionUsuario == papel && opcionMaquina== papel || 
		opcionUsuario == tijera && opcionMaquina== tijera ||
		opcionUsuario == lagarto && opcionMaquina== lagarto ||
		opcionUsuario == spock && opcionMaquina== spock) 

		{
			if (opcionUsuario == piedra && opcionMaquina == piedra)
			{ 
				document.getElementById('vs').src = "img/gif/piedra vs piedra.gif";  
			} 

			else if (opcionUsuario == papel && opcionMaquina == papel)
			{
				document.getElementById('vs').src = "img/gif/papel vs papel.gif";  
			}

			else if (opcionUsuario == tijera && opcionMaquina == tijera)
			{
				document.getElementById('vs').src = "img/gif/tijera vs tijera.gif";  
			}

			else if (opcionUsuario == lagarto && opcionMaquina == lagarto)
			{
				document.getElementById('vs').src = "img/gif/lagarto vs lagarto.gif";  
			}

			else if (opcionUsuario == spock && opcionMaquina == spock)
			{
				document.getElementById('vs').src = "img/gif/spock vs spock.gif";  
			}
		}

 //------------------------------------------------------------------------------------------------
 //-------------GANASTE--------GANASTE-----------GANASTE-----------GANASTE-------GANASTE-----------
			
	else if (opcionUsuario == piedra && opcionMaquina== lagarto || 
			 opcionUsuario == piedra && opcionMaquina== tijera ||
			 opcionUsuario == papel && opcionMaquina== piedra || 
			 opcionUsuario == papel && opcionMaquina== spock ||
			 opcionUsuario == tijera && opcionMaquina== papel || 
			 opcionUsuario == tijera && opcionMaquina== lagarto ||
			 opcionUsuario == lagarto && opcionMaquina== papel || 
			 opcionUsuario == lagarto && opcionMaquina== spock ||
			 opcionUsuario == spock && opcionMaquina== piedra || 
			 opcionUsuario == spock && opcionMaquina== tijera) 

			{
				if(opcionUsuario == piedra && opcionMaquina== lagarto )
				{
					document.getElementById('vs').src = "img/gif/piedra vs lagarto.gif";	
				}	

				else if (opcionUsuario == piedra && opcionMaquina== tijera)		
				{
					document.getElementById('vs').src = "img/gif/piedra vs tijera.gif";				
				}

				else if (opcionUsuario == papel && opcionMaquina== piedra)		
				{
					document.getElementById('vs').src = "img/gif/papel vs piedra.gif";				
				}

				else if (opcionUsuario == papel && opcionMaquina== spock)		
				{
					document.getElementById('vs').src = "img/gif/papel vs spock.gif";				
				}

				else if (opcionUsuario == tijera && opcionMaquina== papel)		
				{
					document.getElementById('vs').src = "img/gif/tijera vs papel.gif";				
				}

				else if (opcionUsuario == tijera && opcionMaquina== lagarto)		
				{
					document.getElementById('vs').src = "img/gif/tijera vs lagarto.gif";				
				}

				else if (opcionUsuario == lagarto && opcionMaquina== papel)		
				{
					document.getElementById('vs').src = "img/gif/lagarto vs papel.gif";				
				}

				else if (opcionUsuario == lagarto && opcionMaquina== spock)		
				{
					document.getElementById('vs').src = "img/gif/lagarto vs spock.gif";				
				}

				else if (opcionUsuario == spock && opcionMaquina== piedra)		
				{
					document.getElementById('vs').src = "img/gif/spock vs piedra.gif";				
				}

				else if (opcionUsuario == spock && opcionMaquina== tijera)		
				{
					document.getElementById('vs').src = "img/gif/spock vs tijera.gif";				
				}

				derrotasMaquina++;			
				vidaRival();
			}

 //------------------------------------------------------------------------------------------------
 //-------------PERDISTE------------PERDISTE-----------PERDISTE--------------PERDISTE--------------

	else if (opcionUsuario == piedra && opcionMaquina== papel || 
			 opcionUsuario == piedra && opcionMaquina== spock ||
			 opcionUsuario == papel && opcionMaquina== tijera || 
			 opcionUsuario == papel && opcionMaquina== lagarto ||
			 opcionUsuario == tijera && opcionMaquina== piedra || 
			 opcionUsuario == tijera && opcionMaquina== spock ||
			 opcionUsuario == lagarto && opcionMaquina== piedra || 
			 opcionUsuario == lagarto && opcionMaquina== tijera ||
			 opcionUsuario == spock && opcionMaquina== papel || 
			 opcionUsuario == spock && opcionMaquina== lagarto) 

			{

				if(opcionUsuario == piedra && opcionMaquina== papel)
				{
					document.getElementById('vs').src = "img/gif/piedra vs papel.gif";
				} 

				else if (opcionUsuario == piedra && opcionMaquina== spock)
				{
					document.getElementById('vs').src = "img/gif/piedra vs spock.gif";			
				}

				else if (opcionUsuario == papel && opcionMaquina== tijera)
				{
					document.getElementById('vs').src = "img/gif/papel vs tijera.gif";			
				}

				else if (opcionUsuario == papel && opcionMaquina== lagarto)
				{
					document.getElementById('vs').src = "img/gif/papel vs lagarto.gif";			
				}

				else if (opcionUsuario == tijera && opcionMaquina== piedra)
				{
					document.getElementById('vs').src = "img/gif/tijera vs piedra.gif";			
				}

				else if (opcionUsuario == tijera && opcionMaquina== spock)
				{
					document.getElementById('vs').src = "img/gif/tijera vs spock.gif";			
				}

				else if (opcionUsuario == lagarto && opcionMaquina== piedra)
				{
					document.getElementById('vs').src = "img/gif/lagarto vs piedra.gif";			
				}

				else if (opcionUsuario == lagarto && opcionMaquina== tijera)
				{
					document.getElementById('vs').src = "img/gif/lagarto vs tijera.gif";			
				}

				else if (opcionUsuario == spock && opcionMaquina== papel)
				{
					document.getElementById('vs').src = "img/gif/spock vs papel.gif";			
				}

				else if (opcionUsuario == spock && opcionMaquina== lagarto)
				{
					document.getElementById('vs').src = "img/gif/spock vs lagarto.gif";			
				}

				derrotasUsuario++;
				vidaUsuario();	
			} 
}