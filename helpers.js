/**
 * Returns URL query parameter value by name
 * @param {string} name
 * @returns {string}
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
		switch (true) {
		case typeof v === 'undefined':
		case v === null:
		case v.toString() === '':
			break;
		default:
			np[i] = k + '=' + v;
			break;
		}
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

// Prettify JSON
// Shamelessly stolen from https://stackoverflow.com/a/7220510 and modded slightly
// CSS below
function jsonPretty(json) {
    json = JSON.stringify(json, null, 4);
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'json-numeric';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'json-key';
            } else {
                cls = 'json-string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'json-bool';
        } else if (/null/.test(match)) {
            cls = 'json-null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
/**
 * .json-string { color: #b21111; }
 * .json-key { color: #aa00b7; }
 * .json-numeric { color: #116644; }
 * .json-null,
 * .json-bool { color: #221199; }
 * span[class*="json-"]{font-weight:bold;}
 * pre {
 *  white-space: pre-wrap;
 *  background: #fafafa;
 *  padding: 20px;
 *  font-family: monospace !important;
 *  overflow: hidden;
 *  border: 1px solid #cecece;
 *  border-radius: 5px;
 *  width:100%;
 *  color: #474747;
 * }
 */


/**
 * Returns time since / till certain datetime
 * @param string timestamp
 * @return string
 */

function timeSince(timestamp) {
    var target = new Date(timestamp);
    if (target == 'Invalid Date') {
        return false;
    }
    var sub = 0, now = new Date(), since, years, months, days, hours, minutes, seconds, ret;
    if (target > now) {
        var diff = target - now;
        var overdue = false;
    } else {
        var diff = now - target;
        var overdue = true;
    }

    years = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
    sub = (years * 1000 * 60 * 60 * 24 * 365)
    diff = diff - sub;

    months = Math.floor(diff / 1000 / 60 / 60 / 24 / 30.5);
    sub = (months * 1000 * 60 * 60 * 24 * 30.5)
    diff = diff - sub;

    days = Math.floor(diff / 1000 / 60 / 60 / 24);
    sub = (days * 1000 * 60 * 60 * 24)
    diff = diff - sub;

    hours = Math.floor(diff / 1000 / 60 / 60);
    sub = (hours * 1000 * 60 * 60)
    diff = diff - sub;

    minutes = Math.floor(diff / 1000 / 60);
    sub = (minutes * 1000 * 60)
    diff = diff - sub;

    seconds = Math.floor(diff / 1000);
    sub = (seconds * 1000)
    diff = diff - sub;

    since = {
        years: (years > 0) ? years + ' år' : "",
        months: (months > 1) ? months + ' måneder' : $months = months + ' måned',
        days: (days > 1) ? days + ' dage' : days + ' dag',
        hours: (hours > 1) ? hours + ' timer' : hours + ' time',
        minutes: (minutes > 1) ? minutes + ' minutter' : minutes + ' minut',
        seconds: (seconds > 1) ? seconds + ' sekunder' : seconds + ' sekund',
        miliseconds: diff
    };

    if (years !== 0) {
        // More than a year
        ret = since.years + (since.months != 0 ? '&nbsp;' + since.months : '');
    } else if (months > 0 && years == 0) {
        // More than a month, less than a year
        ret = since.months + ' ' + since.days;
    } else if (days > 0 && months == 0 && years == 0) {
        // More than a day, less than a month
        ret = since.days;
    } else if (hours > 0 && days == 0 && months == 0 && years == 0) {
        // More than an hour, less than a day
        ret = since.hours;
    } else if (minutes > 0 && hours == 0 && days == 0 && months == 0 && years == 0) {
        // More than a minute, less than an hour
        ret = since.minutes;
    } else if (seconds && minutes == 0 && hours == 0 && days == 0 && months == 0 && years == 0) {
        // More than a second, less than a minute
        ret = since.seconds;
    }


    if (since.days < 10) {
        since.days = '0' + since.days;
    }
    if (since.months < 10) {
        since.months = '0' + since.months;
    }
    if (since.hours < 10) {
        since.hours = '0' + since.hours;
    }
    if (since.minutes < 10) {
        since.minutes = '0' + since.minutes;
    }
    if (since.seconds < 10) {
        since.seconds = '0' + since.seconds;
    }

    if (overdue) {
        ret = ret + ' siden';
    } else {
        ret = 'om ' + ret;
    }

    return ret;
}

