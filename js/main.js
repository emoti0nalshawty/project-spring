"use strict";function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){a=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw i}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}window.addEventListener("DOMContentLoaded",(function(){new WOW({mobile:!1}).init(),$(document).ready((function(){$(".gallery__slider").slick({dots:!0,autoplay:!0,infinite:!1,prevArrow:'<button class="slick-btn slick-btn__left"><img src="img/prev.svg"></button>',nextArrow:'<button class="slick-btn slick-btn__right"><img src="img/next.svg"></button>'}),$(".gallery__slider").on("wheel",(function(t){t.preventDefault(),t.originalEvent.deltaY<0?$(this).slick("slickNext"):$(this).slick("slickPrev")})),$(".apartment__slider").slick({dots:!0,autoplay:!1,infinite:!1,prevArrow:'<button class="slick-btn slick-btn__left apartment-btn apartment-btn__left"><img src="img/prev.svg"></button>',nextArrow:'<button class="slick-btn slick-btn__right apartment-btn apartment-btn__right"><img src="img/next.svg"></button>'}),$(".apartment__slider").on("wheel",(function(t){t.preventDefault(),t.originalEvent.deltaY<0?$(this).slick("slickNext"):$(this).slick("slickPrev")})),$(".questions__item-accordion").each((function(t){$(this).on("click",(function(e){e.preventDefault(),$(".questions__item-content").eq(t).slideToggle(),$(".questions__item-accordion").eq(t).toggleClass("active")}))})),$(".counter").on("click",(function(){$(".info__popup").slideToggle("2000","swing")})),$(".info__popup-btn").on("click",(function(){$(".info__popup").slideToggle("2000","swing")})),$(".booking__popup").on("click",(function(){$(".info__popup").slideToggle("2000","swing")}))})),document.querySelectorAll("[data-modal-btn]").forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.getAttribute("data-modal-btn"),n=document.querySelector("[data-modal-window=".concat(e,"]"));n.style.display="block",n.querySelector(".modal-close").addEventListener("click",(function(){n.style.display="none"}))}))})),window.onclick=function(t){t.target.hasAttribute("data-modal-window")&&(t.target.style.display="none")};var t=1,e=1,n=document.querySelectorAll(".btn-child"),r=document.querySelectorAll(".btn-adult"),o=document.querySelectorAll(".value-child"),i=document.querySelectorAll(".value-adult");n.forEach((function(e){e.addEventListener("click",(function(e){var n=e.currentTarget.classList;n.contains("decrease")?t--:n.contains("increase")&&t++;var r,i=_createForOfIteratorHelper(o);try{for(i.s();!(r=i.n()).done;){r.value.value=t}}catch(t){i.e(t)}finally{i.f()}t<=1&&(t=1)}))})),r.forEach((function(t){t.addEventListener("click",(function(t){var n=t.currentTarget.classList;n.contains("decrease")?e--:n.contains("increase")&&e++;var r,o=_createForOfIteratorHelper(i);try{for(o.s();!(r=o.n()).done;){r.value.value=e}}catch(t){o.e(t)}finally{o.f()}e<=1&&(e=1)}))})),document.querySelector(".menu__burger").addEventListener("click",(function(t){document.querySelector(".menu__burger").classList.toggle("active"),document.querySelector(".menu").classList.toggle("active"),document.querySelector("body").classList.toggle("lock")}))}));