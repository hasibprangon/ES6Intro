// function add(first, second) {
//     console.log(first, second);
//     // second = second || 0;

//     // if(second===undefined ){
//     //     second = 0
//     // }
//     const total = first + second;
//     return total;
// }

function add (first ,second = 0){
    const total = first + second;
    return total;
}
const result = add(10, 5);
console.log(result)