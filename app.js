const submitBtn = document.getElementById("submitBtn");
const ratingWrapper = document.querySelector(".rating-num-wrapper");
const messageEl = document.querySelector(".sent-message");
const ratingElements= document.querySelectorAll(".rating");
const rateChosen =  document.getElementById("rate");
const ratingForm = document.getElementById("ratingForm");
let rateDisplay = 4;

rateChosen.textContent = rateDisplay;

ratingWrapper.addEventListener("click", (e) => {
    const clicked = e.target;
    if(e.target.classList.contains("rating")) {
        rateDisplay = Number(e.target.dataset.value);
        removeActiveStyle();
        e.target.classList.add("selected");
    }
    else {
        console.log("You clicked outside rating elements!")
    }
});

submitBtn.addEventListener("click", (e) => {
     ratingForm.classList.add("hide");
     rateChosen.textContent = rateDisplay;
     messageEl.classList.add("show");
})

function removeActiveStyle() {
    for (const singleEl of ratingElements) {
        singleEl.classList.remove("selected");
    } 
}