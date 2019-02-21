console.log('from module 1');
let count = 1;

const con = () => {
  console.log(count++);
};

module.exports = con;


console.log('from module 2');