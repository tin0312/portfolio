// Declare textType objects and its method
let textType = function (elem, rotateElem, period){
    this.elem = elem;
    this.loopNum = 0
    this.rotateElem = rotateElem;
    this.period = parseInt(period, 10) || 2000;
    this.text = ""
    this.tick()
    this.isDeleting = false
};

textType.prototype.tick = function () {
    // when it goes over all words in a sentence
    let i = this.loopNum % this.rotateElem.length
    // is when a sentence has a full texts
    let fullText = this.rotateElem[i]
    // if it is deleting, then delete a letter
    if (this.isDeleting){
        this.text = fullText.substring(0, this.text.length - 1)
    } else {
        // if not, then add a letter
        this.text = fullText.substring(0, this.text.length + 1)
    }
    this.elem.innerHTML = '<span class = "wrap">' + this.text + "</span>"
    let that = this
    // speed of deleting and adding letters
    let delta = 200 - Math.random() * 100
    // when it is deleting, then make it faster
    if (this.isDeleting){
        delta /= 2
    }
    // when it is done deleting, then make it wait
    if (!this.isDeleting && this.text === fullText){
        delta = this.period
        this.isDeleting = true
    } else if (this.isDeleting && this.text === ""){
        this.isDeleting = false
        this.loopNum++
        delta = 500
    }
    setTimeout(function () {
        that.tick()
    }, delta)
}

// Activate effect when window first loads
window.onload = function () {
    let elems = document.getElementsByClassName("typewrite");
    for (let i = 0; i < elems.length; i++){
        let rotateElem = elems[i].getAttribute("data-type");
        let period = elems[i].getAttribute("data-period");
        if (rotateElem){
            new textType(elems[i], JSON.parse(rotateElem), period);
        }
    }
    let css = document.createElement("style");
    css.setAttribute("type", "text/css"); // Set the type attribute
    css.innerHTML = ".typewrite > .wrap {border-right: 0.08em solid #fff;}";
    document.body.appendChild(css);
};
// Effects
let slideUp = {
    origin: "bottom",
    opacity: null,
    delay: 300,
    distance: "50%"
}
let slideRight = {
    origin: "left",
    opacity: null,
    delay: 300,
    distance: "50%"
}
let slideLeft = {
    origin: "right",
    opacity: null,
    delay: 300,
    distance: "50%"
}
ScrollReveal().reveal(".avatarImage", slideLeft)
ScrollReveal().reveal(".myName", { delay: 300 });
ScrollReveal().reveal(".typewrite", { delay: 300 })
ScrollReveal().reveal(".avatar", slideRight)
ScrollReveal().reveal(".about",{delay: 200})
ScrollReveal().reveal(".stack-container-one", {...slideRight, delay: "100"})
ScrollReveal().reveal(".stack-container-two", {...slideLeft, delay: "100"})
ScrollReveal().reveal(".stack-container-three", {...slideRight, delay: "100"})
ScrollReveal().reveal(".techStack", slideUp)
ScrollReveal().reveal(".myProject", slideUp)
ScrollReveal().reveal(".contactMe", {delay: 300})
ScrollReveal().reveal(".project-container-one", {delay: 100})
ScrollReveal().reveal(".project-container-two", {delay: 200})
ScrollReveal().reveal(".project-container-three", {delay: 300})
ScrollReveal().reveal(".project-container-four", {delay: 400})
ScrollReveal().reveal(".project-container-five", {delay: 500})
ScrollReveal().reveal(".project-container-six", {delay: 600})
ScrollReveal().reveal(".contact-container", slideUp)
