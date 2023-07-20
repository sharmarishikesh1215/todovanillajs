const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  // console.log(event.key);
  if (event.key == "Enter") {
    // console.log(this.value);  to get the whole text entered by the user
    addToDo(this.value); // pass the entered item to the fn
    this.value = "";
  }
});


const addToDo = (item) => {
  // ADDING LIST ITEM
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        ${item}
        <i class="fa fa-times"></i>
    `;

  // MARKING AS DONE
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  // DELETING AN ITEM
  listItem.querySelector("i").addEventListener("click", function() {
    listItem.remove();
  });

  toDoBox.appendChild(listItem);
};
