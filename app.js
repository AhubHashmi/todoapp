var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText)

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
        // delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)

    li.appendChild(editBtn)
    li.appendChild(delBtn)

    list.appendChild(li)

    todo_item.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var val = prompt("Update Chore/Routine... " + e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
    list.innerHTML = ""
}