function formataData(data = new Date()){

    var dia = data.getDate();
    var mes = data.getMonth()+1;
    var ano = data.getFullYear();
    
    if (dia.toString().length == 1) dia = '0' +dia;
    if (dia.toString().length == 1) mes = '0' +mes;
    return dia +'/' + mes+ '/' + ano;
    
    }
    
    alert(formataData());