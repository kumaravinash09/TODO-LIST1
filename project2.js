function getAndUpdate(){
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if (localStorage.getItem("itemsJson") == null) {
      itemJsonArray = [];
      itemJsonArray.push([tit, desc]);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    } else {
      itemJsonArrayStr = localStorage.getItem("itemsJson");
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([tit, desc]);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    }
    update();

}

function update(){
    console.log("updating list");
    if (localStorage.getItem("itemsJson") == null) {
        itemJsonArray = [];
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
      } else {
        itemJsonArrayStr = localStorage.getItem("itemsJson");
        itemJsonArray = JSON.parse(itemJsonArrayStr);
      }
   
  
    //Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element,index) => {
      str += `
          <tr>
                  <th scope="row">${index + 1}</th>
                  <td>${element[0]}</td>
                  <td>${element[1]}</td>
                  <td><button class="btn-sm btn btn-primary" onclick="deleted(${index})" >Delete</button></td>
          </tr>`;
      //index for serial number
    });
    tableBody.innerHTML=str
}

add1 = document.getElementById("add");
add1.addEventListener("click",getAndUpdate);
update();
function deleted(itemIndex){
    console.log("Delete",itemIndex)
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex,1);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    update();
}

// Clear All title and description
function clearStorage(){
    if (confirm("Do you really want to clear?")){
    console.log('clearing the storage')
    localStorage.clear();
    update();
}
}