var list = document.getElementById("list");
var lists = document.getElementById("lists");
var demo = document.querySelector(".demo");
var demos = document.querySelector(".demos");
var page = document.querySelector(".page");
var pages = document.querySelector(".pages");
var account = document.querySelector(".account");
var accounts = document.querySelector(".accounts");
var megamenu = document.querySelector(".megamenu");
var megamenus = document.querySelector(".megamenus");
var category = document.querySelector(".category");
var categorys = document.querySelector(".categorys");

lists.style.display = "none";
demos.style.display = "none";
pages.style.display = "none";
accounts.style.display = "none";
megamenus.style.display = "none";
categorys.style.display = "none";

list.addEventListener("click", () => {
  if (lists.style.display === "none") {
    lists.style.display = "block";
    list.className = "bi bi-x";
    list.classList.add("btn");
    document.querySelector(".section").style.display = "none";
    profiles.style.display = "none";
  } else {
    lists.style.display = "none";
    list.className = "bi bi-list";
    list.classList.add("btn");
    document.querySelector(".section").style.display = "block";
  }
});

category.addEventListener("click", () => {
  if (categorys.style.display === "none") {
    categorys.style.display = "block";
    demos.style.display = "none";
    pages.style.display = "none";
    accounts.style.display = "none";
    megamenus.style.display = "none";
  } else {
    categorys.style.display = "none";
  }
});

demo.addEventListener("click", () => {
  if (demos.style.display === "none") {
    demos.style.display = "block";
    categorys.style.display = "none";
    pages.style.display = "none";
    accounts.style.display = "none";
    megamenus.style.display = "none";
  } else {
    demos.style.display = "none";
  }
});
page.addEventListener("click", () => {
  if (pages.style.display === "none") {
    pages.style.display = "block";
    accounts.style.display = "none";
    megamenus.style.display = "none";
    categorys.style.display = "none";
    demos.style.display = "none";
  } else {
    pages.style.display = "none";
  }
});
account.addEventListener("click", () => {
  if (accounts.style.display === "none") {
    accounts.style.display = "block";
    megamenus.style.display = "none";
    categorys.style.display = "none";
    demos.style.display = "none";
    pages.style.display = "none";
  } else {
    accounts.style.display = "none";
  }
});
megamenu.addEventListener("click", () => {
  if (megamenus.style.display === "none") {
    megamenus.style.display = "block";
    demos.style.display = "none";
    pages.style.display = "none";
    accounts.style.display = "none";
    categorys.style.display = "none";
  } else {
    megamenus.style.display = "none";
  }
});

var light = document.getElementById("light");
var dark = document.getElementById("dark");
light.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  document.querySelector(".container").style.color = "black";
  document.querySelector(".js").style.color = "black";
  document.querySelector("#pattern").style.display = "block";
});
dark.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".container").style.color = "white";
  document.querySelector(".js").style.color = "white";
  document.querySelector("#pattern").style.display = "none";
});

var profileImg1 = document.getElementById("navbar-profile");
var profiles = document.querySelector(".profiles");
profiles.style.display = "none";

profileImg1.addEventListener("click", () => {
  if (profiles.style.display === "none") {
    profiles.style.display = "block";
  } else {
    profiles.style.display = "none";
  }
});
var lori = document.querySelector(".lori");
var faisal = document.querySelector(".faisal");
var salman = document.querySelector(".salman");
var danish = document.querySelector(".danish");
var rehan = document.querySelector(".rehan");
var manish = document.querySelector(".manish");
var loris = document.querySelector(".loris");
var faisals = document.querySelector(".faisals");
var salmans = document.querySelector(".salmans");
var danishs = document.querySelector(".danishs");
var rehans = document.querySelector(".rehans");
var manishs = document.querySelector(".manishs");
faisal.style.display = "none";
salman.style.display = "none";
danish.style.display = "none";
rehan.style.display = "none";
manish.style.display = "none";

