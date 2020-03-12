// function emptyTable(obj){
// 	var tableF = document.createElement('table');	
// 	var table = document.getElementById('newTable');
// 	tableF.style.position = 'absolute';
// 	table.style.position = 'absolute';
// 	tableF.style.marginLeft = '300px';
// 	table.after(tableF);
// 	console.log(obj);
// 	console.log(obj.length);
// 	console.log(table.rows.length);
// 	for (i = 0; i < 7; i++){
// 		if(i == 0){
// 			var trhead = document.createElement('thead');			
// 			tableF.appendChild(trhead);
// 		}
			
// 		let tr = document.createElement('tr');
//      	var data = obj[i];    	
//      	console.log(data);		
// 		var count = 0;
// 		tableF.appendChild(tr);
// 		for (var key in data){
//      		count++;
//     		var td = document.createElement('td');
//      		tr.appendChild(td);
//      		td.innerText = data[key];
//      		// // if(data[key].slice(0, 1) != 'X'){console.log(typeof(data[key]) + ',   ' + data[key]);}
//      		// if (data[key].slice(0, 1) != 'X'){
//      		// // console.log(typeof(data[key]));   	
//      		// // console.log(data[key]);    			
//      		// }			     				     				     				
//      		if (i == 0 ){						  				
//      			var tdhead = document.createElement('td');
//      			trhead.appendChild(tdhead);
//      			tdhead.innerText = key;
//      		}    				
//      	}
// 	} 
// 	console.log(tableF);
// 	return tableF;
// 	// var thead = table.getElementsByTagName('thead');
// 	// var tdhead = table.getElementsByTagName('td');
// 	// var newTable2 = document.createElement('table');
// 	// table.style.position = 'absolute';
// 	// newTable2.style.position = 'absolute';
// 	// table.after(newTable2);
// 	// newTable2.style.marginLeft = '300px';
// 	// for(i = 0; i < table.rows.length ; i++){
// 	// 	if(i == 0){
// 	// 		var thead2 = document.createElement('thead');
// 	// 		newTable2.appendChild(thead2);
// 	// 	}
// 	// 	let tr = document.createElement('tr');
// 	// 	newTable2.appendChild(tr);

// 	// 	for(j = 0; j < table.rows[0].cells.length * 2 + 1; j++){
// 	// 		if(i == 0){
// 	// 			let tdhead2 = document.createElement('td');
// 	// 			thead2.appendChild(tdhead2);		
// 	// 		}
// 	// 		let td = document.createElement('td');
// 	// 		tr.appendChild(td);
// 	// 	}
// 	// }
// 	// // console.log(newTable2);
// 	// return newTable2;
// }