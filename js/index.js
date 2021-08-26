console.log("Your index.js file is loaded correctly");
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        
        $('nav ul').toggleClass('active-menu')
       
        
    })
});


    
