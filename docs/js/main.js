$(document).ready(function () {

    // Подключение точек пагинации справа page-nav
	$('#page-nav').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function () {},
		end: function () {},
		scrollChange: function ($currentListItem) {}
	});
    
    
 //моб меню
 const toggleMenu = document.querySelector('.toggle-menu'); //иконка гамбургер
 const mobMenu = document.querySelector('.mobile-menu'); //mob menu
 const overlay = document.querySelector('#overlay'); //overlay
 const bodyEl = document.body; 


 //прослушиваем событие клик по гамбургеру
 toggleMenu.addEventListener('click', function(){

    this.classList.toggle('active');
    mobMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    bodyEl.classList.toggle('noscroll'); 
 });

 
 //прослушиваем событие клик моб меню
 mobMenu.addEventListener('click', function(){
     this.classList.remove('active');
     toggleMenu.classList.remove('active');
     overlay.classList.remove('active');
     bodyEl.classList.remove('noscroll');

 }); 
/*
 //-фильтрация проектов
 let containerEl = document.querySelector('#projects');

 let mixer = mixitup(containerEl, {
     classNames: {
         block: ""
     }
 });
*/
 // FORM VALIDATE//
/*
$('.contact-form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        subject: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        email: {
            required: 'Введите email',
            email: 'отсутствует символ @'
        },
        subject: {
            required: 'Введите тему сообщения'
        },
        message: {
            required: 'Введите текст сообщения'
        }
    },
    submitHandler: function (form) {
        ajaxFormSubmit();
    }
})
*/
// Функция отправки формы на сервер//

    function ajaxFormSubmit() {
        let string = $(".contact-form").serialize();
        $.ajax({
            type: "POST",
            url: "php/mail.php", 
            data: string,

            success: function (html) {
                $(".contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });
        return false;

    }
})





