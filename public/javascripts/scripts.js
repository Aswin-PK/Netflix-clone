function scrollfunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("navbar").style.backgroundColor = '#111';
    }
    else{
        document.getElementById("navbar").style.backgroundColor = 'transparent';
    }
}

window.onscroll = () =>{
    scrollfunction();
}