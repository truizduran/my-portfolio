
// Open and close sidebar


function openNav(){
    let anchoVentana = window.innerWidth;

    if(anchoVentana > 770){
        document.getElementById("mySidebar").style.width = "60%";
        document.getElementById("mySidebar").style.display = "block";
        
    }else{
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("mySidebar").style.display = "block";
        
    }

    
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

//window.innerWidth
//screen.width