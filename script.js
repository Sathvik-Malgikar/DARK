let pallette = ["red" , "blue" ,"yellow" ,"orange" ,"green"]
function paint (){
    let color = pallette [  Math.floor( (Math.random()*5))]
    $("#btn").css("background-color" , color)
}

$("#btn").click(randomise)

// let done = false
function randomise(){
    ping()
    return
    console.log("darkifying..");
    
    $("#btn").css("color" , "white")
    setInterval(paint , 300)
    

    // setTimeout(ping , 500)
    ping()
   
}

// chrome.runtime.onMessage.addListener((req,sender,sendresp)=>{
//     if(req.type=="painted")
//     done = true;
// })

function ping (){

    chrome.tabs.query({active : true  , currentWindow : true } , function ( tabs) {
        chrome.tabs.sendMessage(tabs[0].id , {type : "switch"})
    })

}

