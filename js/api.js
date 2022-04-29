function getData (element, apiItem) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    let text = "";
    if (element === 'events') {
      if (myObj.data.length > 0) {
        text += "<br>\n<h3 class=\"heading\">Forthcoming Events</h3>\n";
        for (let record = 0; record < myObj.data.length; record++) {
          text += "<br>\n<h4>" +  myObj.data[record][0] + "</h4>\n";
          text += "<p class=\"textJustify\">" + myObj.data[record][2] + " " + myObj.data[record][3] + "</p>\n"
          text += "<p class=\"textJustify\">... at " + myObj.data[record][1] + " from " + myObj.data[record][4] + ".</p>\n"
        }
      }
    }

    if (element === 'news') {
      if (myObj.data.length > 0) {
        for (let record = 0; record < myObj.data.length; record++) {
          text += "<br>\n<h4>" +  myObj.data[record][0] + "</h4>\n";
          let infoDetails = myObj.data[record][1].replace(/\r\n|\n\r|\n|\r/g, '<br/>');
          text += "<p class=\"textJustify\">" + infoDetails + "</p>\n"
        }
      }
      else {
        text += "<p class=\"textJustify\">There is currently no news regarding the village. However, if you have something to share, go to the <a href=\"cf20_church_fenton_contact.php\">Contact</a> page and let us know.</p>\n";
      }
    }

    if (element === 'council_news') {
      if (myObj.data.length > 0) {
        for (let record = 0; record < myObj.data.length; record++) {
          text += "<br>\n<h4>" +  myObj.data[record][0] + "</h4>\n";
          let infoDetails = myObj.data[record][1].replace(/\r\n|\n\r|\n|\r/g, '<br/>');
          text += "<p class=\"textJustify\">" + infoDetails + "</p>\n"
        }
      }
      else {
        text += "<p class=\"textJustify\">There is currently no news regarding the village. However, if you have something to share, go to the <a href=\"cf20_church_fenton_contact.php\">Contact</a> page and let us know.</p>\n";
      }
    }
   
    document.getElementById(element).innerHTML = text;
  }
  xmlhttp.open("GET", "http://c9755498.myzen.co.uk/cfdotnet/api.php?" + apiItem);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send();
}