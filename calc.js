function btnclick(val) {
  document.getElementById("screen").value=document.getElementById("screen").value+=val;
}
function clearscreen() {
    document.getElementById("screen").value = ""
}
function equalclick() {
    var text = document.getElementById("screen").value
    // stringne evaluate cheyyan eval use cheyyunnu.
    var result = eval(text)
    document.getElementById("screen").value = result

}
function dltbtn(){
    // string nte last item remove aakkan slice method usiyyanu.0-1 kodetha last item remove aakum.
    document.getElementById("screen").value =     document.getElementById("screen").value.slice(0,-1)
   



}