/**
 * Get a Cookie
 * @param {String} cookieName
 * @return {String} cookie value
 */
export const getCookie = cookieName => {
  const name = cookieName + '=';
  const cArr = window.document.cookie.split(';');
  // console.log(name);

  let result;

  cArr.forEach(element => {
    const c = element.trim();

    if (!c.indexOf(name)) {
      // console.log(c.indexOf(name), c.substring(name.length, c.length));
      result = c.substring(name.length, c.length);
    }
  });

  return result;
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

/**
 * Set a cookie
 * @param {String} cookieName
 * @param {String} value
 * @param {Number} days
 */

// 쿠키 설정이 안되서 잠시 보류
// export function setCookie(cookieName, value, days) {
//   var exdate = new Date();
//   exdate.setDate(exdate.getDate() + days);

//   console.log(cookieName, value, days);

//   var cookie_value =
//     escape(value) + (days == null ? '' : '; expires=' + exdate.toUTCString());
//   document.cookie = cookieName + '=' + cookie_value;
// }
