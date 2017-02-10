function loadFavourites(){
    var index = array_favourite.map(function (obj){
        return obj.name;
    }).indexOf(window.localStorage.getItem("spotyUser"));
    array_favourite[index].favouriteTrack.forEach(function (item){
        var url = "https://api.spotify.com/v1/tracks/"+item;
        console.log(url);
        request(url,"load_favourites");
    });
}
function formatFavourites(response){
    var html = '<tr>'+
                    '<td>'+response.name+'</td>'+
                    '<td><a target="_blank" href="'+response.preview_url+'">Preview</a></td>'+
                    '<td id="'+response.id+'"><i class="fa fa-minus" aria-hidden="true"></i></td>'+
                '</tr>';
    $("tbody").append(html);
    $("tbody").sortable().disableSelection(); 
    $('i').unbind("click").click(function (){
        var id = $(this).parent().attr("id");
        alert (id);
        deleteFavourite(id);
    });
}
loadFavourites();

function deleteFavourite (id){
     var findit;
     var index;
     //Search user by name inside JSON to get the position
     var index = array_favourite.map(function (obj){
        return obj.name;
    }).indexOf(window.localStorage.getItem("spotyUser"));
    
     var findit = array_favourite[index].favouriteTrack.indexOf(id)
    array_favourite[index].favouriteTrack.splice(findit,1);
      
     
     $("#"+id).parent().remove();
      saveLocalStorage("favourite");
}



