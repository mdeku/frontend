
// function changeName(){
//     document.getElementById("title").innerHTML="<h1 class='halloween'>Hello HTML</h1>";
// }
// document.getElementById("btn-change")
// .addEventListener("click",
// function(){
//     showOptionNew();
// });
// document.getElementById("btn-add")
// .addEventListener("click",function()
// {
//     addOptionNew();
// });
var isCreated=false;
 function showOption(){
    var para = document.createElement("select");
    for(var i=1; i<3 ;i++){
        var node = document.createElement("option");
        var nodeText = document.createTextNode(i);
        node.appendChild(nodeText);
        para.appendChild(node);
    }
    
    document.getElementById("zoday").appendChild(para);
    isCreated=true;
 }

 function addOption(){
     if(document.getElementById("user").value != ""){
        document.getElementById("err1").style.display="none";
        if(!isCreated){
            showOption();
         }
         var para = document.getElementsByTagName("select")[0];
         var node = document.createElement("option");
         var nodeText = document.createTextNode(document.getElementById("user").value.trim());
         node.appendChild(nodeText);
         para.appendChild(node);
         
         document.getElementById("zoday").appendChild(para);
         return;
     }
     document.getElementById("err1").style.display="block";
 }

 function showOptionNew(){
    var option="";
    for(var i=1; i<3 ;i++){
        option += "<option>"+i+"</option>";
    }
    document.getElementById("zoday").innerHTML="<select id='danhsach'>"+
    option+
    "</select>";
 }

 function addOptionNew(){
     var dropdown=document.getElementById("danhsach");
     if(dropdown === null){
        showOptionNew();
     }
     dropdown=document.getElementById("danhsach");
     var option="<option>"+document.getElementById("user").value+"</option>";
     dropdown.innerHTML=dropdown.innerHTML+option;
     return;
 }
 function checkRequire(){
    if(document.getElementById("user").value == "" 
    || document.getElementById("pass").value == "" ){
        document.getElementById("mess")
        .innerText="Bạn cần nhập đủ username và password.";
        return false;
    }
    return true;
 }
 function login(){
     if(checkRequire()){
        window.location.href="./todo.html";
     }
 }