// JSON
// const data = JSON.parse(this.responseText)
// console.log(data);

// let ul = document.createElement('ul');
// ul.setAttribute('class', 'notes')

// data.forEach(function(note) {
// 	let li = document.createElement('li')
// 	ul.appendChild(li)
// 	li.appendChild(document.createTextNode(node.content))
// })

// document.getElementsById('notes').appendChild(ul);

let list1 = document.getElementsByClassName('notes')[0];
let newListElement = document.createElement('li');
newListElement.textContent = 'Page manipulation from console is easy';
list1.appendChild(newListElement);
