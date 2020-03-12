(function () {

     var app = angular.module('myApp', []);
     app.controller('MyController', ['$scope', myController]);
     
     var excelJsonObj = [];

     function myController($scope) {
         
     	$scope.uploadExcel = function(){

     	var myFile = document.getElementById('file');
     	var input = myFile;
     	var reader = new FileReader();
     	reader.onload = function(){
     		var fileData = reader.result;
     		var workbook = XLSX.read(fileData, {type: 'binary'});
     		workbook.SheetNames.forEach(function(sheetName){
     			var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
     			excelJsonObj = rowObject;
     		});


     		var table = document.getElementById('tbody');     		
     		var thead = document.getElementById('thead');
     		var arr1 = [];
     		    		
     		var objSK = {};
     		var arrAllMax = [];
     		var arrAllMin = [];
     		var arrCountMax = [];
     		
     		// запись данных из excel в html таблицу
     		for (var i = 0; i < excelJsonObj.length; i++){

				var objMax = {};
     			var objMin = {};
				let tr = document.createElement('tr');
     			var data = excelJsonObj[i];    			
				var count = 0;
				if(i ==0){
					var trhead = document.createElement('tr');
					thead.appendChild(trhead);
				}
     			
				var arr = [];
				var newObj = obj[i];

				table.appendChild(tr);
				   			
     			obj[i] = excelJsonObj[i];
     			

				// создания тела и головы таблицы
				for (var key in data){
     				count++;
    				var td = document.createElement('td');
     				tr.appendChild(td);
     				td.innerText = data[key];
     				    				     				     				     				
     				if (i == 0 ){						  				
     					var tdhead = document.createElement('td');
     					trhead.appendChild(tdhead);
     					tdhead.innerText = key;
     				}
     				
     			
     				if(key.slice(2, 5) == 'max' ){
     					var counter = count - 1;
     					
     					for(k = 0; k < counter; k++){
     						objMax[counter] = data[key];  	
     						arrCountMax[k] = counter;				  						
     					}          								
     				}

     				if(key.slice(2, 5) == 'min' ){
     					var counter = count - 1;
     					// console.log(counter);
     					for(k = 0; k < counter; k++){
     						objMin[counter] = data[key];  						  						
     					} 		
     				}   	
     			}

     		
     			arrAllMax[i] = objMax;
     			arrAllMin[i] = objMin;
     		} 
     		// массив для поиска точек с/rк
     		var rez = findSK(arrAllMax, arrAllMin);
     		// массив для поиска мощностей
     		var fPower = findPower(arrAllMax, arrAllMin);
     		// удаление строк, которые содержать точки согласия
     		var newObj = deleteRow(excelJsonObj, rez);
     		// создание таблицы без точек согласия
     		var n = tabWS(createNewTable(excelJsonObj));
     		// поиск максимума в столбце
     		var max = findMax();
     		// поиск минимума в столбце
     		var min = findMin();
     		// Хт - Хмин / Хмакс - Хмин
     		var mult =  tableForMult(n, max, min);
     		// критерий на макс
     		var criter = criterMax(mult);
     		idealPoint(criter);
     		aditiv(criter);
     		power(fPower ,n);
     			
     	};
  	reader.readAsBinaryString(input.files[0]);
        };
    }

     
})();



