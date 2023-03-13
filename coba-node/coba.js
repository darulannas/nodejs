// synchronous

// const getUserSync = (id) => {
//   //   let nama = "";
//   //   if (id === 1) {
//   //     nama = "darul";
//   //   } else {
//   //     nama = "annas";
//   //   }
//   const nama = id === 1 ? "darul" : "annas";
//   return { id: id, nama: nama };
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = "Hello World!";
// console.log(halo);

// asynchronus

const getUser = (id, callback) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? "darul" : "annas";
    callback({ id: id, nama: nama });
  }, time);
};

const userSatu = getUser(1, (hasil) => {
  console.log(hasil);
});
const userDua = getUser(2, (hasil) => {
  console.log(hasil);
});

const halo = "Hello World!";
console.log("selesai");
