$(function() {
  console.log( "ready to json" );

  $.getJSON("../docs/lib/data/json/team-data.json", function(data) 
  { 
    console.log('success grabbed json');

    console.log(data.devs.length); 


    $.each(data.devs,function(index, data){      

    console.log(data.name); 

    $("#team-member-section").append("<div class=\"col-lg-3 col-md-4 mb-4\"><div class=\"card border-0 shadow container\"><img src=\""+data.pic+"\" class=\"card-img-top image\" alt=\""+data.name+"\"><div class=\"card-body  text-center\"><div class=\"middle\"><div class=\"text\"><a href=\"https://github.com/"+data.github+"\" class=\"btn btn-secondary\" target=\"blank\"><i class=\"fab fa-github\"></i> "+data.github+"</a></div></div><h5 class=\"card-title mb-0\">"+data.name+"</h5><div class=\"card-text text-black-50\">Major: "+data.major+"<br> Graduation: "+data.grad+"</em></div></div></div></div>");
   
  });


     
   



       
    //lol, learned valuable not to comment out in json

      }
    
    )
    .done(function() {
        console.log( "done grabbing json" );
        })
    .fail(function( err ) {
            console.log( "Request Failed: " + err.statusText );
            //not returning err msg...have this wrong
        });
  
   

}); //ends doc ready 


//    devsDataPath.forEach(function(item) {
//      try { 
//          console.log(item); 

//         // first step through the array and make a switch/case for file type: 
//         // md => zero-md, 
//         // txt => do? (try zero-md)
//         // no filetype => error msg
//         // html => $().html
//         // other => dunno? 

//        //  $("#dev-info-section").append("<zero-md src='https://barrycumbie.github.io/una-capstone-devops/lib/team-data/"+item+"'></zero-md>"); 
   
//        $("#dev-info-section").append("<li><a href='lib/team-data/"+item+"' target=_blank>"+item+"</a></li>");

//      }
//      catch(err) {  
//          $("#dev-info-section").html("<h4>ERROR: We are sorry but the resource: "+item+" can not be loaded at this time.</h4><p>ERROR: "+err);         
//      }
    
 
     

      
//    }); 

   

//     //  $("#dev-info-section").html("<zero-md src='lib/team-data/mcantrellDevInfo.md'></zero-md>");
    



// let devsDataPath = [
//     'AlyssaBirtProfile.md',	
//     'OwensDevProfile.md',	
//     'folkertsDevProfile.md',
//     'ColemanDevProfile.md',
//     'SuryaSingh.md',	
//     //'jaylensDevProfile.md',
//     'EthanDevProfile.md',		
//     'TerryDevProfile.md',	
//     'mcantrellDevInfo.md',
//     'HobieDevProfile.md',		
//     'ZimmermanDevProfile.md',	
//     'mccormickDevProfile.md',
//     'MattPeckDevProfile.md',	 
//     'Burden_Dev_Profile.md',
//     'garrettdevprofile.md',
//     'D_Howell_Dev_Profile.md', 
//     'Vonte.md', 
//     'jaylensDevProfile.md', 
//     'parker.md',
//     'rlhoward-devProfile.md'

// ]; 
