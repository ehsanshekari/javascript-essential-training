/*
 Cookies
   - Cookies are used to store a limited amount of information on client-side 
   - Cookies have 6 parts: name, value, expires, path, domain, and secure
*/

document.cookie = "name=Ehsan;expires=Tue, 21 Dec 2020 00:00:00;";

var color = prompt('What is your favourite color:', 'green');
setCookie('color', color);
