console.log('hi');


// let hide = document.querySelector(".hide");
let ebtn = document.querySelector(".ebtn");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
// ebtn.addEventListener(onclick,()=>{
//     console.log("hshshs");
    
//       box4.classList.remove("hide"); 
//       box5.classList.remove("hide"); 
//       box6.classList.remove("hide"); 
// })

ebtn.onclick = () =>{
    box4.classList.remove("hide");
    box5.classList.remove("hide");
    box6.classList.remove("hide");
    ebtn.classList.add("hide");
    // navbar.classList.toggle('active');
}