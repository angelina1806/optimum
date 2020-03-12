function power (arr, table){
	var table2 = document.getElementById('power');
	var count = 0;
	// for(k = 0; k < table.rows.length; k++){
	// 	var tr = document.createElement('tr');
	// 	var td = document.createElement('td');
	// 	table2.appendChild(tr);
	// 	tr.appendChild(td);
	// 	if(k == 0){
	// 		td.innerText = 'Мощность';
	// 	}else
	// 	for (i = 1; i < table.rows.length; i++){
	// 		var count = 0;
	// 		for(j = 0; j < arr.length; j++){
	// 			if(table.rows[i].cells[0].innerHTML.slice(1, 2) == arr[j]){
	// 				td.innerText = count++;
	// 				console.log(table.rows[i].cells[0].innerHTML.slice(1, 2));
	// 				console.log(arr[j]);

	// 			}else td.innerText = '0';	
	// 		}
	// 	}
		
	// }
	var sum = [];
	for(i = 0; i < table.rows.length; i++){
		var count = 0;
		
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		table2.appendChild(tr);
		tr.appendChild(td);

		if(i == 0){
			td.innerText = 'Мощность';
		}else if(i !=0){
			for (j = 0; j < arr.length; j++){
				if (table.rows[i].cells[0].innerHTML.slice(1, 2) == arr[j]){
					count++;			
					td.innerText = count; 
					
				}else td.innerText = count;
				
			}					
		}
		if(i != 0){
			sum[i-1]=count;
		}	
	}

	console.log(sum);
	let rez = Math.max.apply(null, sum);
		for (j = 1; j < table2.rows.length; j++){
			if (table2.rows[j].cells[0].innerHTML == rez){
				let tbl = table2.rows[j].cells[0];
				tbl.style.background = 'green';
			}
		}

}