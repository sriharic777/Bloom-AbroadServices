var modal = document.getElementById("myModalz");
var btn = document.getElementById("myBtnz");

var span = document.getElementsByClassName("closez")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//***
// small modal openup speed
//Offer pop-up modal -- change time here 1000 = 1s

document.onload = setTimeout(function () {
  modal.style.display = "block";
}, 1200000);

//  Exit modal - Exit pop-up

// var onecs = true;
// window.onload = function () {
//   document.getElementById("Body").onmouseleave = function () {
//       if (onecs === true && localStorage.getItem("hasCodeRunBefore") === null) {
//       onecs = false;
//       modal.style.display = "block";
//       localStorage.setItem("hasCodeRunBefore", true);
//     }
//   }
// }

var modaly = document.getElementById("myModaly");
var spany = document.getElementsByClassName("closey")[0];

spany.onclick = function () {
  modaly.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modaly) {
    modaly.style.display = "none";
  }
};

function openModal(field_name) {
  var modaly = document.getElementById("myModaly");
  modaly.style.display = "block";
  const all_va = document.querySelectorAll("#SingleLineUsingJS");
  all_va.forEach((el) => {
    el.value = field_name;
  });
  // $("#SingleLineUsingJS").val(field_name);
  // document.getElementById("SingleLineUsingJS").value = field_name;
}

// close Mobile Button

function MModalClose() {
  document.getElementById("sidr-main").style.display = "none";
}
function MModalClose2() {
  document.getElementById("sidr-main").style.display = "block";
  document.getElementById("sidr-main").style.left = "0px";
}

// function blink_text() {
//   $('.blink_me').fadeOut(1000);
//   $('.blink_me').fadeIn(1000);
// }
// setInterval(blink_text, 1500);
 
class myTopnav extends HTMLElement{
  connectedCallback(){
    this.innerHTML=` <header id="header_2">
    <div class="top_bar_2">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-xs-6">
                    <div class="pull-left"> <em class="contct_2"><i class="fas fa-calendar-week blink_me" aria-hidden="true"></i><a href="events.html" class="blink_me">FREE Coaching</a></em> </div>
                </div>
                <div class="col-md-7 col-xs-6">
                    <ul class="login_wrap">
                        <div class=""> <em class="contct_2"> <a href='https://wa.me/919996662332' target='_blank'><i class="fab fa-whatsapp"></i>999 666 2332</a> <a href="tel:+919996662332">&nbsp;<i class="fas fa-phone"></i></a> </em> </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="kode_navigation">
        <div id="mobile-header" onclick="MModalClose2()"> <a id="responsive-menu-button" href="#sidr-main"></a> </div>
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <div class="logo_wrap" class="img-responsive"> <a href="index.html"><img src="images/vlv-study-abroad-logo.svg" alt="VLV Study Abroad Consultant Bengaluru, India" loading="lazy"/></a> </div>
                </div>
                <div class="col-md-10">
                    <div class="nav_2" id="navigation">
                        <div class="mM" onclick="MModalClose()"></div>
                        <ul>
                            <li><a href="whystudyabroad.html">Why Study Abroad</a></li>
                            <li><a href="ourservices.html">Our Services</a>
                                <ul>
                                    <li><a href="ourservices.html">Full-list of Services </a></li>
                                    <li><a onclick="MModalClose()" href="ourservices.html#Course_Selection">Course Selection </a></li>
                                    <li><a onclick="MModalClose()" href="ourservices.html#Admission_Assistance">Admission Assistance</a></li>
                                    <li><a onclick="MModalClose()" href="ourservices.html#Scholarships">Scholarships </a></li>
                                    <li><a onclick="MModalClose()" href="ourservices.html#Visa_Guidance">Travel Guidance</a></li>
                                    <li><a onclick="MModalClose()" href="ourservices.html#IELTS">IELTS</a></li>
                                    <li><a onclick="MModalClose()" href="ourservices.html#Safety_Monitoring">Safety Monitoring</a></li>
                                </ul>
                            </li>
                            <li><a href="countries.html">Countries</a>
                                <ul>
                                    <li><a href="countries.html">All Countires</a></li>
                                    <li><a href="uk.html">United Kingdom</a></li>
                                    <li><a href="ireland.html">IreLand</a></li>
                                    <li><a href="usa.html">United States</a></li>
                                    <li><a href="canada.html">Canada</a></li>
                                    <li><a href="australia.html">Australia</a></li>
                                    <li><a href="uae.html">UAE</a></li>
                                </ul>
                            </li>
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="universities.html">Universities</i></a>
                                <ul>
                                    <li><a href="affordable-universities.html">Affordable Universities</a></li>
                                    <li><a href="premium-universities.html">Premium Universities</a></li>
                                    <li><a href="all-universities.html">All Universities</a></li>
                                </ul>
                            </li>
                            <li><a href="preparetofly.html">Prepare to fly <i class="fas fa-plane-departure"></i></a></li>
                            <li><a href="faq.html">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>            
</header>`
  }
}

customElements.define('my-navbar', myTopnav)

class myFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`<div class="edu2_ft_topbar_wrap">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="widget widget-links">
                    <h5>Information</h5>
                    <ul>
                        <li><a href="about-us.html">About us</a></li>
                        <li><a href="#">For Partners</a></li>
                        <li><a href="contactus.html">Contact Us</a></li>
                        <li><a href="careers.html">Careers</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget widget-links">
                    <h5>Help For Students</h5>
                    <ul>
                        <li><a href="ourservices.html#Visa_Guidance">Travel Assistance</a></li>
                        <li><a href="ourservices.html#Course_Selection">Pick The Right Course</a></li>
                        <li><a href="ourservices.html#Admission_Assistance">Help With Applications</a></li>
                        <li><a href="ourservices.html#Scholarships">Funding And Scholarship</a></li>
                        <li><a href="ourservices.html#IELTS">English Proficiency Tests</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div class="widget wiget-instagram">
                    <h5>Social Media</h5>
                    <ul>
                        <li><a href="https://www.instagram.com/VLV_Studyabroad_Consulting/" target="_blank"><img src="extra-images/instagram-1.jpg" style="width:32px;height:32px;" alt="overseas education" loading="lazy"/></a></li>
                        <li><a href="#"><img src="extra-images/fb.jpg" style="width:32px;height:32px;" alt="study abroad bangalore" loading="lazy"/></a></li>
                        <li><a href="#"><img src="extra-images/linkedin.jpg" style="width:32px;height:32px;" alt="abroad study consultant" loading="lazy"/></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div class="widget widget-contact">
                    <h5>Contact</h5>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i><a href="#"> Bengaluru | Hyderabad | London</li><li><i class="fas fa-phone"></i><a href="#"> +91 999-666-2332 | +44 7448-848-948</a></li>
                        <li><i class="fas fa-envelope"></i><a href="mailto:info@studyabroad.consulting"> info@studyabroad.consulting</a></li>
                        <li><i class="fas fa-calendar-week"></i><a href="events.html"> Events</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>`
  }
}
customElements.define('my-footer', myFooter)