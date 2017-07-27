function get_year() {
	
	var d = new Date();
	var year = d.getFullYear();
	
	return year;
	
}

function remove_leading_spaces(text) {
	
	// Get the first character.
	var first = text.charAt(0);
	
	while (first == " ") {
		
		// Extract the string from the second character to the last.
		text = text.substring(1, text.length);
		
		// Get the new first character.
		first = text.charAt(0);
		
	}
	
	return text;
	
}

function remove_trailing_spaces(text) {
	
	// Get the string length.
	var leng = text.length;
	
	// Retrieve the last character in the string.
	var last = text.charAt(leng-1);
	
	while (last == " ") {
		
		// Get the entire string minus the last character.
		text = text.substring(0, leng-1);
		
		// Work out what the new length is.
		leng = text.length;
		
		// Retrieve the new last character.
		last = text.charAt(leng-1);
		
	}
	
	return text;
	
}

function add_leading_zero(num) {
	
	// Make sure it's a number - string numbers are seen as numbers.
	parseInt(num);
	if (isNaN(num)) {
		return "That's not a number";
	}
	
	// Add leading zeros to single digit numbers.
	if (num >= 0 && num < 10) {
		num = "0" + num;
	}
	
	// Add leading zero to negative numbers.
	else if (num > -10 && num < 0) {
		
		// Make it a positive number (to remove the minus sign).
		num = num * -1;
		
		// Add the leading zero and replace the minus sign.
		num = "-0" + num;
		
	}
	
	return num;
	
}

function get_now(get) {
	
	/*
	
	What type of time would you like? :-)
	
	d	  - single-digit date, e.g. "3".
	dt	  - two-digit date, e.g. "03".
	dth	  - date with ordinal, e.g. "3rd".
	
	m	  - single-digit month, e.g. "4".
	mn	  - two-digit month, e.g. "04".
	month - the name of the month in full, e.g. "April".
	mon	  - the first three characters of the name of the month, e.g. "Apr".
	
	yr	  - two-digit year, e.g. "78".
	year  - four-digit year, e.g. "1978".
	leap  - returns true or false depending on  whether the current year is a leap year.
	
	h24	  - single-digit hour in 24 hour format.      Will be  "8" for 8am or "20" for 8pm.
	hr24  - forced two-digit hour in 24 hour format.  Will be "08" for 8am or "20" for 8pm.
	h12	  - single-digit hour in 12 hour format.      Will be  "8" for 8am or  "8" for 8pm.
	hr12  - forced two-digit hour in 12 hour format.  Will be "08" for 8am or "08" for 8pm.
	
	min	  - single-digit minute, e.g. "4".
	mins  - two-digit minute, e.g. "04".
	
	s	  - single-digit second, e.g. "7".
	sc	  - two-digit second, e.g. "07".
	
	ap	  - returns either "am" or "pm".
	*/
	
	// Set date_var as a date variable.
	var date_var = new Date();
	
	// Get the date (1, 2, 3 and so on).
	var d = date_var.getDate();
	
	// Get the date (01, 02, 03 and so on).
	var dt = date_var.getDate();
	if (dt < 10) { dt = add_leading_zero(dt); }
	
	// Get the date (1st, 2nd, 3rd and so on).
	var dth = date_var.getDate();
	if      (dth == 1 || dth == 21 || dth == 31) { dth = dth + "st"; }
	else if (dth == 2 || dth == 22)              { dth = dth + "nd"; }
	else if (dth == 3 || dth == 23)              { dth = dth + "rd"; }
	else                                         { dth = dth + "th"; }
	
	// Get the month (1 = Jan, 2 = Feb, and so on).
	var m  = date_var.getMonth() + 1;
	
	// Get the 2-digit month (01 = Jan, 02 = Feb, and so on).
	var mn = date_var.getMonth() + 1;
	if (mn < 10) { mn = add_leading_zero(mn); }
	
	// Get the month's name (January, February, and so on).
	var month = date_var.getMonth() + 1;
	if      (month == 1)  { month = "January"; }
	else if (month == 2)  { month = "February"; }
	else if (month == 3)  { month = "March"; }
	else if (month == 4)  { month = "April"; }
	else if (month == 5)  { month = "May"; }
	else if (month == 6)  { month = "June"; }
	else if (month == 7)  { month = "July"; }
	else if (month == 8)  { month = "August"; }
	else if (month == 9)  { month = "September"; }
	else if (month == 10) { month = "October"; }
	else if (month == 11) { month = "November"; }
	else if (month == 12) { month = "December"; }
	
	// Get the month's 3-character name (Jan, Feb, and so on).
	var mon = month.substr(0,3);
	
	// Get four-digit year.
	var year = date_var.getFullYear();
	
	// Make 2-digit year.
	var yr = parseInt( year.toString().substr(2,2) );
	if (yr < 10) { yr = add_leading_zero(yr); }
	
	// Is it a leap year?
	var leap = new Date(year, 1, 29).getMonth() == 1;
	
	// Get the hours (1, 2, 3 and so on).
	var h24 = date_var.getHours();
	
	// Get the 2-digit hours (01, 02, 03 and so on).
	var hr24 = date_var.getHours();
	if (hr24 < 10) { hr24 = add_leading_zero(hr24); }
	
	// Get the single-digit hour in 12-hour clock format.
	var h12 = h24;
	if (h12 > 12) { h12 = h12 - 12; }
	
	// Get the two-digit hour in 12-hour clock format.
	var hr12 = h24; // We're using the single-digit hour here as we know it hasn't been made into a string.
	if (hr12 > 12) { hr12 = hr12 - 12; }
	if (hr12 < 10) { hr12 = add_leading_zero(hr12); }
	
	// Get the am/pm from the hour.
	var ap = "am";
	if (h24 >= 12) { ap = "pm"; }
	
	// Get the minutes (1, 2, 3 and so on).
	var min = date_var.getMinutes();
	
	// Get the 2-digit minutes (01, 02, 03 and so on).
	var mins = date_var.getMinutes();
	if (mins < 10) { mins = add_leading_zero(mins); }
	
	// Get the seconds (1, 2, 3 and so on).
	var s = date_var.getSeconds();
	
	// Get the 2-digit seconds (01, 02, 03 and so on).
	var sc = date_var.getSeconds();
	if (sc < 10) { sc = add_leading_zero(sc); }
	
	// Return the requested element.
	if      (get == "d")     { return d;     }
	else if (get == "dt")    { return dt;    }
	else if (get == "dth")   { return dth;   }
	else if (get == "m")     { return m;     }
	else if (get == "mn")    { return mn;    }
	else if (get == "month") { return month; }
	else if (get == "mon")   { return mon;   }
	else if (get == "yr")    { return yr;    }
	else if (get == "year")  { return year;  }
	
	else if (get == "leap")  { return leap;  }
	
	else if (get == "h24")   { return h24;   }
	else if (get == "hr24")  { return hr24;  }
	else if (get == "h12")   { return h12;   }
	else if (get == "hr12")  { return hr12;  }
	else if (get == "min")   { return min;   }
	else if (get == "mins")  { return mins;  }
	else if (get == "s")     { return s;     }
	else if (get == "sc")    { return sc;    }
	
	else if (get == "ap")    { return ap;    }
	
}

