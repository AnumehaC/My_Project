(function() {

	//getting values via DOM
	var quantcur = document.getElementById("quantcurrent").value;
	var quanttar = document.getElementById("quanttarget").value;

	var varbalcur = document.getElementById("verbalcurrent").value;
	var varbaltar = document.getElementById("verbaltarget").value;

	var qc = Number(quantcur);
	var qt = Number(quanttar);

	var vc = Number(varbalcur);
	var vt = Number(varbaltar);

	//Calculating total current and total target score
	function calculation() {

		var totalCurrentScore = 200 + (qc + vc) *5;
		var totalTargetScore = 200 + (qt + vt) *5;
	}

	//Entered marks in the input fields
	function inputMarks() {

		var ans = false;

		if(typeof qc == "string" || typeof qt == "string" || typeof vc == "string" || typeof vt == "string"
			|| Number.isNaN(qc) || Number.isNaN(qt) || Number.isNaN(vc) || Number.isNaN(vt)) {
			ans = confirm("One or more of the entered values is not a number. \n Do you want to enter values again?");
		
			if(ans) {
				inputMarks();
			}
			else {
				return;
			}
		}
		calculation();
	}
	//window.getElementById("submitbtn").addEventListener("click",inputMarks);

})();
