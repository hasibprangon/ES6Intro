const Human = {
    name:'Md Hasibul Hossain',
    address: 'Khoksa , Kushtia',
    phone: '01710792327',
    laptop:'Lenovo',
    laptop_price: 23000,
    mobile: 'Samsung',
    mobile_price: 25000
};
// const name = Human.name;
// const address = Human.address;
// const laptop_price = Human.laptop_price;
const {phone} = Human;
// console.log(phone);
// console.log(laptop_price);

const {name , age , profession} = {name: 'hasib', age: '24', profession: 'student'};
console.log(name ,age, profession);