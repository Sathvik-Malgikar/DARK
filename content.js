

let light = true;

chrome.runtime.onMessage.addListener((req , sender , sendresp)=>{
if( req.type == "switch"){

$("*").children().each(function () {

if(light){
    $(this).css("color" , "white")
    $(this).css("background-color" , "black")

}else{

    $(this).css("color" , "black")
    $(this).css("background-color" , "white")
}

})

light = !light;



console.log("darkifying complete !");
}


})
