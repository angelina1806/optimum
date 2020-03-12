// удаляет пустые элемнты из из массива
// который содержит номера точек компрамисса
function createNewTable (arr2){	

	 let arr = arr2.filter(element => element !== null);

		return arr;
}



// удаление строк с точками согласия
function deleteRow(obj, k){
	let tr = table.getElementsByTagName('tr');
	var arr = [];
	let c;
	let j = 0;
	for(j = obj.length - 1; j >= 0; j--){
		c = k[j] - 1;
		delete obj[c];
	}
	let obj2 = obj.filter(element => element !== null);
	return obj2;	
}



// создание таблицы без точек согласия
function tabWS(obj1){
var table = document.getElementById('newTable3');    
let obj = obj1.filter(element => element !== null);	


	for (var i = 0; i < obj.length; i++){
	
		let tr = document.createElement('tr');
   		var data = obj[i];    			
		var count = 0;
			if(i ==0){
				var trhead = document.createElement('tr');
				table.appendChild(trhead);
			}
     			
		var arr = [];
		var newObj = obj[i];

		table.appendChild(tr);
		// создания тела и головы таблицы
		for (var key in data){
    	 	count++;		    				     				     				     				
     		if (i == 0 ){						  				
     			var tdhead = document.createElement('td');
     			trhead.appendChild(tdhead);
     			tdhead.innerText = key;
     		} 
   			var td = document.createElement('td');
     		tr.appendChild(td);
     		td.innerText = data[key];
	   				   	
   		}   	
	} 

	return table;
}








		
