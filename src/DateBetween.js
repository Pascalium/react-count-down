let DateBetween = function(startDate, endDate) {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let distance = endDate - startDate;

  if (distance < 0) {
    return false;
  }

  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);


  let between = [];

  days > 0 ? between.push(`<span styleName="game-timer-display-number">${days}</span> DAY{days > 1 ? 'S' : ''}`) : false;
  hours > 0 ? between.push(`<span styleName="game-timer-display-number">${hours}</span> HOUR{hours > 1 ? 'S' : ''}`) : false;
  minutes > 0 ? between.push(`<span styleName="game-timer-display-number">${minutes}</span> MIN{minutes > 1 ? '' : ''}`) : false;
  seconds > 0 ? between.push(`<span styleName="game-timer-display-number">${seconds}</span> SEC{seconds > 1 ? '' : ''}`) : false;

  return between.join(' ');
}

module.exports = DateBetween;
