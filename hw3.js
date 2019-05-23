//this is only a string
let myStiring = "this is my home work javascript2 week3";
console.log(myStiring); //   this is my home work javascript2 week3
//log length of your string
console.log(myStiring.length);
// assing a arry
let myFavoratCar =['benz','bmw','volvo','mitsobshi'];
//add one more name in your arry
myFavoratCar.push='audi';
console.log(myFavoratCar);  //["benz", "bmw", "volvo", "mitsobshi", push: "audi"]
let jimsFavoraitCar =['ford'];
// Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'benz' and before 'bmw'.

myFavoratCar.splice(1, 0, jimsFavoraitCar);
console.log(myFavoratCar);

//write code show arry lengh
console.log(myFavoratCar.length);
//delete spicific item of arry and log it
remove=myFavoratCar.splice(2)
console.log(myFavoratCar);
//how find index posision any item in array   
console.log(myFavoratCar.indexOf('benz'));
console.log(myFavoratCar.length);
////////////////////////////////////////////////////////////////////////////////

//Create a function that takes 3 arguments and returns the sum of the these arguments
function math(no1 , no2 ,no3){
  return no1+no2*no3
}
console.log(math(2,3,4));

//creat function take color and print out it


function colorCar(){
  let color = "blue";
  let mytext ="a" +" " +color+" " + "car";
  console.log(mytext)  
}
colorCar();
/////////////////////////////////
let myInfo ={
  firstName:"reza",
  lastName:"naemi",
  age:27,
  eyeColor:"brown"
}
function prInfo(){
  return myInfo.firstName+" "+myInfo.lastName+" "+myInfo.age+" "+myInfo.eyeColor+" "+myInfo
}
console.log(prInfo())


//this is simple example=================================================================

// function hello (obj){
//   return obj.value
// }
// console.log(hello({value: "raza"}))
//===================
//Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
let vehicle=["undefined","car" , "motorbik"]
blue ="blue"
function vehicleType(pra1 ,pra2 ){
 return "a" +" "+ pra1 +" "+ vehicle[pra2]
 
}
console.log(vehicleType(blue, 2))
//=================================================================
//write the code without the if statement, if(3===3)=>print"yes" else print "no" with console.log(...);?

function respond(answer){
  return (answer? "Yes" : "No")
}
console.log(respond(3===3))

function vehicles(pra5 ,pra6 ,age){
  return "a"+" "+pra5 +" "+ vehicle[pra6] +" "+"used"+" "+age+" "+"year"
}
console.log(vehicles(blue, 1 , 7))
//=================================================================
//How do you get the third element from that list?=============
green="green"
let nameOfVehicles =["motorbike", "caravan", "bike","scoter" ];
function vehicl (pra7,pra8, pra9 ) {
  return "a" + " " + pra7 +" "+"new"+" "+nameOfVehicles[pra8]
}
console.log(vehicl(green , 2 , 3));

//===================================================

let sentens =["amazing","joe's","Garege",",","we","service","car","motorbik","carvan","and","bikes"]
  var txt = "";
  for (i = 0; i < sentens.length; i++) {
    txt += sentens[i] + " ";
  }
  console.log(txt);
//=================================push item in array an then log it whit above sentence
  sentens.push("both");

  console.log(txt + sentens[11]);



  //=======Create an object that contains the teachers that you have had so far for the different modules
  {

  }
  let teacher = {
    math :"hosin",
    phisycs :"johan",
    html : "ahmad",
    javascript :"zohir",
    
  }
  //===========Add a property to the object you just created that contains the languages that they have taught you.
   teacher.language="English";
  console.log(teacher);


  //====================Write some code to test two arrays for equality using (== and ===)


  let x = [1,2,3];
  let y = [1,2,3];  
  let z = y;
  if (x == y){
    console.log(true);
  }else{
    console.log(false)
  }

 if(x === y){
   console.log(true)
 }else{
   console.log(false)
 }

 if(z == y){
  console.log(true)
}else{
  console.log(false)
}
  
if(z == x){
  console.log(true)
}else{
  console.log(false)
}

//==========
let o1 = {foo: 'bar'}
let o2 = { foo: 'bar' };
function showChang(o3) {
  
  if(o2 == o3){
    console.log(true)
  }else{console.log(false)
  }if (o1 == o3){
    console.log(true)
  }else{
    console.log(false)
  }
  
  
};
showChang(o1);









//=============
let bar = 42;
console.log(typeof typeof bar);


function changeType (x2){
  if(typeof typeof(x2) == String){
  }
  return x2 
}

 console.log(changeType('6'));































































