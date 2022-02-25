const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => showFood(data.meals));
};

const showFood = (foods) => {
  const cardDiv = document.getElementById("cardDiv");
  for (const food of foods) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div onclick="loadMealDetail(${food.idMeal})" class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${food.strMeal}</h5>
              <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
            </div>
          </div>
    `;
    cardDiv.appendChild(div);
  }
};


const loadMealDetail = mealId => {
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
  const detailsDiv = document.getElementById('meal-detail')
  const div = document.createElement('div')
  div.classList.add('card');
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 200)}</a>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `
  detailsDiv.appendChild(div)
}