// Declare textType objects and its method
let textType = function (elem, rotateElem, period) {
  this.elem = elem
  this.loopNum = 0
  this.rotateElem = rotateElem
  this.period = parseInt(period, 10) || 2000
  this.text = ''
  this.tick()
  this.isDeleting = false
}

textType.prototype.tick = function () {
  // when it goes over all words in a sentence
  let i = this.loopNum % this.rotateElem.length
  // is when a sentence has a full texts
  let fullText = this.rotateElem[i]
  // if it is deleting, then delete a letter
  if (this.isDeleting) {
    this.text = fullText.substring(0, this.text.length - 1)
  } else {
    // if not, then add a letter
    this.text = fullText.substring(0, this.text.length + 1)
  }
  this.elem.innerHTML = '<span class = "wrap">' + this.text + '</span>'
  let that = this
  // speed of deleting and adding letters
  let delta = 200 - Math.random() * 100
  // when it is deleting, then make it faster
  if (this.isDeleting) {
    delta /= 2
  }
  // when it is done deleting, then make it wait
  if (!this.isDeleting && this.text === fullText) {
    delta = this.period
    this.isDeleting = true
  } else if (this.isDeleting && this.text === '') {
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
  let elems = document.getElementsByClassName('typewrite')
  for (let i = 0; i < elems.length; i++) {
    let rotateElem = elems[i].getAttribute('data-type')
    let period = elems[i].getAttribute('data-period')
    if (rotateElem) {
      new textType(elems[i], JSON.parse(rotateElem), period)
    }
  }
  let css = document.createElement('style')
  css.setAttribute('type', 'text/css') // Set the type attribute
  css.innerHTML = '.typewrite > .wrap {border-right: 0.08em solid #fff;}'
  document.body.appendChild(css)
}

// Page scroll reveal animation

function revealElement(target, options) {
  ScrollReveal().reveal(target, options)
}

let slideUp = {
  origin: 'bottom',
  opacity: null,
  delay: 100,
  distance: '50%',
}

let slideRight = {
  origin: 'left',
  opacity: null,
  delay: 100,
  distance: '50%',
}

let slideLeft = {
  origin: 'right',
  opacity: null,
  delay: 100,
  distance: '50%',
}

revealElement('.avatarImage', slideLeft)
revealElement('.myName', { delay: 300 })
revealElement('.typewrite', { delay: 300 })
revealElement('.avatar', slideRight)
revealElement('.about', { delay: 200 })
revealElement('.stack-container-one', slideRight)
revealElement('.stack-container-two', slideLeft)
revealElement('.stack-container-three', slideRight)
revealElement('.techStack', slideUp)
revealElement('.myProject', slideUp)
revealElement('.contactMe', { delay: 300 })
revealElement('.project-container-one', { delay: 100 })
revealElement('.project-container-two', { delay: 100 })
revealElement('.project-container-three', { delay: 100 })
revealElement('.project-container-four', { delay: 100 })
revealElement('.project-container-five', { delay: 100 })
revealElement('.project-container-six', { delay: 100 })
revealElement('.contact-container', slideUp)

// Navbar
let navBar = document.querySelector('.nav-bar')
let navMenu = document.querySelector('.nav-menu')

//open/close nav-menu
window.addEventListener('scroll', () =>
  window.scrollY > 0
    ? navBar.classList.add('bg-black')
    : navBar.classList.remove('bg-black'),
)
document.querySelector('.hamburger-btn').addEventListener('click', function () {
  document
    .querySelectorAll('.hamburger, .hamburger.hidden')
    .forEach(function (element) {
      element.classList.toggle('hidden')
    })
  navMenu.classList.toggle('hidden')
  navMenu.classList.add('flex')
})
// self-close nav-menu on mobile-screen
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (!navMenu.classList.contains('hidden')) {
      document
        .querySelectorAll('.hamburger, .hamburger.hidden')
        .forEach(function (elem) {
          elem.classList.toggle('hidden')
        })
      navMenu.classList.toggle('hidden')
      let targetId = link.getAttribute('href').substring[1]
      let targetElem = document.getElementById(targetId)
      if (targetElem) {
        targetElem.srollIntoView({ behavior: smooth })
      }
    }
  })
})
