const searchForm =document.querySelector('form');
const searchResultDiv =document.querySelector('.Search-result');
const container =document.querySelector('.container');
 let searchQuery='';
const APP_ID='e4890612'
const APP_Key='8be4a5f4d410dab18677d3db58743331';

searchForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  searchQuery=e.target.querySelector('input').value;
fetchAPI();
});
async function fetchAPI(){
  // const baseURL =`https://api.edamam.com/doc/open-api/recipe-search-v2?q=pizza&app_id=${APP_ID}&app_key=${APP_Key}`
  const baseURL =`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_Key}`

   const response = await fetch(baseURL);
   const data = await response.json();
   generateHTML(data.hits)
    console.log(data);

}
function generateHTML(results){
  container.classList.remove('initial');
  let generateHTML='';
  results.map(result=>{
    generateHTML+=
    `<div class="item">
          <img src="${result.recipe.image}" alt="">
          <div class="flex-container">
            <h1 class="title">${result.recipe.label}</h1>
            <a class="view-button" href="${result.recipe.url}target="_blank">View Recipe</a>
          </div>
          <p  class="item-data">Calories:${result.recipe.calories.toFixed(2)}</p>
          <p  class="item-data">Diet label:${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels.length :"No data found"}</p>
          <p  class="item-data">Health Label:${result.recipe.healthLabels}</p>

        </div>`
  })
  searchResultDiv.innerHTML=generateHTML;
}