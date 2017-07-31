function keyAdder(){
	var sum = 0;
	var obj = this;
	Object.keys(obj).forEach(function(item){
		if (!isNaN(obj[item])){
			sum += obj[item];
		}
	})
	return sum;
}

//Great