loris.addEventListener("click", () => {
  lori.style.display = "block";
  lori.style.display = "flex";
  rehan.style.display = "none";
  salman.style.display = "none";
  faisal.style.display = "none";
  danish.style.display = "none";
  manish.style.display = "none";
  document.querySelector(".lori-img").src =
    "../eduport-templete/edgu/avtar/01.jpg";
});

salmans.addEventListener("click", () => {
  salman.style.display = "block";
  salman.style.display = "flex";
  lori.style.display = "none";
  faisal.style.display = "none";
  danish.style.display = "none";
  rehan.style.display = "none";
  manish.style.display = "none";

  document.querySelector(".lori-img").src =
    "../eduport-templete/edgu/avtar/02.jpg";
});

faisals.addEventListener("click", () => {
  faisal.style.display = "block";
  faisal.style.display = "flex";
  lori.style.display = "none";
  salman.style.display = "none";
  danish.style.display = "none";
  rehan.style.display = "none";
  manish.style.display = "none";
  document.querySelector(".lori-img").src =
    "../eduport-templete/edgu/avtar/03.jpg";
});
danishs.addEventListener("click", () => {
  danish.style.display = "block";
  danish.style.display = "flex";
  lori.style.display = "none";
  salman.style.display = "none";
  faisal.style.display = "none";
  rehan.style.display = "none";
  manish.style.display = "none";
  document.querySelector(".lori-img").src =
    "../eduport-templete/edgu/avtar/04.jpg";
});

manishs.addEventListener("click", () => {
  manish.style.display = "block";
  manish.style.display = "flex";
  lori.style.display = "none";
  salman.style.display = "none";
  faisal.style.display = "none";
  rehan.style.display = "none";
  danish.style.display = "none";
  document.querySelector(".lori-img").src =
    "../eduport-templete/edgu/avtar/09.jpg";
});

rehans.addEventListener("click", () => {
  rehan.style.display = "block";
  rehan.style.display = "flex";
  lori.style.display = "none";
  salman.style.display = "none";
  faisal.style.display = "none";
  danish.style.display = "none";
  manish.style.display = "none";
  document.querySelector(".lori-img").src =
    "../eduport-templete/edgu/avtar/10.jpg";
});

var course = 0;
var expect = 0;
var students = 0;
var certified = 0;
var Design = [
  "Web Design",
  "Development",
  "Graphic Design",
  "Marketing",
  "Finance",
];

function details1() {
  if (course < 10) {
    course++;
  }
  document.getElementById("online").innerHTML = course + "k";
}

function details2() {
  if (expect < 200) {
    expect++;
  }
  document.getElementById("Tutors").innerHTML = expect + "+";
}

function details3() {
  if (students < 60) {
    students++;
  }
  document.getElementById("Students").innerHTML = students + "k+";
}

function details4() {
  if (certified < 6) {
    certified++;
  }
  document.getElementById("certified").innerHTML = certified + "k+";
}
function bodyload() {
  setInterval(details1, 200);
  setInterval(details2, 10);
  setInterval(details3, 30);
  setInterval(details4, 240);
  popularCourse();
  TrandingCourse()
}

function popularCourse() {
  fetch("../eduport-templete/edu.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var categorybuttons = document.getElementById("category-buttons");
      var categoryList = document.getElementById("course-list");
      var firstButton = null;
      var uniqueCategory = new Set();
      data.map((item) => {
        uniqueCategory.add(item.category);
      });

      uniqueCategory.forEach((category) => {
        var button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = category;

        button.addEventListener("click", () => {
          categoryList.innerHTML = "";

          const courseFilter = data.filter(
            (item) => item.category === category
          );

          courseFilter.forEach((course) => {
            const div = document.createElement("div");
            div.classList.add("col-12", "col-sm-6", "col-lg-3");
            div.innerHTML = `
        <div class="card">
           <div class="card-img">
              <img src=${course.Image} class="card-img-top" >
           </div>
           <div class="card-body">
              <p>${course.title}</p>
              <p>${course.description}</p>
                <div>
           <span class="bi bi-star-fill text-warning"></span>
           <span class="bi bi-star-fill text-warning"></span>
           <span class="bi bi-star-fill text-warning"></span>
           <span class="bi bi-star-fill text-warning"></span>
           <span class="">${course.Rating.rate}/</span>
            <span class="">${course.Rating.rating}</span>
           </div>
           </div>
           <div class="card-footer d-flex justify-content-between">
                <div>
                   <span class="bi bi-clock text-danger"></span>
                    <span">${course.time}</span>
                </div>
                     <div>
                   <span class="bi bi-calendar text-warning"></span>
                    <span">${course.lecture}</span>
                </div>
           </div>
         
           
        </div>
        `;
            categoryList.appendChild(div);
          });
        });
        if (!firstButton) {
          firstButton = button;
        }
        categorybuttons.appendChild(button);
        if (firstButton) {
          firstButton.click();
        }
      });
    });
}


