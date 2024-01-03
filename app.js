function openAnswer(a){
    a.classList.toggle("active");

    images = a.children;

    var body = a.nextElementSibling;
    if (body.style.display == "block"){
        body.style.display = "none";
        images[1].style.display = "block"
        images[2].style.display = "none";
    }
    else {
        body.style.display = "block";
        images[1].style.display = "none"
        images[2].style.display = "block";
    }
}
