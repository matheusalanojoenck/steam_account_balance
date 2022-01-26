var table = document.getElementsByClassName("wallet_history_table")[0];
var total_geral = 0.0;
for (i = 2; i < table.tBodies[0].rows.length; i++){
    var cell = table.getElementsByClassName("wht_total ")[i];
    
    var inside_cell = cell.querySelectorAll("div");
    if(inside_cell.length === 2){
        var str = inside_cell.item(0).innerText.replace(/[^0-9\,]/g, '');
        str = str.replace(/,/g, '.');
        total_geral = total_geral + parseFloat(str);
        console.log(str);
        //console.log(inside_cell.item(0).innerText.replace(/[^0-9\,]/g, ''));
    }else if( inside_cell.length === 1){
        var str = inside_cell.item(0).innerText.replace(/[^0-9\,]/g, '');
        str = str.replace(/,/g, '.');
        total_geral = total_geral - parseFloat(str);
        console.log(str);
        //console.log(inside_cell.item(0).innerText.replace(/[^0-9\,]/g, ''));
    }else{
        var str = cell.innerText.replace(/[^0-9\,]/g, '');
         str = str.replace(/,/g, '.');
        total_geral = total_geral - parseFloat(str);
        console.log(str);
        //console.log(cell.innerText.replace(/[^0-9\,]/g, ''));
    }
}
console.log(total_geral);
