
let serialNumber = 1

// card 1
document.getElementById('triangle-btn').addEventListener('click',function(){
    const shapName = document.getElementById('triangle').innerText
    const shapFieldb = document.getElementById('triangle-field-b').value
    const shapFielh = document.getElementById('triangle-field-h').value

    const shapFieldbNumber = parseFloat(shapFieldb);
    const shapFielhNumber = parseFloat(shapFielh);
    
    if(shapFieldb == '' || shapFielh == '' )
    {
       alert ('input daw')
    }
    else {
        const sum = shapFieldbNumber*shapFielhNumber*0.5;
        const answer = sum.toFixed(2)
        getTableData(shapName,answer)
        serialNumber += 1
    }
    
})

// card 2
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const shapName = document.getElementById('rhombus').innerText
    const shapFieldb = document.getElementById('rhombus-field-d1').value
    const shapFielh = document.getElementById('rhombus-field-d2').value

    const shapFieldbNumber = parseFloat(shapFieldb);
    const shapFielhNumber = parseFloat(shapFielh);
    
    if(shapFieldb == '' || shapFielh == '' )
    {
       alert ('input daw')
    }
    else {
        const sum = shapFieldbNumber*shapFielhNumber*0.5;
        const answer = sum.toFixed(2)
        getTableData(shapName,answer)
        serialNumber += 1
    }
    
})



















// get table data
function getTableData (Name , answer ) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${serialNumber}</td>
    <td>${Name}</td>
    <td>${answer}</td>
    <td>${answer}</td>
    `;
    container.appendChild(tr);
}