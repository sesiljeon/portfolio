/**********   헤더 100% 메뉴   *************/
// .menu_item 에 마우스 올리면 .pan 한테 addClass('pan_active') 하기
$('.nav_menu, .nav_pan').hover(function(){

    console.log($(this).prop('class'))

    // 100판 펼치기
    $('.nav_pan').addClass('nav_pan_active')

        if($(this).hasClass('nav_menu')) {

                // 판 안에 특정 번째꺼 나타나게 하기 - display: block 
                $('.nav_pan_menu').removeClass('nav_pan_active')
                $('.nav_pan_menu').eq($(this).index()).addClass('nav_pan_active')
            }

}, function(){
    // 100판 접기
    $('.nav_pan').removeClass('nav_pan_active')
})

