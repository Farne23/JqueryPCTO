$(function () {
    
    var nome;
    var cognome;
    var NomiInseriti =[];
    var CognomiInseriti =[];
    var conteggio=0;
    var nomcog 
    var dacancellare

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

    $("#btnconferma").on("click", function(){

        $("#listanominativi").append("<li id=listanomi class='row'><div class='col col-md-10'> " + nome + " " + cognome + "</div ><div class='bottonedelete col col-md-2'><img src='images/delete.png' id='btndelete'></div></li>"); 
        NomiInseriti[conteggio]=nome;
        CognomiInseriti[conteggio]=cognome;
        conteggio++;

        $("#listanominativi").ready(function(){
            
            $(".bottonedelete").on("click", function(){


                dacancellare =  $(this).closest("li"); 
                nomcog = this.closest("li").innerText;

                $("#ModalConfermaDel").modal();                        
                    
            });
            
        });



        //alert(NomiInseriti);
        
    });

    $("#btnDelConfermata").on("click", function() {

        $(dacancellare).remove();

        for(var j=0; j<conteggio; j++)
        {
            if(nomcog==NomiInseriti[j]+" "+CognomiInseriti[j])
            {
                NomiInseriti[j]="//";
                CognomiInseriti[j]="//";
                break;
            }
        } 
    });
    
});