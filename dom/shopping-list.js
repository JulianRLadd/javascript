const list = document.querySelector('ul');
const field = document.querySelector('input');
const add = document.querySelector('button');
function save(target) {
    let shopItem = field.value;

    field.value = "";

    let listItem = document.createElement('li')
    let listText = document.createElement('span')
    let listButton = document.createElement('button')

    listItem.appendChild(listText)
    listItem.appendChild(listButton)

    listText.textContent = shopItem;
    listButton.textContent = "Delete";

    list.appendChild(listItem)
    listButton.addEventListener("click", removeItem);
    field.focus();

    function removeItem() {
        listItem.remove();
    }
}
add.addEventListener("click", save);
