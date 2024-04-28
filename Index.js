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


    if (items.length > 5) {
        var showAllBtn = document.createElement("button");
        showAllBtn.textContent = "SHOW ALL";
        
        showAllBtn.addEventListener("click", function() {
            // Display all items
            oldContent.textContent = ""; // Clear previous content
            items.forEach(item => {
                var newDiv = document.createElement("div");
                newDiv.innerHTML = 
                         `Meal ID: <b>  ${item.idMeal}</b> <br>
                          Meal Title: <b> ${item.strMeal}</b> <br>
                          Catagory: <b> ${item.strCategory}</b> <br>
                          <img src="${item.strMealThumb}"> <br>
                     <b>  Cooking Instructions: </b> ${item.strInstructions} <br> <br>`;
                newDiv.classList.add("innerStyle");
                oldContent.appendChild(newDiv);
            });
            // Hide the "SHOW ALL" button
            this.style.display = "none";
        });
        oldContent.appendChild(showAllBtn);
    }







}