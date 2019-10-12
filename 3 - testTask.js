function findSame(array, n){
    var i=0;
    var j=0;    
    var nbr=0;
    var repeat=0;
        
    while(i < array.length){
        nbr=array[i];
        j=0;
        repeat=0;
        while(j < array.length){    
            if (nbr == array[j]){
                repeat++;
        }
        j++;    
        }
     if ((repeat) == n){
        return(nbr);
    }        
    i++;
    }   
        return (0);          
    }

    function dontRepeat(nbr, sum){
        var i=0;
        while(i < sum.length){
            if (nbr == sum[i]){
                return(0)
            }
            i++;
        }
    return(nbr);    
    }
    
    function arraySum(arr){
        var sum=0;
        var i=0;
        
        for(var i = 0; i < arr.length; i++){
            sum += arr[i];
    }
    return(sum);
    }
    
    function SumIncludeNbr(numbers, m, n){
    var sum=[];
    var i=0;  
    var j=0;
    var arr=[];
    var nbr=0;
    while((i+m) <= numbers.length){    
        while(j < m){
            arr[j]=numbers[i+j];
            j++;
        }
        nbr=findSame(arr, n);
            if (nbr != 0){
                if (dontRepeat(nbr, sum) !=0){
                    sum.push(nbr);
            }            
        }
    j=0; 
    i++;    
    }
    return(arraySum(sum))    
    }