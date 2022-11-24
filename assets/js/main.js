window.addEventListener("DOMContentLoaded", function(event){
    
    let sections=document.querySelectorAll("body > main > section");
    let section1=document.getElementById("red");
    let section2=document.getElementById("orange");
    let section3=document.getElementById("jaune");
    let section4=document.getElementById("green");
    let section5=document.getElementById("blue");
    let section6=document.getElementById("purple");
    let position = sections.getBoundingClientRect().top;
    
    console.log(position)
    
for (let i=0;i<sections.length; i++)
{
        sections[i].addEventListener("wheel", function (){
       
    function getNextSection()
    {
        if(sections.id==="red")
        {
            return document.getElementById("orange")
        }
        if(sections.id==="orange")
        {
            return document.getElementById("yellow")
        }
        if(sections.id==="yellow")
        {
            return document.getElementById("green")
        }
        if(sections.id==="green")
        {
            return document.getElementById("blue")
        }
        if(sections.id==="blue")
        {
            return document.getElementById("purple")
        }
    }
    
    function getPrevSection()
    {
        if(sections.id==="orange")
        {
            return document.getElementById("red")
        }
        if(sections.id==="yellow")
        {
            return document.getElementById("orange")
        }
        if(sections.id==="green")
        {
            return document.getElementById("yellow")
        }
        if(sections.id==="blue")
        {
            return document.getElementById("green")
        }
        if(sections.id==="purple")
        {
            return document.getElementById("blue")
        }
    }
        });
}
    
});