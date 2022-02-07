

let cart=localStorage.getItem("cart")
if(!cart){
    cart=[]
    localStorage.setItem("cart", JSON.stringify(cart))
    
}else{
    cart=JSON.parse(cart)
 
}
// let p=Object.create(cart)
// p.price="Rs  "+Math.round(Math.random()*300)



cart.forEach(function(el){
    let image=document.createElement("img")
    image.src=el.strMealThumb;

    let name=document.createElement("p")
    name.textContent=el.strMeal

    let price=document.createElement("p")
    price.innerText="Rs  "+Math.round(Math.random()*300)

    let removebtn=document.createElement("button")
    removebtn.textContent="Remove"

   

    let div=document.createElement("div")
    div.append(image, name, price, removebtn)

    let cartDiv=document.getElementById("cart")
    cartDiv.append(div)
})
let totalBill=cart.reduce(function(acc, c){
    return acc+c.p
},0)


function total(totalBill){
    let total=document.getElementById("total");
    total.textContent=totalBill

}
total(totalBill)