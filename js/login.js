
function requestJSONP (url){
    $.ajax({
        url: url,
        jsonpCallback: "log",
        type: "GET",
        dataType: "jsonp",
        crossDomain: true,
        
        success: function (response){
            checkLogin(response);
        },
        error: function (response){
            console.log(response);
        }
  });
  }
  function checkLogin (users){
      var users = users;
      var user = $('#inputUser').val();
      var password = $('#inputPassword').val();
      var index = 0; 
      var encontrado = false;
      while (index < users.length && encontrado === false){
          if (user === users[index].name && password === users[index].password){
              encontrado = true;
          }
          index++;
      }
      
      
      if (encontrado === true){
       
          //Save nameUser
            window.localStorage.setItem("spotyUser", $('#inputUser').val());
        
          window.location = "main.html";
      }else{
          $("#message").append('<p class="text-danger">Error de login</p>');
      }    
  }
  $('button').click(function (){
      var url = "./users.jsonp";
      requestJSONP(url);
  });
  
function checkRemember () {
    
}
  





