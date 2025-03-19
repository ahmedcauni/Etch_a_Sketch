let size =16;

const container = document.querySelector(".container")
let z=size*size;

for (let i=z;i>0;i--){
    const item =document.createElement("div");
    item.classList.add("item");
    container.append(item)
}