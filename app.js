var list= document.getElementById("list");
/*------------------text target--------------------------------------*/
function addTodo(){
    var todo_item =document.getElementById("todo_item")
    // create li tag iwth text node
    var li= document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText);

    //create delete button
    var delbtn =document.createElement("button")
    var delText =document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(delText)
    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","but")
    editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(delbtn)
    li.appendChild(editBtn)


    list.appendChild(li)

    todo_item.value = ""
   
}




function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",val)
     e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll(){
    list.innerHTML = ""
}