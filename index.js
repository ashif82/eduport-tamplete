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

      } else {
        lists.style.display = "none";
        list.className="bi bi-list";
        list.classList.add("btn")
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




