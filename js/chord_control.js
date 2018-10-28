var tmp = 0;// 임시 전역 변수
var CurrentStep = 0;
var bgImg = 0; //코드 출력의 분기 설정
var time; // 주기적으로 출력하는 함수 지정

var currentMusicIdx = 0;


//시간 변수
var timeLine1 = 2000;
var timeLine = new Array(10);
var lyricsData = new Array(10);

var prev_chord = new Array(10);
var cur_chord = new Array(10);
var next_chord = new Array(10);

var cur_chord_s = new Array(10);
var chord_tab_s = new Array(10);

var musictitle = new Array(10);

musictitle =["본능적으로","falling slowly","너에게난 나에게 넌","Guitarsong"];


$("#listcontent").children().click(function(){
	 currentMusicIdx = $("#listcontent").children().index(this);
	 console.log(currentMusicIdx);
	 $('b').text( musictitle[currentMusicIdx]);//제목 변경
});


//currentMusicIdx = index;


// first music
//timeLine[0] new Array(4); 
timeLine[0] = [2000,2000,2000,2000,1000,2000,2000,2000,2000,1000,1000];
lyricsData[0] = ["시작!","본능적으로 느껴졌어","넌나의 사랑이 된다는걸","처음 너를 바라 봤던 순간","찰나의 전율 잊지못해","워어~워우우워어워우워어",
                 "좋은사람인지 모르겠어","미친듯이난 끌릴뿐이야","섯부른 판단일지라도","왠지 사랑일 것만 같아"];

//prev_chord[0] = ["X", "C", "C#", "D", "F","G","Gm","Bm","Gm","G"];
prev_chord[0] = ["img/1.jpg","img/key/key_b1_off.png","img/key/key_b1_off.png","img/key/key_a1_off.png",
                 "img/key/key_g2_off.png","img/key/key_f1_off.png","img/key/key_e1_off.png",
                 "img/key/key_a1_off.png","img/key/key_b1_off.png","img/key/key_a1_off.png"];

//cur_chord[0] = ["C", "C#", "D", "F", "G","Gm","Bm","Gm","G","C"];
cur_chord[0] = ["img/key/key_b1_on.png","img/key/key_a1_on.png","img/key/key_g2_on.png",
                "img/key/key_f1_on.png","img/key/key_e1_on.png","img/key/key_a1_on.png",
                "img/key/key_b1_on.png","img/key/key_a1_on.png","img/key/key_a1_on.png"];
//next_chord[0] = ["C#", "D", "F", "G", "Gm","Bm","Gm","G","X"];
next_chord[0] = ["img/key/key_a1_off.png","img/key/key_g2_off.png","img/key/key_f1_off.png",
                 "img/key/key_e1_off.png","img/key/key_a1_off.png","img/key/key_b1_off.png",
                 "img/key/key_a1_off.png","img/1.jpg"];

//cur_chord_s[0] = ["C", "C#", "D", "F", "G","Gm","Bm","Gm","G","C"];
cur_chord_s[0] = ["img/key/key_b1_on.png","img/key/key_a1_on.png","img/key/key_g2_on.png",
                  "img/key/key_f1_on.png","img/key/key_e1_on.png","img/key/key_a1_on.png",
                  "img/key/key_b1_on.png","img/key/key_a1_on.png","img/key/key_a1_on.png"];

chord_tab_s[0] = ["img/tab/img_b1.png","img/tab/img_a1.png","img/tab/img_g2.png",
                  "img/tab/img_f1.png","img/tab/img_e1.png","img/tab/img_a1.png",
                  "img/tab/img_b1.png","img/tab/img_a1.png","img/tab/img_a1.png"];



// second music
timeLine[1] = [1000,1000,1000,1000,1000,2000,2000,2000,2000,3000,3000];
lyricsData[1] = ["Start","DEF","GH","IJKLM","DEF","GH","IJKLM","DEF","GH","IJKLM","DEF","GH","IJKLM"];

//prev_chord[1] = ["X", "C", "C#", "D", "F","G","Gm","Bm","Gm","G"];
prev_chord[1] = ["img/1.jpg","img/key/key_b2_off.png","img/key/key_a2_off.png","img/key/key_a1_off.png",
                 "img/key/key_g2_off.png","img/key/key_f1_off.png","img/key/key_e1_off.png",
                 "img/key/key_a1_off.png","img/key/key_b1_off.png","img/key/key_a1_off.png"];

