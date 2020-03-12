
function findMax (){	
	var table = document.getElementById('table');
	let max = [];

	for (j = 1; j < table.rows[0].cells.length; j++){
		for (i = 1; i < table.rows.length; i++) {
			if (i === 1){
				max[j-1] = +table.rows[i].cells[j].innerHTML;
			}else if (max[j-1] < +table.rows[i].cells[j].innerHTML){
					max[j-1] = +table.rows[i].cells[j].innerHTML;
			    }
		}
	}	
	return max;
}

function findMin (){	
	var table = document.getElementById('table');
	let min = [];

	for (j = 1; j < table.rows[0].cells.length; j++){
		for (i = 1; i < table.rows.length; i++) {
			if (i === 1){
				min[j-1] = +table.rows[i].cells[j].innerHTML;
			}else if (min[j-1] > +table.rows[i].cells[j].innerHTML){
					min[j-1] = +table.rows[i].cells[j].innerHTML;
			    }
		}
	}	
	return min;
}

function tableForMult (obj, max, min){

	var table = document.getElementById('newTable');  
	for (var i = 0; i < obj.rows.length; i++){
	
		let tr = document.createElement('tr');
     	table.appendChild(tr);		
		var count = 0;
		

		for(j = 1; j < obj.rows[0].cells.length; j++){
			let td = document.createElement('td');
			tr.appendChild(td);
			if (i != 0){
				td.innerText = Math.round((+obj.rows[i].cells[j].innerHTML	- min[j - 1])/(max[j - 1] - min[j - 1])*100)/100;
			}else td.innerText = obj.rows[0].cells[j].innerHTML;
			
		}
	}
	return table;
}

function criterMax(tab){
	var table = document.getElementById('newTable2');  // все критерии меняем на макс
	var table2 = document.getElementById('newTable');  // функц

	for (i = 0; i < tab.rows.length; i++){
		var tr = document.createElement('tr');
		table.appendChild(tr);

		for(j = 0; j < tab.rows[0].cells.length; j++){
			var td = document.createElement('td');
			tr.appendChild(td);
			if (i != 0){
				if (tab.rows[0].cells[j].innerHTML.slice(2, 5) == 'max'){
					td.innerText = +tab.rows[i].cells[j].innerHTML;
				}else td.innerText = Math.round((1 - +tab.rows[i].cells[j].innerHTML)*100)/100;
			}else if(i == 0 && tab.rows[0].cells[j].innerHTML.slice(2, 5) == 'min'){
				table.rows[0].cells[j].innerHTML = tab.rows[0].cells[j].innerHTML.replace('min', 'max');
			}else td.innerText = tab.rows[0].cells[j].innerHTML;
				
		}
	}
	return table;
}



function idealPoint(table){
	let sum = [];
	let max = [];
	var table2 = document.getElementById('idealPoint');
	let summ = 0;

	for(i = 0; i < table.rows.length; i++){
		let summ = 0;
		let tr = document.createElement('tr');
		let td = document.createElement('td');
		table2.appendChild(tr);
		tr.appendChild(td);
		if(i == 0){
			td.innerText = 'Идеальная точка';
		}else if (i != 0){
			for(j = 0; j < table.rows[0].cells.length; j++){
			summ += Math.round(Math.pow((1 - table.rows[i].cells[j].innerHTML), 2)*1000)/1000;
		}
			sum[i - 1] = summ;
			td.innerText = Math.round(Math.sqrt(summ)*1000)/1000;
		}	
	}
	let arr = sum.map(function(item) { return Math.round(Math.sqrt(item)*1000)/1000});
	rez = Math.min.apply(null, arr);

	for (j = 1; j < table2.rows.length; j++){
		if (table2.rows[j].cells[0].innerHTML == rez){
			let tbl = table2.rows[j].cells[0];
			tbl.style.background = 'green';
		}
	}
}



