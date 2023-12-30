const t=document.querySelector(".wall"),e=document.querySelector(".spider");document.addEventListener("click",i=>{let l=document.elementFromPoint(i.clientX,i.clientY);if(l===t){let l=t.clientWidth-e.clientWidth,n=t.clientHeight-e.clientHeight,c=i.offsetX-e.clientWidth/2,o=i.offsetY-e.clientHeight/2;e.style.left=`${Math.max(Math.min(l,c),0)}px`,e.style.top=`${Math.max(Math.min(n,o),0)}px`}});//# sourceMappingURL=index.15249a12.js.map

//# sourceMappingURL=index.15249a12.js.map