function find_replace(str, find_str, replace_str) {
	
	// Create a Regular Expression variable.
	var regexp = new RegExp(find_str, "g");  // The "g" indicates a global search, rather than stopping after the first match.
	
	// Use the Regular Expression variable in the replace function
	var result = str.replace(regexp, replace_str);
	
	return result;
	
}

function ultimate_countdown_old(id, cd_year, cd_month, cd_date, cd_hour, cd_minutes, cd_seconds, fs_years, fs_months, fs_days) {
	
	// ------------- //
	// User settings //
	// ------------- //
	
		// Leading zeros - adds leading zeros, i.e. changes "0 minutes" into "00 minutes" -> 0 = no, 1 = yes:
		var lz_years   = 1;
		var lz_months  = 1;
		var lz_days    = 1;
		var lz_hours   = 1;
		var lz_minutes = 1;
		var lz_seconds = 1;
		
		// Smart plurals - displays "1 minute" instead of "1 minutes" -> 0 = no, 1 = yes:
		var sp_years   = 0;
		var sp_months  = 0;
		var sp_days    = 0;
		var sp_hours   = 0;
		var sp_minutes = 0;
		var sp_seconds = 0;
		
		// Force show only certain units -> 0 = no, 1 = yes (hours, minutes and seconds are always shown):

	
	
	
	
	// Deal with zero-based months:
	cd_month--;
	
	var clock = document.getElementById(id), targetDate = new Date(cd_year, cd_month, cd_date, cd_hour, cd_minutes, cd_seconds);
	
	// Extract the data from the object.
	var rm_years   = countdown(targetDate).years;
	var rm_months  = countdown(targetDate).months;
	var rm_days    = countdown(targetDate).days;
	var rm_hours   = countdown(targetDate).hours;
	var rm_minutes = countdown(targetDate).minutes;
	var rm_seconds = countdown(targetDate).seconds;
	
	console.log(rm_years);
	console.log(rm_months);
	console.log(rm_days);
	
	// Display initially:
	
	// Deal with plurals:
	var year_plural   = "s";
	var month_plural  = "s";
	var day_plural    = "s";
	var hour_plural   = "s";
	var minute_plural = "s";
	var second_plural = "s";
	if (rm_years   == 1 && sp_years   == 1) { year_plural   = ""; }
	if (rm_months  == 1 && sp_months  == 1) { month_plural  = ""; }
	if (rm_days    == 1 && sp_days    == 1) { day_plural    = ""; }
	if (rm_hours   == 1 && sp_hours   == 1) { hour_plural   = ""; }
	if (rm_minutes == 1 && sp_minutes == 1) { minute_plural = ""; }
	if (rm_seconds == 1 && sp_seconds == 1) { second_plural = ""; }
	
	// Add leading zeros:
	if (rm_years   < 10 && lz_years   == 1) { rm_years   = "0" + rm_years;   }
	if (rm_months  < 10 && lz_months  == 1) { rm_months  = "0" + rm_months;  }
	if (rm_days    < 10 && lz_days    == 1) { rm_days    = "0" + rm_days;    }
	if (rm_hours   < 10 && lz_hours   == 1) { rm_hours   = "0" + rm_hours;   }
	if (rm_minutes < 10 && lz_minutes == 1) { rm_minutes = "0" + rm_minutes; }
	if (rm_seconds < 10 && lz_seconds == 1) { rm_seconds = "0" + rm_seconds; }
	
	var output_html = "";
	output_html += "<p>";
	if (rm_years  != 0 || fs_years  == 1) { output_html += "<div class='cd_number years'><p>" + rm_years.toString()  + "</p></div>"; }
	if (rm_months != 0 || fs_months == 1) { output_html += "<div class='cd_number months'><p>" + rm_months.toString() + "</p></div>"; }
	if (rm_days   != 0 || fs_days   == 1) { output_html += "<div class='cd_number days'><p>" + rm_days.toString()   + "</p></div>"; }
	output_html += "<div class='cd_number hours'><p>" + rm_hours.toString()   + "</p></div>";
	output_html += "<div class='cd_number minutes'><p>" + rm_minutes.toString() + "</p></div>";
	output_html += "<div class='cd_number seconds'><p>" + rm_seconds.toString() + "</p></div>";
	output_html += "</p>";
	output_html += "<p>";
	if (rm_years  != 0 || fs_years  == 1) { output_html += "<div class='cd_label years'><p>year"  + year_plural  + "</p></div>"; }
	if (rm_months != 0 || fs_months == 1) { output_html += "<div class='cd_label months'><p>month" + month_plural + "</p></div>"; }
	if (rm_days   != 0 || fs_days   == 1) { output_html += "<div class='cd_label days'><p>day"   + day_plural   + "</p></div>"; }
	output_html += "<div class='cd_label hours'><p>hour"   + hour_plural   + "</p></div>";
	output_html += "<div class='cd_label minutes'><p>minute" + minute_plural + "</p></div>";
	output_html += "<div class='cd_label seconds'><p>second" + second_plural + "</p></div>";
	output_html += "</p>";
	
	clock.innerHTML = output_html;
	
	setInterval(function() {
		
		// Extract the data from the object.
		var rm_years   = countdown(targetDate).years;
		var rm_months  = countdown(targetDate).months;
		var rm_days    = countdown(targetDate).days;
		var rm_hours   = countdown(targetDate).hours;
		var rm_minutes = countdown(targetDate).minutes;
		var rm_seconds = countdown(targetDate).seconds;
		
		// Deal with plurals:
		var year_plural   = "s";
		var month_plural  = "s";
		var day_plural    = "s";
		var hour_plural   = "s";
		var minute_plural = "s";
		var second_plural = "s";
		if (rm_years   == 1 && sp_years   == 1) { year_plural   = ""; }
		if (rm_months  == 1 && sp_months  == 1) { month_plural  = ""; }
		if (rm_days    == 1 && sp_days    == 1) { day_plural    = ""; }
		if (rm_hours   == 1 && sp_hours   == 1) { hour_plural   = ""; }
		if (rm_minutes == 1 && sp_minutes == 1) { minute_plural = ""; }
		if (rm_seconds == 1 && sp_seconds == 1) { second_plural = ""; }
		
		// Add leading zeros:
		if (rm_years   < 10 && lz_years   == 1) { rm_years   = "0" + rm_years;   }
		if (rm_months  < 10 && lz_months  == 1) { rm_months  = "0" + rm_months;  }
		if (rm_days    < 10 && lz_days    == 1) { rm_days    = "0" + rm_days;    }
		if (rm_hours   < 10 && lz_hours   == 1) { rm_hours   = "0" + rm_hours;   }
		if (rm_minutes < 10 && lz_minutes == 1) { rm_minutes = "0" + rm_minutes; }
		if (rm_seconds < 10 && lz_seconds == 1) { rm_seconds = "0" + rm_seconds; }
		
		var output_html = "";
		output_html += "<p>";
		if (rm_years  != 0 || fs_years  == 1) { output_html += "<div class='cd_number years'><p>" + rm_years.toString()  + "</p></div>"; }
		if (rm_months != 0 || fs_months == 1) { output_html += "<div class='cd_number months'><p>" + rm_months.toString() + "</p></div>"; }
		if (rm_days   != 0 || fs_days   == 1) { output_html += "<div class='cd_number days'><p>" + rm_days.toString()   + "</p></div>"; }
		output_html += "<div class='cd_number hours'><p>" + rm_hours.toString()   + "</p></div>";
		output_html += "<div class='cd_number minutes'><p>" + rm_minutes.toString() + "</p></div>";
		output_html += "<div class='cd_number seconds'><p>" + rm_seconds.toString() + "</p></div>";
		output_html += "</p>";
		output_html += "<p>";
		if (rm_years  != 0 || fs_years  == 1) { output_html += "<div class='cd_label years'><p>year"  + year_plural  + "</p></div>"; }
		if (rm_months != 0 || fs_months == 1) { output_html += "<div class='cd_label months'><p>month" + month_plural + "</p></div>"; }
		if (rm_days   != 0 || fs_days   == 1) { output_html += "<div class='cd_label days'><p>day"   + day_plural   + "</p></div>"; }
		output_html += "<div class='cd_label hours'><p>hour"   + hour_plural   + "</p></div>";
		output_html += "<div class='cd_label minutes'><p>minute" + minute_plural + "</p></div>";
		output_html += "<div class='cd_label seconds'><p>second" + second_plural + "</p></div>";
		output_html += "</p>";
		
		clock.innerHTML = output_html;
		
	}, 1000);
	
}

