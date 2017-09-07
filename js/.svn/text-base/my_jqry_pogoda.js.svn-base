$(document).ready(function() {

var pogoda = Math.floor(Math.random() * 10) + 1;    // 1..10
var speed_down;
var img_bd;
var left_percent;
var id_rnd;
var id_rnd1;
var i;
var j;

speed_down = 1;
i = 1;
j = 0;

if (pogoda==1) {
  speed_down = 10000;
  img_bd = './img/snow.png';
}

if (pogoda==2) {
  speed_down = 1000;
  img_bd = './img/rain.png';
}

if (pogoda==3) {
  speed_down = 8000;
  img_bd = './img/klen.png';
}

if (pogoda < 4 ) {

left_percent = Math.floor(Math.random() * 70) + 5;
$('#divRedirect').after('<div id="divRainSnow_' + j + '" class="divRainSnow"><img class="imgRainSnow" alt=""/></div>');
$("#divRainSnow_"+j).css('top','0%' ).css('left',left_percent+'%');
$('.imgRainSnow').attr('src',img_bd);
$("#divRainSnow_"+j).animate({'top' : '20%'}, speed_down/5, function() {

  createDivRainSnow ();
  $("#divRainSnow_"+j).animate({'top' : '40%'}, speed_down/5, function() {

    createDivRainSnow ();
    $("#divRainSnow_"+j).animate({'top' : '60%'}, speed_down/5, function() {

      createDivRainSnow ();
      $("#divRainSnow_"+j).animate({'top' : '80%'}, speed_down/5, function() {

        createDivRainSnow ();
        $("#divRainSnow_"+j).animate({'top' : '100%'}, speed_down/5, function() { $(this).css('display','none'); createDivRainSnow ();

        });
      });
    });
  });
});

}

function createDivRainSnow () {
  var lt;
  var imgRainSnowH;
  i=i+1;
  if (i>100) {return;}
  lt = Math.floor(Math.random() * 70) + 15;
  imgRainSnowH = Math.floor(Math.random() * 90) + 1;    // 1..90
  if (imgRainSnowH<30) {imgRainSnowH=30;}
  $('#divRedirect').after('<div id="divRainSnow_' + i + '" class="divRainSnow"><img id="imgRainSnow_' + i + '" class="imgRainSnow" alt=""/></div>');
  $("#divRainSnow_"+i).css('top','0%' ).css('left',lt+'%');
  $("#imgRainSnow_"+i).css('height',imgRainSnowH+'%').css('width',imgRainSnowH+60+'%');
  $('.imgRainSnow').attr('src',img_bd);
  $("#divRainSnow_"+i).animate({'top' : '100%', 'left' : lt+'%'}, speed_down, function() { $(this).css('display','none'); createDivRainSnow ();});
}

}); // End ready
