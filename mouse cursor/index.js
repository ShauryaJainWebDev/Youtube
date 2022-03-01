const cursor = document.querySelector(".pointer");

document.addEventListener("mousemove",(event)=>{
    cursor.style.left = 
    `${event.clientX}px`;
    cursor.style.top = 
    `${event.clientY}px`;
    cursor.style.display="block";
})
document.addEventListener("mouseleave",()=>{
    cursor.style.display = "none";
})