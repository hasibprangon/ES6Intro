// function declaration
function add (first , second){
    const total = first + second;
    return total;
}


// expression
const add1 = function add1 (first , second){
    const total = first + second;
    return total;
}
// annonimus
const add2 = function  (first , second){
    const total = first + second;
    return total;
}

const add3 = function(f , s){
    return f+s;
}

const add4 = (f,s) => (f + s);


const result = add4(20,20);
console.log(result);