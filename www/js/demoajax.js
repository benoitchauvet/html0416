var req = new XMLHttpRequest();

req.open("GET", "/ajax.txt", true);

req.onreadystatechange = function()
{
    if(req.readyState == 4)
    {
      if(req.status == 200 || req.status == 304)
      {
        document.querySelector("header").innerHTML = req.responseText;
      }
      else
      {
          console.log("ERREUR !!!!!");
      }
    }  
};

req.send();