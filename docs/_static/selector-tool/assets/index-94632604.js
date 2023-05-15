const e=document.getElementById("selector");if(!e)throw new Error("cannot find selector document");window.addEventListener("message",t=>{e.style.height=t.data.height+"px"});
