/**
 * Returns URL query parameter value by name
 
 * @param {string} name
 * @returns {getParam.params|params}
 */
function getParam(name) {
    var url = new URL(window.location.href), p = url.search, parts = {}, params = {};
    p = p.substr(1);
    p.split('&').forEach((e, i) => {
        parts = e.split('=');
        params[parts[0]] = parts[1];
    });
    return params[name];
}

/**
 * Set URL query parameter: name=value - NULL to unset parameter
 * 
 * @param {mixed} name
 * @param {mixed} value
 * @returns {void}
 */
function setParam(name, value) {
    var u = new URL(window.location.href), p = u.search, b = u.origin + u.pathname, a = {}, s = {}, np = [], nq = '';
    if (p === "") {
        nq = '?' + name + '=' + value;
    } else if (p.indexOf('?') === 0) {
        p = p.substr(1);
        p.split('&').forEach((e, i) => {
            a = e.split('=');
            s[a[0]] = a[1];
        });
    }
    s[name] = value;
    for (const [i, [k, v]] of Object.entries(Object.entries(s))) {
        np[i] = k + '=' + v;
    }
    np = np.filter(function (el) {
        return el;
    });
    nq = (np.length === 0 ? '' : '?' + np.join('&'));
    history.pushState(null, null, b + nq);
}

// Set cookie value
function setCookie(n,v) {
    document.cookie = n+'='+v;
    return true;
}

// Get cookie value
function getCookie(n) {
    var a = document.cookie.split('; '), b = {}, c;
    a.forEach(function (e, i) {
        c = e.split('=')[1];
        b[e.split('=')[0]] = c === 'false' ? false : (c === 'true' ? true : c);
    });
    return b[n];
}
// Easy date formatting
function myTime(date, addLeadingZero = true) {
    var d = new Date(date);
    if (d === 'Invalid Date') {return false;}
    var dd = d.getDate(), mm = d.getMonth() + 1, yyyy = d.getFullYear(), h = d.getHours(), i = d.getMinutes(), s = d.getSeconds();
    if (addLeadingZero === true) {
        if (dd < 10) {dd = '0' + dd;}
        if (mm < 10) {mm = '0' + mm;}
        if (h < 10) {h = '0' + h;}
        if (i < 10) {i = '0' + i;}
        if (s < 10) {s = '0' + s;}
    }
    var ret = {
        day: dd,
        month: mm,
        year: yyyy,
        hour: h,
        minute: i,
        second: s
    };
    return ret;
}

// Duh
function isInt(n) {
    return Number(n) === n && n % 1 === 0;
}
// Duh
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}
// Duh
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

// Reload page after 'timeout' miliseconds
function windowReload(timeout = 0) {
    setTimeout(window.location.reload.bind(window.location), timeout);
}
