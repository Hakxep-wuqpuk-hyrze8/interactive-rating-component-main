const box = document.querySelector(".box");
const star = document.querySelector(".star");
const content = document.querySelector(".content");
const ratingForm = document.querySelector(".ratingForm");
const radio = document.querySelectorAll(".star-radio");
 
document.querySelector(".submit-btn").addEventListener("click", function() {
    const options = document.querySelectorAll("input[name='options']");
    let rate = 0;
    for (let i = 0; i <= 4; i++) {
        if (options[i].checked) {
            rate = i + 1;
        }
    }

    if (rate !== 0) {
        for (let i = 0; i <= 4; i++) {
            radio[i].classList.add("hide");
        }
         
        box.classList.add("text-center");
    
        const node = document.createElement("div");
        node.classList.add("selectedResultSection");
        const textnode = document.createElement("p");
        textnode.classList.add("selectedResult");
        textnode.textContent = "You selected " + rate + " out of 5" ;
        node.appendChild(textnode);
        box.appendChild(node);
            
        star.childNodes[1].src = "./images/illustration-thank-you.svg"
        star.classList.add("phone")
        star.classList.remove("star");
    
        content.classList.remove("content");
        content.classList.add("thanks-content");
        content.childNodes[1].textContent = "Thank you!";
        content.childNodes[3].textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
        
        document.querySelector(".submit-btn").classList.add("hide");
    }
    
});


