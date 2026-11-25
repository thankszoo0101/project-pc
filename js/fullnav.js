   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
        //    $('.dropdownmenu li .depth1').css('color','#333');
            //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-142 ){ //헤더가 비주얼 위에 있을 때(비주얼높이-원래 헤더 높이)
               $(this).css('background','rgba(255, 255, 255, .6)').css('border-bottom','none'); 
            //    $('.dropdownmenu li .depth1').css('color','#fff');
           }else{ //헤더가 비주얼 아래에 있을 때
               $(this).css('background','#fff'); 
            //    $('.dropdownmenu li .depth1').css('color','#333');
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  
           //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh-142){//스크롤이 비주얼의 높이-header높이 까지 내리면
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
               $('.top_move').fadeIn('slow');
            //    $('.dropdownmenu li .depth1').css('color','#333');
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').css('background','rgba(255, 255, 255, .6)').css('border-bottom','none');
                    $('.top_move').fadeOut('slow');
                //    $('.dropdownmenu li .depth1').css('color','#fff');
              }
           }; 
           
        });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('.dropdownmenu .menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:332},'fast').clearQueue();
       },function() {
          $('.dropdownmenu .menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:143},'fast').clearQueue();
     });
    
     //1depth 효과
     $('.dropdownmenu .menu').hover(
       function() { 
           $('.depth1',this).css('color','#DE2718');
           $('.depth1',this).addClass('active');
       },function() {
          $('.depth1',this).css('color','#333');
          $('.depth1',this).removeClass('active');
     });
     

     //tab 처리
     $('.dropdownmenu .menu .depth1').on('focus', function () {        
        $('.dropdownmenu .menu ul').slideDown('normal');
        $('#headerArea').animate({height:332},'fast').clearQueue();
     });

    $('.dropdownmenu .m6 li:last').find('a').on('blur', function () {        
        $('.dropdownmenu .menu ul').slideUp('fast');
        $('#headerArea').animate({height:143},'normal').clearQueue();
    });



      $('.top_move').click(function(e){
                 e.preventDefault();
                 $("html,body").stop().animate({"scrollTop":0},1000); 
      });