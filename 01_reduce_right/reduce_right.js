
function reduceRight(arr,start,func){
	var end = arr.length - 1;
	var result = "";
	var prev = start;

	for (end; end > -1; end--){
		result = func(prev, arr[end])
		prev = result;
	}
	return result;
}

/* Original submission for the recursive version
function reduceRightRecursive(arr, start, func){
	var index = arr.length - 1;
	var result = "";
	var prev = start;


	if (index === 0){
		// need to return {} for the frequency calc to work
		return arr[index];
	}else{
		newArr = arr.slice(0, arr.length - 1);

		//arr[index] will not work for the frequency calc
		//ned to pass {}
		result = func(arr[index], reduceRightRecursive(newArr, start, func));
	}
	return result;
}
*/

// after time-was-up submission for the recursive version

function reduceRightRecursive(arr, start, func){
	var prev = start;

	if (arr.length === 1){
		return func(prev,arr[0]);
	}else{
		newArr = arr.slice(1, arr.length);
		result = reduceRightRecursive(newArr, start, func);
		return func(result, arr[0]);
	}
	return result;
}

//Good job figuring it out