function calculate_next_yearly(tar_mnth, tar_date, tar_hour, tar_mins, tar_secs) {
	
	// Get the current time/date:
	var d        = new Date();
	var now_year = d.getFullYear();
	var now_mnth = d.getMonth();
	var now_date = d.getDate();
	var now_hour = d.getHours();
	var now_mins = d.getMinutes();
	var now_secs = d.getSeconds();
	now_mnth++; // Deal with zero based month:
	
	// Calculate end time and current time in seconds:
	var end_time_in_seconds = tar_secs + (tar_mins * 60) + (tar_hour * 3600);
	var now_time_in_seconds = now_secs + (now_mins * 60) + (now_hour * 3600);
	
	// The date has passed for this year:
	if (now_mnth > tar_mnth || (now_mnth == tar_mnth && now_date > tar_date) ) {
		var tar_year = now_year + 1;
	}
	
	// The date and time has passed for this year:
	else if (now_mnth == tar_mnth && now_date == tar_date && now_time_in_seconds >= end_time_in_seconds) {
		var tar_year = now_year + 1;
	}
	
	// The date is still to come for this year:
	else if (tar_mnth > now_mnth || (tar_mnth == now_mnth && tar_date > now_date) ) {
		var tar_year = now_year;
	}
	
	// The date and time is still to come for this year:
	else if (tar_mnth == now_mnth && tar_date == now_date && end_time_in_seconds > now_time_in_seconds) {
		var tar_year = now_year;
	}
	
	// Return the next date in an array.
	var next_occurance = [tar_year, tar_mnth, tar_date, tar_hour, tar_mins, tar_secs];
	return next_occurance;
}

