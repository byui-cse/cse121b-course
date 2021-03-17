export function sortByNameAscending(obj1, obj2){ 
    let name1 = obj1.name.toUpperCase(); 
    let name2 = obj2.name.toUpperCase(); 
    if(name1 < name2){ 
        return -1; 
    } else if (name1 > name2) { 
        return 1; 
    } else { 
        return 0; 
    } 
}

export function sortByNameDescending(obj1, obj2){ 
    let name1 = obj1.name.toUpperCase(); 
    let name2 = obj2.name.toUpperCase(); 
    if(name1 > name2){ 
        return -1; 
    } else if (name1 < name2) { 
        return 1; 
    } else { 
        return 0; 
    } 
}