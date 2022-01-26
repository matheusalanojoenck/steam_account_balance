var table = document.getElementsByClassName("wallet_history_table")[0];
for (i = 2; i < table.tBodies[0].rows.length; i++){
    var cell = table.getElementsByClassName("wht_total ")[i];
    
    var inside_cell = cell.querySelectorAll("div");
    if(inside_cell.length === 2 || inside_cell.length === 1){
        console.log(inside_cell.item(0).innerText.replace(/[^0-9\,]/g, ''));
    }else {
        console.log(cell.innerText.replace(/[^0-9\,]/g, ''));
    }
}
