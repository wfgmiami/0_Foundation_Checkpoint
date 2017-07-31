/* actual test submission
function interleave(w1,w2){
	if (w1.length == 1 && w2.length == 1){
		return w1 + w2;
	}
	
	var str = "";
	var i = 0;

	if (w2.length > w1.length){
		var temp = w1;
		w1 = w2;
		w2 = temp;
	}
	var len = w2.length;

	w1.split("").forEach(function(item){
		str += item;
		if (i < len){
			str += w2[i];
			i++;
		}
	})

	return str;
}

*/

//after-time-was-up submission

function interleave(){
	var args = Array.prototype.slice.call(arguments);
	var num = args.length;
	var arr = [];

	args.forEach(function(arg, i){
		for (var j = 0; j < arg.length; j++){
			arr[i] = arg[j];
			i+=num;
		}
	})
	return arr.join("");
}