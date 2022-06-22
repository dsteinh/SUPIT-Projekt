function autocomplete() {
    $( document ).ready(function() {
         $.getJSON( "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan", function( data ) {
             var items = [];
             $.each( data, function(id,val) {
                 items.push( "<option>" + val["label"] + "</option>" );
                 var key = val["value"];
                 //console.log( "<li id='" + val["value"] + "'>" + val["label"] + "</li>" );
             });
             

             items.forEach(item => {
                 $( "#kolegiji" ).append($.parseHTML(item));
            });
         });
     });  
}

autocomplete();