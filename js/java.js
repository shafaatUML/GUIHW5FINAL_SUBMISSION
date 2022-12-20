// WHEN SUBMIT BUTTON IS CLICKED: 
$("#submit").click(function () {

    // calculate the score 
    for (var x = 0; x < 7; x++) {
        const calcscore = document.getElementById("rindex_" + x);
        if (calcscore.dataset.index == 2 || calcscore.dataset.index == 6 || calcscore.dataset.index == 8 || calcscore.dataset.index == 12) {
            score = score * 2;
        }

    }
    // commit points
    total_score += score;
    doubleScore = "false";
    amount = 0;
    // update score display
    document.getElementById('score').innerHTML = "<h3>Score: " + total_score + "</h3><p>&nbsp</p>";
    // reset word display
    word_string = "";
    document.getElementById('wordbeingbuilt').innerHTML = "<h3>Word: " + word_string + "</h3><p>&nbsp</p>";

    // create new tiles if used to refill hand
    // similar method for initializing the game 
    for (var x = 0; x < 7; x++) {
        random_index = getRandomInt(27);
        const setImageValue = document.getElementById("rindex_" + x);
        // sets position of tiles to rack
        $("#rindex_" + x).css({ "top": "", "left": "" });
        // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
        if (setImageValue.classList.contains('on_board')) {             // if it has class DROPPED
            if (ScrabbleTiles[random_index].remaining != 0) {
                setImageValue.dataset.letter = ScrabbleTiles[random_index].letter;
                ScrabbleTiles[random_index].remaining = ScrabbleTiles[random_index].remaining - 1;
                setImageValue.dataset.letval = ScrabbleTiles[random_index].value;
                setImageValue.classList.remove('on_board');
                setImageValue.classList.add('on_rack');
            }
            else {
                do {
                    random_index = getRandomInt(27);
                } while (ScrabbleTiles[random_index].remaining == 0);
                setImageValue.dataset.letter = ScrabbleTiles[random_index].letter;
                ScrabbleTiles[random_index].remaining = ScrabbleTiles[random_index].remaining - 1;
                console.log(origcount);
                origcount--;
                console.log(origcount);
                setImageValue.dataset.letval = ScrabbleTiles[random_index].value;
                setImageValue.classList.remove('on_board');
                setImageValue.classList.add('on_rack');
            }
            switch (document.getElementById("rindex_" + x).dataset.letter) {
                case "A":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/0.jpg')";
                    break;
                case "B":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/1.jpg')";
                    break;
                case "C":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/2.jpg')";
                    break;
                case "D":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/3.jpg')";
                    break;
                case "E":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/4.jpg')";
                    break;
                case "F":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/5.jpg')";
                    break;
                case "G":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/6.jpg')";
                    break;
                case "H":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/7.jpg')";
                    break;
                case "I":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/8.jpg')";
                    break;
                case "J":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/9.jpg')";
                    break;
                case "K":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/10.jpg')";
                    break;
                case "L":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/11.jpg')";
                    break;
                case "M":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/12.jpg')";
                    break;
                case "N":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/13.jpg')";
                    break;
                case "O":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/14.jpg')";
                    break;
                case "P":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/15.jpg')";
                    break;
                case "Q":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/16.jpg')";
                    break;
                case "R":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/17.jpg')";
                    break;
                case "S":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/18.jpg')";
                    break;
                case "T":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/19.jpg')";
                    break;
                case "U":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/20.jpg')";
                    break;
                case "V":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/21.jpg')";
                    break;
                case "W":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/22.jpg')";
                    break;
                case "X":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/23.jpg')";
                    break;
                case "Y":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/24.jpg')";
                    break;
                case "Z":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/25.jpg')";
                    break;
                case "_":
                    document.getElementById("rindex_" + x).style.backgroundImage = "url('graphics_data/SCRABBLE_TILES_UPDATED/26.jpg')";
                    break;
            }

            if (setImageValue.classList.contains('first_tile')) {
                setImageValue.classList.remove('first_tile');
                firstTile = "false";
            }

            $("#rindex_" + x).draggable("destroy");
            $("#rindex_" + x).draggable({
                cancel: "a.ui-icon",
                revert: "invalid",
                containment: "document",
                cursor: "move"
            });

            tiles_on_rack++;
        }
    }

    score = 0;
    tiles_on_board = 0;
    console.log("tiles after submit: " + tiles_on_board); 
    firstTile = "true";

    for (var i = 0; i < board_arr.length; i++) {
        board_arr[i] = ' ';
    }
    jamaica == "false";
    document.getElementById('submit').style.visibility = "hidden";

    if (origcount < 7) {
        alert("CONGRATS! YOU WON THE GAME! Please press restart to play again");
    }
});
