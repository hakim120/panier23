// let carts= document.querySelectorAll('.addCart');
// for(i=0;i<carts.length;i++)
// {
// carts[i].addEventListener('click', () =>{
//     console.log("added to cart");
// })

// }
{/* <tr>
      <th scope="row"><img src="triko.jpg"></th>
      <td><select><option>10</option></th>
        <option>20</option>
      <option>30</option>
    </select></td>
      <td>+1</td>
      <td>230dt</td>
      <td><button>remove</button></td>
      <td>460</td>
    </tr> */}


var tablebody=document.createElement("tbody")
var trikoNumber=0;
var articleNumber=0;
var spadriNumber=0;
var shortNumber=0;
var somme=0;

var addSpadri = document.getElementById("addSpadri");
addSpadri.addEventListener("click",handlerClickAddSpadri) 
function handlerClickAddSpadri(e){
  spadriNumber++;
    document.getElementById("dataCount").setAttribute("data-count",++articleNumber);
    console.log("Event Add spadri",e)
    if(spadriNumber === 1){
        var tr= document.createElement("tr");
        var th = document.createElement("th");
        th.setAttribute("scope","row");
        var img = document.createElement("img")
        img.setAttribute("src","spadri.jpg");
        th.appendChild(img);
        var td1 = document.createElement("td");
        td1.setAttribute("id","spadriquantity");
        td1.innerHTML=spadriNumber;
        tr.appendChild(th);
        tr.appendChild(td1);
        document.getElementById("tbody").appendChild(tr);
        var td4 = document.createElement("td");
        
        td4.innerHTML=400;
        tr.appendChild(td4);
        var  td10=document.createElement("td");
        td10.setAttribute("id","spadriyTotal");
        tr.appendChild(td10);

        td10.innerHTML=400;
        var td5=document.createElement("td");
var button = document.createElement("button");
button.innerHTML="Remove";
td5.appendChild(button);
tr.appendChild(td5);
        
        }
        document.getElementById("spadriquantity").innerHTML=spadriNumber;
        document.getElementById("spadriyTotal").innerHTML=somme+(spadriNumber*400);

   

}
var addShort = document.getElementById("addShort");
addShort.addEventListener("click",handlerClickAddShort) 
function handlerClickAddShort(e){
  ++shortNumber;
    document.getElementById("dataCount").setAttribute("data-count",++articleNumber);
    console.log("Event Add Short",e)
    if(shortNumber === 1){
        var tr= document.createElement("tr");
        var th = document.createElement("th");
        th.setAttribute("scope","row");
        var img = document.createElement("img")
        img.setAttribute("src","short.jpg");
        th.appendChild(img);
        var td1 = document.createElement("td");
        td1.setAttribute("id","shortquantity");
        td1.innerHTML=shortNumber;
        tr.appendChild(th);
        tr.appendChild(td1);
        document.getElementById("tbody").appendChild(tr);
        var td3 = document.createElement("td");
td3.setAttribute("Price","400");
td3.innerHTML=400;
tr.appendChild(td3);
var  td11=document.createElement("td");
        td11.setAttribute("id","shortiyTotal");
        
        tr.appendChild(td11);

        td10.innerHTML=400;
        var td3=document.createElement("td");
var button = document.createElement("button");
button.innerHTML="Remove";
td3.appendChild(button);
tr.appendChild(td3);
document.getElementById("tbody").appendChild(tr);
        
        }
        document.getElementById("shortquantity").innerHTML=shortNumber;
        document.getElementById("shortiyTotal").innerHTML=somme+(shortNumber*400);
    }

var addTriko = document.getElementById("addTriko");
addTriko.addEventListener("click",handlerClickAddTriko) 
function handlerClickAddTriko(e){
    ++trikoNumber;
    document.getElementById("dataCount").setAttribute("data-count",++articleNumber);
console.log(trikoNumber)
if(trikoNumber === 1){
var tr= document.createElement("tr");
var th = document.createElement("th");
th.setAttribute("scope","row");
var img = document.createElement("img")
img.setAttribute("src","triko.jpg");
th.appendChild(img);
var td1 = document.createElement("td");
td1.setAttribute("id","trikoquantity");
td1.innerHTML=trikoNumber;
tr.appendChild(th);
tr.appendChild(td1);
var td2 = document.createElement("td");
td2.innerHTML=250;
tr.appendChild(td2);
var  td12=document.createElement("td");
        td12.setAttribute("id","trikoyTotal");
        tr.appendChild(td12);
var td3=document.createElement("td");
var button = document.createElement("button");
button.innerHTML="Remove";
td3.appendChild(button);
tr.appendChild(td3);
document.getElementById("tbody").appendChild(tr);
///var somme=("trikoNumber*250"+"shortNumber*400"+"spadriNumber*400");



}
document.getElementById("trikoquantity").innerHTML=trikoNumber;
document.getElementById("trikoyTotal").innerHTML=somme+(trikoNumber*400);
}

//var somme=("trikoNumber*250"+"shortNumber*400"+"spadriNumber*400");
//var td7=document.createElement("td");
//td7.setAttribute("id","somme");
//td7.innerHTML=somme;
//tr.appendChild(td7);

///function handlerClickAddShort(e){
//document.getElementById("table").setAttribute("table","mytable");
//console.log("table");}




