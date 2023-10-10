$(document).ready(function() {
    
    /*************************************/
    /*************  메인배너 **************/
    /*************************************/
    // css에서 banner0 한테 left:0 주던가 여기서 이거로 주던가
    $('.main_banner').eq(0).css({left: 0});

    // 배너 개수에 맞춰서 인디케이터 생성하기
    let bn_count = $('.main_banner').length;
    for(let i=0; i<bn_count; i++) { 
        $('.main_banner_indi').append(`<div class="mb_indi"></div>`)
    }
    $('.mb_indi').eq(0).addClass('mb_indi_active')


    
    let curr_idx=0;
    let timer = 1000; // 모든 애니메이션에 적용될 시간
    $('#mb_btn_slide_R').click(function(){ 
        버튼막기() 
        slide(curr_idx % bn_count, '-100%', (curr_idx+1) % bn_count, '100%',timer);
        curr_idx += 1;
    });

    $('#mb_btn_slide_L').click(function(){ 
        버튼막기() 
        slide(curr_idx % bn_count, '100%', (curr_idx-1) % bn_count, '-100%',timer);
        curr_idx -= 1;
    })

    function slide(o_idx, o_pos, c_idx, c_pos, t) {
        // 나갈방
        $('.main_banner').eq(o_idx).animate({
            left: o_pos
        }, t)

        // 들어올방
        $('.main_banner').eq((c_idx)).css({
            left: c_pos
        }).stop(true).animate({
            left: 0
        }, t)

        $('.mb_indi').eq(o_idx).removeClass('mb_indi_active');
        $('.mb_indi').eq(c_idx).addClass('mb_indi_active');

        // curr_idx = c_idx;
    }
/*
            - 왼쪽버튼 기능 만들기
            - auto_slide 만들기
            - main_banner에 마우스오버시 멈춤
                            마우스아웃시 다시 auto_slide 동작
        */
    function 버튼막기() {
        // 버튼 막기
        $('.mb_btn_slide').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.mb_btn_slide').css({pointerEvents:'auto'})
        }, timer)
    }

    let interval;
    function auto_slide() {
        interval=setInterval(function(){
            $('#mb_btn_slide_R').trigger('click')
        }, timer+2000)
    }
    auto_slide()

    $('.main_banner_slide').hover(function(){
        clearInterval(interval)
    }, function(){
        auto_slide()

    })




    $('.mb_indi').click(function(){
        let colored = $('.mb_indi_active').index();
        let clicked = $(this).index();

        if(colored < clicked) {  
            버튼막기()  
            slide(colored, '-100%', clicked, '100%', timer); 
            curr_idx = clicked ;
        }
        else if(colored > clicked) {
            버튼막기() 
            slide(colored, '100%', clicked, '-100%',timer);
            curr_idx = clicked ;
        }
    })


    // 노티드 도넛 메뉴 자동 슬라이스
    let item_size = $('.k_menu_item_li').eq(0).outerWidth();
    item_size = item_size + 34
    console.log(item_size)
    let item_length = $('.k_menu_item_ul').eq(0).children('.k_menu_item_li').length;
    console.log("item_size : " + item_size+ ", item_length: " + item_length )

    for(let i=0; i<$('.k_menu_item_ul').length; i++) {

        
        let tmp_length = $('.k_menu_item_ul').eq(i).children('.k_menu_item_li').length;

        for(let j=0; j<tmp_length; j++) {
            $('.k_menu_item_ul').eq(i).children('.k_menu_item_li').eq(j).css({ 
                left: item_size * j 
            })
        }
    }

    let bang_timer = 300;
    let bang_no = [0,0,0,0];
    let pan_no=0;
    $(document).on('click','.item_btn_R',function(){
        prevent_btn_slide()

        item_length = $('.k_menu_item_ul').eq(pan_no).children('.k_menu_item_li').length;
console.log("pan_no: " + pan_no)
        // 전체 item 들 200씩 왼쪽으로 이동
        $('.k_menu_item_ul').eq(pan_no).children('.k_menu_item_li').animate({
            left: `-=${item_size}px`
        }, bang_timer, 'linear')

        // 특정 번째꺼만 반대쪽 끝으로 이동
        $('.k_menu_item_ul').eq(pan_no).children('.k_menu_item_li').eq(bang_no[pan_no] % item_length).animate({
            left: item_size * (item_length - 1) + "px"
        },0)

        bang_no[pan_no]+=1;
        
    })

    $(document).on('click','.item_btn_L',function(){
        prevent_btn_slide()   
        bang_no-=1;

        // 특정 번째꺼만 반대쪽 끝으로 이동
        $('.k_menu_item_ul').eq(0).children('.k_menu_item_li').eq((bang_no) % item_length).animate({
            left: item_size * -1
        },0)

        // 전체 item 들 200씩 오른쪽으로 이동
        $('.k_menu_item_ul').eq(0).children('.k_menu_item_li').animate({
            left: `+=${item_size}px`
        }, bang_timer, 'linear')
    })

    let bang_interval;
    function bang_slide() {
        bang_interval = setInterval(function(){
            // $('.item_btn_R').trigger('click')
            $('.k_menu_item_ul').eq(pan_no).children('.item_btn_R').trigger('click')
        }, bang_timer + 3000);
    }
    bang_slide()

    $('.k_menu_item_ul').hover(function(){
        clearInterval(bang_interval);
    }, function(){
        bang_slide()
    });
    

    // 버튼막기 
    function prevent_btn_slide() {
        // 버튼 막기
        $('.menu_item_btn').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.menu_item_btn').css({pointerEvents:'auto'})
        }, bang_timer)
    }
    
    // 탭 메뉴 클릭하면 해당 번째 탭 메뉴 나오게 하기
    $('.k_menu_tab').click(function(){
        
        $('.k_menu_item_ul').removeClass('k_menu_item_ul_active')
        $('.k_menu_item_ul').eq($(this).index()).addClass('k_menu_item_ul_active')
    
        pan_no = $(this).index();
        // bang_no = 0;
    })
    
    
});


