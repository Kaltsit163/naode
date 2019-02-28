async function func () {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     return resolve(11);
  //   }, 3000)
  // })
  return 1;
}

const a = async () => {
  let aa = await 11;
  console.log(aa);
};

a();
