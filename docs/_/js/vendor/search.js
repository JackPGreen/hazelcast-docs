window.antoraLunr=function(u){var i=document.getElementById("search-script").dataset.basePath,c=document.getElementById("search-input"),o=document.createElement("div");o.classList.add("search-result-dropdown-menu"),c.parentNode.appendChild(o);var e=document.getElementById("search-input-home");function l(e,t,n){var r=[];for(var a in e){var s=e[a];for(var d in s){var u,i=s[d];i.position&&(u=i.position[0],"title"===d?r=function(t,e,n){var r,a=[],s=n[0],d=n[1],u=document.createElement("span");u.classList.add("search-result-highlight"),r=t?e.titles.filter(function(e){return e.id===t})[0].text:e.title,u.innerText=r.substr(s,d);var i=s+d,c=r.length-1;return 0===s&&i===c?a.push(u):0===s?(a.push(u),a.push(document.createTextNode(r.substr(d,c)))):i===c?(a.push(document.createTextNode(r.substr(0,s))),a.push(u)):(a.push(document.createTextNode(r.substr(0,s))),a.push(u),a.push(document.createTextNode(r.substr(i,c)))),a}(t,n,u):"text"===d&&(r=function(e,t){var n=[],r=t[0],a=t[1],s=e.text,d=document.createElement("span");d.classList.add("search-result-highlight"),d.innerText=s.substr(r,a);var u=r+a,i=s.length-1,c=i<u+15?i:u+15,o=r-15<0?0:r-15;return 0===r&&u===i?n.push(d):0===r?(n.push(d),n.push(document.createTextNode(s.substr(u,c)))):u===i?(n.push(document.createTextNode(s.substr(0,r))),n.push(d)):(n.push(document.createTextNode("..."+s.substr(o,r-o))),n.push(d),n.push(document.createTextNode(s.substr(u,c-u)+"..."))),n}(n,u)))}}return r}function h(e,s,d){e.forEach(function(e){var t,n=e.ref;n.includes("#")&&(t=n.substring(n.indexOf("#")+1),n=n.replace("#"+t,""));var r=s[n],a=l(e.matchData.metadata,t,r);d.appendChild(function(e,t,n){var r=document.createElement("div");r.classList.add("search-result-document-title"),r.innerText=e.title;var a=document.createElement("div");a.classList.add("search-result-document-hit");var s=document.createElement("a");s.href=i+t.ref,a.appendChild(s),n.forEach(function(e){s.appendChild(e)});var d=document.createElement("div");return d.classList.add("search-result-item"),d.appendChild(r),d.appendChild(a),d.addEventListener("mousedown",function(e){e.preventDefault()}),d}(r,e,a))})}function m(e,t,n){for(;o.firstChild;)o.removeChild(o.firstChild);var r,a,s,d,u;""!==n.trim()&&(s=n,r=0<(d=(a=e).search(s)).length||0<(d=a.search(s+"*")).length?d:d=a.search("*"+s+"*"),(u=document.createElement("div")).classList.add("search-result-dataset"),o.appendChild(u),0<r.length?h(r,t,u):u.appendChild(function(e){var t=document.createElement("div");t.classList.add("search-result-item");var n=document.createElement("div");n.classList.add("search-result-document-hit");var r=document.createElement("strong");return r.innerText='No results found for query "'+e+'"',n.appendChild(r),t.appendChild(n),t}(n)))}return document.createElement("div").classList.add("search-result-dropdown-menu-home"),e.parentNode.appendChild(o),{init:function(e){var r,a,s,d,t=Object.assign({index:u.Index.load(e.index),store:e.store}),n=(r=function(){m(t.index,t.store,c.value)},a=100,function(){var e=this,t=arguments,n=s&&!d;clearTimeout(d),d=setTimeout(function(){d=null,s||r.apply(e,t)},a),n&&r.apply(e,t)});c.addEventListener("keydown",n),c.addEventListener("blur",function(e){for(;o.firstChild;)o.removeChild(o.firstChild)})}}}(window.lunr);