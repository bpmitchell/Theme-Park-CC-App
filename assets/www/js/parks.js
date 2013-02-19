$(document).ready(function(){
    //hide all in target div
    $("div", "div#target").hide();
    $("select#type").change(function(){
        // hide previously shown in target div
        $("div", "div#target").hide();
        
        // read id from your select
        var value = $(this).val();
        
        // show rlrment with selected id
        $("div#"+value).show();
    });
});