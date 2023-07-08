function generateList(array) {
    const list = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
    const item = document.createElement("li");

    if (Array.isArray(array[i])) {
        const nestedList = generateList(array[i]);
        item.appendChild(nestedList);
    }
    list.appendChild(item);
    }
    return list;
}
const array = [1, 2, [1.1, 1.2], 3, 4, [1.3, 1.4], 5, 6, [1.5, 1.6]];

const arraySrtings = JSON.parse(JSON.stringify(array));
console.log(arraySrtings);

const listContainer = document.getElementById("list-container");
const generatedList = generateList(arraySrtings);
listContainer.appendChild(generatedList);

