var Question_Binary = {
	verb: "dither",
	past: "dithered",
	totalYes: 0,
	totalNo: 0,
	rate: 0,
	lastYes: "Never"
}

function checkDate(dateString) {
	date = new Date(dateString);
	now = new Date();
	today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	daysMissed = (today.getTime() - date.getTime()) / 86400000;
	return daysMissed;
}
