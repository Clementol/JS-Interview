// input -> [5, 6, 8, 2, 1, 3, "Queen", "Jack", "King"]
// output -> [1, 2, 3, 5, 6, 8, "Jack", "Queen", "King"]

const removeDuplicateAndSort = (arr) =>  {
    let items = new Set(arr).values()
    return Array.from(items).sort()
}

// const removeDuplicate2 = (arr) => {
//     let seen = {}
//     let newArray = []
//     for (var i = 0; i<arr.length; i ++) {
//         if (!(arr[i] in seen)) {
//             newArray.push(arr[i])
//             seen[arr[i]] = true
//         }
//     }
    
//     return newArray.sort()
// }


let items = [5, 6, 8, 2, 1, 3, "Queen", "Jack", "Jack", "King", "King"]
// remove double items
console.log(removeDuplicateAndSort(items))
let itemr = removeDuplicateAndSort(items)
Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};
r1 = itemr[6]
r2 = itemr[7]
itemr[6] = r2
itemr[7] = r1
console.log(itemr)