$(function () {
    
    var nome;
    var cognome;
    var NomiInseriti =[];
    var CognomiInseriti =[];
    var conteggio=0;

    $("#btninvio").on("click", function() {

        nome = $ ("#txtnome").val();
        cognome = $ (" #txtcognome").val();

        var trovato=false;

        for(var i=0; i<conteggio; i++)
        {
            if(NomiInseriti[i]==nome)
            {
                if(CognomiInseriti[i]==cognome)
                {
                    trovato=true;
                }else{}
            }else{}
        }

        if(trovato==false){
            $("#ModalConferma").modal();
        }
        else if(trovato==true)
        {
            $("#ModalRifiuto").modal();
        }

    });

    $("#btnconferma").on("click", function() { 

        $("#elenconominativi").append("<p>"+ nome + " " + cognome+"</p>");
        NomiInseriti[conteggio]=nome;
        CognomiInseriti[conteggio]=cognome;
        conteggio++;

    });
});