////////// 이벤트 아이템 한칸씩 이동 및 4개씩 자동 슬라이드////////////////////

$(document).ready(function(){

    let event_item_size = $('.event_item_li').eq(0).outerWidth();
    let event_item_length = $('.event_item_ul').eq(0).children('.event_item_li').length;
    console.log(event_item_length)

    for(let q=0; q<event_item_length; q++) {

        
        let tmp_event_length = $('.event_item_ul').eq(q).children('.event_item_li').length;

        for(let k=0; k<tmp_event_length; k++) {
            $('.event_item_ul').eq(q).children('.event_item_li').eq(k).css({ 
                left: event_item_size * k 
            })
        }
    }
 
    let event_timer = 300;
    let event_item_no = 0;
    $(document).on('click','.event_btn_R',function(){
        prevent_btn_slide()

        for(let i=0; i<4; i++) {
            $('.event_item_li').animate({
                left: `-=${event_item_size}px`
            }, event_timer, 'linear')

            $('.event_item_li').eq(event_item_no % event_item_length).animate({
                left: event_item_size * (event_item_length - 1)
            },0)
            event_item_no+=1;
        }
 
        

    })
    $(document).on('click','.event_btn_L',function(){
        prevent_btn_slide()

        for(let i=0; i<4; i++) {

            event_item_no-=1;

            // 특정 번째꺼만 반대쪽 끝으로 이동
            // $('.event_item_ul').eq(event_item_no % event_item_length).children('.event_item_li').eq((event_item_no) % event_item_length).animate({
            $('.event_item_li').eq(event_item_no % event_item_length).animate({
                left: event_item_size * -1
            },0)

            // 전체 item 들 200씩 오른쪽으로 이동
            $('.event_item_ul').children('.event_item_li').animate({
                left: `+=${event_item_size}px`
            }, event_timer, 'linear')
            
        }
    })


    let event_item_interval;
    function event_item_slide() {
        event_item_interval = setInterval(function(){
            $('.event_btn_R').trigger('click') 
        }, event_timer + 4000);
    }
    event_item_slide()

    $('.event_list').hover(function(){
        clearInterval(event_item_interval);
    }, function(){
        event_item_slide()
    });

    // 버튼막기 
    function prevent_btn_slide() {
        // 버튼 막기
        $('.event_item_btn').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.event_item_btn').css({pointerEvents:'auto'})
        }, event_timer)
    }





    //스크롤 하면 공 내려오기




    let ball_banner_o_top = $('.ball_banner').offset().top;
    let con_banner_o_top = $('.con_banner').offset().top;
    

    
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let w_height = $(window).height();
        let s_bot = s_top + w_height - 300;

        if(s_bot >= ball_banner_o_top) { 

            $('.big_ball').addClass('ball_down1')
            $('.ball').addClass('ball_down2')
        }

        

    });
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let w_height = $(window).height();
        let s_bot = s_top + w_height - 800;

        if(s_bot >= con_banner_o_top){

            $('.big_circle').addClass('big_circle_active')
        }

    });
    let sec_sns_o_top = $('.sec_sns').offset().top;
    
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let w_height = $(window).height();
        let s_bot = s_top + w_height - 500;
        sec_sns_o_top = $('.sec_sns').offset().top;
        console.log("sec_sns_o_top:" + sec_sns_o_top)

        if(s_bot >= sec_sns_o_top){

            $('.s_title_logo').addClass('s_title_logo_active')
            $('.s_E_logo').addClass('s_E_logo_active')
            $('.sns_img_box1').addClass('sns_img_box1_active')
            $('.sns_img_box2').addClass('sns_img_box2_active')
        }

    })



})












// window.addEventListener('scroll', function(){
//     ball()
// })

// function ball() {
//     console.log("scrollY: " + window.scrollY); //현재 스크롤된값
//     console.log("pageYOffset: " + window.pageYOffset) //현재 스크롤된값
//     console.log("innerHeight: " + window.innerHeight); //현재보여지는 viewport 높이
//     console.log("clientHeight: " + document.body.clientHeight); //현재문서의 전체높이
//     /*
//         clientHeight - 패딩값 포함한 크기 (outerHeight() 같은거)
//     */

//     let target = document.getElementsByTagName('section');

//     // 1번방 요소의 현재(상대) 좌표. s_top 이 sec1의 o_top 까지 얼마나 남았냐? 라는 뜻
//     console.log("sec1 o_top: " + target[0].getBoundingClientRect().top); 

//     console.log(window.scrollY + target[0].getBoundingClientRect().top);// 1번방 요소의 (절대) 좌표

//     // console.log(window.scrollY , target[1].getBoundingClientRect().top);
//     if(target[0].getBoundingClientRect().top <= 0) { // target1번보다 s_top이 아래에 있다
//         document.getElementsByClassName('ball_banner').style.animation= move2 1s forwards,
//         transform= rotate("-20deg"), translateY("-400px"), scale(0) ;
//     }
//     else if(target[0].getBoundingClientRect().top > 0) { // target1번보다 s_top이 위에 있다
//         document.getElementsByClassName('ball_banner').style.left="50%"
//     }
// }
// ball()