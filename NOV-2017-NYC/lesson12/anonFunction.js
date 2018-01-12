// Self-executing anonymous function
const gradingModule = (function() {
	// Put your code here
	// It has it's own scope!

	const gradeCutoffs = {
		A: 90,
		B: 80,
		C: 70,
		D: 60,
	};

	function assignGrade(score) {
		if (score > gradeCutoffs.A) {
			return 'A';
		} else if {
			...
		}
	}

	return {
		assignGrade: assignGrade
	};
})();




gradingModule.assignGrade(87);