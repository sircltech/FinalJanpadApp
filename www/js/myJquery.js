$(document).ready(function()
{
 
     var switchcase="act=1";
     $.ajax({
         url:"http://www.janpad.in/snap/ajax_functions.php",
         type:"POST",
         data:switchcase,
         timeout: 5000,
         success: function(html)
         {
         	$("#listview").html(html);
               
         },
         error: function(e)
         {
         	alert("Time Out.Check Your Internet Connection...");
         }
         
      })
    
      
});
