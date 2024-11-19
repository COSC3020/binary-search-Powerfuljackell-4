function binarySearch(list, element) {

    var start = 0;
    var end = list.length - 1;
    let mid;
    while (end >=start) {
         mid =start+ Math.floor((end - start) / 2); //appears that I wrote this wrong, resulting in infinite loops in the future
  

        if (list[mid] == element){
            //while(list[mid-1] == list[mid]) mid--; //used to return "first" instance of the value's position
            if(list[0] == element) mid = 0; //worked on with Aaron Krapes to find a more efficient solution
            return mid;
        }
        

        if (list[mid] > element)
           end = mid - 1;
             
        else
           start = mid + 1;
    }
  
    return -1;
}
