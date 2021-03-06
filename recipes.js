let searchbar = document.querySelector("#recipe");
let button = document.querySelector(".button");
let container = document.querySelector(".container");


button.addEventListener("click", function search() {
  container.innerHTML = "I'm looking";
  fetch("https://crossorigin.me/http://www.recipepuppy.com/api/?q=" + searchbar.value)
    .then(function(response) {

      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(obj) {


        obj.results.forEach(function(result) {

          let imagesource = result.thumbnail
          let title = result.title
          let link = result.href

          if (payload.thumbnail === '') {
                    payload.thumbnail = "http://via.placeholder.com/150x115";
                  }

                result = `
                  <div class="recipes">
                    <a href="${payload.href}">
                    <img src="${payload.thumbnail}">
                    <h3>${payload.title}</h3>
                    </a>
                  </div>



          container.innerHTML += result;

        });
      })

    })
    .catch(function(error) {
      console.log('Fetch Error :-S', err);
    });
})
