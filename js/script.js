// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        console.log(`id: ${id}  = top: ${top}, offset ${offset}, height ${height}`)

        if(top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }

        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    })

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.onclick = ()=>{
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');

    }

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');



    // animation footer on scroll

}

function buildString(){
    var email = document.getElementById('to'),
        to = email.value,
        subject = encodeURIComponent(document.getElementById('subject').value),
        body = encodeURIComponent(document.getElementById('body').value),
        link = document.getElementById('link'),
        message = ''
    if (to){
      email.className = 'not'
      message = 'mailto:'+to
      subject||body?message+='?':false
      subject?message+='subject='+subject:false
      subject&&body?message+='&body='+body:false
      !subject&&body?message+='body='+body:false
      link.innerHTML = message
    } else {
      email.className='error'
      notification('Please enter a recipient email address','error',5)
      email.focus()
    }
  }