const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let a = document.getElementsByTagName("a");
a[0].innerHTML = siteContent["nav"]["nav-item-1"];
a[1].innerHTML = siteContent["nav"]["nav-item-2"];
a[2].innerHTML = siteContent["nav"]["nav-item-3"];
a[3].innerHTML = siteContent["nav"]["nav-item-4"];
a[4].innerHTML = siteContent["nav"]["nav-item-5"];
a[5].innerHTML = siteContent["nav"]["nav-item-6"];

document.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
document.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

let h4 = document.getElementsByTagName("h4");
let p = document.getElementsByTagName("p");
h4[0].innerHTML = siteContent["main-content"]["features-h4"];
p[0].innerHTML = siteContent["main-content"]["features-content"];
h4[1].innerHTML = siteContent["main-content"]["about-h4"];
p[1].innerHTML = siteContent["main-content"]["about-content"];

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

h4[2].innerHTML = siteContent["main-content"]["services-h4"];
p[2].innerHTML = siteContent["main-content"]["services-content"];
h4[3].innerHTML = siteContent["main-content"]["product-h4"];
p[3].innerHTML = siteContent["main-content"]["product-content"];
h4[4].innerHTML = siteContent["main-content"]["vision-h4"];
p[4].innerHTML = siteContent["main-content"]["vision-content"];

h4[5].innerHTML = siteContent["contact"]["contact-h4"];
p[5].innerHTML = siteContent["contact"]["address"];
p[6].innerHTML = siteContent["contact"]["phone"];
p[7].innerHTML = siteContent["contact"]["email"];

p[8].innerHTML = siteContent["footer"]["copyright"];

//changing style of page
//document.getElementsByTagName("a")[0].style.color = "green";
//document.getElementsByTagName("nav")[0].style.color = "red";

let dom = document.createElement("a");
let textdom = document.createTextNode("DOM");
dom.appendChild(textdom);
document.getElementsByTagName("nav")[0].appendChild(dom);

let awesome = document.createElement("a");
let textawesome = document.createTextNode("Awesome");
awesome.appendChild(textawesome);
document.getElementsByTagName("nav")[0].appendChild(awesome);

for(let i = 0; i <= 7; i++){
  a[i].style.color = "green";
}