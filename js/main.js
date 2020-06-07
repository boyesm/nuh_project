//var preHome = (87.41 * nResidents^0.69) * 365;
//var standHome = (67.251 * nResidents^0.6541) * 365;
//var effHome =(59.58 * nResidents^0.53) * 365;

function waterUse(){
	var nResidents = a1;
	var q2 = 16 * a2 * nResidents;
	var q3 = (16 * a3 * nResidents)/7;
	var q4 = 8 * a4 * nResidents;
	var q5 = (225 * a5 * nResidents)/7;

	if (q6 == "yes"){
		var q6a = (50 * a6 * nResidents)/7;
	} else {
		var q6a = (100 * a6 * nResidents)/7;
	}

	if (q7 == "yes"){
		var q7a = (25 * a7)/7;
	} else {
		var q7a = (12.5 * a7)/7;
	}

	var q8 = 160 * a8

	if (q9 == "yes"){
		var q9a = (960 * a9)/30;
	} else {
		var q9a = 0;
	}

	return (q2 + q3 + q4 + q5 + q6a + q7a + q8 + q9);
	return (q2 + q3 + q4 + q5 + q6a + q7a + q8 + q9) * 7;
	return (q2 + q3 + q4 + q5 + q6a + q7a + q8 + q9) * 365;
}