function binarySearch(list, element) {

    var start = 0;
    var end = list.length - 1;
    let mid;
    while (end >=start) {
         mid =start+ Math.floor((end - start) / 2);
  

        if (list[mid] == element){

            if(list[0] == element) mid = 0;
            return mid;
        }
        

        if (list[mid] > element)
           end = mid - 1;
             
        else
           start = mid + 1;
    }
  
    return -1;
}
