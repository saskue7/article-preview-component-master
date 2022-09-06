


const btn = document.querySelector(".share-icon")
const social = document.querySelector(".hidden")
const img = document.querySelector(".share-icon img")
const michelle = document.querySelector(".michelle img")
const sh = document.querySelector(".sh")
const hs = document.querySelector(".hs")



btn.addEventListener("click",function(){
 social.classList.toggle("social")
 btn.classList.toggle("color")
 img.classList.toggle("add")
 sh.classList.toggle("hs")
 if(document.body.clientWidth<1000){
  social.innerHTML=
  `
   <h1>SHARE</h1>
          <ul>
            <li><a href="#"><img src="./images/icon-facebook.svg" alt="#"></a></li>
            <li><a href="#"><img src="./images/icon-twitter.svg" alt="#"></a></li>
            <li><a href="#"><img src="./images/icon-pinterest.svg" alt="#"></a></li>
          </ul>
        
  `
 }    
 // michelle.style.display="none"
})