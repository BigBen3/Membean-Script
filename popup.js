if(window.location.href.indexOf("dashboard") != -1){
    alert("The script is now working ");
    }
    
    if(window.location.href.indexOf("user_state") != -1){
    reload();
    
    function reload() {
    setInterval(function () {
    location.reload();
    }, 5000);

    
    setInterval(function () {
      document.getElementById("root-footer").click();
    }, 2000);
    
    setInterval(function () {
        
      if($("#full-answer").html() == null){
        $("li.answer").click();
      }
      if($("#full-answer").html() != null){
        $("#choice").val($("#full-answer").html().substring(1));
        $("#pass__pass").parent().submit();
        reload();
      }
    }, 2 * 60 * 1000);
    }
    }



    