function calculate_next_home_time(ht_hour, ht_minute) {
	
	/*
		This function calculates the next home time.
		You specify the end hour, minute and second of the day and it works out when that next occurs.
		So, if it's currently after home time, it will return the home time of tomorrow (or next week if it's the weekend).
	*/
	
	// Enter your home time here:
	var ht_h = ht_hour;   // Hour of home time.
	var ht_m = ht_minute; // Minute of home time.
	var ht_s = 0;         // Second of home time.
	
	// Get the current time/date:
	var d  = new Date();
	var yr = d.getFullYear();
	var mt = d.getMonth();
	var dt = d.getDate();
	var dw = d.getDay();
	var hr = d.getHours();
	var mn = d.getMinutes();
	var sc = d.getSeconds();
	mt++; // Deal with zero based month:
	
	// Calculate home time and the current time in seconds
	var home_time_in_seconds = ht_s + (ht_m * 60) + (ht_h * 3600);
	var curr_time_in_seconds = sc   + (mn   * 60) + (hr   * 3600);
	
	// If it is currently a week day...
	if (dw > 0 && dw < 6) {
		
		// If it is before home time on the current day:
		if (home_time_in_seconds > curr_time_in_seconds) {
		
			// Create the array for home time and return it.
			var home_time = [yr, mt, dt, ht_h, ht_m, ht_s];
			return home_time;
			
		}
		
		// Else, calculate the following home time:
		else {
			var fd = new Date();
			// If it's after work on Friday, we need to move on three days to next Monday, otherwise just increment by one day:
			if (dw == 5) { fd.setDate(fd.getDate() + 3); } else { fd.setDate(fd.getDate() + 1); }
			var fd_yr = fd.getFullYear();
			var fd_mt = fd.getMonth();
			var fd_dt = fd.getDate();
			fd_mt++; // Deal with zero based month:
			var home_time = [fd_yr, fd_mt, fd_dt, ht_h, ht_m, ht_s];
			return home_time;
			
		}
		
	}
	
	// Else, if it is Saturday...
	else if (dw = 6) {
		
		var fd = new Date();
		fd.setDate(fd.getDate() + 2);
		var fd_yr = fd.getFullYear();
		var fd_mt = fd.getMonth();
		var fd_dt = fd.getDate();
		fd_mt++; // Deal with zero based month:
		var home_time = [fd_yr, fd_mt, fd_dt, ht_h, ht_m, ht_s];
		return home_time;
		
	}
	
	// Else, if it is Sunday...
	else if (dw = 0) {
		
		var fd = new Date();
		fd.setDate(fd.getDate() + 1);
		var fd_yr = fd.getFullYear();
		var fd_mt = fd.getMonth();
		var fd_dt = fd.getDate();
		fd_mt++; // Deal with zero based month:
		var home_time = [fd_yr, fd_mt, fd_dt, ht_h, ht_m, ht_s];
		return home_time;
		
	}
	
}

function calculate_next_weekend(we_hour, we_minute) {
	
	/*
		This function calculates the next w.
		You specify the end hour, minute and second of the day and it works out when that next occurs.
		So, if it's currently after home time, it will return the home time of tomorrow (or next week if it's the weekend).
	*/
	
	// Enter your home time here:
	var we_h = we_hour;   // Hour of home time.
	var we_m = we_minute; // Minute of home time.
	var we_s = 0;         // Second of home time.
	
	
	// Get the current time/date:
	var d  = new Date();
	var yr = d.getFullYear();
	var mt = d.getMonth();
	var dt = d.getDate();
	var dw = d.getDay();
	var hr = d.getHours();
	var mn = d.getMinutes();
	var sc = d.getSeconds();
	mt++; // Deal with zero based month:
	
	// Calculate home time and the current time in seconds
	var wend_time_in_seconds = we_s + (we_m * 60) + (we_h * 3600);
	var curr_time_in_seconds = sc   + (mn   * 60) + (hr   * 3600);
	
	// If today is Friday and it is before weekend-time:
	if (dw == 5 && (curr_time_in_seconds < wend_time_in_seconds) ) {
		var days_to_add = 0;
	}
	
	// If today is Friday and it is after weekend-time:
	else if (dw == 5 && (curr_time_in_seconds >= wend_time_in_seconds) ) {
		var days_to_add = 7;
	}
	
	// If today is Saturday
	else if (dw == 6) {
		var days_to_add = 6;
	}
	
	else if (dw < 5) {
		var days_to_add = (dw + 5) - (2 * dw);
	}
	
	var fd = new Date();
	fd.setDate(fd.getDate() + days_to_add);
	var fd_yr = fd.getFullYear();
	var fd_mt = fd.getMonth();
	var fd_dt = fd.getDate();
	fd_mt++; // Deal with zero based month:
	var weekend = [fd_yr, fd_mt, fd_dt, we_h, we_m, we_s];
	/**/
	
	// var weekend = [0, 0, 0, 0, 0, 0];
	return weekend;
	
}

