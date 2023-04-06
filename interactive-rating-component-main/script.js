const ratingNumbers = document.querySelectorAll("li");
const show = document.querySelector(".shown");
const hide = document.querySelector(".hidden");
const buttonClick = document.querySelector(".btn")
const ratingDisplay = document.querySelector(".rating");

// // const mainData = document.querySelectorAll('[data-main]');
// const dataSubmit = document.querySelectorAll('[data-submit]');
// // const dataAfter = document.querySelectorAll('[data-after]');
// let result = document.querySelectorAll(".rating");
let selectedRating;
ratingNumbers.forEach((list)=>{list.addEventListener("click",()=>{
    selectedRating = list.textContent;
    console.log(selectedRating);
    ratingNumbers.forEach((list)=>{
        if(list.classList.contains("clicked")){
        list.classList.remove("clicked");
    }})
    list.classList.add("clicked");    
})});

buttonClick.addEventListener("click",()=>{
    hide.style.display = "block";
    show.style.display = "none";
    ratingDisplay.textContent = selectedRating;
    // console.log("hello");
});



