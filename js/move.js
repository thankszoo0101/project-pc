// JavaScript Document

$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수 5
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때  (타이머의 동작 상태)
    
    $('.btn1').css('background','#f00'); //첫번째 불켜
    $('.btn1').css('width','30px'); // 버튼의 너비 증가
    
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.gallery .link1 p').delay(1000).animate({top:330, opacity:1},'slow'); //텍스트 애니메이션 동작  (400 -> 250 수정)
 
    function moveg(){   //5초마다 호출되는 함수
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
    //$('.gallery li:eq('+ (cnt-1) +')').fadeIn('slow');
	 		                    
    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
      
      $('.mbutton').css('background','#fff'); //버튼불다꺼!!
      $('.mbutton').css('width','16px'); // 버튼 원래의 너비
      $('.btn'+cnt).css('background','#f00');//자신만 불켜
      $('.btn'+cnt).css('width','30px');    

      $('.gallery li p').css('top',530).css('opacity',0);  //겔러리의 텍스트 위치 초기화  (600 -> 450 수정)
      $('.gallery .link'+cnt).find('p').delay(1000).animate({top:330, opacity:1},'slow'); //해당 이미지의 텍스트 동작!  (400 -> 250 수정)

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0 -> 1 2 3 4 5 1 2 3 4 5...
     }
     
    timeonoff= setInterval( moveg , 5000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(){  //각각의 버튼 클릭시
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.

		  if($(this).is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($(this).is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($(this).is('.btn3')){ 
				 cnt=3; 
		  }else if($(this).is('.btn4')){
				 cnt=4; 
		  }else if($(this).is('.btn5')){
				 cnt=5; 
		  } 

		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }
      $('.mbutton').css('background','#fff'); //버튼 모두불꺼
      $('.mbutton').css('width','16px');
      $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','30px');
      
      $('.gallery li p').css('top',530).css('opacity',0); //모든 텍스트를 원위치  (600 -> 450 수정)
      $('.gallery .link'+cnt).find('p').delay(1500).animate({top:330, opacity:1},'slow'); //현재 카운트에 맞는 이미지의 텍스트만 동작!  (400 -> 250 수정)

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 5000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
      }
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;  //멈춤상태 
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 5000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
		   onoff=true; //동장상태
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){ 

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가   1 2 3 4 5 1 2 3 4 5...
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소  5 4 3 2 1 5 4 3 2 1..
      }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    $('.mbutton').css('background','#fff'); //버튼 모두불꺼
    $('.mbutton').css('width','16px');  // '16' -> '16px' 수정
    $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','30px');

    $('.gallery li p').css('top',530).css('opacity',0);//모든 텍스트 초기화  (600 -> 450 수정)
    $('.gallery .link'+cnt).find('p').delay(1500).animate({top:330, opacity:1},'slow'); //현재 이미지의 텍스트만 동작  (400 -> 250 수정)

    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 5000); //부활  (2000 -> 5000 수정)

    if(onoff==false){
      onoff=true;
      $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    }
  });


});

// 이미지 클릭시 교체되는 스크립트

$(document).ready(function () {
    $('.introduce_left ul li a').click(function (event) {
        event.preventDefault(); //링크 없는거 누를때 위로 올라가는거 막아줌 

        var introduce = $(this).closest('.introduce');
        var clickImg = $(this).find('img');
        var bigImg = introduce.find('.introduce_img img');

        var oldSrc = bigImg.attr('src');
        var oldAlt = bigImg.attr('alt');

        bigImg.stop(true, true).fadeOut(200, function () {
            bigImg.attr('src', clickImg.attr('src'));
            bigImg.attr('alt', clickImg.attr('alt'));

            clickImg.attr('src', oldSrc);
            clickImg.attr('alt', oldAlt);

            bigImg.fadeIn(300);
        });
    });
});


// 알림마당 캐러셀 + 오토플레이 