const TradingCourseImage =["../eduport-templete/edgu/course/14.jpg","../eduport-templete/edgu/course/15.jpg","../eduport-templete/edgu/course/16.jpg","../eduport-templete/edgu/course/17.jpg"];

const CourseName=["Angular-The complete Guide (2021 Edition)","Time Management Mastery : Do More ,Stress Less","Time Management Mastery : Do More ,Stress Less","Time Management Mastery : Do More ,Stress Less"];

const Rate=["4.5","4.0","4.5","4.0"];

const Student =["6500","2000","3000","4500"]; 
const Time = ["12h 56m","24h 30m","6h 44m","9h 42m"];
const lecture =["55 lectures","63 lecture","97 lecture","94 lecture"]
const TeacherProfile=["../eduport/edgu/avtar/01.jpg","../eduport/edgu/avtar/02.jpg","../eduport/edgu/avtar/03.jpg","../eduport/edgu/avtar/04.jpg"];
const TeacherName=["Frances Gouses","Larry Laswosn","Billy Vasquez","carenes polly"];
const price =["Free","$200","$500","$300"];

var start = 0;


function TrandingCourse(){
    var TradingContainer =  document.getElementById("Trading");
    TradingContainer.innerHTML="";

    for(let i=0;i<3;i++){
        var div = document.createElement("div");
        div.style.display="flex";
        div.style.justifyContent="center"
        div.className = "col-12 col-sm-12 col-lg-4 ";
        div.innerHTML=`
               <div class="card overflow-hidden px-4 ">
                <div class="card-img cour">
                    <img src=${TradingCourseImage[(start+i)%TradingCourseImage.length]}
                </div> 
                <div class="card-body">
                    <p class="fw-bold fs-4">${CourseName[(start + i)%CourseName.length]}</p>
                   <div class="d-flex justify-content-between">
                          <div>
                        <span class="text-warning">${Rate[(start + i)% Rate.length]} <span class="bi bi-star-fill"></span></span>
                        <span>(${Student[(start + i)% Student.length]})</span>
                    </div>
                    <div>
                         <span>${Student[(start + i)% Student.length]}</span>
                         <span>(Student)</span>
                    </div>
                  </div>

                  <div class="mt-2">
                    <span class="bi bi-clock text-danger"></span>
                    <span>${Time[(start +i)% Time.length]}</span>
                    <span style="color: orange" class="bi bi-calendar ms-3"></span>
                    <span >${lecture[(start +i) % lecture.length]}</span>
                 </div>
                </div> 
                <div class="card-footer d-flex justify-content-between">
                    <div class="">
                       <img src="${TeacherProfile[(start +i )% TeacherProfile.length]}"/>
                       <span>${TeacherName[(start +i)% TeacherName.length]}</span>
                    </div>
                    <div>
                        <a class="text-decoration-none text-success fw-bold fs-3" href="" >${price[(start + i) % price.length]}</a>
                    </div>
                </div>
              </div>
        `
        TradingContainer.appendChild(div);
    }
}

document.getElementById("leftClick").addEventListener("click",()=>{
  start=(start-1+ TradingCourseImage.length)% TradingCourseImage.length
  TrandingCourse()
})

document.getElementById("rightClick").addEventListener("click",()=>{
  start=(start+1)% TradingCourseImage.length
  TrandingCourse()
})
