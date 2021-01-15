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
	// Функция AJAX запрса на сервер

	function ajaxFormSubmit() {

		let string = $(".contact-form").serialize(); // Соханяем данные введенные в форму в строку.

		//Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$(".contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});
		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	}



//отображение/скрытие карточек проектов по загрузке страницы
if($(window).width() <1200){
    $('.project-cards.hide-card').hide();
    
    $('.show-project-cards').on('click', function(){
        $('.project-cards.hide-card').fadeIn();
        $(this).hide();
    })
}
else{
    $('.project-cards.hide-card').fadeIn();
    $('.show-project-cards').hide();
}

/*
//отображение/скрытие карточек проектов при ресайзе страницы
$(window).on('resize', function(){
    if($(window).width() <1200){
        $('.project-cards.hide-card').hide();
        $('.show-project-cards').fadeIn();
        $('.show-project-cards').on('click', function(){
            $('.project-cards.hide-card').fadeIn();
            $(this).css('display', 'none');
        });
    }
    else{
        $('.project-cards.hide-card').fadeIn();
        $('.show-project-cards').hide();
    } 
});
​*/
})







