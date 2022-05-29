let main=document.querySelector(".main");
let popup=document.querySelector(".pop-up");
let popuptext=document.querySelector(".pop-up").children[0].innerHTML;
let button=document.querySelector("#button");
let final=document.querySelector(".finally");




function Checking(){
    let inputvalue=document.querySelector("input").value;
    let upper=inputvalue[0].toUpperCase();
    console.log(upper);
 

    if (inputvalue[0]!=upper) {
        main.style.display="none";
        popup.style.display="block";
    }
    else{
        main.style.display="none";
        final.style.display="block";
        let inside=document.querySelector('.insidep').innerHTML=`Name is:${inputvalue}`;
       
    }
}

 function ReturnPage(){
    main.style.display="block";
    popup.style.display="none";
}