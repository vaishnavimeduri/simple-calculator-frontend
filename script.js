// ----------------------------for digits,clr,del,.,=-----------------------
function buttonclicked(button){
    if(document.getElementById("display").innerText.length==15){
        return
    }
    switch(button){
    case "0":{
        if(document.getElementById("display").innerText=="0"||document.getElementById("display").innerText=="00"){
            document.getElementById("display").innerText="0"
        }
        else{
        document.getElementById("display").innerText+="0"
        }
    break;
    }
    case "1":{
        if(document.getElementById("display").innerText=="0"){
            document.getElementById("display").innerText="1"
        }
        else{
        document.getElementById("display").innerText+="1"
        }
    break;
    }
    case "2":{
        if(document.getElementById("display").innerText=="0"){
            document.getElementById("display").innerText="2"
        }
        else{
        document.getElementById("display").innerText+="2"
        }
    break;
    }
    case "3":{
        if(document.getElementById("display").innerText=="0"){
            document.getElementById("display").innerText="3"
        }
        else{
        document.getElementById("display").innerText+="3"
        }
    break;
    }
    case "4":{
        if(document.getElementById("display").innerText=="0"){
            document.getElementById("display").innerText="4"
        }
        else{
        document.getElementById("display").innerText+="4"
        }
    break;
    }
    case "5":{
        if(document.getElementById("display").innerText=="0"){
            document.getElementById("display").innerText="5"
        }
        else{
        document.getElementById("display").innerText+="5"
        }
    break;
    }
    case "6":{
        if(document.getElementById("display").innerText=="0"){
            document.getElementById("display").innerText="6"
        }
        else{
        document.getElementById("display").innerText+="6"
        }
    break;
    }
    case "7":{
        if(document.getElementById("display").innerText=="0"){
            document.getElementById("display").innerText="7"
        }
        else{
        document.getElementById("display").innerText+="7"
        }
    break;
    }
    case "8":{
        if(document.getElementById("display").innerText=="0"){
            document.getElementById("display").innerText="8"
        }
        else{
        document.getElementById("display").innerText+="8"
        }
    break;
    }
    case "9":{
        if(document.getElementById("display").innerText=="0"){
            document.getElementById("display").innerText="9"
        }
        else{
        document.getElementById("display").innerText+="9"
        }
    break;
    }
    case ".":{
        if(document.getElementById("display").innerText[document.getElementById("display").innerText.length-1]!='.')
        document.getElementById("display").innerText+="."
    break;
    }
    case "00":{
        if(document.getElementById("display").innerText=="0"){
            document.getElementById("display").innerText="0"
        }
        else{
        document.getElementById("display").innerText+="00"
        }
    break;
    }
    case "clr":document.getElementById("display").innerText="0"
    break;
    case "del":document.getElementById("display").innerText=document.getElementById("display").innerText.slice(0,-1)
    break;
    case "=":evaluate()
}
}
// ----------------------------------for operators---------------------------------
function operatorButtonClicked(button){
    if(document.getElementById("display").innerText.length==15){
        return
    }
if(isOperator(document.getElementById("display").innerText[document.getElementById("display").innerText.length-1])){
document.getElementById("display").innerText=document.getElementById("display").innerText.slice(0,-1)+button
console.log('hi')
}
else{
    document.getElementById("display").innerText+=button  
}
}

// ------------------------------------checking buttonclicked is operator or not----------------------
function isOperator(button){
    if(button=='+'||button=='-'||button=='*'||button=='/'||button=='%'){
        return true
    }
    return false
}

// -----------------------------------eval------------------------------------------
function evaluate(){
    try{
      document.getElementById("display").innerText=eval(document.getElementById("display").innerText)
      document.getElementById("display").innerText=document.getElementById("display").innerText.slice(0,16)
        }
    catch(err){
        alert('enter valid expression')
        document.getElementById("display").innerText='0'
    }
}