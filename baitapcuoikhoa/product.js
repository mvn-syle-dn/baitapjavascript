function resetData() {
  document.getElementById("name").value = "";
  document.getElementById("image").value = "";
  document.getElementById("price").value = "";
  document.getElementById("description").value = "";
}
function Add() {
  var arrayList = [];
  var name = document.getElementById("name").value;
  var image = document.getElementById("image").value;
  var price = document.getElementById("price").value;
  var description = document.getElementById("description").value;
  if (name && image && price && description) {
    var item = {
      name: name,
      image: image,
      price: price,
      description: description,
    };
    var arrayList = localStorage.getItem("arrayList")
      ? JSON.parse(localStorage.getItem("arrayList"))
      : [];
    arrayList.push(item);
    localStorage.setItem("arrayList", JSON.stringify(arrayList));
    resetData();
    renderView();
  }
}
function renderView() {
  var arrayList = localStorage.getItem("arrayList")
    ? JSON.parse(localStorage.getItem("arrayList"))
    : [];
  var listData = arrayList.map((value, index) => {
    return `<tr>
       <td>${index}</td>
       <td>${value.name}</td>
       <td><img src="${value.image}" alt="${value.name}"</td>  
       <td>${value.price}</td>  
       <td>${value.description}</td>  
       <td><button onclick="Edit(${index})" class="btn btn-primary">Edit</button>
       <button onclick="Delete(${index})" class="btn btn-danger">delete</button>
       </td>       
       </tr>`;
  });
  let datas = listData.join("");
  document.getElementById("content").innerHTML = datas;
}
function Edit(id) {
  var arrayList = localStorage.getItem("arrayList")
    ? JSON.parse(localStorage.getItem("arrayList"))
    : [];
  document.getElementById("index").value = id;
  document.getElementById("name").value = arrayList[id]["name"];
  document.getElementById("image").value = arrayList[id]["image"];
  document.getElementById("price").value = arrayList[id]["price"];
  document.getElementById("description").value = arrayList[id]["description"];
  document.getElementById("add").style.visibility = "hidden";
  document.getElementById("edit").style.display = "block";
  document.getElementById("edit").style.marginTop = "-35px";
}
function changeName() {
  var arrayList = localStorage.getItem("arrayList")
    ? JSON.parse(localStorage.getItem("arrayList"))
    : [];
  var index = document.getElementById("index").value;
  arrayList[index]["name"] = document.getElementById("name").value;
  arrayList[index]["image"] = document.getElementById("image").value;
  arrayList[index]["price"] = document.getElementById("price").value;
  arrayList[index]["description"] =
  document.getElementById("description").value;
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  document.getElementById("add").style.visibility = "visible";
  document.getElementById("edit").style.visibility = "hidden";
  renderView();
  resetData();
}
function Delete(id) {
  var arrayList = localStorage.getItem("arrayList")
    ? JSON.parse(localStorage.getItem("arrayList"))
    : [];
  if (confirm("Delete OK?")) {
    arrayList.splice(id, 1);
  }
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  renderView();
}
