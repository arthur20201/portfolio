let open = document.querySelector(".open");
let close = document.querySelector(".close");
let links = document.querySelector(".links");
let content = document.querySelector(".main .content");
open.addEventListener("click",()=>{
	let i = open.querySelector("i");

    if(i.classList.contains("fa-bars")){
    	links.style = `	transform: translateX(-10%)`;
    	open.innerHTML = `<i class="fa fa-times"></i>`;
    	content.style = `z-index:-10`;
    }

    if(i.classList.contains("fa-times")){
    	links.style = `	transform: translateX(-110%)`;
    	open.innerHTML = `<i class="fa fa-bars"></i>`;
    	setTimeout(()=>{
    		content.style = `z-index:0`;
    	},400)
    	
    	    }
})

let data = ["Web Developer","Web Designer","UI/UX designer"];
let tag = document.querySelector(".text span");
let count = 0;
tag.innerHTML = data[count];


setInterval(()=>{
	count++;
	if(count > data.length-1){
		count = 0;
	}
	tag.innerHTML = data[count];
},4000)



