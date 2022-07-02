//1.
const currentDay = new Date().getDay();
switch (currentDay) {
    case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
}
//2.
for(i=0; i<100; i++){
    console.log(`გამარჯობა`)
}
//3.
let a = 0;
while(a<50){
    console.log(`გამარჯობა`)
    a++
}
//4.
do {
    a++;
    console.log(a);
  } 
  while (a < 150)
//5.
let myArray = [];
for (let i = 1; i <= 1000; i++) {
  myArray.push(i * i);
}