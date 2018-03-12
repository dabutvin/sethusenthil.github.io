var x = 20;
var enableNotificationsButtons = document.querySelectorAll('.enable-notifications');

function displayConfirmNotification() {
  var options = {
    body: 'You successfully subscribed to our Notification service!',
    icon: '/media/favicon.png',
    image: '/media/favicon.png',
    dir: 'ltr',
    lang: 'en-US',
    vibrate: [100, 50, 200],
    badge: '/media/favicon.png',
    tag: 'confirm-notification',
  };
  new Notification('Successfully subscribed!', options);
}

function askForNotificationPermission() {
  Notification.requestPermission(function(result) {
    console.log('User Choice', result);
    if (result !== 'granted') {
      console.log('No notification permission granted!');
    } else {
      new Notification('Successfully subscribed!');
      document.cookie = "subscribed to push";
    }
  });
}
if ('Notification' in window) {
  for (var i = 0; i < enableNotificationsButtons.length; i++) {
    enableNotificationsButtons[i].style.display = 'inline-block';
    enableNotificationsButtons[i].addEventListener('click', askForNotificationPermission);
  }
}
if (document.cookie != "subscribed to push") {
  $(document).ready(function() {
    setTimeout(function() {
      $("#notisend").click();
    }, 10000);
  });
}


$("#id_of_textbox").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#id_of_button").click();
  }
});

function configurePushSub() {
  if (!('serviceWorker' in navigator)) {
    return;
  }
}

console.log("%cHmmm so you are lookin' into my code?!", "color:#4285F4; font-size:30px; font-family:'Product Sans', Arial, sans-serif;");
console.log("%cIf you are really intrested HMU @ https://bit.ly/sethunum", "color:#4285F4; font-size:15px; font-family:'Product Sans', Arial, sans-serif;");

var instagram = document.getElementById('instagram'),
  twitter = document.getElementById("twitter"),
  medium = document.getElementById("medium"),
  github = document.getElementById("github"),
  facebook = document.getElementById("facebook"),
  codepen = document.getElementById("codepen"),
  email = document.getElementById("email"),
  lucky = document.getElementById("lucky");


instagram.addEventListener('click', insta);
twitter.addEventListener('click', twi);
medium.addEventListener('click', medi);
github.addEventListener('click', git);
facebook.addEventListener('click', git);
codepen.addEventListener('click', git);
email.addEventListener('click', mail);
lucky.addEventListener('click', luk);
document.addEventListener('copy', addLink);

function insta() {
  window.open('https://bit.ly/SethuInstagram');
}

function twi() {
  window.open('https://bit.ly/SethuTwitter');
}

function medi() {
  window.open('https://bit.ly/SethuMedium');
}

function git() {
  window.open('https://bit.ly/SethuGitHub');
}

function fb() {
  window.open('https://bit.ly/sethuFacebook');
}

function cpen() {
  window.open('https://bit.ly/CodePenSethu');
}

function mail() {
  window.open('https://bit.ly/SethuMail');
}

function luckyReset() {
  lucky.style.fontSize = '10' + 'px';
  lucky.innerText = "I'm feeling lucky";
}

function instaHover() {
  lucky.innerText = 'instagram';
}

function twiHover() {
  lucky.innerText = 'Twitter';
}

function mediHover() {
  lucky.innerText = 'Medium';
}

function gitHover() {
  lucky.innerText = 'Github';
}

function fbHover() {
  lucky.innerText = 'Facebook';
}

function cpenHover() {
  lucky.innerText = 'Code Pen';
}

function punch() {
  lucky.innerText = 'Ouch! Stop punching me!';
}

function name() {
  lucky.innerText = 'Sethunarayan Senthil';
}

function aboutMe() {
  lucky.innerText = 'Click if your too lasy to scroll';
}

function browser() {
  lucky.innerText = 'So your on ' + navigator.platform + ' ?';
}
function learning(){
    if (document.getElementById('currentlyLearning').style.display = "none") {
      document.getElementById('currentlyLearning').style.display = "block";
      document.querySelector('.currentlyL').innerText = 'Hide Learning';
    }else{
      document.getElementById('currentlyLearning').style.display = "none";
      document.querySelector('.currentlyL').innerText = 'Currently Learning';
    }
}
function luk() {
  var gen = Math.floor(Math.random() * 6);
  if (gen === 1) {
    insta()
  } else if (gen === 2) {
    twi()
  } else if (gen === 3) {
    medi()
  } else if (gen === 4) {
    git()
  } else if (gen === 5) {
    fb()
  } else if (gen === 6) {
    cpen()
  }
}
function petition(){
  window.open('https://www.change.org/p/samsung-android-updates-for-all-despite-the-oem');
}
$(document).bind("contextmenu", function(e) {
  e.preventDefault();
  $("#cntnr").css("left", e.pageX);
  $("#cntnr").css("top", e.pageY);
  // $("#cntnr").hide(100);
  $("#cntnr").fadeIn(200, startFocusOut());
});

function startFocusOut() {
  $(document).on("click", function() {
    $("#cntnr").hide();
    $(document).off("click");
  });
}

function addLink() {
  var selection = window.getSelection(),
    pagelink = '<br /><br /> (Senthil, Sethu. “Sethu Senthil.” Sethu Senthil,' + document.location.href + ')',
    copytext = selection + pagelink,
    newdiv = document.createElement('div');

  newdiv.style.position = 'absolute';
  newdiv.style.left = '-99999px';

  document.body.appendChild(newdiv);
  newdiv.innerHTML = copytext;
  selection.selectAllChildren(newdiv);

  window.setTimeout(function() {
    document.body.removeChild(newdiv);
  }, 100);
}


if (top.location != self.location) {
  top.location = self.location.href;
}

//pleaseDontGo.js
!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.myPlugin=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,o,i,l,u={},c=!!document.querySelector&&!!e.addEventListener,r={newTitle:"Please Don't Go",newFavicon:"/assets/images/favicon-dontgo.ico",timeout:2e3},s=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var i=0,l=e.length;i<l;i++)t.call(n,e[i],i,e)},f=function(e,t){var n={};return s(e,function(t,o){n[o]=e[o]}),s(t,function(e,o){n[o]=t[o]}),n},a=function(e){return"string"!=typeof e.newTitle?(console.log("newTitle must be a string."),!1):"string"!=typeof e.newFavicon?(console.log("newFavicon must be a string."),!1):"number"==typeof e.timeout||(console.log("timeout must be a number."),!1)},d=function(e){o=document.querySelectorAll('[rel="icon"]')[0],i=document.title,l=o.href,document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState?setTimeout(function(){document.title=e.newTitle,o.setAttribute("href",e.newFavicon)},e.timeout):(document.title=i,o.setAttribute("href",l))})};u.destroy=function(){t&&(t=null,o=null,i=null,l=null)},u.init=function(e){c&&(u.destroy(),t=f(r,e||{}),n=a(t),n&&d(t))},window.pleaseDontGo=u});
