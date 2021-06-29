(()=>{"use strict";const e="1c4ba7510ca2bc5d02a76e9bc4006794";function t(e){const t=document.getElementById("query-location");t.placeholder=t.value,e||(t.placeholder=""),t.value=null}async function n(){const n=await async function(){const t=document.getElementById("query-location");t.value="Manila";const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${t.value}&appid=${e}`,{mode:"cors"}),o=await n.json();return{coords:{lat:o.coord.lat,lon:o.coord.lon},place:{city:o.name,country:o.sys.country}}}().catch((e=>{console.error(e)}));if(!n)return alert("Cannot Find Location."),void t(n);const o=await async function(t){return(await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${t.coords.lat}&lon=${t.coords.lon}&exclude=minutely,hourly&units=metric&appid=${e}`,{mode:"cors"})).json()}(n).catch((e=>{console.error(e)})),c=await async function(e){return{weather:{weatherCondition:e.current.weather[0].main,weatherDescrition:e.current.weather[0].description},temperature:{temp:e.current.temp,feelsLike:e.current.feels_like},condition:{description:e.current.weather[0].description,icon:e.current.weather[0].icon},dt:e.current.dt,wind:e.current.wind_speed,humidity:e.current.humidity}}(o).catch((e=>{console.error(e)})),r=await async function(e){return e.daily}(o).catch((e=>{console.error(e)}));!function(e,t,n){const o=document.querySelector(".current-icon"),c=document.querySelector(".current-date"),r=document.querySelector(".current-location"),a=document.querySelector(".current-weather-description"),i=document.querySelector(".current-temp"),d=document.querySelector(".current-pop"),l=document.querySelector(".current-feels-like"),u=document.querySelector(".current-wind"),s=document.querySelector(".current-humidity");o.src=`http://openweathermap.org/img/wn/${e.condition.icon}@2x.png`,c.textContent=new Date(1e3*e.dt).toLocaleDateString("en",{weekday:"long"}),r.textContent=`${n.place.city}, ${n.place.country}`,a.textContent=function(e){let t=e.split(" ");for(let e=0;e<t.length;e++)t[e]=t[e][0].toUpperCase()+t[e].substr(1);return t.join(" ")}(e.condition.description),i.textContent=`${e.temperature.temp}°C`,d.textContent=`${t[0].pop}%`,l.textContent=`${e.temperature.feelsLike}°C`,u.textContent=`${e.wind}m/s`,s.textContent=`${e.humidity}%`}(c,r,n),function(e){const t=document.querySelector(".daily-weather-container");!function(e){e.innerHTML=null}(t);for(let n=1;n<e.length;n++){const o=e[n],c=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),d=document.createElement("p"),l=document.createElement("img"),u=document.createElement("p"),s=document.createElement("p");c.classList.add("daily-weather"),r.classList.add("daily-date-container"),a.classList.add("daily-icon-container"),i.classList.add("daily-temp-container"),d.classList.add("daily-date"),l.classList.add("daily-icon"),u.classList.add("daily-temp-day"),s.classList.add("daily-temp-night"),d.textContent=new Date(1e3*o.dt).toLocaleDateString("en",{weekday:"long"}),l.src=`http://openweathermap.org/img/wn/${o.weather[0].icon}.png`,u.textContent=`${o.temp.day}°`,s.textContent=`${o.temp.night}°`,c.appendChild(r),c.appendChild(a),c.appendChild(i),r.appendChild(d),a.appendChild(l),i.appendChild(u),i.appendChild(s),t.appendChild(c)}}(r),t(n)}document.addEventListener("DOMContentLoaded",(()=>{n().catch((e=>{console.error(e)})),document.querySelector(".location-form").addEventListener("submit",(e=>{e.preventDefault(),n().catch((e=>{console.error(e)}))}))}))})();