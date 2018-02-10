var jokerObj = {
    name: "",
    strength: 0,
    strengthLeft: 0,
    strikePower: 0,
    strikes: 0
}
var strikePower = {
    Heath: 10,
    Jack: 25,
    Lego: 8,
    Cartoon: 15
}
var myJoker = Object.create(jokerObj);
var oppJoker = Object.create(jokerObj);

$(document).ready(function(){
    var playerPicked = false;
    var opponentPicked = false;
    $('.eliminated').hide();
    $('#fightarea').hide();

    $('img').on('click', function(e){
        
        //picking players
        if(!opponentPicked){
            var playerId = $(e.target).parent().parent();
            playerId.removeClass('col-2');
            playerId.addClass('col-6');
            console.log(playerId);
            
            if(!playerPicked){
                
                myJoker.name = playerId.find('.card-title').text();
                myJoker.strength = parseInt(playerId.find('.card-text').text());
                oppJoker.strengthLeft = oppJoker.strength;
                console.log(myJoker.name +' ' +myJoker.strength);

                playerId.appendTo('#you');
                $('#picker-header').html('Now Pick your opponent to fight');
                playerPicked = true;
            }
            else{
                oppJoker.name = playerId.find('.card-title').text();
                oppJoker.strength = parseInt(playerId.find('.card-text').text());
                oppJoker.strengthLeft = oppJoker.strength;
                console.log(oppJoker.name +' ' +oppJoker.strength + ' ' +oppJoker.strengthLeft);
                playerId.appendTo('#them');
                opponentPicked = true;
                //$('.eliminated').show();
                $('#fightarea').show();
            }
        }
        //Fight algo here
        else{
            
        }

    });
})