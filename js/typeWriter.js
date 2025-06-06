let i = 0;
let text1 = "";
let text2 = "Every single second, with you, are my favorite"
let speed = 1;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 10 + 10;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 50);
//};

function toggleCards() {
    const cardSection = document.getElementById('cardSection');
    cardSection.classList.toggle('active');
    
    if (cardSection.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Menambahkan event listener untuk menutup card section ketika mengklik di luar card
document.addEventListener('click', function(event) {
    const cardSection = document.getElementById('cardSection');
    const showCardsButton = document.getElementById('showCards');
    
    if (cardSection.classList.contains('active') && 
        !cardSection.contains(event.target) && 
        event.target !== showCardsButton) {
        cardSection.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
