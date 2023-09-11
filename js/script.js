const boxesContainer = document.querySelector(".boxes");
for(let i = 1; i <=100; i++){
  const box = document.createElement("div");
  box.classList.add("box", "m-3", "bg_default")
  box.append(i);
  console.log(box);
  
}