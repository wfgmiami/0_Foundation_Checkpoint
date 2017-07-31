
function alternate(func){
	var cnt = 0;

	return function(){
		if (++cnt < 4){
			if(cnt !== 2){
				return func();
			}
		}
	}
}
//Nice use of closures, but why are you hardcoding this? The alternate function should work on any number, even greater than 4

//I was not thinking/reading the spec but looking at the test cases- so i thought alternate should run once the first time, then 
//skip second run, then run the third time and no more after that
///here is the revised version

function alternate(func){
	var cnt = 0;
	return function(){
		if (!(cnt % 2)){
			func();
		}
		cnt++;
	}

}


function twice(func){
	var cnt = 0;
	return function(){
		if (cnt < 2){
			cnt++;
			return func();

		}else{
			return 0;
		}
	}
}

//Good
