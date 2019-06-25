 jQuery(document).ready(function($){
 	if (window.localStorage["n"] != null) {
             //window.location = "pickup_request.html";
              }

              else{
            alert("Please login ");
                
             window.location = "index.html";
              }
// 	 alert("dasd");

// 	$('#refresh').click(function(event){
        
//  		event.preventDefault();

//  			var data = $(this).serialize();
//  		    dataType: 'json';               //data format      

// 			$.post( 'http://smart.raheraast.com/api/dashboard_server.php',data,function(resp,status){
			
// 			console.log(resp);
// 			console.log(status);
// 			// console.log( jQuery.parseJSON(resp) );
// 			  newdata = JSON.parse(resp);
// 			// console.log(newdata.temp);
//           //$("#temp").append(resp);
//          	var html = '';
//    //      	html += '<tr>';
//          	html += '<h6>'+newdata.temp+'</h6>';
//    //      	html += '<td>'+newdata.father+'</td>';
//    //      	html += '<td>'+newdata.email+'</td>';
//    //      	html += '<td>'+newdata.pass+'</td>';
//    //      	html += '<td>'+newdata.mobile+'</td>';
//    //      	html += '<td>'+newdata.address+'</td>';
//    //      	html += '<td><input type="checkbox"class="checkbox" value=""></input></td>';
//    //      	html += '<td><spam class="Delete glyphicon glyphicon-trash"style=color:Red></spam></td>';
//    //      	html += '</tr>';
//         $("#temp").append(html);

// 			});		
				
// 	});
$.ajax({
		 		url:'http://smart.raheraast.com/api/dashboard_server.php',
		 		type:'post',
		 		success:function(getdata){
		 			console.log(getdata);
		 			  newdata = JSON.parse(getdata);
		 			  console.log(newdata);


		 			$('#temp').html(newdata.temp+'&#8451;');
		 			$('#humidity').html(newdata.humidity+' &#65285;');
		 			$('#waterlevel').html(newdata.waterlevel+' &#13212;');
		 			if (newdata.waterlevel >= 80) {
		 				alert("پانی کی موٹر بند کرو ");
		 			}
		 			$('#soilmoisture').html(newdata.soilmoisture+' &#xFF05;');
		 			//$('#moter').html(newdata.moter);
		 			$('#datetime').html(newdata.datetime);

		 		}
		 	});
});
 
