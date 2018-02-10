var jokerObj = {
    name: "",
    fuel: 0,
    strikePower: 0,
    strikes: 0,
}

$(document).ready(function(){
    var playerPicked = false;
    var opponentPicked = false;
    $('.eliminated').hide();
    $('#fightarea').hide();

    $('img').on('click', function(e){
        
        if(!opponentPicked){
            var playerId = $(e.target).parent().parent();
            playerId.removeClass('col-2');
            playerId.addClass('col-6');
            console.log(playerId);
            if(!playerPicked){
                playerId.appendTo('#you');
                $('#picker-header').html('Now Pick your opponent to fight');
                playerPicked = true;
            }
            else{
                playerId.appendTo('#them');
                opponentPicked = true;
                $('.eliminated').show();
                $('#fightarea').show();
            }
        }

    });
})