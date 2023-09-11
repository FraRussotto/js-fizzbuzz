const boxesContainer = document.querySelector(".boxes");
for(let i = 1; i <=100; i++){
  const box = document.createElement("div");
  box.classList.add("box", "m-3", "bg_default", "text_fr")
  box.append(i);
  
  if(((i % 3) === 0) && ((i % 5) === 0)){
    box.classList.add("bg_red")
    box.innerHTML = "fizzbuzz";
  } else if((i % 3) === 0){
    box.classList.add("bg_green")
    box.innerHTML = "fizz";
  } else if((i % 5) === 0){
    box.classList.add("bg_yellow")
    box.innerHTML = "buzz";
  }
  boxesContainer.append(box);
}