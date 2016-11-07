
    $('#h-search-val').keyup(function(e){
        var param = $('#h-search-val').val();
        var url = 'http://api.ugo.com/query.php?q='+param;
        hAjax(url);
    })

    function hAjax(url){
    document.getElementById('h-search-list').innerHTML='';
     $.ajax({
         type : "get",
         async: true,
         url : url,
         dataType : "json",
         success : function(data){
             var d = data;
             var tag = '<ul>';
             for(var i=0;i<d.length;i++){
                 tag += '<li>'+d[i].name+'</li>';
             }
             tag += '</ul>';
             $('#h-search-list').html(tag).show();
             
         },
         error:function(){
             console.log('222');
         }
     });

    }
    $('#h-search-val').blur(function(){
        $('#h-search-list').css('display','none');
    })

