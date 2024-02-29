// let input = document.querySelector(".input");
// let kitchenItems = document.querySelector(".kitchen-items");
// let addBtn = document.querySelector(".add-btn");
// let deleteBtns=[]

// const addKitchenItems = () => {
//   let inputData = input.value;
//   if (inputData !== "") {
//     let li = document.createElement("li");
//     li.innerText = inputData;
//     let deleteBtn = document.createElement("button");
//     deleteBtn.classList.add("delete-btn");
//     deleteBtn.innerText = "Delete";
//     li.appendChild(deleteBtn);
//     kitchenItems.appendChild(li);

//     deleteBtns.push(deleteBtn)
//     input.value = "";
//     input.focus();
//   } 
// };

// function deleteItems(event) {
//     deleteBtns.forEach((deleteBtn)=>{
//         if(event.target===deleteBtn){
//             event.target.parentElement.remove()
//         }
//     })
// }

// addBtn.addEventListener("click", addKitchenItems);
// deleteBtn.addEventListener("click", deleteItems);

let input = document.querySelector(".input");
let kitchenItems = document.querySelector(".kitchen-items");
let addBtn = document.querySelector(".add-btn");

const addKitchenItems = () => {
  let inputData = input.value;
  if (inputData !== "") {
    let li = document.createElement("li");
    li.innerText = inputData;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    kitchenItems.appendChild(li);

    input.value = "";
    input.focus();
  }
};

addBtn.addEventListener("click", addKitchenItems);
