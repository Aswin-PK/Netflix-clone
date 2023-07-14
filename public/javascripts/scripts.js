function scrollfunction(){
    if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 200){
        document.getElementById("navbar").style.backgroundColor = '#111';
    }
    else{
        document.getElementById("navbar").style.backgroundColor = 'transparent';
    }
}

window.onscroll = (e) =>{
    // console.log(e);
    scrollfunction();
}


// function searchMovie(){
//     searchBtn = document.getElementById('search')
//     searchBtn.addEventListener('focus', ()=>{
//         searchBtn.
//     })
// }