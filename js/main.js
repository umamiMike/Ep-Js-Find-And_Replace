var findReplace = function(w_find,w_replace)
    { w_find =  "\\b" + w_find + "\\b";
        var re =  new RegExp (w_find,"gi");
        var str = $("#text_to_work_on").text();
        var newstr = str.replace(re, w_replace);
        //console.log(newstr);  // oranges are round, and oranges are juicy.
        return newstr;
    }

$(document).ready(function() {
    $("form#findReplace").submit(function(event){
        var find_word = $('#word_find').val();
        var replace_word = $('#word_replace').val();
        var replaced = findReplace(find_word,replace_word);
        console.log(replaced);
        $("#text_to_work_on").text(replaced);

        event.preventDefault();
    });
});

//was tricky to implement with keyup due to not caching of original text and
//replacing that in subsequent alterations

// $('#word_replace').keyup(function(){
//
//     var find_word = $('#word_find').val();
//     var replace_word = $('#word_replace').val();
//     var replaced = findReplace(find_word,replace_word);
//
//     $("#text_to_work_on").text(replaced);
//
//     $('#word_find').val(replace_word);
//
//         console.log($('#word_find').val());
//
// })


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
