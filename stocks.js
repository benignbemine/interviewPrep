// I have an array stock_prices_yesterday where:

// The indices are the time in minutes past trade opening
// time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// For example, the stock cost $500 at 10:30am,
// so stock_prices_yesterday[60] = 500.

// Write an efficient algorithm for computing the best
// profit I could have made from 1 purchase and 1 sale
// of 1 Apple stock yesterday.

// No "shorting"—you must buy before you sell.
// You may not buy and sell in the same time
// step (at least 1 minute must pass).


// keep track of the current min
// if a number comes along to create a better trade (is a max for the currentMin),
// the bestTrade min and max are updated.
// if a number comes along and is less than the current
// min, we update the current min, since going forward
// it will create the largest differences with the future potential maxes.


var bestTrade = function(stockArray){
  var max = min = currentMin = stockArray[0],
      bestTrade = {
                    min: min,
                    max: max,
                    diff: 0
                   };

  for (var i = 0; i < stockArray.length; i++){
    if (stockArray[i] < currentMin){
      currentMin = stockArray[i];
    }else if (stockArray[i] - currentMin > bestTrade.diff){
      bestTrade.diff = stockArray[i] - currentMin;
      bestTrade.min = currentMin;
      bestTrade.max = stockArray[i];
    }
  }

  if (bestTrade.diff > 0){
    console.log('Best trade made with buying ' + bestTrade.min + ' and selling ' + bestTrade.max + ' to yeild a profit of ' + bestTrade.diff);
    return bestTrade.diff;
  }else{
    console.log('no profitable trade possible');
    return undefined;
  }
};

var stocks = [10, 60, 5, 54, 0, 53];
bestTrade(stocks);