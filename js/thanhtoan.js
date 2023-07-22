const product = localStorage.getItem('selectedItems')
const data = JSON.parse(product)
let name = []

data.map((value) =>{
    name.push(value.name)
})