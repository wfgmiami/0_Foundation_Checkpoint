
function createFunctions(num){

	var arr = [];
	
	function helper(ind){
		return function(){
			return ind;
		}
	}

	for (var i = 0; i < num; i++){

		arr.push(helper(i));
	}

	return arr;
}

//Excellent use of wrapper functions to ensure closure
