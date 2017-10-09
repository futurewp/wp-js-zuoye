(function(window){var svgSprite='<svg><symbol id="icon-yinlekong" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a16 16 0 1 0 1024 0 16 16 0 1 0-1024 0Z"  ></path><path d="M817.152 477.344c0-170.56-136.864-309.344-305.12-309.344-168.288 0-305.184 138.784-305.184 309.344 0 1.184 0.512 2.24 0.672 3.36-0.16 1.152-0.672 2.176-0.672 3.36l0 280.928c0 0.512 0.256 0.96 0.288 1.472C207.104 767.04 206.848 767.488 206.848 768c0 13.248 10.752 24 24 24l78.688 0c29.472 0 53.472-23.392 53.472-52.192l0-169.216c0-28.8-24-52.256-53.472-52.256L254.848 518.336l0-34.24c0-1.184-0.512-2.24-0.672-3.36 0.16-1.152 0.672-2.176 0.672-3.36 0-144.096 115.36-261.344 257.184-261.344 141.792 0 257.12 117.248 257.12 261.344 0 1.184 0.512 2.24 0.672 3.36-0.16 1.152-0.672 2.176-0.672 3.36l0 34.24-54.624 0c-29.504 0-53.504 23.424-53.504 52.256l0 169.216c0 28.768 24 52.192 53.504 52.192l78.624 0c13.248 0 24-10.752 24-24 0-0.512-0.256-0.96-0.288-1.472 0.032-0.512 0.288-0.96 0.288-1.472l0-280.928c0-1.184-0.512-2.24-0.672-3.36C816.64 479.584 817.152 478.528 817.152 477.344zM309.536 566.336c3.232 0 5.472 2.24 5.472 4.256l0 169.216c0 2.016-2.176 4.192-5.472 4.192L254.848 744l0-177.664L309.536 566.336zM709.024 739.808l0-169.216c0-1.984 2.24-4.256 5.504-4.256l54.624 0 0 177.664-54.624 0C711.296 744 709.024 741.792 709.024 739.808z"  ></path></symbol><symbol id="icon-zuojiantou" viewBox="0 0 1024 1024"><path d="M739.447391 1023.999659a62.327446 62.327446 0 0 1-43.963719-17.988261L239.564891 555.451548a60.92798 60.92798 0 0 1 0-86.869304L695.483672 18.022394a62.668779 62.668779 0 0 1 87.927438 0 60.893846 60.893846 0 0 1 0 86.869304L371.524313 511.999829l411.92093 407.073998a60.92798 60.92798 0 0 1 0 86.903438 62.020246 62.020246 0 0 1-43.929586 18.022394z"  ></path></symbol><symbol id="icon-youjiantou-copy" viewBox="0 0 1024 1024"><path d="M284.552609 0.00034101a62.327446 62.327446 0 0 1 43.963719 17.98826099L784.435109 468.548452a60.92798 60.92798 0 0 1 0 86.869304L328.516328 1005.977606a62.668779 62.668779 0 0 1-87.927438 0 60.893846 60.893846 0 0 1 0-86.869304L652.47568699 512.000171l-411.92092999-407.073998a60.92798 60.92798 0 0 1 0-86.903438 62.020246 62.020246 0 0 1 43.929586-18.02239399z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)