//cur_chord[1] = ["C", "C#", "D", "F", "G","Gm","Bm","Gm","G","C"];
cur_chord[1] = ["img/key/key_b2_on.png","img/key/key_a2_on.png","img/key/key_g2_on.png",
                "img/key/key_f1_on.png","img/key/key_e1_on.png","img/key/key_a1_on.png",
                "img/key/key_b1_on.png","img/key/key_a1_on.png","img/key/key_a1_on.png"];

//next_chord[1] = ["C#", "D", "F", "G", "Gm","Bm","Gm","G","X"];
next_chord[1] = ["img/key/key_a2_off.png","img/key/key_g2_off.png","img/key/key_f1_off.png",
                 "img/key/key_e1_off.png","img/key/key_a1_off.png","img/key/key_b1_off.png",
                 "img/key/key_a1_off.png","img/1.jpg"];

//cur_chord_s[1] = ["C", "C#", "D", "F", "G","Gm","Bm","Gm","G","C"];
cur_chord_s[1] = ["img/key/key_b2_on.png","img/key/key_a2_on.png","img/key/key_g2_on.png",
                  "img/key/key_f1_on.png","img/key/key_e1_on.png","img/key/key_a1_on.png",
                  "img/key/key_b1_on.png","img/key/key_a1_on.png","img/key/key_a1_on.png"];

chord_tab_s[1] = ["img/tab/img_b1.png","img/tab/img_a1.png","img/tab/img_g2.png",
                  "img/tab/img_f1.png","img/tab/img_e1.png","img/tab/img_a1.png",
                  "img/tab/img_b1.png","img/tab/img_a1.png","img/tab/img_a1.png"];




// third music
timeLine[2] = [2000,5000,2000,3000];
lyricsData[2] = ["가갸","거겨고","교","규갸"];




//no show function
function ntimers(){
			
			CurrentStep = tmp;
						
			//time = setInterval(start, timeLine1);// 1초 후 start를 재귀호출한다.;
			console.log('out');
			start();
			
			function start() {
				
								
				$('.lylics').show();//가사  재출력
				if (timeLine[currentMusicIdx].length > CurrentStep){
					//$('.prev_chord').text(prev_chord[currentMusicIdx][CurrentStep]);
					$('.prev_chord').attr("src",prev_chord[currentMusicIdx][CurrentStep]);
					//$('.cur_chord').text(cur_chord[currentMusicIdx][CurrentStep]);
					$('.cur_chord').attr("src",cur_chord[currentMusicIdx][CurrentStep]);
					//$('.next_chord').text(next_chord[currentMusicIdx][CurrentStep]);
					$('.next_chord').attr("src",next_chord[currentMusicIdx][CurrentStep]);
			
					$('.lylics').text(lyricsData[currentMusicIdx][CurrentStep]);
				}else{
					clearTimeout(time); //노래끝
					CurrentStep=0// bgImg 초기화
					tmp=0;// tmp 초기화
					$('.lylics').hide();//가사  숨김
					$('.ss').show();
					return;
				}
				
				++CurrentStep;					 
				console.log('hello~'); // 크롬 브라우저라면 F12를 눌러 확인할 수 있다.
				time=setTimeout(start, timeLine[currentMusicIdx][CurrentStep]);
				console.log(timeLine[currentMusicIdx][CurrentStep]);
			}
			console.log('before_return');
			return;
}

//show function
function stimers(){
			
			CurrentStep = tmp;
			//bgImg=tmp;
						
			console.log('out');
			//time = setInterval(start,timeLine1);
			//time = setInterval(start,timeLine2);
			start();

			function start() {
				
								
				$('.lylics').show();//가사  재출력
				if (timeLine[currentMusicIdx].length > CurrentStep) {
					//$('.cur_chord_s').text(cur_chord[currentMusicIdx][CurrentStep]);
					$('.cur_chord_s').attr("src",cur_chord_s[currentMusicIdx][CurrentStep]);
					$('.chord_tab_s').attr("src",chord_tab_s[currentMusicIdx][CurrentStep]);
								
					$('.lylics').text(lyricsData[currentMusicIdx][CurrentStep]);
				}else{
					//console.log('9');
					clearTimeout(time); //노래끝
					CurrentStep=0;//곡 순서  초기화
					tmp=0;// tmp초기화
					$('.lylics').hide();//가사  숨김
					$('.ss').show();//버튼 show
					return;				
				}
				++CurrentStep;
				console.log('hello~'); // 크롬 브라우저라면 F12를 눌러 확인할 수 있다.
				time=setTimeout(start, timeLine1); // setTimeout함수의 재귀적 호출
			}
			
			console.log('before_return');
			return;
}