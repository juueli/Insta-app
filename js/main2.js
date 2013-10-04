$(document).ready(function() {


  function processImages(response) 
  {
    for (var i = 0; i < response.data.length; i++) 
    {
    	var url = response.data[i].images.low_resolution.url;
    	var name = response.data[i].user.username
    	var likes = response.data[i].likes.count
      $("#images").append("<img src='" + url + "'>", '<p><a href="http://www.instagram.com/' + name + '">' + name + '</a></p>');
    }
  }


function search()
{
 var hashtag = $("#hashtag").val();
  var url = "https://api.instagram.com/v1/tags/" + hashtag + "/media/recent?access_token=5024321.f59def8.9f50beb688164f5698c392b018f1f872&callback=?";
  $.getJSON(url, processImages);
 $("img").remove();
 $("p").remove();
 }

$("#hashtag").keyup(function(event)
  {
    if(event.keyCode == 13){
        $("#searchBtn").click()
    }
  }
  );

$("#searchBtn").on("click",search);

});