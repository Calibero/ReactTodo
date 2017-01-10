var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1484035265;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ HH:mm'));


// January 10th, 2017 @ 09:01 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
