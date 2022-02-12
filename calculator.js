// function deleteMe() {
//     document.getElementById('myResult').value = '';
// }

document.getElementById('value-delete').addEventListener('click', function () {
    const valueDelete = document.getElementById('myResult')
    valueDelete.value = '';
})

function calculator(newValue) {
    document.getElementById('myResult').value += newValue
}

function answer() {
    let inputStoreValue = document.getElementById('myResult').value
    let inputValue = eval(inputStoreValue)
    document.getElementById('myResult').value = inputValue
}



