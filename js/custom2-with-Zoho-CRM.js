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
                            
                            <li><a href="ourservices.html">Our Services</a>
                                <ul>
                                    <li><a href="ourservices.html">Full-list of Services </a></li>
                                    <li><a onclick="MModalClose()" href="ourservices.html#Course_Selection">Course Selection </a></li>
                                    <li><a onclick="MModalClose()" href="ourservices.html#Admission_Assistance">Admission Assistance</a></li>
                                    <li><a onclick="MModalClose()" href="ourservices.html#Scholarships">Scholarships </a></li>
                                    <li><a onclick="MModalClose()" href="ourservices.html#Visa_Guidance">Visa Guidance</a></li>
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
                                    <li><a href="uae.html">Germany</a></li>
                                </ul>
                            </li>
                            <li><a href="universities.html">Uni & Courses</i></a>
                                <ul>
                                    <li><a href="affordable-universities.html">Affordable Universities</a></li>
                                    <li><a href="premium-universities.html">Premium Universities</a></li>
                                    <li><a href="all-universities.html">All Universities</a></li>
                                    <li><a href="courses.html">All Courses</a></li>
                                </ul>
                            </li>
                            <li><a href="universities.html">Student Housing</i></a>
                                <ul>
                                    <li><a href="uk.html">United Kingdom</a></li>
                                    <li><a href="ireland.html">IreLand</a></li>
                                    <li><a href="usa.html">United States</a></li>
                                    <li><a href="canada.html">Canada</a></li>
                                    <li><a href="australia.html">Australia</a></li>
                                    <li><a href="uae.html">Germany</a></li>
                                </ul>
                            </li>
                            <li><a href="universities.html">Student Finance</i></a>
                                <ul>
                                    <li><a href="uk.html">Education Loans</a></li>
                                    <li><a href="ireland.html">Intl Bank Accounts</a></li>
                                    <li><a href="usa.html">Travel Insurance</a></li>
                                    <li><a href="canada.html">Health Insurance</a></li>
                                    <li><a href="australia.html">Intl Money Transfer</a></li>
                                </ul>
                            </li>
                            <li><a href="faq.html">FAQ <i class="fas fa-plane-departure"></i></a></li>
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
                        <li><a href="whystudyabroad.html">Why Study Abroad</a></li>                        
                        <li><a href="contactus.html">Contact Us</a></li>
                        <li><a href="careers.html">Careers</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget widget-links">
                    <h5>Help For Students</h5>
                    <ul>
                        <li><a href="ourservices.html#Visa_Guidance">Visa Assistance</a></li>
                        <li><a href="ourservices.html#Course_Selection">Pick The Right Course</a></li>
                        <li><a href="ourservices.html#Admission_Assistance">Help With Applications</a></li>
                        <li><a href="ourservices.html#Scholarships">Funding And Scholarship</a></li>
                        <li><a href="ourservices.html#IELTS">English Proficiency Tests</a></li>
                        <li><a href="preparetofly.html">Prepare to Fly</a></li>
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



//https://crm.zoho.in/crm/javascript/zcga.js
//zoho crm zcga code starts
 //$Id$
function getValue(p_n, ix)
{
	var q_s = '';
	if  (p_n == 'q')
	{
		var ref = document.referrer;
		if (ref != undefined) {
		q_s= ref.split('?')[1];
		}
	}
	else
	{
		try
		{
            q_s = window.top.location.search.substring(1);
		}
		catch(e)
	    {
			q_s = '';
	    }
	}
	var pa_n = p_n +'='; 
	var p_v = '';
	if(q_s!=undefined && q_s.length > 0 ){
		begin = q_s.indexOf ( pa_n );
		if ( begin != -1 )
		{
			begin += pa_n.length;end = q_s.indexOf ( '&' , begin );
			if ( end == -1 )
			{
				end = q_s.length
			}
			p_v = q_s.substring ( begin, end );
		}
	}
	if (p_v == undefined || p_v=='')
	{
		p_v=g_c(GAd.indexValueArr[ix]);
	}
	if (p_v!=undefined)
	{
		p_v = p_v.replace(/\+/g,' ');
	}
	return p_v;
}


