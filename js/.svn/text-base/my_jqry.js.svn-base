$(document).ready(function() {

$('#divRedirect').parent().css('backgroundColor', 'DarkGrey');
$('#div_shop_info').hide();
$('#textAreaShopInfo').text('On our website you can: \n 1.Order a product \n 2.Create free an online shop \n 3.Create your own security system at your home');
$('#divVopros').hide();
$('#bttnInfo1').prop('value','Order a product');
$('#bttnInfo2').prop('value','Create an online shop');
$('#bttnInfo3').prop('value','Create a security system');
$('#divVopros').css('top', '70%');
$('#div_shop_info').css('top', '50%');

$('#divRedirect').mouseover(function(){
  $('#img_Redirect').attr('src', './img/shop_door_open.jpg');
});

$('#divRedirect').mouseout(function(){
  $('#img_Redirect').attr('src', './img/shop_door_close.jpg');
});

$('.bttnEntrance').mouseover(function(){
  $(this).css('color','darkgreen');
});

$('.bttnEntrance').mouseout(function(){
  $(this).css('color','#000000');
});

$('.bttnRent').mouseover(function(){
  $(this).css('color','darkgreen');
});

$('.bttnRent').mouseout(function(){
  $(this).css('color','#000000');
});


$('#divRedirect').click(function(){
  prepareRedirect ();
  parent.location=getLinkShop();
});

$('#bttnShop').click(function(){
  prepareRedirect ();
  parent.location=getLinkShop();
});

$('#bttnRent').click(function(){
  prepareRedirect ();
  parent.location=getLinkRent();
});

$('#divBigBoardTestShop1').click(function(){
  prepareRedirect ();
  parent.location=getLinkTestShop1();
});

$('#divBigBoardSecurity').click(function(){
  prepareRedirect ();
  parent.location=getLinkRent();
});

$('#divBigBoardShopReclam').click(function(){
  prepareRedirect ();
  parent.location=getLinkRent();
});

$('#bttnInfo1').click(function(){
  prepareRedirect ();
  parent.location=getLinkShop();
});

$('#bttnInfo2').click(function(){
  prepareRedirect ();
  parent.location=getLinkRent();
});

$('#bttnInfo3').click(function(){
  prepareRedirect ();
  parent.location=getLinkRent();
});

function prepareRedirect () {
   $('#divSpinner').css('backgroundImage','url(./img/spinner.gif)');
   $('#divRedirect').parent().css('backgroundColor', 'Silver');
   $('#divRedirectBttn').hide();
   $('#divRedirect').hide();
   $('#img_Background').attr('src', './img/trc_inside_bd_small.jpg');
   $('#divVopros').hide();
   $('#divManager').hide();
   $('#div_shop_info').hide();
   $('#divBigBoard').hide();
   $(".divRainSnow").stop();
   $(".divRainSnow").hide();
   $(".divRainSnow").css('backgroundImage','');
   $(".imgRainSnow").hide();
   $(".imgRainSnow").css('width','1px' ).css('height','1px');
   img_bd = '';
}


}); // End ready
