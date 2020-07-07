function Question_Binary(verb,past) {
	if (verb) {
		this.verb = verb;
	} else {
		this.verb = "dither"
	}
	if (past) {
		this.past = past;
	} else {
		this.past = "dithered"
	}
	this.totalYes = 0;
	this.totalNo = 0;
	this.rate = function() {
		return (this.totalYes / (this.totalYes+this.totalNo)).toFixed(2)
	};
	this.lastYes = "Never";
}

function checkDate(dateString) {
	date = new Date(dateString);
	now = new Date();
	today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	daysMissed = (today.getTime() - date.getTime()) / 86400000;
	return daysMissed;
}
