document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('my_name');
    checkPageButton.addEventListener('keypress', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
    
        var a = document.getElementById("my_name").value;

        document.getElementById("greet").innerHTML = "Hello " + a; 
  
        
      });
    }, false);
  }, false);