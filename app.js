let plusicon = document.querySelector(".plusicon");
let add = document.querySelector(".add");

add.classList.add("hide");

plusicon.addEventListener("click", (e) => {
  e.preventDefault();
  add.classList.toggle("hide");
});

let addList = document.querySelector("#addList");
let time = document.querySelector("#addtime");

add.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (addList === "" && time === "") {
    } else {
      add.classList.add("hide");

      let input = addList.value;
      let inputtime = time.value;

      addList.value = "";
      time.value = "";

      let newDiv = document.createElement("div");
      newDiv.className = "outputDiv";

      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      newDiv.appendChild(checkBox);

      let h4element = document.createElement("h4");
      h4element.textContent = input;
      newDiv.appendChild(h4element);

      let h3time = document.createElement("h3");
      h3time.textContent = inputtime;
      newDiv.appendChild(h3time);

      checkBox.addEventListener("click", () => {
        h4element.classList.toggle("textline");
        h3time.classList.toggle("textline");
      });

      let container = document.querySelector(".container");
      container.appendChild(newDiv);
    }
  }
});
