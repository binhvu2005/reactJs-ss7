let fName:string;
let lName:string;
let fullName:string;

fName = "vu";

lName = "binh";

if(fName[0].toUpperCase()&&lName[0].toUpperCase()){
    fullName = fName + " " + lName;
}else{
    fName[0].toUpperCase()
    lName[0].toUpperCase()
    fullName = lName + " " + fName;
}
console.log(fullName);
