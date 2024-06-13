
let input = document.getElementById('inp');
let section = document.querySelector('section');


   function get(){
    section.innerHTML = "";
    let response = fetch(`https://images-api.nasa.gov/search?q=${input.value}`)
    .then(response => response.json())
    .then(data => {
    
            console.log(data)
     data.collection.items.forEach(element => {
         
        console.log(element.data[0].description)
        section.innerHTML += `<div class="box">
                <img src=${element.links[0].href} alt="">
                <h1 >${element.data[0].title}</h1>
                <p>${element.data[0].description}</p>
             </div>`;       
    })});

  }

  let srch = document.getElementById('srch');


 srch.addEventListener("click", function(){
   if(input.value != ""){
    get();
   }else{
   alert("Search is empty");
   }
 })



 











