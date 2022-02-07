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
    console.log(meals);
  } catch (error) {
    console.log("error:", error);
  }
}
getdish();
// idMeal: "52807"
// strMeal: "Baingan Bharta"
// strMealThumb: "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg"

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

        let box=document.createElement("div")
        box.append(img, name, price, addbtn)


        menudiv.append(box)

    })
}
