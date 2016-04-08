var dessin = document.getElementById("monDessin");
var contexte = dessin.getContext('2d');

function chemin()
{
  contexte.strokeStyle = 'red';
  contexte.fillStyle = 'green';
  
  contexte.beginPath();
  contexte.moveTo(80,20);
  contexte.lineTo(100,20);
  contexte.lineTo(100,80);
  contexte.lineTo(180,80);
  contexte.lineTo(180,100);
  contexte.lineTo(100,100);
  contexte.lineTo(100,180);
  contexte.lineTo(80,180);
  contexte.lineTo(80,100);
  contexte.closePath();

  //contexte.rotate(45);
   
  contexte.globalAlpha = 0.5;
  contexte.stroke();
  contexte.fill();
}

chemin();
drapeauSuisse();


function drapeauSuisse()
{
  contexte.fillStyle = 'red';
  contexte.strokeStyle = 'white';

  contexte.fillRect(0,0,dessin.width,dessin.height);

  contexte.fillStyle = 'white';

  contexte.fillRect(80,20,40,160);

  contexte.fillRect(20,80,160,40);
}



