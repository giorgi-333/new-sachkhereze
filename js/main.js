
//load
   setTimeout(function(){
       $(".load").hide();
   },2000);
//load

                   //social
   $(window).bind("load resize", function(){
    var sigane = $(window).width();
    // var shekpos = $("#shekveta").offset().top;//position
     
    if( sigane < 610 ){
        
        $(window).scroll(function(){
            // var scroltop = $(window).scrollTop();

            if( $(window).scrollTop() > 200 ){
                $(".social").fadeIn(200);
            }
            else{
                $(".social").fadeOut(200);
            }

        });

    }

   });      //social

  

      /* მენიუს ბექრაუნდები atart */
$(window).bind("load scroll",function(){

    if( $(window).scrollTop() > 50 )
    {
        $("nav").css("background-color","#668cd2");
        // $(".top").show();
    }
    else{
        $("nav").css("background-color","#668cd293");
        // $(".top").hide();
    }
    
});              /* მენიუს ბექრაუნდები end */


// მენიუს ჩამოშლა          
   $(".hamb").click(function(){
      $(".menu").slideToggle(400);
      $(".hamb .fa-times, .hamb .fa-bars").toggle();
   });
//მენიიუს ჩამოშლა 


     /* start მენიუს გადასვლები */
//ml - my link
$(".menu li a,.ml").click(function(){
    var act = $(this).attr("data-sax");
    var ofs = $("#"+act).offset().top;
    $(window).scrollTop(ofs-60);
});//ml - my link


$(window).scroll(function(){
    var sctop = $(window).scrollTop();

    $(".sect").each(function(){
       
        var tid = $(this).attr("id"); //this id
        var of = $(this).offset().top; //this offset top
        var elhei = $(this).outerHeight(); //computed height
           
        if(sctop > of-61 && sctop < (of-60) + elhei)
         {        
           $(".menu li a").removeClass("active");
           $("[data-sax = " + tid + "]").addClass("active");
         }

        
         
    });

});                    
         /* end მენიუს გადასვლები */

  
    // start შეტყობინება 

 $(".close_shet").click(function(){
     $(".shetyobineba").hide();
 });
    