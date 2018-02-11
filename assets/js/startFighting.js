var jokerObj = {
    name: "",
    strength: 0,
    strengthLeft: 0,
    strikePower: 0,
    strikes: 0
}
var strikePower = {
    Heath: 5,
    Jack: 25,
    Lego: 8,
    Cartoon: 15
}
var myJoker = Object.create(jokerObj);
var oppJoker = Object.create(jokerObj);
var playerPicked = false;
var opponentPicked = false;
var allDone = false;

$(document).ready(function(){
    $('.eliminated').hide();
    $('#fightarea').hide();
    
    //check if div #players is empty or not
    if($.trim($('#players').html()) == '')
        allDone = true;
    else
        allDone = false;

    $('img').on('click', function(e){
        
        //picking players
        if(!opponentPicked){
            var playerId = $(e.target).parent().parent();
            playerId.removeClass('col-2');
            playerId.addClass('col-6');
            
            if(!playerPicked){
                setUpPlayer(myJoker, playerId);
                playerId.appendTo('#you');
                $('#picker-header').html('Now Pick your opponent to fight');
                playerPicked = true;
            }
            else{
                setUpPlayer(oppJoker, playerId);
                playerId.appendTo('#them');
                opponentPicked = true;
                //gray out other opponents till done with one selected
                $('#players').css('opacity', '0.5');
                $('#fightarea').show();
            }
        }
        
    });
    
    //Call fightAlgo
    $('button').click(function(){
        console.log('Button clicked');
        strikeOpp();
    });
    

    function strikeOpp(){
        myJoker.strikes++;
        oppJoker.strengthLeft -= myJoker.strikePower * myJoker.strikes;
        myJoker.strengthLeft -= oppJoker.strikePower;
        console.log('my ' +myJoker.strengthLeft +' opp ' +oppJoker.strengthLeft);

        $('#you').find('.card-text').html(myJoker.strengthLeft);
        $('#them').find('.card-text').html(oppJoker.strengthLeft);

        if(oppJoker.strengthLeft <= 0){

            moveCardToEliminated($('#them').find('.joker'))
            //All effect of winning will go here
        }
        if(myJoker.strengthLeft <= 0){
            moveCardToEliminated($('#you').find('.joker'))
            //All effect of losing will go here
            
        }

    }
    function moveCardToEliminated(card){
        card.removeClass('col-6');
        card.addClass('col-2');
        card.appendTo('.eliminated');
        $('.eliminated').show();
    }

    function setUpPlayer(player, playerId){
        player.name = playerId.find('.card-title').text();
        player.strength = parseInt(playerId.find('.card-text').text());
        player.strengthLeft = player.strength;
        player.strikePower = strikePower[player.name];
        console.log(player.name +' ' +player.strength + ' ' + player.strikePower);
    }
})