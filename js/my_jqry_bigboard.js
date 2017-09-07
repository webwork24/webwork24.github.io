$(document).ready(function() {

createBigBoardShow ();

function createBigBoardShow () {
  var speed_BigBoardShow;
  speed_BigBoardShow = 10000;

  $("#divBigBoardTestShop1").css('z-index',10).css('height','40%' );
  $("#divBigBoardSecurity").css('z-index',9).css('height','40%' );
  $("#divBigBoardShopReclam").css('z-index',8).css('height','40%' );

  $("#divBigBoardTestShop1").animate({'height' : '-100%'}, speed_BigBoardShow, function() { 

    $("#divBigBoardTestShop1").css('z-index',2);
    $("#divBigBoardSecurity").animate({'height' : '-100%'}, speed_BigBoardShow, function() { 

      $("#divBigBoardTestShop1").css('height','40%' );
      $("#divBigBoardShopReclam").animate({'height' : '-100%'}, speed_BigBoardShow, function() { 
  
        createBigBoardShow ();

      });
  
    });
 
  });

}

}); // End ready
