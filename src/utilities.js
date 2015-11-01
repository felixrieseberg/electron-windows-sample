module.exports = {
	merge: function(/* objs */) {
		var result = {};
		for (var i = 0, len = arguments.length; i < len; i++) {
			var obj = arguments[i];
			if (obj) {
				for (k in obj) { result[k] = obj[k]; }
			}
		}
		return result;
	},
	
	getMode: function() {
		return (
			window.innerWidth >= 1366 ? "large" :
			window.innerWidth >= 800 ? "medium" :
			"small"
		);
	},
	
	calc100PercentMinus: function(n) {
		return n === 0 ? "100%" : "calc(100% - " + (n + "px") + ")";
	}
}