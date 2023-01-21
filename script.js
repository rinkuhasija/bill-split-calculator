var data = 0;
var text_val = 1;
var tip;
var final_val;
var tip_pp;
var total_pp;

document.getElementById("counting").innerText = data;

function increment() {
    data = data + 1;
    data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
    return data;
}


// function reset() {
//     data = 0;
//     document.getElementById("counting").innerText = data;
// }

function decrement() {
    data = data - 1;
    data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
    return data;
}



function myFunc(a) {

    text_val = (document.getElementById('myText').value)
    tip = Number(text_val) * Number(a/100);
    final_val = Number(text_val) + Number(tip);
    total_pp = Number(final_val) / Number(data);
    total_pp.toFixed(2);
    tip_pp = Number(tip) / Number(data);
    tip_pp.toFixed(2);

    // console.log(final_val);
    // console.log(total_pp);

    return text_val, total_pp;

}

let ab = document.getElementById('display_rText-2');
let cd = document.getElementById('display_rText');
let reset = document.getElementById('reset');
let i = 0;

function btn() {

    ab.innerHTML = '₹' + total_pp;
    cd.innerHTML = '₹' + tip_pp;
    
    // console.log(reset);
    // i++ ;
    // console.log(i);
    // if(reset.innerHTML == "RESET") {
    //     document.getElementById('myText').value = 0;
    //     ab.innerHTML = 0;
    //     cd.innerHTML = 0;
    //     document.getElementById("counting").innerHTML = 0;
    //     // reset.innerHTML = "GENERATE";
    // }

    // if(i/2 == 1) {
    //     reset.innerHTML = "GENERATE";
    // } else {
    //     reset.innerHTML = "RESET";
    // }
    

    // console.log(ab)
    // console.log(cd);
    // console.log('button clocked');
}


