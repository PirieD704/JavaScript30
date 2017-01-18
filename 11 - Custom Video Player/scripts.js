// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out functions
// function togglePlay(){
// 	if(video.paused){
// 		video.play();
// 	}else{
// 		video.pause();
// 	}
// }
// an alternative way to code it that looks cleaner using a ternary operator
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton() {
	const icon = this.paused ? "►" : "❚ ❚";
	toggle.textContent = icon;
}

function skipUpdate() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	const scrubTime = (e.offsetX / video.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

// Hook up our event listeners:
video.addEventListener("click", togglePlay);
// these are bound to the video and will check for the given property
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skipUpdate));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));
progress.addEventListener("click", scrub);