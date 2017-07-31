function vowelsCount(str){
	var vowels = "AEIOU";
	var cnt = 0;
	var letter = "";

	
	for (var i = 0; i < str.length; i++){
		letter = str[i].toUpperCase();

		if (vowels.indexOf(letter) > -1){
			cnt++;
		}
	}
	return cnt;
}
//Nice