GAd.prop=GAd.prop || [];
GAd.indexValueArr=new Array('gclid');
function GAd(){

}
GAd.prototype.initialize=function()
{
	GAd.prop.push([GAd.indexValueArr[0],getValue(GAd.indexValueArr[0],0)]);
	//GAd.prop.push([GAd.indexValueArr[1],getValue(GAd.indexValueArr[1],1)]);
	//GAd.prop.push([GAd.indexValueArr[2],getValue(GAd.indexValueArr[2],2)]);
	
	for (var i=0;i<GAd.prop.length;i++)
	{
		this.s_c(i);	
	}
	this.s_Hid();
	
}
GAd.prototype.s_Hid=function()
{
	var is_set = false;
	var all_Frm = document.forms;
    	for( var i = 0; i < all_Frm.length; i++ ) 
	{
		var frm = all_Frm[i];
			for (var ii=0;ii<frm.length;ii++)
			{
				if( frm.elements[ii].name == 'zc_gad' ) {
					
					var p = g_c(GAd.indexValueArr[0]);
					var hidEl = document.getElementsByName('zc_gad');
					if (hidEl)
					{
						for (var idx =0 ; idx < hidEl.length; idx++ )
					{
						hidEl[idx].value = p;  
						is_set = true;
					}
				}

			}
		}
	}
	
	// if the value of google click id is not set in the hidden element. 
	// there are possible reasons,
	// 1) Page might not have the form kind of implementation (or)
	// 2) Hidden element name might be different from third party form and not being editable.
	if (all_Frm && all_Frm.length == 0) {
		// web page might not have the form kind of implementation
		var hidEl = document.getElementsByName('zc_gad');
		if (hidEl && hidEl.length > 0) {
			var p = g_c(GAd.indexValueArr[0]);
			for (var idx = 0; idx < hidEl.length ; idx++) {
				hidEl[idx].value = p;
				is_set = true;
			}
		}
		
	}
	
	if (!is_set) {
		// <script type="text/javascript" src='<protocol>://crm.zoho.com/crm/javascript/zcga.js' name='zcga' id='zcga' zcga_element_name="<replace_tp_webform_name>"></script> 
		// Hidden element name might be different from third party form and not being editable.
		var zcga_script_elem = document.getElementsByName("zcga");
		if (zcga_script_elem && zcga_script_elem.length == 1) {
			var zcga_hidEl_name = zcga_script_elem[0].getAttribute('zcga_element_name');
			if (zcga_hidEl_name) {
				var hidEl = document.getElementsByName(zcga_hidEl_name);
				if (hidEl && hidEl.length > 0) {
					var p = g_c(GAd.indexValueArr[0]);
					for (var idx = 0; idx < hidEl.length ; idx++) {
						hidEl[idx].value = p;
						is_set = true;
					}
				}
			}
		}
	}
}
GAd.prototype.s_c=function(index,path,domain,secure)
{
	value = GAd.prop[index];
	var c_str = GAd.indexValueArr[index] + "=" + escape ( value[1] );
	var exp_d=30;
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+exp_d);
	c_str += "; expires=" + exdate.toGMTString();//No I18N
	
	//if ( path )
	c_str += "; path=/";//No I18N
	if ( domain )
	c_str += "; domain=" + escape ( domain );//No I18N
	if ( secure )
	c_str += "; secure";//No I18N
	document.cookie = c_str;
}
new GAd().initialize();

function g_c(c_name)
{
        var cArr = document.cookie.split('; ');
        var cArrLen = cArr.length;
        for (var i = 0; i < cArrLen ; i++) {
                var cVals = cArr[i].split('=');
		if (cVals[0] === c_name && cVals[1]){
			return unescape(cVals[1]);
		}
        }
}

/* Iframe support goes here */
function IFrameSupport()
{
	var frm;
	frm = document.getElementsByTagName("iframe");
	for (var i = 0; i < frm.length; ++i)
	{
		if ( (frm[i].src).indexOf('WebFormServeServlet') > 0 )
		{
			var gclid = g_c(GAd.indexValueArr[0]);
			var src = frm[i].src;
			src = src+"&gclid="+gclid;//No I18N
			frm[i].src = src;
		}	
	}
}
IFrameSupport();