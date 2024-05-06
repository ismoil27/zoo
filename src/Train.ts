// ZI-TASK:
// Shunday function yozing, u function ishga tushgandan,
// 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"

// ================= 1 Simple way ========================
// const delayHelloWorld = (message) => {
//   setTimeout(() => {
//     console.log(message);
//   }, 3000);
// };

// let result = delayHelloWorld('Hello World');
// console.log(result);

// ================= 2 with Promise ========================

const delayHelloWorld = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 3000);
  });
};

delayHelloWorld('Hello World').then((result) => {
  console.log(result);
});
