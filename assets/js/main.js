window.addEventListener("DOMContentLoaded", function(event){
    let sections=document.querySelectorAll("body > main > section")
    let position = sections.getBoundingClientRect();
    let currentScrollPosition = document.documentElement.scrollTop;
  
    
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
});