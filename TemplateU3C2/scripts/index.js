let menudiv = document.getElementById("menu");

async function getdish() {
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
    );
    let data = await res.json();
   // console.log("data:", data);
    let meals = data.meals;
    appendMeals(meals)
   // console.log(meals);
  } catch (error) {
    console.log("error:", error);
  }
}
getdish();
 
let cart=localStorage.getItem("cart")
if(!cart){
    cart=[]
    localStorage.setItem("cart", JSON.stringify(cart))
    CartCount(cart)
}else{
    cart=JSON.parse(cart)
 
}

function CartCount(cart){
   let count=document.getElementById("count");
   count.textContent="Order Count:-"+" "+cart.length;
   console.log("cartt")
}



function appendMeals(meals){
    meals.forEach(function(el){
        let name=document.createElement("p")
        name.innerText=el.strMeal

        let img=document.createElement("img")
        img.src=el.strMealThumb

        let price=document.createElement("p")
        price.innerText="Rs  "+Math.round(Math.random()*300)

        
        let addbtn=document.createElement("button")
        addbtn.textContent="Add to cart"
        addbtn.onclick=function (event){
            addTocart(el)
        }
            
        

        let box=document.createElement("div")
        box.append(img, name, price, addbtn)


        menudiv.append(box)

    })
    function addTocart(el){
        let cart=JSON.parse(localStorage.getItem("cart"))
        cart.push(el)
        localStorage.setItem("cart", JSON.stringify(cart))
        CartCount(cart)
    }
}
