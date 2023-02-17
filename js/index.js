
let serialNumber = 1

// card 1
document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleName = document.getElementById('triangle').innerText
    const triangleFieldb = document.getElementById('triangle-field-b').value
    const triangleFieldh = document.getElementById('triangle-field-h').value

    const triangleFieldBNumber = parseFloat(triangleFieldb);
    const triangleFieldHNumber = parseFloat(triangleFieldh);
    
    if(triangleFieldb == '' || triangleFieldh == '' )
    {
       alert ('input daw')
    }
    else {
        const sum = triangleFieldBNumber*triangleFieldHNumber*0.5;
        const answer = sum.toFixed(2)
        getTableData(triangleName,answer)
        serialNumber += 1
    }
    
})


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