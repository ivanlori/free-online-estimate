"use strict";!function(){var e=document.getElementById("js-add-btn"),t=document.querySelector(".js-estimate-total"),n=document.querySelector(".js-estimate-subtotal"),a=document.querySelector(".js-discount"),r=document.getElementById("js-logo-image"),s=document.querySelector(".js-logo-wrapper"),o=document.querySelector(".js-datepicker"),i=document.querySelector(".js-vat"),u=document.getElementsByClassName("js-image-blank"),d=(document.querySelector(".js-tooltip"),document.querySelector(".js-vat-display")),l=document.getElementById("js-print-btn"),c=document.getElementById("js-unity-product-0"),m=document.getElementById("js-amount-product-0"),p=document.getElementById("js-quantity-product-0"),v=0,g=function(e){var t=document.getElementById("js-image-blank"),n=t.getContext("2d"),a=new Image;a.onload=function(){a.height>150?t.height=80:t.height=a.height,t.width=a.width,n.drawImage(a,0,0)},a.src=URL.createObjectURL(e.target.files[0]),t.classList.remove("hidden")},y=function(e){var t={},n={},a={},r={};0===e?(t=document.getElementById("js-select-product-0"),n=document.getElementById("js-unity-product-0"),a=document.getElementById("js-amount-product-0"),r=document.getElementById("js-quantity-product-0")):(t=document.getElementById("js-select-product-"+e),n=document.getElementById("js-unity-product-"+e),a=document.getElementById("js-amount-product-"+e),r=document.getElementById("js-quantity-product-"+e));var s=parseInt(n.value),o=parseInt(r.value),i=parseInt(a.value),u=!1;return"0"===t.value?(t.classList.add("error"),u=!0):(t.classList.remove("error"),u=!1),isNaN(s)||""===n.value?(n.classList.add("error"),u=!0):(n.classList.remove("error"),u=!1),isNaN(o)||""===r.value?(r.classList.add("error"),u=!0):(r.classList.remove("error"),u=!1),isNaN(i)||""===a.value?(a.classList.add("error"),u=!0):(a.classList.remove("error"),u=!1),u},_=function(e,t){return parseFloat(e).toFixed(2)*parseFloat(t).toFixed(2)},j=function(){for(var e=0,r=document.getElementsByClassName("js-input-amount"),s="",o="",u="",d=0;d<r.length;d++)e+=parseFloat(r[d].value),""!==i.value&&(s=B(i),o=parseFloat(s)),""!==a.value&&(discountValue=I(a),u=parseFloat("")),n.innerHTML=e,t.innerHTML=e+o-u+"€"},L=function(e,t,n,a,r,s){var o=document.createElement("td"),i=document.createElement(e);if("select"===e){var u={0:"-- Select --",1:"Service",2:"Hours",3:"Days",4:"Product"};for(var d in u)if(u.hasOwnProperty(d)){var l=document.createElement("option");l.setAttribute("value",d),l.innerHTML=u[d],i.appendChild(l)}}return o.setAttribute("class",t),i.setAttribute("name",r),i.setAttribute("class",n),i.setAttribute("id",a),i.setAttribute("placeholder",s),o.appendChild(i),o},E=function(e){var t=document.createElement("tr");return t.classList.add("estimate__main__table__row"),t.appendChild(L("select","estimate__main__table__row__cell small","js-select","js-select-product-"+e,"js-select-product-"+e,"productSelect"+e)),t.appendChild(L("textarea","estimate__main__table__row__cell large","js-input-description","js-description-product-"+e,"productDescription"+e,"")),t.appendChild(L("input","estimate__main__table__row__cell small","js-input-unity","js-unity-product-"+e,"productUnity"+e,"0.00")),t.appendChild(L("input","estimate__main__table__row__cell small","js-input-quantity","js-quantity-product-"+e,"productQuantity"+e,"0")),t.appendChild(L("input","estimate__main__table__row__cell small","js-input-amount","js-amount-product-"+e,"productAmount"+e,"0.00")),t},f=function(){var e=document.getElementById("tbody");if(!y(v)){v+=1,e.appendChild(E(v));var t=(document.getElementById("js-select-product-"+v),document.getElementById("js-unity-product-"+v)),n=document.getElementById("js-quantity-product-"+v),a=document.getElementById("js-amount-product-"+v);n.addEventListener("focusout",function(){h(this,t,a)})}},h=function(e,t,n){var a=""===e.value,r=""===t.value,s=isNaN(t.value),o=isNaN(e.value);r||s?t.classList.add("error"):a||o?e.classList.add("error"):(e.classList.remove("error"),t.classList.remove("error"),n.value=_(t.value,e.value),j())},I=function(e){var a="",r="",s="";if(!isNaN(e.value))return e.classList.remove("error"),a=(e.value/100*n.innerHTML).toFixed(2),r=parseFloat(a),s=parseFloat(n.innerHTML),t.innerHTML=s-r+"€",a;e.classList.add("error")},B=function(e){var a="",r="",s="";return isNaN(e.value)?void e.classList.add("error"):(e.classList.remove("error"),d.innerText=e.value,a=(n.innerHTML*e.value/100).toFixed(2),s=parseFloat(a),r=parseFloat(n.innerHTML),t.innerHTML=r+s+"€",a)};p.addEventListener("focusout",function(){h(this,c,m)}),e.addEventListener("click",function(){f()}),a.addEventListener("change",function(){I(this)}),i.addEventListener("change",function(){B(this)}),l.addEventListener("click",function(){window.print()}),flatpickr(o,{dateFormat:"d-m-Y"}),r.addEventListener("change",function(e){var t=g(e);localStorage.setItem("imgData",t),s.classList.add("x-logo-visible")});var b=localStorage.getItem("imgData");u.src="data:image/png;base64,"+b}();