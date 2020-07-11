function Quest_Binary(verb,past,log,yes,no,last) {
	this.verb = verb;							//string identifying what to do
	this.past = past;							//past-tense version of verb
	this.activityLog = log;							//array containing all 'yes' entries
	this.totalYes = yes;							//total number of yesses recorded
	this.totalNo = no;							//total number of nos recorded
	this.addEntry = function() {
		var dayGap = checkDate(this.lastYes);
		if (dayGap>0){
			var now = new Date();
			var today = new Date(now.getFullYear(),now.getMonth(),now.getDate());

			this.totalNo += (dayGap-1);
			this.totalYes++;
			this.activityLog.push(today);
			this.lastYes = today;
		};
	};									//function to add a new entry to the log
	this.finalRate = function() {		
		if ((this.totalYes+this.totalNo)>0) {
			return (this.totalYes / (this.totalYes+this.totalNo)).toFixed(2);	
		} else {
			return 0;
		}
	};									//completion rate between 0 and 1
	this.lastYes = last;							//date of last 'yes' entry
};

function checkDate(dateString) {
	if (dateString == "Never") {
		return 1;
	}
	date = new Date(dateString);
	now = new Date();
	today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	dayGap = (today.getTime() - date.getTime()) / 86400000;
	return dayGap;
};
