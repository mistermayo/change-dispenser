var coinCombo = function(coin) {
  var penny = 0;
  var nickel = 0;
  var dime = 0;
  var quarter = 0;
  var change = [];

  var amount_remaining = coin;

  do {

    while ((amount_remaining - 25) >= 0) {
      amount_remaining -= 25;
      quarter += 1;
    }

    while ((amount_remaining - 10) >= 0) {
      amount_remaining -= 10;
      dime += 1;
    }

    while ((amount_remaining - 5) >= 0) {
      nickel += 1;
      amount_remaining -= 5;
    }

    while ((amount_remaining - 1) >= 0) {
      penny += 1;
      amount_remaining -= 1;
    }

  } while (amount_remaining > 0);
  
    change.push(penny, nickel, dime, quarter);
    return change;
};

// --------------------------------------------------------------------------

$(document).ready(function() {

  $("form#coin-combo").submit(function(event) {
    $("#change-result").text("");

    var change = parseInt($("input#change").val());
    var coins = coinCombo(change);
    var penny = coins[0];
    var nickel = coins[1];
    var dime = coins[2];
    var quarter = coins[3];

    if(quarter > 0) {
      $("#change-result").append(quarter + " quarters ");
    };
    if(dime > 0) {
      $("#change-result").append(dime + " dimes ");
    };
    if(nickel > 0) {
      $("#change-result").append(nickel + " nickels ");
    };
    if(penny > 0) {
      $("#change-result").append(penny + " pennies ");
    };

    $("#result").show();
    event.preventDefault();

  });
});
