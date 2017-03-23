'use strict';

var DateBetween = function DateBetween(startDate, endDate) {
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var distance = endDate - startDate;

    if (distance < 0) {
        return false;
    }

    var days = Math.floor(distance / day);
    var hours = Math.floor(distance % day / hour);
    var minutes = Math.floor(distance % hour / minute);
    var seconds = Math.floor(distance % minute / second);

    var between = [];

    if (days) {
        between.push('<span class="game-timer-display-number">' + moment(endDate).format('l LT') + '</span>');
    } else if (hours) {
        between.push('Today <span class="game-timer-display-number">' + moment(endDate).format('LT') + '</span>');
    } else {
        minutes > 0 ? between.push('<span class="game-timer-display-number">' + minutes + '</span> MIN' + (minutes > 1 ? '' : '')) : false;
        seconds > 0 ? between.push('<span class="game-timer-display-number">' + seconds + '</span> SEC' + (seconds > 1 ? '' : '')) : false;
    }
    // days > 0 ? between.push(`<span class="game-timer-display-number">${days}</span> DAY${days > 1 ? 'S' : ''}`) : false;
    // hours > 0 ? between.push(`<span class="game-timer-display-number">${hours}</span> HOUR${hours > 1 ? 'S' : ''}`) : false;

    return between.join(' ');
};

module.exports = DateBetween;