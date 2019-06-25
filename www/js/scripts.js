jQuery(document).ready(function($){
	 //alert("dasd");
	 if (window.localStorage["n"] != null) {
					   window.location = "Dashboard.html";
					    }

	$('#loginForm').on('submit', function(event){
		event.preventDefault();
		$("#submit",this).attr("disabled","disabled");
 		
 		if (window.navigator.onLine == false) {
				 	alert("Please Check Your Internet Connection.");
				}

        var n = $("#n", this).val();
        var p = $("#p", this).val();

 		event.preventDefault();
 		var data = $(this).serialize();
 		data = {
 			n: n,
 			p: p,
 		}
		if(n != '' && p != '') {
			$.post( 'http://smart.raheraast.com/api/server.php', data,function(resp){
			
			console.log(resp);

			
				if(resp == true) {
					//store
					window.localStorage["n"] = n;
					window.localStorage["p"] = p;     
					console.log("load");   			
                    window.location = "Dashboard.html";

				} 
				else {
					navigator.notification.alert("Your login failed", function() {});
				}
		    	$("#submit").removeAttr("disabled");
			},"json");
		}
		return false;


	});
});