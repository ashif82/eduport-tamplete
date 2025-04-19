var list = document.getElementById("list");
var lists= document.getElementById("lists");
var demo = document.querySelector(".demo");
var demos = document.querySelector(".demos");
var page = document.querySelector(".page");
var pages = document.querySelector(".pages");
var account = document.querySelector(".account");
var accounts = document.querySelector(".accounts");
var megamenu = document.querySelector(".megamenu");
var megamenus= document.querySelector(".megamenus");
var category = document.querySelector(".category");
var categorys= document.querySelector(".categorys");





lists.style.display="none";
demos.style.display="none";
pages.style.display="none";
accounts.style.display="none";
megamenus.style.display="none";
categorys.style.display="none";

list.addEventListener("click",()=>{
  
    if (lists.style.display === "none") {
        lists.style.display = "block";
        list.className="bi bi-x";
        list.classList.add("btn")
        document.querySelector(".section").style.display="none"
        profiles.style.display="none"


      } else {
        lists.style.display = "none";
        list.className="bi bi-list";
        list.classList.add("btn")
        document.querySelector(".section").style.display="block"
      }
})

category.addEventListener("click",()=>{
    if (categorys.style.display === "none") {
        categorys.style.display = "block";
        demos.style.display = "none";
        pages.style.display = "none";
        accounts.style.display = "none";
        megamenus.style.display = "none";
      } else {
        categorys.style.display = "none";
      }
})

demo.addEventListener("click",()=>{
    if (demos.style.display === "none") {
        demos.style.display = "block";
        categorys.style.display="none"
        pages.style.display = "none";
        accounts.style.display = "none";
        megamenus.style.display = "none";
      } else {
        demos.style.display = "none";
      }
  
})
page.addEventListener("click",()=>{
    if (pages.style.display === "none") {
        pages.style.display = "block";
        accounts.style.display = "none";
        megamenus.style.display = "none";
         categorys.style.display="none"
         demos.style.display = "none";
      } else {
        pages.style.display = "none";
      }
  
})
account.addEventListener("click",()=>{
    if (accounts.style.display === "none") {
        accounts.style.display = "block";
        megamenus.style.display = "none";
        categorys.style.display="none"
        demos.style.display = "none";
        pages.style.display = "none";
      } else {
        accounts.style.display = "none";
       
      }
  
})
megamenu.addEventListener("click",()=>{
    if (megamenus.style.display === "none") {
        megamenus.style.display = "block";
        demos.style.display = "none";
        pages.style.display = "none";
        accounts.style.display = "none";
         categorys.style.display="none"
        
      } else {
        megamenus.style.display = "none";
      }
  
})

var light= document.getElementById("light");
var dark = document.getElementById("dark");
light.addEventListener("click",()=>{
     document.querySelector("body").style.backgroundColor="white";
     document.querySelector("body").style.color="black";
     document.querySelector(".container").style.color="black"
     document.querySelector(".js").style.color="black"
     document.querySelector("#pattern").style.display="block"

})
dark.addEventListener("click",()=>{
  document.querySelector("body").style.backgroundColor="black"
  document.querySelector(".container").style.color="white"
  document.querySelector(".js").style.color="white"
  document.querySelector("#pattern").style.display="none"
})

 var profileImg1= document.getElementById("navbar-profile");
 var profiles = document.querySelector(".profiles");
 profiles.style.display="none";

 profileImg1.addEventListener("click",()=>{
  if(profiles.style.display==="none"){
    profiles.style.display="block";
  }
  else{
    profiles.style.display="none"
  }
 })
  var lori= document.querySelector(".lori");
  var salman= document.querySelector(".salman");
  var danish= document.querySelector(".danish");
  var faisal = document.querySelector(".faisal");
  var rehan= document.querySelector(".rehan");
  var manish= document.querySelector(".manish");
  var faisals = document.querySelector(".faisals");
    faisal.style.display = "none";
    salman.style.display="none";
    danish.style.display="none";
    rehan.style.display="none";
    manish.style.display="none";
    
    faisals.addEventListener("click",()=>{
         faisal.style.display="block";
         lori.style.display="none";
         faisal.style.display="flex"
    })

   

  





