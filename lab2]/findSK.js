var obj = {};
var objQ = {};
var arr = [];
var arrPower = [];


// функция возвращает массив для поиска точки с/к
function findSK(arrAllMax, arrAllMin){
     let consentText = document.getElementById('consentText');
     var countConsent = 0;
     var coun = 0;
	for (i = 0; i < arrAllMax.length ; i ++){     				
     	let arr1 = arrAllMax[i];
     	let arrMin = arrAllMin[i];
    			
     		for(j = 0; j < arrAllMax.length; j++){
     			var sum = 0;
     			var sum2 = 0;

     			if(i != j){
     				var arr2 = arrAllMax[j];
     				var arrMin2 = arrAllMin[j];
                         count = 0;
                         count2 = 0;
     				for(let key1 in arr1){
     					
     					for(let key2 in arr2){

     						if(key1 == key2 ){
                                        count++;
     							if (+arr1[key1] >= +arr2[key2]){
     								sum++;
     							} else sum--;
    						     }
     				     }
                         }

     				for(let key1 in arrMin){
     					for(let key2 in arrMin2){  	

     						if(key1 == key2 ){
     							count2++;
     							if (+arrMin[key1] <= +arrMin2[key2]){
     								sum2++;
     							} else sum2--;
                                        
     						}   
   					     }
                              
                         }
                         
                         if (sum + sum2 == -(count + count2)){
                              k = i + 1;
                              let consent = document.getElementById('consent');
                              let label = document.createElement('div');
                              label.style.marginTop = '5px';
                              consent.appendChild(label);
                              var str = `Точка согласия X${k}`;
                              label.innerText = str;
                              arr[countConsent] = k;
                              countConsent++;    
     				}                                 
                    }     						                                        
               }                                  
    	}  

return arr;
}

// функция возвращает массив для мощности
// в массив записываются номер точки
function findPower(arrAllMax, arrAllMin){
     let consentText = document.getElementById('consentText');
     var countConsent = 0;
     var coun = 0;
     for (i = 0; i < arrAllMax.length ; i ++){                        
          let arr1 = arrAllMax[i];
          let arrMin = arrAllMin[i];
               
               for(j = 0; j < arrAllMax.length; j++){
                    var sum = 0;
                    var sum2 = 0;

                    if(i != j){
                         var arr2 = arrAllMax[j];
                         var arrMin2 = arrAllMin[j];
                         count = 0;
                         count2 = 0;
                         for(let key1 in arr1){
                              
                              for(let key2 in arr2){

                                   if(key1 == key2 ){
                                        count++;
                                        if (+arr1[key1] >= +arr2[key2]){
                                             sum++;
                                        } else sum--;
                                   }
                              }
                         }

                         for(let key1 in arrMin){
                              for(let key2 in arrMin2){     

                                   if(key1 == key2 ){
                                        count2++;
                                        if (+arrMin[key1] <= +arrMin2[key2]){
                                             sum2++;
                                        } else sum2--;
                                        
                                   }   
                              }
                              
                         }
                         if(sum == -count && sum2 == -count2){ 
                              arrPower[coun] = ++j;   
                              coun++;
                         }
                                                         
                    }                                                                          
               }                                  
     }  
return arrPower;
}