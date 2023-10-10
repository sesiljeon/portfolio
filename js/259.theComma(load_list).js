//  <li class="best item_init">
// <div class="item_img">
//     <a href="#">
//         <img src="img/theComma/items/best/1.jpg" alt="">
//     </a>
// </div>
// <div class="item_info">
//     <div class="item_info_title">더콤마</div>
//     <div class="origin_price">70,000원</div>
//     <div class="sale_price">50,000원</div>
//     <div class="item_desc">상품에 대한 설명이 표시됩니다.</div>
// </div>
// </li>

const ITEM_LIST = [
    // best
    [
        {item_no: 1, src: '1.jpg', title: '얼핏보면 전등같은 빗자루세트', o_price: 90000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 2, src: '2.jpg', title: '하얀 원통', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 3, src: '3.jpg', title: '원피스 같지만 알고보면 앞치마', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 4, src: '4.jpg', title: '검정 핸드백 같은 토트백', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 5, src: '5.jpg', title: '상의 같지만 뎅뎅이 하의', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, src: '7.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:2, src: '2.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:1, src: '1.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, src: '3.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, src: '4.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, src: '7.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:5, src: '5.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:1, src: '1.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, src: '4.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:2, src: '2.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, src: '3.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'}
    ]
    ,
    // new
    [ 
        {item_no:1, covered_src: '4.jpg', src: '1.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:2, covered_src: '8.jpg', src: '2.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, covered_src: '6.jpg', src: '3.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, covered_src: '7.jpg', src: '4.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:5, covered_src: '8.jpg', src: '5.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, covered_src: '2.jpg', src: '6.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, covered_src: '4.jpg', src: '7.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, covered_src: '1.jpg', src: '8.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:9, covered_src: '7.jpg', src: '4.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:10, covered_src: '8.jpg', src: '5.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:11, covered_src: '2.jpg', src: '6.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:12, covered_src: '4.jpg', src: '7.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:13, covered_src: '1.jpg', src: '8.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
         
    ],
    [],
    [],
    [],
    [],
    []
]

// url 에서 현재 넘어온 cate_no 로 페이지 제목이랑 이미지 띄우기

const menu_array = ['best','new','outer','top','bottom','acc','bag_shoes'];
const title_array = ['BEST','NEW 5%','OUTER','TOP','BOTTOM','ACC','BAG & SHOES'];
const img_addr = "img/theComma/items/"; 

// let cate_no=get_cate_no();
function get_cate_no() {
    let url = location.href;
    url = url.split("?");

    if(url.length > 1) {
        url = url[1].split("&")
        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("=");

            if(tmp_url[0] == "cate_no") {
                return tmp_url[1]
                // load_items(tmp_url[1]) //cate_no, start_index, qty
            }
        }
    }
    else {
        console.log("없어")
    }
}
function get_url_info(key) {
    let url = location.href;
    url = url.split("?");

    if(url.length > 1) {
        url = url[1].split("&")
        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("=");

            if(tmp_url[0] == key) {
                return tmp_url[1] 
            }
        }
    }
    else {
        console.log("없어")
    }
}


// load_items(cate_no);
function load_items(cate_no, qty) { 
    let item_length = $('#'+menu_array[cate_no]+'.item_container > li').length;
    let cate_no_length = ITEM_LIST[cate_no].length;

    // .main > .sec에 아이디를 해당 페이지꺼로 바꿈
    // 메인페이지에서도 이 함수 사용시 각 타이틀 부분 안바뀌게 해야해서 if문으로 cate_no 있을때만 동작하게 함.
    if(get_cate_no() != null) {
        $('.main > .sec').attr('id', menu_array[cate_no])
        $('.main .sec_title').text(title_array[cate_no])
    }

    let list = ''; 
    let it = ITEM_LIST[cate_no];
    for(let i=item_length; i<item_length+qty; i++) {      
        if(i < cate_no_length) {
            list+= '<li class="'+menu_array[cate_no]+' item_init">';
            list+= '    <div class="item_img">';
            if(cate_no == 1) {
                list+= '        <a href="302.theComma(item).html?cate_no='+cate_no+'&item_no='+it[i].item_no+'">';
                list+= '            <img src="'+img_addr+menu_array[cate_no]+'/'+it[i].covered_src+'" alt="">';
                list+= '        </a>';
            }
            list+= '        <a href="302.theComma(item).html?cate_no='+cate_no+'&item_no='+it[i].item_no+'">';
            list+= '            <img src="'+img_addr+menu_array[cate_no]+'/'+it[i].src+'" alt="">';
            list+= '        </a>';
            list+= '    </div>';
            list+= '    <div class="item_info">';
            list+= '        <div class="item_info_title txt_over">'+it[i].title+'</div>';
            list+= '        <div class="origin_price">'+comma(it[i].o_price)+'원</div>';
            list+= '        <div class="sale_price">'+comma(it[i].s_price)+'원</div>';
            list+= '        <div class="item_desc">'+it[i].desc+'</div>';
            list+= '    </div>';
            list+= '</li>';  
        }   
    }
    $('#'+menu_array[cate_no]+'.sec .item_container').append(list);
}

function comma(num){
    /*  
        / - 정규식의 맨 앞과 끝에 넣음
        \B - 시작과 끝을 말함. EX) 1234 에서 1의 앞 4의 뒤를 의미
             우리는 1234
        (\d{3}) - 숫자 3자리
        +(?!\d) - +는 앞의 표현식이 1회 이상 연속으로 반복
                  x(?!y) - x 뒤에 y가 없는 경우에만 x에 일치
                  여기서 (?!\d) 는 뒤에 더이상 숫자가 없는 경우 라는 뜻
                  (\d{3})+(?!\d) 는 숫자가 3번 나타난다 라는 뜻
        (?=   ) - 앞 뒤 조건 모두 만족 이라는 뜻
                    (\d{3}) 부터 +(?!\d)) 까지 만족할때 라는 뜻
        g - 전역 검색
    */
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}


