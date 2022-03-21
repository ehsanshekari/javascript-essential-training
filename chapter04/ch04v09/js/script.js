// Date Object

/* var myDate = new Date();
console.log('new Date()', myDate);
var d1 = new Date(2018, 11, 24, 10);    // new Date(year, month, day, hours, minutes, seconds, milliseconds)
var d2 = new Date(1000);                              // new Date(milliseconds)
var d3 = new Date('October 13');    // new Date(date string)
console.log(d1, d2, d3);
console.log('Date.now', Date.now()); */


/* var myDate = new Date();
console.log('getFullYear', myDate.getFullYear());	        // Get the year as a four digit number(yyyy)
console.log('getMonth', myDate.getMonth());                 // Get the month as a number(0 - 11)
console.log('getDate', myDate.getDate());                   // Get the day as a number(1 - 31)
console.log('getHours', myDate.getHours());	                // Get the hour(0 - 23)
console.log('getMinutes', myDate.getMinutes());             // Get the minute(0 - 59)
console.log('getSeconds', myDate.getSeconds());	            // Get the second(0 - 59)
console.log('getMilliseconds', myDate.getMilliseconds());	// Get the millisecond(0 - 999)
console.log('getTime', myDate.getTime());                   // Get the time(milliseconds since January 1, 1970)
console.log('getDay', myDate.getDay())	                    // Get the weekday as a number(0 - 6)


// getUTCDate()	            Same as getDate(), but returns the UTC date
// getUTCDay()	            Same as getDay(), but returns the UTC day
// getUTCFullYear()	        Same as getFullYear(), but returns the UTC year
// getUTCHours()	        Same as getHours(), but returns the UTC hour
// getUTCMilliseconds()	    Same as getMilliseconds(), but returns the UTC milliseconds
// getUTCMinutes()	        Same as getMinutes(), but returns the UTC minutes
// getUTCMonth()	        Same as getMonth(), but returns the UTC month
// getUTCSeconds()	        Same as getSeconds(), but returns the UTC seconds
*/


// setDate()	           Sets the day of the month of a date object
// setFullYear()	       Sets the year of a date object
// setHours()	           Sets the hour of a date object
// setMilliseconds()	   Sets the milliseconds of a date object
// setMinutes()	           Set the minutes of a date object
// setMonth()	           Sets the month of a date object
// setSeconds()	           Sets the seconds of a date object
// setTime()	           Sets a date to a specified number of milliseconds after / before January 1, 1970
// setUTCDate()	           Sets the day of the month of a date object, according to universal time
// setUTCFullYear()	       Sets the year of a date object, according to universal time
// setUTCHours()	       Sets the hour of a date object, according to universal time
// setUTCMilliseconds()    Sets the milliseconds of a date object, according to universal time
// setUTCMinutes()	       Set the minutes of a date object, according to universal time
// setUTCMonth()	       Sets the month of a date object, according to universal time
// setUTCSeconds()	       Set the seconds of a date object, according to universal time

/* var myDate = new Date();
console.log('myDate', myDate);
myDate.setMonth(4);
console.log('myDate after set month', myDate);

var d1 = new Date();
console.log('d1', d1);
d1.setDate(d1.getDate() + 2);
console.log('d1 after setdate', d1);

var d2 = new Date('October 13, 2019 11:13:00');
var d3 = new Date('October 14, 2019 11:13:00');
console.log(d2 - d3);
*/



// toDateString()	       Converts the date portion of a Date object into a readable string
// toISOString()	       Returns the date as a string, using the ISO standard
// toJSON()	               Returns the date as a string, formatted as a JSON date
// toLocaleDateString()	   Returns the date portion of a Date object as a string, using locale conventions
// toLocaleTimeString()	   Returns the time portion of a Date object as a string, using locale conventions
// toLocaleString()	       Converts a Date object to a string, using locale conventions
// toString()	           Converts a Date object to a string
// toTimeString()	       Converts the time portion of a Date object to a string
// toUTCString()	       Converts a Date object to a string, according to universal time

var myDate = new Date();
console.log(myDate.toTimeString());





