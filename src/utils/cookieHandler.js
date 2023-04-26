/**
 * Get a Cookie
 * @param {String} cname, cookie name
 * @return {String} cookie value
 */
export const getCookie = cname => {
  const name = cname + '=';
  const cArr = window.document.cookie.split(';');

  cArr.forEach(element => {
    const c = element.trim();
    if (!c.indexOf(name)) return c.substring(name.length, c.length);
  });
};

/**
 * Delete a cookie
 * @param {String} cname, cookie name
 */
export const deleteCookie = cname => {
  var d = new Date();
  console.log(d.getTime());
  d.setTime(d.getTime() - 1000 * 60 * 60 * 24);
  var expires = 'expires=' + d.toGMTString();
  window.document.cookie = cname + '=' + '; ' + expires;
};
