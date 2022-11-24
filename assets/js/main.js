window.addEventListener("DOMContentLoaded", function(event){
    
    let sections=document.querySelectorAll("body > main > section");
    let currentScrollPosition = document.documentElement.scrollTop;
    let sectionToGo=currentScrollPosition+NextSection;
    
    function NextSection(current)
    {
        if(current.id==="red")
        {
            return document.getElementById("orange")
        }
        else if(current.id==="orange")
        {
            return document.getElementById("yellow")
        }
        else if(current.id==="yellow")
        {
            return document.getElementById("green")
        }
        else if(current.id==="green")
        {
            return document.getElementById("blue")
        }
        else if(current.id==="blue")
        {
            return document.getElementById("purple")
        }
    }
    
    function PrevSection(current)
    {
        if(current.id==="orange")
        {
            return document.getElementById("red")
        }
        else if(current.id==="yellow")
        {
            return document.getElementById("orange")
        }
        else if(current.id==="green")
        {
            return document.getElementById("yellow")
        }
        else if(current.id==="blue")
        {
            return document.getElementById("green")
        }
        else if(current.id==="purple")
        {
            return document.getElementById("blue")
        }
    }
    
    
    
    for (let i = 0; i < sections.length; i++){
    sections[i].addEventListener("wheel", function(event){
    
    
        if(event.deltaY > 0 )
        {
            scroll(0, sectionToGo)
        }
        
        else if(event.deltaY < 0)
        {
            scroll(0, PrevSection)
        }
        else {
           return 0;
        }
    }
    )};
})
