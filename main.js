function myfun(){
    // alert("welcom");
    let ele =document.body
    ele.classList.toggle("ele");

}
function img1(){
    let img = document.getElementById("i")
    img.style.backgroundColor="bisque"
    
    document.getElementById("i").style.color="green"

    document.getElementById("text").innerText="The backgroung is bisque "

}

function img2(){
    let img2 = document.getElementById("i")
    img2.style.backgroundColor="rgb(245, 217, 222)"

    document.getElementById("i").style.color=" rgba(54, 91, 121, 0.639)"

    document.getElementById("text").innerText="The backgroung is Pink "

}

// Q1
function buttonFun(){
    document.getElementById("text1").innerText="The New text "

}
// End Q1

//Q2

function buttonIncrece(){
    document.getElementById("text2").innerText="The text is increase "
    document.getElementById("text2").style.fontSize="50px"

}

function buttonDecrese(){

    document.getElementById("text2").innerText="The text is decrease "
    document.getElementById("text2").style.fontSize="20px"

}
//End Q2


// Q3

function changeBakground(){

    // document.getElementById("backgroundColor").innerText="The text is decrease "
    document.getElementById("backgroundColor").style.backgroundColor="pink"

}
// End Q3

// Q4
function changeimg(){

    let imge = document.getElementById("img_1");
    if(imge.src.match("bac.png")){
        imge.src ="Spreadsheets Customizable Cartoon Illustrations _ Bro Style.png"
    }

    else{
        imge.src= "bac.png"
    }
}

// End Q4

// Q5
function showEvent(){
    alert("Welcome to JavaScript");
}

// End Q5


