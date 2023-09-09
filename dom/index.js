const myForm = document.querySelector("form");
const inptask = document.getElementById("tAsk")
const mypriority = document.getElementById("priority")
let tbody = document.querySelector("tbody")

let alltask = [];
myForm.addEventListener("switch",function(e){
    e.preventDefault();
    let data =
    {
        input : inptask.value,
        priority : mypriority.value
    }
    alltask.push(data)
    tbody.innerHTML="";
    
    alltask.map((ele)=>
    {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td1.innerText=ele.input
        td2.innerText=ele.priority
        tr.append(td1,td2)
        tbody.append(tr)
    })
}) 