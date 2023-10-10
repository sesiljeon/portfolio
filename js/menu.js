$(document).ready(function() {
        $('.all_title_btn_li a').click(function(){
            // 태그의 기본 이벤트를 실행하지 않게 한다.
            // a태그의 경우 화면 다 지우고 새로 로드 하는걸 안하게 한다
            event.preventDefault(); 


            console.log($(this).attr('href'))
            let href = $(this).attr('href');

            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 1000)
        })


        
})