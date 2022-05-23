var progressbar=document.querySelectorAll(".skill-progress > div");
console.log("progressBAr"+progressbar);
var animationDone=false;
var skillsContainer=document.getElementById("skills-container");
console.log("skills-container"+skillsContainer);
window.addEventListener("scroll",checkScroll);

function initialiseBars(){
	for(let bars of progressbar){
		bars.style.width = 0 + "%";
	}
}

initialiseBars();

function fillBars(){
	for(let bars of progressbar){
		let currentWidth=0;
		let targetWidth=bars.getAttribute('data-bar-width');
		let interval=setInterval(function(){
		if(currentWidth>targetWidth){
			clearInterval(interval);
		}
		currentWidth++;
		bars.style.width=currentWidth +"%";
	},7);
	}
}


function checkScroll(){
	// have to check skill-container is visible
	var getCoordinates=skillsContainer.getBoundingClientRect();
	console.log(getCoordinates.top);
	if(!animationDone && getCoordinates.top <= window.innerHeight){
		animationDone=true;
		fillBars();
		console.log("skills section visible");
	}
	else if(getCoordinates.top > window.innerHeight){
		animationDone=false;
		initialiseBars();
	}
}


// var interval=setInterval(function(){
// 		var targetskill=targetSection.getBoundingClientRect();
// 		console.log("targetSkill"+targetskill.top);
// 		if(targetskill.top<=0){
// 			clearInterval(interval);
// 		}
// 		window.scrollBy(0,30);
// 	},10);

















// 1st method

var navMenuTags=document.querySelectorAll(".nav-menu a");
console.log(navMenuTags);

for(var i=0;i<=navMenuTags.length;i++){
	console.log(navMenuTags);
	navMenuTags[i].addEventListener('click',function(event){
		event.preventDefault();
		var targetSectionID=this.textContent.trim().toLowerCase();
		// if(targetSectionID==contact){
					// console.log(true);

				
		var targetSection=document.getElementById(targetSectionID);
		var initial=setInterval(function(){
			var getCoordinates=targetSection.getBoundingClientRect();
			console.log(getCoordinates.top);
				if(targetSectionID==="contact"){
					if(getCoordinates.top<160){
						clearInterval(initial);
						return;
					}
				}
				else if(getCoordinates.top<=0){
					clearInterval(initial);
					return;
				}
				window.scrollBy(0,30);
			},10);
	});
}



// 2nd method
// var getAnchorTag=document.querySelectorAll(".nav-menu a");
// var interval;
// for(var i=0;i<=getAnchorTag.length;i++){
// 	getAnchorTag[i].addEventListener('click',function(event){
// 		event.preventDefault();
// 		var targetSectionID=this.textContent.trim().toLowerCase();
// 		console.log(targetSectionID);
// 		var targetSection=document.getElementById(targetSectionID);
// 		console.log(targetSection);
// 		interval = setInterval(scrollVertically,20,targetSection);
// 	});
// }

// function scrollVertically(targetSection){
// 	var getCoordinate=targetSection.getBoundingClientRect();
// 	console.log(getCoordinate);
// 	if(getCoordinate.top<=0){
// 		clearInterval(interval);
// 		return;
// 	}
// 	window.scrollBy(0,20);
// }



// 3rd method
// var getAnchorTag=document.querySelectorAll(".nav-menu a");
// var interval;
// for(var i=0;i<=getAnchorTag.length;i++){
// 	getAnchorTag[i].addEventListener('click',function(event){
// 		event.preventDefault();
// 		var targetSectionID=this.textContent.trim().toLowerCase();
// 		console.log(targetSectionID);
// 		var targetSection=document.getElementById(targetSectionID);
// 		console.log(targetSection);
		
// 		interval = setInterval(function(){
// 			scrollVertically(targetSection);
// 		},10);
// 	});
// }

// function scrollVertically(targetSection){
// 	var getCoordinate=targetSection.getBoundingClientRect();
// 	console.log(getCoordinate);
// 	if(getCoordinate.top<=0){
// 		clearInterval(interval);
// 		return;
// 	}
// 	window.scrollBy(0,80);
// }
