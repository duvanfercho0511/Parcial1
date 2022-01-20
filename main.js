$(document).ready(function () {
     $('#gustosbutton').click(function(){
        var gusto = document.getElementById("gustos").value;
        if(gusto!==""){
        var i = 1;
        var fila = '<tr id="row'+i+'"><td>'+gusto+'</td><td>' + "0" + '</td><td> <button type="button" id="'+i+'" class="btn">editar</button> </td></tr>';
        $("#registro").append(fila);
        i++;
        }
     });
     $('#form2').on('click', '.btn', function(){
        texto = "pulse aceptar para guardar los cambios o cancelar para anularlos"
        $("#form2").append(texto);
        botones = '<div class="input-group-prepend"> <button class="button1" id="aceptar">Aceptar</button> <button class="button2" id="cancelar">Cancelar</button></div>'
        $("#form2").append(botones);
        var button_id = $(this).attr("id");
        var row = '#row' + button_id + '';
        var gustovalue = $(row).find("td:first").html();
        $(row).replaceWith('<tr><td> <input id="gusto" type="text" value='+gustovalue+'> </td><td> <input id="porcentaje" type="text" value=0> </td><td>en edicion</td></tr>');
        $('#aceptar').click(function(){
        

        })
    })
});
