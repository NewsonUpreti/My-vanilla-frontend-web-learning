console.log(`All about webpage interaction using prompt alert and confirm`);

// alert in in-browser javascript
// alert("this is a message");
// This will show the message pop-up or opens a modal windowright before entering the website to those who visit our website. and it returns the value undefined.

// let name = prompt("what is your name ?", "Guest");
// let age = prompt("what is your age ?", "adult");
// let gender = prompt("what is your gender ?", "Rather not to say");
// let Hobby = prompt("what is your Hobby ?", "Gaming");
// console.log("name:" + name);
// console.log("age:" + age);
// console.log("gender:" + gender);
// console.log("Hobby" + Hobby);

// The above codes will show the prompt message window asking what is your name and stores the input in the name variable


// confirm is used for asking the user once to confirm his actions 

let confirmsubmit = confirm("You can't make changes once you submit. Do you really want to submit this post now ?");
// we can check the true or false input from the user by the following code
if(confirmsubmit){
    // code to submit the post
console.log("Your form is submitted succesfully");
alert("Your form has been submitted succesfully");
}
else{
    // code after cancelling the submission of the post
    console.log("Cancelling your form submission");
    alert("Form submission CANCELLATION Succesful");
}
console.log(confirmsubmit);
//   // In the above case, Ok will return true and cancel will return false...

// let age = prompt("Enter your age:","");
// console.log("User is"+" "+age+" "+"years old" );
// if(age > 18){
//     alert("welcome to the club");
// }
// else{
//     alert("You are not eligible to Enter our club")
// }