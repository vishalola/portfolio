let a=document.getElementById("n1");
let b=document.getElementById("n2");
let c=document.getElementById("n3");
let box=document.querySelectorAll(".box");
let intro=document.querySelector(".intro");
a.addEventListener("mouseenter",()=>{
    a.style.marginTop="-50px";
    a.style.marginRight="80px";
    c.style.marginTop="50px";
    c.style.marginRight="-80px";
    b.style.opacity="100%";
    c.style.opacity="100%";
    box[0].style.transform="skewX(-10deg)";
    box[1].style.transform="skewX(-10deg)";
    box[2].style.transform="skewX(-10deg)";

})
b.addEventListener("mouseenter",()=>{
    a.style.marginTop="-90px";
    a.style.marginRight="120px";
    c.style.marginTop="90px";
    c.style.marginRight="-120px";
})
let za=0;
let zb=0;
let zc=0;
let contain=document.getElementsByClassName("parent");
let width=window.innerWidth;
contain[0].addEventListener("mouseenter",()=>{
    a.innerHTML="Connect";

})
contain[0].addEventListener("mouseleave",()=>{
    a.style.marginTop="0px";
    a.style.marginRight="0px";
    c.style.marginTop="0px";
    c.style.marginRight="00px";
    b.style.opacity="00%";
    c.style.opacity="00%";
    box[0].style.transform="skewX(0deg)";
    box[1].style.transform="skewX(0deg)";
    box[2].style.transform="skewX(0deg)";
    if(za)
    {
    a.innerHTML="Connect";
    }
    else if(zb)
    {
    a.innerHTML="Skills";
    
    }
    else if(zc)
    {
    a.innerHTML="Projects";

    }
})
// let back=document.querySelector(".back");
contain[0].addEventListener("click",()=>{
    
    if(width<=600)
    {   
        contain[0].style.height="100px";
        contain[0].style.width="130px";
        contain[0].style.marginTop="30%";
    }
    else
    {
        contain[0].style.marginRight="40%";

    }
    // back.style.visibility="visible";
    // back.style.transform="scale(1)";
    

})
// back.addEventListener("click",()=>{
//     contain[0].style.marginRight="0%";
//     back.style.visibility="hidden";
//     back.style.transform="scale(0)";
//     contact.style.visibility="hidden";
//     contact.style.marginLeft="-500px";
//     contact.style.transform="scale(0)";
//     skills.style.visibility="hidden";
//     skills.style.marginLeft="-500px";
//     skills.style.transform="scale(0)";

// })
let contact=document.getElementById("contact");
let skills=document.getElementById("skills");
let project=document.getElementById("projects");
//Temp code for change on scroll;
contain[0].addEventListener("mousewheel",()=>{
    if(width>600)
    {
    contain[0].style.marginRight="0%";
    // back.style.visibility="hidden";
    // back.style.transform="scale(0)";
    contact.style.visibility="hidden";
    contact.style.marginLeft="-500px";
    contact.style.transform="scale(0)";
    skills.style.visibility="hidden";
    skills.style.marginLeft="-500px";
    skills.style.transform="scale(0)";
    project.style.visibility="hidden";
    project.style.marginLeft="-500px";
    project.style.transform="scale(0)";
    intro.style.opacity="0%";
    setTimeout(() => {
    
        intro.innerHTML="Let me code for you.";
        intro.style.opacity="100%";
    }, 500);
    }
})
a.addEventListener("click",()=>{
    za=1;
    zb=0;
    zc=0;
    if(width<=600)
    {
        contain[0].style.marginBottom="0%";
        contain[0].style.marginLeft="0%";
        contact.style.visibility="visible";
        contact.style.marginTop="-200px";
        contact.style.transform="scale(1)";
        skills.style.visibility="hidden";
        skills.style.marginLeft="-500px";
        skills.style.transform="scale(0)";
        project.style.visibility="hidden";
        project.style.marginTop="300px";
        project.style.transform="scale(0)";
    }
    else
    {
    contact.style.visibility="visible";
    contact.style.marginLeft="400px";
    contact.style.transform="scale(1)";
    skills.style.visibility="hidden";
    skills.style.marginLeft="-500px";
    skills.style.transform="scale(0)";
    project.style.visibility="hidden";
    project.style.marginLeft="-500px";
    project.style.transform="scale(0)";
    }
    intro.style.opacity="0%";
    setTimeout(() => {
    
        intro.innerHTML="Let us connect";
        intro.style.opacity="100%";
    }, 500);
})
b.addEventListener("click",()=>{
    za=0;
    zb=1;
    zc=0;
    if(width<=600)
    {
    contain[0].style.marginBottom="30%";
    contain[0].style.marginLeft="-40%";
    skills.style.visibility="visible";
    skills.style.marginLeft="250px";
    skills.style.transform="scale(1)";
    contact.style.visibility="hidden";
    contact.style.marginTop="300px";
    contact.style.transform="scale(0)";
    project.style.visibility="hidden";
    project.style.marginTop="300px";
    project.style.transform="scale(0)";
    }
    else
    {
    skills.style.visibility="visible";
    skills.style.marginLeft="400px";
    skills.style.transform="scale(1)";
    contact.style.visibility="hidden";
    contact.style.marginLeft="-500px";
    contact.style.transform="scale(0)";
    project.style.visibility="hidden";
    project.style.marginLeft="-500px";
    project.style.transform="scale(0)";
    }
    // contact.style.height="0px";
    intro.style.opacity="0%";
    setTimeout(() => {
    
        intro.innerHTML="Long way to go";
        intro.style.opacity="100%";
    }, 500);

})
c.addEventListener("click",()=>{
    za=0;
    zb=0;
    zc=1;
    if(width<=600)
    {
        contain[0].style.marginBottom="0%";
        contain[0].style.marginLeft="0%";
        project.style.marginTop="-200px";
        project.style.visibility="visible";
        project.style.transform="scale(1)";
        skills.style.visibility="hidden";
        skills.style.marginLeft="-500px";
        skills.style.transform="scale(0)";
        contact.style.visibility="hidden";
        contact.style.marginTop="300px";
        contact.style.transform="scale(0)";
    }
    else
    {
    project.style.visibility="visible";
    project.style.marginLeft="550px";
    project.style.transform="scale(1)";
    skills.style.visibility="hidden";
    skills.style.marginLeft="-500px";
    skills.style.transform="scale(0)";
    contact.style.visibility="hidden";
    contact.style.marginLeft="-500px";
    contact.style.transform="scale(0)";
    }
    intro.style.opacity="0%";
    setTimeout(() => {
    
        intro.innerHTML="Just getting started..";
        intro.style.opacity="100%";
    }, 500);
})
