!function(){const e=document.querySelectorAll(".photography__tab"),t=document.querySelectorAll(".photography__images");e.forEach((function(c){c.addEventListener("click",(function(){let o=c,a=o.getAttribute("data-tab"),r=document.querySelector(a);e.forEach((function(e){e.classList.remove("active")})),t.forEach((function(e){e.classList.remove("active-item")})),o.classList.add("active"),r.classList.add("active-item")}))})),document.querySelectorAll(".more__card").forEach((function(e){e.addEventListener("click",(function(){const t=e.getAttribute("data-tab"),c=document.querySelector(t);c&&(document.querySelectorAll(".more__card").forEach((function(e){e.classList.remove("more__card-active")})),document.querySelectorAll(".livepeople__row").forEach((function(e){e.classList.remove("livepeople__row-active")})),e.classList.add("more__card-active"),c.classList.add("livepeople__row-active"))}))})),document.querySelectorAll('a[href*="#"]').forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const c=e.getAttribute("href").substring(1);document.getElementById(c).scrollIntoView({behavior:"smooth",block:"start"})}))}));const c=document.querySelectorAll(".header__btn");c.forEach((function(e){e.addEventListener("click",(function(){c.forEach((function(e){e.classList.toggle("header__btn-active")})),e.classList.contains("header__btn-active")?document.querySelectorAll(".header__balances").forEach((e=>{e.classList.add("header__balances-active")})):document.querySelectorAll(".header__balances").forEach((e=>{e.classList.remove("header__balances-active")}))}))})),document.querySelectorAll(".more__morebtn").forEach((function(e){e.addEventListener("click",(function(){e.classList.add("more__morebtn-active"),e.classList.contains("more__morebtn-active")&&document.querySelectorAll(".more__card").forEach((function(e){e.classList.add("more__card-open")}))}))}))}();