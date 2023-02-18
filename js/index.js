
let serialNumber = 1

// Blog btn
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = 'http://127.0.0.1:5500/question.html'
})

// tiangle card 1
document.getElementById('triangle-btn').addEventListener('click',function(){
  
    getAlldata ('triangle', 'triangle-field-b', 'triangle-field-h')
})
// rectangle card 2
document.getElementById('rectangle-btn').addEventListener('click',function(){
  
    getAlldataOne ('rectangle', 'rectangle-field-w', 'rectangle-field-l');
})
// rectangle card 3
document.getElementById('parallelogram-btn').addEventListener('click',function(){
  
    getAlldataOne ('parallelogram', 'parallelogram-field-b', 'parallelogram-field-h');
})

// rhombus card 4
document.getElementById('rhombus-btn').addEventListener('click',function(){
  
    getAlldata ('rhombus', 'rhombus-field-d1', 'rhombus-field-d2')
})

//pentagon card 5 

document.getElementById('pentagon-btn').addEventListener('click',function(){
   
    getAlldata ('pentagon', 'pentagon-field-p', 'pentagon-field-b')
})

// ellipse card 6

document.getElementById('ellipse-btn').addEventListener('click',function(){
   
    getAlldatatwo ('ellipse', 'ellipse-field-a', 'ellipse-field-b');
    
})








// this funtion can multiply by 0.5
function getAlldata (name, fieldOne , fieldTwo){

    const shapName = document.getElementById(name).innerText
    const shapFieldb = document.getElementById(fieldOne).value
    const shapFielh = document.getElementById(fieldTwo).value

    const shapFieldbNumber = parseFloat(shapFieldb);
    const shapFielhNumber = parseFloat(shapFielh);
    
    if(  shapFieldb == '' ||  shapFielh == '' )
    {
       alert ('give me some input')
    }

    else if ( typeof shapFieldbNumber !== 'number' || typeof shapFielhNumber !== 'number' || shapFieldbNumber <= 0 || shapFielhNumber <= 0){
        alert ('input number with positive value')
    }
    
    else {
        const sum = shapFieldbNumber*shapFielhNumber*0.5;
        const answer = sum.toFixed(2)
        const cm = "cm";
        const square = "2";

        const cm2 = cm + square.sup();

   

        const final = answer+cm2; 
        getTableData(shapName,final)
        serialNumber += 1
    }

}
// this funtion is ready to use for multiplication 
function getAlldataOne (name, fieldOne , fieldTwo){

    const shapName = document.getElementById(name).innerText
    const shapFieldb = document.getElementById(fieldOne).value
    const shapFielh = document.getElementById(fieldTwo).value

    const shapFieldbNumber = parseFloat(shapFieldb);
    const shapFielhNumber = parseFloat(shapFielh);
    
    if(shapFieldb == '' ||  shapFielh == '' )
    {
       alert ('give me some input')
    }

    else if (isNaN(shapFieldbNumber) || isNaN(shapFielhNumber) || shapFieldbNumber <= 0 || shapFielhNumber <= 0){
        alert ('input number with positive value')
    }
    else {
        const sum = shapFieldbNumber*shapFielhNumber;
        const answer = sum.toFixed(2)
        const cm = "cm";
        const square = "2";

        const cm2 = cm + square.sup();

   

        const final = answer+cm2; 
        getTableData(shapName,final)
        serialNumber += 1
    }

}
 // this funtion will be multiply by 3.1416
function getAlldatatwo (name, fieldOne , fieldTwo){

    const shapName = document.getElementById(name).innerText
    const shapFieldb = document.getElementById(fieldOne).value
    const shapFielh = document.getElementById(fieldTwo).value

    const shapFieldbNumber = parseFloat(shapFieldb);
    const shapFielhNumber = parseFloat(shapFielh);
    
    if(shapFieldb == '' ||  shapFielh == '' )
    {
       alert ('give me some input')
    }

    else if (isNaN(shapFieldbNumber) || isNaN(shapFielhNumber) || shapFieldbNumber <= 0 || shapFielhNumber <= 0){
        alert ('input number with positive value')
    }
    else {
        const sum = shapFieldbNumber*shapFielhNumber*3.1416;
        const answer = sum.toFixed(2)
        const cm = "cm";
        const square = "2";

        const cm2 = cm + square.sup();

   

        const final = answer+cm2; 
        getTableData(shapName,final)
        serialNumber += 1
    }

}




// get table data
function getTableData (Name , answer ) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr')

    const btn = document.createElement('button');
    btn.setAttribute("id", "new-btn")
     
    
    
    tr.innerHTML = `
    <td>${serialNumber}</td>
    <td>${Name}</td>
    <td>${answer}</td>
    
    `;
    
    container.appendChild(tr);
    tr.appendChild(btn);
    document.getElementById('new-btn').style.color = 'white';
    document.getElementById('new-btn').style.backgroundColor = 'Skyblue';
    document.getElementById('new-btn').style.padding = '10px';

    btn.innerText = 'convert to m^2'
   
}

// div one
document.getElementById('div-one').addEventListener('mouseover', function(){
 getColor('div-one')
    
})
document.getElementById('div-one').addEventListener('mouseout', function(){
 getwhite('div-one')
    
})
// div two
document.getElementById('div-two').addEventListener('mouseover', function(){
 getColor('div-two')
    
})
document.getElementById('div-two').addEventListener('mouseout', function(){
 getwhite('div-two')
    
})
// div three
document.getElementById('div-three').addEventListener('mouseover', function(){
 getColor('div-three')
    
})
document.getElementById('div-three').addEventListener('mouseout', function(){
 getwhite('div-three')
    
})
// div four
document.getElementById('div-four').addEventListener('mouseover', function(){
 getColor('div-four')
    
})
document.getElementById('div-four').addEventListener('mouseout', function(){
 getwhite('div-four')
    
})
// div five
document.getElementById('div-five').addEventListener('mouseover', function(){
 getColor('div-five')
    
})
document.getElementById('div-five').addEventListener('mouseout', function(){
 getwhite('div-five')
    
})
// div six
document.getElementById('div-six').addEventListener('mouseover', function(){
 getColor('div-six')
    
})
document.getElementById('div-six').addEventListener('mouseout', function(){
 getwhite('div-six')
    
})





// this function generate new color;;;
function getColor (id){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const random ="#"+randomNumber.toString(16);
    document.getElementById(id).style.backgroundColor = random
    
}

// this funtion does white background color 
function getwhite (id){
    document.getElementById(id).style.backgroundColor = "white";
}











