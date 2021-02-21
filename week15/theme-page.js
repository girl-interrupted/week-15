function changeColour() {

    if (document.getElementById("theme").value == "dark") { 
        document.getElementById("header").style.color = '#f2fafc';
        document.getElementById("text-colour").style.color = '#f2fafc';
        document.body.style.background = '#060b0c'; 
    } 

    if (document.getElementById("theme").value == "blue") { 
        document.getElementById("header").style.color = '#7647477';
        document.getElementById("text-colour").style.color = '#7dcce0';
        document.body.style.background = '#154b59'; 
    } 

    if (document.getElementById("theme").value == "light") {
        document.getElementById("header").style.color = '#030a03';
        document.getElementById("text-colour").style.color = '#33311e';
        document.body.style.background = '#d7ea8c'; 
    } 
}