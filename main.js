let button = document.querySelector('#generate');
let display = document.querySelector('#display');

button.addEventListener('click', function(event){

  display.textContent="";
  event.preventDefault();
  
  fetch('http://recipepuppyproxy.herokuapp.com/api/?i=$', {
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      findFood(data)
    })

})

function findFood(data){

displayResults="";

  for(i=0; i<data.results.length; i++){
    var dish = data.results[Math.floor(Math.random()*data.results.length)];
  }
displayResults = `<h3><a href="${dish.href}">${dish.title}</a></h3>
                  <img src="${dish.thumbnail}"/>
                  <p>${dish.ingredients}</p>`

                display.insertAdjacentHTML('afterbegin', displayResults);
}
