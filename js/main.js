// var scrapeSite = function (theURL) {
//
// var retRes = $.ajax({
//     url: theURL ,
//     xhrFields:{
//         withCredentials: true
//             },
//     type: 'GET',
//     dataType: 'jsonp',
//     jsonpCallback: 'callback',
//
//     success: function(json) {
//         console.log(json);
//         var headline = $(res.responseText).find('p').text();
//         alert("Success");
//     },
//     error: function(){console.log( 'daum!');},
//     jsonp: 'json'
// });
//
// return retRes;
// }

$(document).ready(function() {
    $("form#baseconvert").submit(function(event){


        $("#result").show();
        event.preventDefault();
    });
});
