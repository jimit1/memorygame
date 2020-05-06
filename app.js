$(document).ready(function () {
  var cardDeck = [
    "./assets/1C.jpg",
    "./assets/2C.jpg",
    "./assets/3C.jpg",
    "./assets/4C.jpg",
    "./assets/5C.jpg",
    "./assets/6C.jpg",
    "./assets/7C.jpg",
    "./assets/8C.jpg",
    "./assets/9C.jpg",
    "./assets/10C.jpg",
    "./assets/11C.jpg",
    "./assets/12C.jpg",
    "./assets/13C.jpg",
    "./assets/1D.jpg",
    "./assets/2D.jpg",
    "./assets/3D.jpg",
    "./assets/4D.jpg",
    "./assets/5D.jpg",
    "./assets/6D.jpg",
    "./assets/7D.jpg",
    "./assets/8D.jpg",
    "./assets/9D.jpg",
    "./assets/10D.jpg",
    "./assets/11D.jpg",
    "./assets/12D.jpg",
    "./assets/13D.jpg",
    "./assets/1H.jpg",
    "./assets/2H.jpg",
    "./assets/3H.jpg",
    "./assets/4H.jpg",
    "./assets/5H.jpg",
    "./assets/6H.jpg",
    "./assets/7H.jpg",
    "./assets/8H.jpg",
    "./assets/9H.jpg",
    "./assets/10H.jpg",
    "./assets/11H.jpg",
    "./assets/12H.jpg",
    "./assets/13H.jpg",
    "./assets/1S.jpg",
    "./assets/2S.jpg",
    "./assets/3S.jpg",
    "./assets/4S.jpg",
    "./assets/5S.jpg",
    "./assets/6S.jpg",
    "./assets/7S.jpg",
    "./assets/8S.jpg",
    "./assets/9S.jpg",
    "./assets/10S.jpg",
    "./assets/11S.jpg",
    "./assets/12S.jpg",
    "./assets/13S.jpg",
  ];
  var randNum = 0;
  var cards = [];
  function randNumber(num) {
    randNum = Math.floor(Math.random() * num);
    return randNum;
  }

  function drawCards(num) {
    for (var j = 0; j < num; j++) {
      cards.push("");
    }
    for (var i = 0; i < num / 2; i++) {
      cards.splice(i, 1, cardDeck[randNumber(52)]);
      if (cards.length > 1) {
        for (var k = 0; k < cards.length - 1; k++) {
          if (cards[i] === cards[k]) {
            cards.splice(i, 1, cardDeck[randNumber(52)]);
          }
        }
      }
      cards.splice(i + num / 2, 1, cards[i]);
    }
    console.log(cards);
  }

  function shuffleCards(array) {
    var i = array.length;
    var tempVal;
    var randI;
    while (0 !== i) {
      randI = Math.floor(Math.random() * i);
      i -= 1;
      tempVal = array[i];
      array[i] = array[randI];
      array[randI] = tempVal;
    }
    return array;
  }

  function showCards(num) {
    var counter = 0;
    drawCards(num * num);
    shuffleCards(cards);
    var num2 = 12 / num;
    $(".container").html("");
    for (var j = 0; j < num; j++) {
      $(".container").append(`<div class="row" id=${j}></div>`);
      for (var i = 0; i < num; i++) {
        $(`#${j}`).append(`<div class="col-md-${num2} mb-3">
      <img src="${cards[counter]}" class="choice img-fluid rounded" data-id="${counter}"/></div>`);
        counter++;
      }
    }
  }

  function hideCards(num) {
    var counter = 0;
    var num2 = 12 / num;
    $(".container").html("");
    for (var j = 0; j < num; j++) {
      $(".container").append(`<div class="row" id=${j}></div>`);
      for (var i = 0; i < num; i++) {
        $(`#${j}`).append(`<div class="col-md-${num2} mb-3">
      <img src="./assets/0.jpg" class="choice img-fluid rounded" data-id="${counter}"/></div>`);
        counter++;
      }
    }
  }

  function loadGame(num) {
    showCards(num);
    window.setTimeout(function () {
      hideCards(num);
    }, 3000);
  }

  $(document).on("click", ".choice", function () {
    var counter = $(this).attr("data-id");
    $(this).attr("src", `${cards[counter]}`);
    console.log(counter);
  });

  $("#easyGame").on("click", function () {
    loadGame(2);
  });
  $("#mediumGame").on("click", function () {
    loadGame(4);
  });
  $("#hardGame").on("click", function () {
    loadGame(6);
  });
});
