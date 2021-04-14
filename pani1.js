let carts= document.querySelectorAll('.add to cart');
for(i=0;i<carts.length;i++)
{
charts[i].addEventListener('click', () =>{
    console.log("added to cart");
})

}
function cartnNmber (){
    let productNumber = localStorage.getItem('cartNumber');
localStorage.setItem('cartNum',  1  );
}