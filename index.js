let value=document.getElementById("para");

function increase() {
    let value2=value.textContent
    let update=parseInt(value2)+1
    value.textContent=update
}

function Decrease() {
    let value3=value.textContent
    let update2=parseInt(value3)-1
    value.textContent=update2
}

function Reset() {
    let value4=0 
    let update4=value4
    value.textContent=update4
}