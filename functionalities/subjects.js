var subjects = [];
get_subject();

function get_subject() {
    $("#cc-number").on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            let subject = $("#cc-number").val();
            console.log(subject);
            get_key(subject);

          


            return subject;
        }
    });
    
}
function get_key(subject) {
    let key;
        $.getJSON( "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan", function( data ) {
        $("#tables").css('visibility', 'visible');    
        $.each( data, function(id,val) {
                if (subject === val["label"]) {
                    console.log(val["value"]);
                     key = val["value"];
                     get_details(key);
                     
                     return;
                }
                //console.log( "<li id='" + val["value"] + "'>" + val["label"] + "</li>" );
            });
      
        });


}
function get_details(key) {
    $.getJSON( "http://www.fulek.com/VUA/supit/GetKolegij/"+key, function( data ) {
        add_to_table(data);
    });
}
function add_to_table(d) {
    
     //tu ce ic elementi koji su isprintani
    
     let str = "<tr id='"+d["id"]+"'>"+
                "<td class='naziv'>"+d["kolegij"]+"</td>"+
                "<td class='ects'>"+d["ects"]+"</td>"+
                "<td class='sati'>"+d["sati"]+"</td>"+
                "<td>"+d["predavanja"]+"</td>"+
                "<td>"+d["vjezbe"]+"</td>"+
                "<td>"+d["tip"]+"</td>"+
                "<td></td>"+
                "<td>"+" <button onclick='remove_from_table("+d["id"]+")'>Obriši</button> "+"</td>"+
                "</tr>";
    let element = $.parseHTML(str);
    if (!subjects.includes(str)) {

            subjects.push(str);
            $( "#table" ).append(element);
            console.log(element);
            calculate_sums();
    }else{
        console.log("Element već postoji");
    } 
}
function remove_from_table(id){
    $( "#"+id.toString() ).remove();
    calculate_sums();

    for (const s of subjects) {
        var el = $.parseHTML(s);
        var elmId = $(el).attr("id");

            if (elmId.toString() === id.toString()) {
                subjects.splice(subjects.indexOf(s));
                calculate_sums();
            }
      }
}
function calculate_sums(){
    let ectsSUM = 0;
    let hoursSUM = 0;
    var ectss = document.getElementsByClassName("ects"); 
    var hours = document.getElementsByClassName("sati"); 

    for (const e of ectss) {
        ectsSUM += parseInt(e.textContent);
    }
    for (const h of hours) {
        hoursSUM += parseInt(h.textContent);
    }
    //console.log("--------------------");
    //console.log(ectsSUM);
    //console.log("--------------------");
    $("#ects").html(ectsSUM);
    $("#sati").html(hoursSUM);

   
}