function CleanSubject(str) {
	var res = /\s+(.*?)\s+\-/g.exec(str);
	if (res != null && res != 'undefined') return res[1];
	return null;
} 