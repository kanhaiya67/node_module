// console.log("hello");
// var a = 49;
// var b = 58;
// var c = a + b;
// console.log(c);

// const car = ["bullet", "scooty"];
// car.push("hero");
// console.log(car);
// console.log(car[2]);
// console.log(car[1]);

// var age = 18;
// if (age <= 30) {
//   console.log("adult");
// } else {
//   console.log("not adult");
// }

// var i;
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// OBJECT
// const car = {
//   name: "kanhaiya goyal",
//   price: 2000,
//   age: 18,
// };
// console.log(car.name);

// FUNCTION
// var ages = [12, 43];
// var result = ages.filter(checkage);
// function checkage(age) {
//   return age > 13}
//   console.log(result);

// function add(a, b) {
//   return a + b;
// }

// var add=(a,b)=>a+b;
// var result =add (4, 8);
// console.log(result);

// function callback(){
//     console.log("now adding is successful complete")
// }
//  const add= function (a, b ,callback){
// var result=a+b;
// console.log('result :' +result)
// callback();
//  }
//  add(56,4 ,callback);

// const notes = require("./notes.js");
// console.log("hello");

// const jsonString ='{"name": "kanhaiyagoyal"}';
// const jsonObject =JSON.parse(jsonString);
// console.log(jsonObject.name);

// const dotEnv = require("dotenv");
// dotEnv.config();
// const connectDB = require("./config/db");
// connectDB();

// const express = require("express");
// const app = express();

// app.listen(process.env.PORT || 3000, () => {
//   console.log("server is listening/connected");
// });
// const ages = [45, 56, 17, 58];
// const result = ages.filter(checkAge);

// function checkAge(age) {
//   return (ages) <= 50;
// }
// console.log(result);
// console.log("HELLO NEW FIL");
// function add(a, b) {
//   return a + b;
// }
// var result = add(3, 5);
// console.log(result);
// function callback() {
//   console.log("hello");
// }
// var add = function (a, b, callback) {
//   var result = a + b;
//   console.log("result" + result);
//   callback();
// };
// add(5,6, callback);
// var add= function(a,b,prince){
//   var result=a+b;
//   console.log(result);
//   prince();

// }
// add(5,7, function(){
//   console.log("j");
// });
// add (5,7, ()=> console.log("j"));
// var fs = require("fs");
// var os = require("os");
// var user = os.userInfo();
// console.log(user);
// console.log(user.username);
// const notes = require("./notes1");

// console.log("inside the server file");
// var age = notes.age;
// console.log(age);

// const notes = require("./notes1");
// var result = notes.age;
// var resultt = notes.addNumber(5, 6);
// console.log(result);
// console.log(resultt);

// const dotenv = require("dotenv");
// const express = require("express");
// const app = express();

// dotenv.config();

// const db = require("./config/db");
// db();

// app.get("/", function (req, res) {
//   res.send("hello world k5");
// });
// app.get("/burger", (req, res) => {
//   res.send("sure sir, i would love to server burger");
// });

// app.listen(3000, () => {
//   console.log("listen on port 3000");
// });

const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body

app.get("/", function (req, res) {
  res.send("Welcome to my hotel");
});

// Import the router files

const personRoutes = require("./routes/personRoutes");
const menuItemsRoutes =require('./routes/menuItemsRoutes')

// Use the routers

app.use("./person", personRoutes);
app.use("./menuItems", menuItemsRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