function home_time_percentage() {
	
	// Enter your start and home times here:
	var st_h = 9;  // Hour of start time.
	var st_m = 0;  // Minute of start time.
	var st_s = 0;  // Second of start time.
	var ht_h = 17; // Hour of home time.
	var ht_m = 30; // Minute of home time.
	var ht_s = 0;  // Second of home time.
	
	// Enter the days you're working this week (1=working, 0=off):
	var working_mon = 1;
	var working_tue = 1;
	var working_wed = 1;
	var working_thu = 1;
	var working_fri = 1;
	
	// Get the current time/date:
	var d  = new Date();
	var yr = d.getFullYear();
	var mt = d.getMonth();
	var dt = d.getDate();
	var dw = d.getDay();
	var hr = d.getHours();
	var mn = d.getMinutes();
	var sc = d.getSeconds();
	mt++; // Deal with zero based month:
	
	// Calculate home time and the current time in seconds
	var home_time_in_seconds = ht_s + (ht_m * 60) + (ht_h * 3600);
	var curr_time_in_seconds = sc   + (mn   * 60) + (hr   * 3600);
	var strt_time_in_seconds = st_s + (st_m * 60) + (st_h * 3600);
	
	// Calculate percentages:
	if (curr_time_in_seconds >= home_time_in_seconds) {
		
		// Day is complete.
		
		// Set day_percentage to 100:
		var day_percentage = 100;
		
		// Set week_percentage based on current day of the week:
		
		// For 5-day weeks (Monday - Friday):
		if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 1 && working_fri == 1) {
			if (dw == 5 || dw == 6 || dw == 0) { var week_percentage = 100; }
			else if (dw == 1)                  { var week_percentage =  20; }
			else if (dw == 2)                  { var week_percentage =  40; }
			else if (dw == 3)                  { var week_percentage =  60; }
			else if (dw == 4)                  { var week_percentage =  80; }
		}
		// For 4-day weeks (Monday - Thursday):
		else if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 1 && working_fri == 0) {
			if (dw == 4 || dw == 5 || dw == 6 || dw == 0) { var week_percentage = 100; }
			else if (dw == 1)                  { var week_percentage =  25; }
			else if (dw == 2)                  { var week_percentage =  50; }
			else if (dw == 3)                  { var week_percentage =  75; }
		}
		// For 3-day weeks (Monday - Wednesday):
		else if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 1 && working_fri == 0) {
			if (dw == 3 || dw == 4 || dw == 5 || dw == 6 || dw == 0) { var week_percentage = 100; }
			else if (dw == 1)                  { var week_percentage =  25; }
			else if (dw == 2)                  { var week_percentage =  50; }
		}
		
	}
	else {
		
		// Day is not yet complete.
		
		// If day is Saturday or Sunday, set day_percentage and week_percentage to 100:
		if (dw == 6 || dw == 0) {
			var day_percentage  = 100;
			var week_percentage = 100;
		}
		// If today is Friday and we're not working on Friday this week:
		if (dw == 5 && working_fri == 0) {
			var day_percentage  = 100;
			var week_percentage = 100;
		}
		// If today is Thursday and we're not working on Thursday this week:
		if (dw == 4 && working_thu == 0) {
			var day_percentage  = 100;
			var week_percentage = 100;
		}
		
		// Otherwise, calculate as normal.
		else {
			var day_percentage = ( (curr_time_in_seconds - strt_time_in_seconds) / (home_time_in_seconds - strt_time_in_seconds) ) * 100;
			
			// For 5-day weeks (Monday - Friday):
			if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 1 && working_fri == 1) {
				if      (dw == 1) { var week_percentage =  0  + (20 * (day_percentage / 100) ); }
				else if (dw == 2) { var week_percentage =  20 + (20 * (day_percentage / 100) ); }
				else if (dw == 3) { var week_percentage =  40 + (20 * (day_percentage / 100) ); }
				else if (dw == 4) { var week_percentage =  60 + (20 * (day_percentage / 100) ); }
				else if (dw == 5) { var week_percentage =  80 + (20 * (day_percentage / 100) ); }
			}
			// For 4-day weeks (Monday - Thursday):
			else if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 1 && working_fri == 0) {
				if      (dw == 1) { var week_percentage =  0  + (20 * (day_percentage / 100) ); }
				else if (dw == 2) { var week_percentage =  25 + (20 * (day_percentage / 100) ); }
				else if (dw == 3) { var week_percentage =  50 + (20 * (day_percentage / 100) ); }
				else if (dw == 4) { var week_percentage =  75 + (20 * (day_percentage / 100) ); }
			}
			// For 3-day weeks (Monday - Wednesday):
			else if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 0 && working_fri == 0) {
				if      (dw == 1) { var week_percentage =  0  + (20 * (day_percentage / 100) ); }
				else if (dw == 2) { var week_percentage =  33 + (20 * (day_percentage / 100) ); }
				else if (dw == 3) { var week_percentage =  67 + (20 * (day_percentage / 100) ); }
			}
			
		}
		
	}
	
	// Don't show decimals for 100%:
	if (day_percentage  == 100) { day_percentage  = (day_percentage).toFixed(0);  } else { day_percentage  = (day_percentage).toFixed(3);  }
	if (week_percentage == 100 || week_percentage == 80 || week_percentage == 60 || week_percentage == 40 || week_percentage == 20) { week_percentage = (week_percentage).toFixed(0); } else { week_percentage = (week_percentage).toFixed(3); }
	
	var percent_text = "<p><span class='label-font day'>day: </span>" + day_percentage + "% <span class='label-font week'>week: </span>" + week_percentage + "%</p>";
	
	var percent_holder = document.getElementById("home-time-percentage");
	percent_holder.innerHTML = percent_text;
	
	setInterval(function() {
		
		// Get the current time/date:
		var d  = new Date();
		var yr = d.getFullYear();
		var mt = d.getMonth();
		var dt = d.getDate();
		var dw = d.getDay();
		var hr = d.getHours();
		var mn = d.getMinutes();
		var sc = d.getSeconds();
		mt++; // Deal with zero based month:
		
		// Calculate home time and the current time in seconds
		var home_time_in_seconds = ht_s + (ht_m * 60) + (ht_h * 3600);
		var curr_time_in_seconds = sc   + (mn   * 60) + (hr   * 3600);
		var strt_time_in_seconds = st_s + (st_m * 60) + (st_h * 3600);
		
		// Calculate percentages:
		if (curr_time_in_seconds >= home_time_in_seconds) {
			
			// Day is complete.
			
			// Set day_percentage to 100:
			var day_percentage = 100;
			
			// Set week_percentage based on current day of the week:
			
			// For 5-day weeks (Monday - Friday):
			if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 1 && working_fri == 1) {
				if (dw == 5 || dw == 6 || dw == 0) { var week_percentage = 100; }
				else if (dw == 1)                  { var week_percentage =  20; }
				else if (dw == 2)                  { var week_percentage =  40; }
				else if (dw == 3)                  { var week_percentage =  60; }
				else if (dw == 4)                  { var week_percentage =  80; }
			}
			// For 4-day weeks (Monday - Thursday):
			else if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 1 && working_fri == 0) {
				if (dw == 4 || dw == 5 || dw == 6 || dw == 0) { var week_percentage = 100; }
				else if (dw == 1)                  { var week_percentage =  25; }
				else if (dw == 2)                  { var week_percentage =  50; }
				else if (dw == 3)                  { var week_percentage =  75; }
			}
			// For 3-day weeks (Monday - Wednesday):
			else if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 1 && working_fri == 0) {
				if (dw == 3 || dw == 4 || dw == 5 || dw == 6 || dw == 0) { var week_percentage = 100; }
				else if (dw == 1)                  { var week_percentage =  25; }
				else if (dw == 2)                  { var week_percentage =  50; }
			}
			
		}
		else {
			
			// Day is not yet complete.
			
			// If day is Saturday or Sunday, set day_percentage and week_percentage to 100:
			if (dw == 6 || dw == 0) {
				var day_percentage  = 100;
				var week_percentage = 100;
			}
			// If today is Friday and we're not working on Friday this week:
			if (dw == 5 && working_fri == 0) {
				var day_percentage  = 100;
				var week_percentage = 100;
			}
			// If today is Thursday and we're not working on Thursday this week:
			if (dw == 4 && working_thu == 0) {
				var day_percentage  = 100;
				var week_percentage = 100;
			}
			
			// Otherwise, calculate as normal.
			else {
				var day_percentage = ( (curr_time_in_seconds - strt_time_in_seconds) / (home_time_in_seconds - strt_time_in_seconds) ) * 100;
				
				// For 5-day weeks (Monday - Friday):
				if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 1 && working_fri == 1) {
					if      (dw == 1) { var week_percentage =  0  + (20 * (day_percentage / 100) ); }
					else if (dw == 2) { var week_percentage =  20 + (20 * (day_percentage / 100) ); }
					else if (dw == 3) { var week_percentage =  40 + (20 * (day_percentage / 100) ); }
					else if (dw == 4) { var week_percentage =  60 + (20 * (day_percentage / 100) ); }
					else if (dw == 5) { var week_percentage =  80 + (20 * (day_percentage / 100) ); }
				}
				// For 4-day weeks (Monday - Thursday):
				else if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 1 && working_fri == 0) {
					if      (dw == 1) { var week_percentage =  0  + (20 * (day_percentage / 100) ); }
					else if (dw == 2) { var week_percentage =  25 + (20 * (day_percentage / 100) ); }
					else if (dw == 3) { var week_percentage =  50 + (20 * (day_percentage / 100) ); }
					else if (dw == 4) { var week_percentage =  75 + (20 * (day_percentage / 100) ); }
				}
				// For 3-day weeks (Monday - Wednesday):
				else if (working_mon == 1 && working_tue == 1 && working_wed == 1 && working_thu == 0 && working_fri == 0) {
					if      (dw == 1) { var week_percentage =  0  + (20 * (day_percentage / 100) ); }
					else if (dw == 2) { var week_percentage =  33 + (20 * (day_percentage / 100) ); }
					else if (dw == 3) { var week_percentage =  67 + (20 * (day_percentage / 100) ); }
				}
				
			}
			
		}
		
		// Don't show decimals for 100%:
		if (day_percentage  == 100) { day_percentage  = (day_percentage).toFixed(0);  } else { day_percentage  = (day_percentage).toFixed(3);  }
		if (week_percentage == 100 || week_percentage == 80 || week_percentage == 60 || week_percentage == 40 || week_percentage == 20) { week_percentage = (week_percentage).toFixed(0); } else { week_percentage = (week_percentage).toFixed(3); }
		
		var percent_text = "<p><span class='label-font day'>day: </span>" + day_percentage + "% <span class='label-font week'>week: </span>" + week_percentage + "%</p>";
		
		var percent_holder = document.getElementById("home-time-percentage");
		percent_holder.innerHTML = percent_text;
		
	}, 1000);
	
}

