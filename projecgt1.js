const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");


btn.forEach((button) => {
    console.log(button);
    button.addEventListener("click", (e) => {
      console.log(e);
      console.log(e.target);
      if(e.target.id === 'gray'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'pink'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'black'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
      }
    })
});