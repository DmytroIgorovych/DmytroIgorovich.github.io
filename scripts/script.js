document.addEventListener('DOMContentLoaded', function() {

    
    
    const burger_btns = document.querySelector('.burger_btns');

    const btnMobileMenuOpen = document.querySelector('.open-menu');
    const menu = document.querySelector('nav');
    const logo = document.querySelector('.logo');
    const btnMobileMenuClose = document.querySelector('.close-menu');

    btnMobileMenuOpen.addEventListener("click", function() {
        burger_btns.classList.add('active')
        header-top.classList.add('active') 
        // btnMobileMenuOpen.style.display = 'none';
        // btnMobileMenuClose.style.display = 'block';
        // menu.style.display = 'block';
        // logo.style.display = 'block';

    })

    btnMobileMenuClose.addEventListener("click", function() {
        burger_btns.classList.remove('active');

        // btnMobileMenuOpen.style.display = 'block';
        // btnMobileMenuClose.style.display = 'none';
        // menu.style.display = 'none';
        // logo.style.display = 'none';

    })


    class Popup{
        constructor(selectorBtn, selectorPopup){
            this.btn = document.querySelector(`#${selectorBtn}`);
            this.overlay = document.querySelector(`#${selectorPopup}`);

            this.btn.addEventListener('click', ()=>{
                this.showPopup();
            })

            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.hidePopup()
                }
            })
        }

        showPopup(){
            this.overlay.classList.add('active');
        }
        hidePopup(){
            this.overlay.classList.remove('active');
        }
    }

    const requestPopup = new Popup('btn-request', 'request');
    const consultationPopup = new Popup('btn-consultation', 'get-consultation');

    class formRequest {
        constructor(form) {
            this.form = form;

            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submit();
            })
        }

        submit() {

            let valid = true;
            
            new Array().forEach.call(this.form, (field) => {
                if (field.type ==='text') {
                    if (field.value === ''){
                        valid=false;
                    }
                }
            })
            
            if(valid) {
                fetch('./scripts/server.json')
                    .then(res=> res.json())
                    .then(data=> {
                        console.log(data);
                        this.form.outerHTML = `<p>${data.message}</p>`
                    })
            } else {
                console.log('error');
            }
        }
    }
    new formRequest(document.querySelector('form'))
})


$('.ourTeam-slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
    {
        breakpoint: 1440,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 3
        }
        },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 660,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '45px',
        slidesToShow: 1
      }
    }
    ]
})

$('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '60px',
            slidesToShow: 1
          }
        }
        ]
})