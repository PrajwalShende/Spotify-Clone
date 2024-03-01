window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/image.png");
    bannerHeading.textContent = "Deep Focus";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/banner1.svg)";
        bannerImage.setAttribute("src", "images/image.png");
        bannerHeading.textContent = "Deep Focus";
        bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/b01.jpg)";
            bannerImage.setAttribute("src", "images/image 1.jpg");
            bannerHeading.textContent = "Duvet";
            bannerText.textContent = "By Bôa";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/b01.jpg)";
            bannerImage.setAttribute("src", "images/image 2.jpg");
            bannerHeading.textContent = "Twilight";
            bannerText.textContent = "By Bôa";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/b03.webp)";
            bannerImage.setAttribute("src", "images/image 3.jpg");
            bannerHeading.textContent = "Disillusion";
            bannerText.textContent = "By タイナカサチ";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/b04.jpeg)";
            bannerImage.setAttribute("src", "images/image 4.jpg");
            bannerHeading.textContent = "Louise";
            bannerText.textContent = "By TV Girl";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/b05.jpeg)";
            bannerImage.setAttribute("src", "images/image 5.jpg");
            bannerHeading.textContent = "Ricordando ill passato";
            bannerText.textContent = "By 白夢の繭";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/b06.jpeg)";
            bannerImage.setAttribute("src", "images/image 6.jpeg");
            bannerHeading.textContent = "State of Grace";
            bannerText.textContent = "By Taylor Swift";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/b07.jpg)";
            bannerImage.setAttribute("src", "images/image 7.jpg");
            bannerHeading.textContent = "Revelations";
            bannerText.textContent = "By Akiko Shikata";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/b08.webp)";
            bannerImage.setAttribute("src", "images/image 8.webp");
            bannerHeading.textContent = "Tek It";
            bannerText.textContent = "By Cafuné";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/b09.jpg)";
            bannerImage.setAttribute("src", "images/image 9.webp");
            bannerHeading.textContent = "Mrs Magic";
            bannerText.textContent = "By Strawberry Guy";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/b010.webp)";
            bannerImage.setAttribute("src", "images/image 10.webp");
            bannerHeading.textContent = "We fell in love in october"
            bannerText.textContent = "By girl in red";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}