function ultimate_countdown(id, end_year, end_month, end_date, end_hour, end_minute, end_second, force_show_settings, leading_zero_settings, smart_plural_settings) {
	
	// Deal with zero-based months:
	end_month--;
	
	// Create variables for the clock ID and the target date:
	var clock = document.getElementById(id);
	var targetDate = new Date(end_year, end_month, end_date, end_hour, end_minute, end_second);
	
	// Check whether target have already been reached:
	var target_reached = 0; // Initially, the target is assumed not to have been reached.
	var d = new Date();
	var now = d.getTime();
	if (now >= targetDate) { target_reached = 1; }

	// Extract the data from the object.
	var rm_years   = countdown(targetDate).years;
	var rm_months  = countdown(targetDate).months;
	var rm_days    = countdown(targetDate).days;
	var rm_hours   = countdown(targetDate).hours;
	var rm_minutes = countdown(targetDate).minutes;
	var rm_seconds = countdown(targetDate).seconds;
	
	// If time has ended, don't start counting upwards:
	if ((parseInt(rm_years) + parseInt(rm_months) + parseInt(rm_days) + parseInt(rm_hours) + parseInt(rm_minutes) + parseInt(rm_seconds)) <= 0 ) { target_reached = 1; }
	if (target_reached == 1) { rm_years = 0; rm_months = 0; rm_days = 0; rm_hours = 0; rm_minutes = 0; rm_seconds = 0; }
	
	// Deal with plurals:
	var year_plural   = "s"; if (rm_years   == 1 && smart_plural_settings[0] == 1) { year_plural   = ""; }
	var month_plural  = "s"; if (rm_months  == 1 && smart_plural_settings[1] == 1) { month_plural  = ""; }
	var day_plural    = "s"; if (rm_days    == 1 && smart_plural_settings[2] == 1) { day_plural    = ""; }
	var hour_plural   = "s"; if (rm_hours   == 1 && smart_plural_settings[3] == 1) { hour_plural   = ""; }
	var minute_plural = "s"; if (rm_minutes == 1 && smart_plural_settings[4] == 1) { minute_plural = ""; }
	var second_plural = "s"; if (rm_seconds == 1 && smart_plural_settings[5] == 1) { second_plural = ""; }
	
	// Add leading zeros:
	if (rm_years   < 10 && leading_zero_settings[0] == 1) { rm_years   = "0" + rm_years;   }
	if (rm_months  < 10 && leading_zero_settings[1] == 1) { rm_months  = "0" + rm_months;  }
	if (rm_days    < 10 && leading_zero_settings[2] == 1) { rm_days    = "0" + rm_days;    }
	if (rm_hours   < 10 && leading_zero_settings[3] == 1) { rm_hours   = "0" + rm_hours;   }
	if (rm_minutes < 10 && leading_zero_settings[4] == 1) { rm_minutes = "0" + rm_minutes; }
	if (rm_seconds < 10 && leading_zero_settings[5] == 1) { rm_seconds = "0" + rm_seconds; }
	
	// Create the output HTML and, where necessary, force-show elements:
	var output_html = "";
	if (rm_years   != 0 || force_show_settings[0] == 1) { output_html += "<div class='cd_number years'><p>"        + rm_years.toString()   + "</p></div>"; }
	if (rm_months  != 0 || force_show_settings[1] == 1) { output_html += "<div class='cd_number months'><p>"       + rm_months.toString()  + "</p></div>"; }
	if (rm_days    != 0 || force_show_settings[2] == 1) { output_html += "<div class='cd_number days'><p>"         + rm_days.toString()    + "</p></div>"; }
	if (rm_hours   != 0 || force_show_settings[3] == 1) { output_html += "<div class='cd_number hours'><p>"        + rm_hours.toString()   + "</p></div>"; }
	if (rm_minutes != 0 || force_show_settings[4] == 1) { output_html += "<div class='cd_number minutes'><p>"      + rm_minutes.toString() + "</p></div>"; }
	if (rm_seconds != 0 || force_show_settings[5] == 1) { output_html += "<div class='cd_number seconds'><p>"      + rm_seconds.toString() + "</p></div>"; }
	if (rm_years   != 0 || force_show_settings[0] == 1) { output_html += "<div class='cd_label years'><p>year"     + year_plural           + "</p></div>"; }
	if (rm_months  != 0 || force_show_settings[1] == 1) { output_html += "<div class='cd_label months'><p>month"   + month_plural          + "</p></div>"; }
	if (rm_days    != 0 || force_show_settings[2] == 1) { output_html += "<div class='cd_label days'><p>day"       + day_plural            + "</p></div>"; }
	if (rm_hours   != 0 || force_show_settings[3] == 1) { output_html += "<div class='cd_label hours'><p>hour"     + hour_plural           + "</p></div>"; }
	if (rm_minutes != 0 || force_show_settings[4] == 1) { output_html += "<div class='cd_label minutes'><p>minute" + minute_plural         + "</p></div>"; }
	if (rm_seconds != 0 || force_show_settings[5] == 1) { output_html += "<div class='cd_label seconds'><p>second" + second_plural         + "</p></div>"; }
	
	// Add the HTML to the clock ID:
	clock.innerHTML = output_html;
	
	// Now update every second:
	setInterval(function() {
		
		// Extract the data from the object.
		var rm_years   = countdown(targetDate).years;
		var rm_months  = countdown(targetDate).months;
		var rm_days    = countdown(targetDate).days;
		var rm_hours   = countdown(targetDate).hours;
		var rm_minutes = countdown(targetDate).minutes;
		var rm_seconds = countdown(targetDate).seconds;
		
		// If time has ended, don't start counting upwards:
		if ((parseInt(rm_years) + parseInt(rm_months) + parseInt(rm_days) + parseInt(rm_hours) + parseInt(rm_minutes) + parseInt(rm_seconds)) <= 0 ) { target_reached = 1; }
		if (target_reached == 1) { rm_years = 0; rm_months = 0; rm_days = 0; rm_hours = 0; rm_minutes = 0; rm_seconds = 0; }
		
		// Deal with plurals:
		var year_plural   = "s"; if (rm_years   == 1 && smart_plural_settings[0] == 1) { year_plural   = ""; }
		var month_plural  = "s"; if (rm_months  == 1 && smart_plural_settings[1] == 1) { month_plural  = ""; }
		var day_plural    = "s"; if (rm_days    == 1 && smart_plural_settings[2] == 1) { day_plural    = ""; }
		var hour_plural   = "s"; if (rm_hours   == 1 && smart_plural_settings[3] == 1) { hour_plural   = ""; }
		var minute_plural = "s"; if (rm_minutes == 1 && smart_plural_settings[4] == 1) { minute_plural = ""; }
		var second_plural = "s"; if (rm_seconds == 1 && smart_plural_settings[5] == 1) { second_plural = ""; }
		
		// Add leading zeros:
		if (rm_years   < 10 && leading_zero_settings[0] == 1) { rm_years   = "0" + rm_years;   }
		if (rm_months  < 10 && leading_zero_settings[1] == 1) { rm_months  = "0" + rm_months;  }
		if (rm_days    < 10 && leading_zero_settings[2] == 1) { rm_days    = "0" + rm_days;    }
		if (rm_hours   < 10 && leading_zero_settings[3] == 1) { rm_hours   = "0" + rm_hours;   }
		if (rm_minutes < 10 && leading_zero_settings[4] == 1) { rm_minutes = "0" + rm_minutes; }
		if (rm_seconds < 10 && leading_zero_settings[5] == 1) { rm_seconds = "0" + rm_seconds; }
		
		// Create the output HTML and, where necessary, force-show elements:
		var output_html = "";
		if (rm_years   != 0 || force_show_settings[0] == 1) { output_html += "<div class='cd_number years'><p>"        + rm_years.toString()   + "</p></div>"; }
		if (rm_months  != 0 || force_show_settings[1] == 1) { output_html += "<div class='cd_number months'><p>"       + rm_months.toString()  + "</p></div>"; }
		if (rm_days    != 0 || force_show_settings[2] == 1) { output_html += "<div class='cd_number days'><p>"         + rm_days.toString()    + "</p></div>"; }
		if (rm_hours   != 0 || force_show_settings[3] == 1) { output_html += "<div class='cd_number hours'><p>"        + rm_hours.toString()   + "</p></div>"; }
		if (rm_minutes != 0 || force_show_settings[4] == 1) { output_html += "<div class='cd_number minutes'><p>"      + rm_minutes.toString() + "</p></div>"; }
		if (rm_seconds != 0 || force_show_settings[5] == 1) { output_html += "<div class='cd_number seconds'><p>"      + rm_seconds.toString() + "</p></div>"; }
		if (rm_years   != 0 || force_show_settings[0] == 1) { output_html += "<div class='cd_label years'><p>year"     + year_plural           + "</p></div>"; }
		if (rm_months  != 0 || force_show_settings[1] == 1) { output_html += "<div class='cd_label months'><p>month"   + month_plural          + "</p></div>"; }
		if (rm_days    != 0 || force_show_settings[2] == 1) { output_html += "<div class='cd_label days'><p>day"       + day_plural            + "</p></div>"; }
		if (rm_hours   != 0 || force_show_settings[3] == 1) { output_html += "<div class='cd_label hours'><p>hour"     + hour_plural           + "</p></div>"; }
		if (rm_minutes != 0 || force_show_settings[4] == 1) { output_html += "<div class='cd_label minutes'><p>minute" + minute_plural         + "</p></div>"; }
		if (rm_seconds != 0 || force_show_settings[5] == 1) { output_html += "<div class='cd_label seconds'><p>second" + second_plural         + "</p></div>"; }
		
		// Add the HTML to the clock ID:
		clock.innerHTML = output_html;
		
	}, 1000);
	
}

function run_slider(id, interval, animation_time, num_of_slides) {
	
	// Create a variable for the slider ID:
	// var slider = document.getElementById(id);
	
	setInterval(function() {
		
		var i = 0;
		
		while (i < num_of_slides) {
			
			alert("Hello" + (i+1));
			
			setTimeout(function(){
				// $("#image" + (i+1)).slideUp((animation_time * 1000));
				alert("Bye" + (i+1));
			}, 3000);
			
			i = i + 1;
			
		}
		
/*
		$("#image1").delay(2000).slideUp( (animation_time * 1000), function(){
			$("#image2").delay(2000).slideUp( (animation_time * 1000), function(){
				$("#image3").delay(2000).slideUp( (animation_time * 1000), function(){
				});
			});
		});
*/
		
	}, (interval * 1000) );
	
}