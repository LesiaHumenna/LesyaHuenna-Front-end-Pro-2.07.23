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
const array = [1, 2, [1.1, 1.2, 1.3, 1.4], 3, 4, 5];

const listContainer = document.getElementById("list-container");
const generatedList = generateList(array);

