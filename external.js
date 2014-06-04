function init()
{
   var panel = document.getElementById("panel");
   panel.innerHTML = "Click Here &gt;<br>";
   
   panel.onclick = clickResponse;
   panel.ondblclick = dblclickResponse;
   panel.onmouseup = mouseupResponse;
   panel.onmousedown = mousedownResponse;
   
   function clickResponse()
   {
      this.innerHTML += "Click detected<hr>";
   }
   function dblclickResponse()
   {
      this.innerHTML += "DoubleClick detected <br>";
   }
   
   function mousedownResponse()
   {
      this.innerHTML += "Mouse button down<br>";
   }
   
   function mouseupResponse()
   {
      this.innerHTML += "Mouse button up<br>";
   }
}
onload = init;
