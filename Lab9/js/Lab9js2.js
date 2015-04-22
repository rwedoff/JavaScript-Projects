$(document).ready(function() {
    var inputtxt="";
    var and = "";
    
    $('.content').hide();
    //Clicking anywhere on the page
    $('#search').on('click', function(e){
       var targ = $(e.target);    
    if(targ.is($('#andbut'))){
        $("#andbut").attr('checked', checked);
    }
    else if(targ.is($('#orbut'))){
        $("#orbut").attr('checked', checked);
    }
    else if(!(targ.is($('#txtin')))){
             if($('#andbut').prop("checked")) {
                and = "all";
             }
            else if($('#orbut').prop("checked")) {
                and = "any";
            }
        req(inputtxt,and);
        $('#search').hide();
        $('.content').show();
    }
    //Try to expand to whole body
    e.stopPropagation();
    return false;
    });
    
    
    
    $('#txtin').blur(function(){
        var txt = $('#txtin').val();
        inputtxt = txt.split(' ').join(',');
    }); 
    
    
    
function req(topic,and_or){
var ajaxURL="http://api.flickr.com/services/feeds/photos_public.gne?tags="+ topic + "&tagmode=" + and  + "&format=json&jsoncallback=?"; 

$.getJSON(ajaxURL,function(data) {
	$('h1').text((data.title).toLowerCase());
	$.each(data.items,function(i,photo) {
		var photoHTML = '<span class="image">';
		photoHTML += '<center><a href="' + photo.link + '">';
		photoHTML += '<img src="' + photo.media.m.replace('_m','_s') + '"class=reqImg></a></center>';
		$('#photos').append(photoHTML);	
	}); // end each
}); // end get JSON

}
			
}); // end ready