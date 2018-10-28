/**********tizen hwkey event ********/
window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName === "back" ) {
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			console.log("aaa");
			if( pageid === "main" ) {
				try {
					console.log("bbb");
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				console.log("ccc");
				window.history.back();
			}
		}
	} );
/*************end******************/

/******** change page **
(document.getElementById("listcontent").onclick=function(){
	tau.changePage('#list1_main');
	});
	//tau.changePage('#list1_content');
	tau.changePage(document.getElementById("list2"));
	tau.changePage(document.getElementById("list3"));
});
******end*********/


/*******rotary event(modifying)***********/
	var Scroll = $('div').prop('scrollHeight'),
		Scrolldump = 0;
	
		console.log(Scroll);
		//console.log($('div').scrollTop(Scroll));
	
	document.addEventListener("rotarydetent", function(event){
		if(event.detail.direction==="CW"){
			console.log(Scroll);
			console.log(Scrolldump);
			if(Scrolldump>$('div').scrollTop()+700)
			{
				Scrolldump -=25;
				return;
			}
			
			Scrolldump += 25;
			$('div').animate({ scrollTop: Scrolldump }, 10);
			
			console.log("clockwise");
		}
		else if(event.detail.direction ==="CCW"){
			//$(".ui-content").scrollTop() - 25;
			console.log(Scroll);
			console.log(Scrolldump);
			if(Scrolldump<0)
			{
				Scrolldump +=25;
				return;
			}			
			
			Scrolldump -= 25;
			$('div').animate({ scrollTop: Scrolldump }, 10);
			console.log(Scroll);
			console.log(Scrolldump);
			console.log("counter-clockwise");
		}
	});
/****end********/


/*****함수 동작 이벤트(button click)*****/
$('.ss').click(function(event){
	
		$('.ss').hide(); //버튼 숨기기
		if(isshow)
		{
			stimers();
			console.log('show');
		}
		else
		{
			ntimers();
			console.log('noshow');
		}
});

	$('.cur_chord').click(function(event){
	console.log('stop');
	tmp = CurrentStep; //CurrentStep 임시 저장
	clearTimeout(time);
	$('.lylics').hide();//가사 가리기
	$('.ss').show();
});
	
	$('.cur_chord_s').click(function(event){
		console.log('stop');
		tmp = CurrentStep; //CurrentStep 임시 저장
		clearTimeout(time);
		$('.lylics').hide();//가사 가리기
		$('.ss').show();
});
	/*****함수 동작 이벤트(button click) end*****/

	
//	/**** list 1 엘리먼트 클릭시 chord_control.js getScript*****/
//	$('ul').find('a').eq(0).click(function(event){ // 이벤트 발생 시점 조정-> 메인 메뉴에서 '악보'아이콘 클릭시로 변경
//		$.getScript("js/chord_control.js", function(data,textStatus,jqxhr){
//			console.log(data);
//			console.log(textStatus);
//			console.log(jqxhr.status);
//			console.log('load was performed');
//		});
//	});
//	/**** list 1 엘리먼트 클릭시 chord_control.js getScript*****/

	