$(document).ready(function () {
    var slider = $('.news_slider');
    var track = slider.find('.news_right');
    var originalCard = track.children('li');

    var cardCount = originalCard.length;
    var visibleCount = 3;
    var gap = 20;

    var current = visibleCount;
    var cardWidth = 0;
    var moveWidth = 0;
    var timer;

    var startX = 0;
    var lastX = 0;
    var moveX = 0;
    var startPosition = 0;

    var lastTime = 0;
    var velocity = 0;

    var dragging = false;
    var moved = false;

    if (cardCount <= visibleCount) {
        return;
    }

    // 앞뒤에 화면 표시 개수만큼 복제
    var firstClone = originalCard
        .slice(0, visibleCount)
        .clone()
        .addClass('clone');

    var lastClone = originalCard
        .slice(cardCount - visibleCount)
        .clone()
        .addClass('clone');

    track.prepend(lastClone);
    track.append(firstClone);

    function setSize() {
        cardWidth =
            (slider.innerWidth() - gap * (visibleCount - 1)) /
            visibleCount;

        moveWidth = cardWidth + gap;

        track.children('li').css('width', cardWidth);

        moveSlide(false);
    }

    function moveSlide(animation, duration) {
        if (animation) {
            track.css(
                'transition',
                'transform ' + duration + 'ms cubic-bezier(.22,.61,.36,1)'
            );
        } else {
            track.css('transition', 'none');
        }

        track.css(
            'transform',
            'translateX(' + (-current * moveWidth) + 'px)'
        );
    }

    function nextSlide() {
        if (dragging) {
            return;
        }

        current++;
        moveSlide(true, 550);
    }

    function startAutoPlay() {
        clearInterval(timer);

        timer = setInterval(function () {
            nextSlide();
        }, 3000); // 오토플레이 이미지 변경 속도 
    }

    function stopAutoPlay() {
        clearInterval(timer);
    }

    function getPageX(event) {
        var originalEvent = event.originalEvent;

        if (
            originalEvent.touches &&
            originalEvent.touches.length
        ) {
            return originalEvent.touches[0].pageX;
        }

        if (
            originalEvent.changedTouches &&
            originalEvent.changedTouches.length
        ) {
            return originalEvent.changedTouches[0].pageX;
        }

        return event.pageX;
    }

    // 복제 카드까지 이동하면 같은 위치의 원본으로 순간 이동
    track.on('transitionend', function (event) {
        if (event.target !== track[0]) {
            return;
        }

        if (current >= cardCount + visibleCount) {
            current = visibleCount;
            moveSlide(false);
        }

        if (current < visibleCount) {
            current = cardCount + visibleCount - 1;
            moveSlide(false);
        }
    });

    // 브라우저 기본 이미지·링크 드래그 방지
    slider.on('dragstart', 'a, img', function (event) {
        event.preventDefault();
    });

    // 드래그 시작
    slider.on('mousedown touchstart', function (event) {
        if (event.type === 'mousedown' && event.which !== 1) {
            return;
        }

        dragging = true;
        moved = false;
        moveX = 0;
        velocity = 0;

        startX = getPageX(event);
        lastX = startX;
        lastTime = new Date().getTime();

        startPosition = -current * moveWidth;

        slider.addClass('dragging');
        track.css('transition', 'none');

        stopAutoPlay();
    });

    // 드래그 중
    $(document).on('mousemove touchmove', function (event) {
        if (!dragging) {
            return;
        }

        var pageX = getPageX(event);
        var now = new Date().getTime();
        var timeGap = now - lastTime;

        moveX = pageX - startX;

        if (timeGap > 0) {
            velocity = (pageX - lastX) / timeGap;
        }

        lastX = pageX;
        lastTime = now;

        if (Math.abs(moveX) > 5) {
            moved = true;
        }

        track.css(
            'transform',
            'translateX(' + (startPosition + moveX) + 'px)'
        );
    });

    // 드래그 종료
    $(document).on('mouseup touchend', function () {
        if (!dragging) {
            return;
        }

        dragging = false;
        slider.removeClass('dragging');

        // 현재 이동 거리와 마지막 드래그 속도를 함께 계산
        var projectedMove = moveX + velocity * 180;
        var moveCount = Math.round(
            Math.abs(projectedMove) / moveWidth
        );

        // 빠르게 짧게 밀어도 한 장 이동
        if (
            moveCount === 0 &&
            (Math.abs(projectedMove) > 40 ||
             Math.abs(velocity) > .25)
        ) {
            moveCount = 1;
        }

        // 한 번에 너무 많이 넘어가지 않도록 제한
        if (moveCount > 2) {
            moveCount = 2;
        }

        if (projectedMove < -40) {
            current += moveCount;
        } else if (projectedMove > 40) {
            current -= moveCount;
        }

        var duration = 450 - Math.abs(velocity) * 100;

        if (duration < 250) {
            duration = 250;
        }

        if (duration > 500) {
            duration = 500;
        }

        moveSlide(true, duration);
        moveX = 0;
        velocity = 0;
        startAutoPlay();
    });

    // 실제로 드래그했을 때 링크 클릭 방지
    slider.on('click', 'a', function (event) {
        if (moved) {
            event.preventDefault();
        }

        moved = false;
    });

    $(window).resize(function () {
        setSize();
    });

    setSize();
    startAutoPlay();
});