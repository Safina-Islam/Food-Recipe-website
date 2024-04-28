function connect () {
    var searchTerm = document.getElementById("searchBox").value ;
    document.getElementById("searchBox").value = "" ; 
                    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`; 
 
     fetch (url)
     .then (res=> res.json() )
     .then (data => display(data.meals) );
 }
 
 
 function display (items){
 
     var oldContent = document.getElementById("container");
      oldContent.textContent = "";
     
      for (var i = 1; i <= Math.min(items.length, 5); i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `Meal ID: <b>  ${items[i - 1].idMeal}</b> <br>
                          Meal Title: <b> ${items[i - 1].strMeal}</b> <br>
                          Catagory: <b> ${items[i - 1].strCategory}</b> <br>
                          <img src="${items[i - 1].strMealThumb}"> <br>
                     <b>  Cooking Instructions: </b> ${items[i - 1].strInstructions} <br> <br>`;
        newDiv.classList.add("innerStyle");

        oldContent.appendChild(newDiv);
    }










}