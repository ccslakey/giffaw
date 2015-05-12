$(document).ready(function(){
  // code in here!
  console.log("here's your data:", mockData)

  $.get('mockData', renderMock(mockData));

  function renderMock(datar){
    datar.data.forEach(function(item,i){
    var thumb = item.images.fixed_height.url;
    $("body").prepend("<img src='" + thumb + "'>"); // mind the single vs. double quotes!
  })  
};

function renderGiphy(datar){
	$('img').remove();
    datar.data.forEach(function(item,i){
    var giph = item.images.fixed_height.url;
    console.log(giph);
    $("body").append("<img src='" + giph + "'>"); // mind the single vs. double quotes!
  })  
};

var input = $('input');
var searchTerms;
var apiCallStr;
input.on("change", function (event) {
     searchTerms=(event.target.value);
     apiCallStr = "http://api.giphy.com/v1/gifs/search?q="+searchTerms+"&api_key=dc6zaTOxFJmzC";
	 var giphyCall = $.get(apiCallStr, renderGiphy);
	 giphyCall = giphyCall.responseJSON
	 renderGiphy(giphyCall);
});

});

