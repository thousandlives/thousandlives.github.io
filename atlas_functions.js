function Question_Binary(verb,past,log,yes,no,last) {
	this.verb = verb;
	this.past = past;
	this.activityLog = log;
	this.totalYes = yes;
	this.totalNo = no;
	this.finalRate = function() {
		if ((this.totalYes+this.totalNo)>0) {
			return (this.totalYes / (this.totalYes+this.totalNo)).toFixed(2);	
		} else {
			return 0;
		}
	};
	this.lastYes = last;
}

function checkDate(dateString) {
	date = new Date(dateString);
	now = new Date();
	today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	daysMissed = (today.getTime() - date.getTime()) / 86400000;
	return daysMissed;
}
