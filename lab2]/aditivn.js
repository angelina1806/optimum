function aditiv(table){
	var div = document.getElementById('ad');
	var label = document.createElement('label');
	label.innerText = 'Коэффициенты для адитивного метода';
	div.appendChild(label);

	for (i = 0; i < table.rows[0].cells.length; i++){
		var input = document.createElement('input');
		input.type = 'text';
		div.appendChild(input);
		input.className = 'adInput';
	}
	var button = document.createElement('button');
	div.appendChild(button);
	button.innerText = 'Ok';

	button.addEventListener('click', click);

	function click(){
		var div = document.getElementById('ad');
		var table = document.getElementById('newTable2');
		var input = div.getElementsByTagName('input');
		var arr = [];
		for(i = 0; i < table.rows[0].cells.length; i++){
			arr[i] = +input[i].value;
		}
		
		var summ = [];
		var table2 = document.getElementById('aditiv');
		for (j = 0; j < table.rows.length; j++){
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			var sum = 0;
			table2.appendChild(tr);
			tr.appendChild(td);
			if( j == 0){
				td.innerText = 'Адитивный с коэффициентом';
			}	else if (j != 0){
				for (i = 0; i < table.rows[0].cells.length; i++){
				sum += +table.rows[j].cells[i].innerHTML * arr[i];				
				}	
				td.innerText = Math.round(sum*100)/100;	
				summ[j- 1] = Math.round(sum*100)/100;	
			} 				
		}	
	
	rez = Math.max.apply(null, summ);
		for (j = 1; j < table2.rows.length; j++){
			if (table2.rows[j].cells[0].innerHTML == rez){
				let tbl = table2.rows[j].cells[0];
				tbl.style.background = 'green';
			}
		}
	}

}