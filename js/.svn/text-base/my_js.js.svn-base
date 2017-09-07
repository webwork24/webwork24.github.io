 function checkinput () {
 var astr='0123456789.';
 var pos=0;
 len=document.buttonform.resulttext.value.length;
 for (var i=0; i<=len; i++) {
	pos = astr.indexOf (document.buttonform.resulttext.value.substring(i,1)) ;
	if (pos<0) {document.buttonform.resulttext.value='Error';}
	}

 }


 function getLinkShop() {
   var s = window.location.search; 
   var pos = s.indexOf ('?');
   var res = getUrlSite();       // http://localhost:8080/WebWork/?dn=1   
   var len = s.length;
   if (pos >= 0 ) {
     res = res + s.substring(pos,len-pos+1);
   } else {
     res = res + '?dn=-1'
   }
//   alert(res); 
   return res
 }


 function getLinkRent(){
   var res = getUrlSite() + '?dn=-1';
//   alert(res); 
   return res
 }

 function getLinkTestShop1() {
   var res = getUrlSite() + '?dn=34';    
//   alert(res); 
   return res
 }

 function getLinkShop1() {
   var res = getUrlSite() + '?dn=1';    
//   alert(res); 
   return res
 }
