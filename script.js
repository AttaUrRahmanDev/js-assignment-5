//Employee Login
let isPasswordCorrect=true;
if (isPasswordCorrect){
    console.log("Login successful");
} else {
    console.log("Incorrect password");
}

//Online Order Approval 

isPaymentDone=true;
if(isPaymentDone){
    console.log("Order Approved")
}
else{
    console.log("Order Rejected")
}

//Student Result System

let marks=50;
if(marks>=50){
    console.log("Pass")
}
else{
    console.log("Fail")
}


//Office Attendance Check
isOnTime=true;
if(isOnTime){
    console.log("Present")
}
else{
    console.log("Late/Absent")
}

//Discount Eligibility

isPremiumUser=true;
if(isPremiumUser){
    console.log("Discount Applied")
}
else{
    console.log("No Discount Available")
}

//Mutliple Conditions(else if)

let performanceScore=parseInt(prompt("Enter Your Marks:"))
if(performanceScore>=90){
    console.log("Excellent")
}
else if(performanceScore>=70){
    console.log("Good")
}
else if(performanceScore>=50){
    console.log("Average")
}
else{
    console.log("Poor")
}