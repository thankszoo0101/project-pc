// ISO 인증서 확대보기 팝업

var cert_img = ['state_ko.jpg', 'state_en.jpg'];   // 크게 보여줄 이미지 파일 이름 (순서대로)
var cert_tit = ['안전보건경영시스템 인증서 국문', '안전보건경영시스템 인증서 영문'];   // 팝업에 쓸 제목

// '확대보기'를 누르면
$('.zoom_btn').click(function(e){
    e.preventDefault();                       // a 태그가 맨 위로 튀는 것 막기

    var ind = $(this).index('.zoom_btn');     // 몇 번째 버튼? (0 또는 1)

    $('.cert_popup img').attr({
        src: './images/sub3/' + cert_img[ind],   // 그 번호에 맞는 이미지로 바꾸기
        alt: cert_tit[ind]
    });
    $('.cert_popup p').text(cert_tit[ind]);      // 그 번호에 맞는 제목으로 바꾸기

    $('.cert_modal').fadeIn('fast');          // 어두운 판 열기
    $('.cert_popup').fadeIn('slow');          // 팝업창 열기
});

// X 버튼이나 어두운 판을 누르면 닫기
$('.cert_close, .cert_modal').click(function(e){
    e.preventDefault();
    $('.cert_modal').fadeOut('fast');
    $('.cert_popup').fadeOut('fast');
});
