function NumberDivisionCheck(num) {
    let output = [];
    for (value=1; value<=num; value++){
        if ( value % 2 == 0 && value % 3 == 0 && value % 5 == 0){
            output.push("yu-gi-oh")
        }
        else if ( value % 2 == 0 && value % 3 == 0){
           output.push("yu-gi")
        }
        else if (value % 2 == 0 && value % 5  == 0){
            output.push("yu-oh")
        }
        else if (value % 3 == 0 && value % 5  == 0){
            output.push("gi-oh")
        }
        else if (value % 2 == 0 && value % 5  == 0){
            output.push("oh")
        }
        else if (value % 2 == 0 ){
           output.push("yu")
        }
        else if (value % 3 == 0 ){
             output.push("gi")
        }
        else if (value % 5 == 0 ){
            output.push("oh")
        }
        else if (value%2 !=0 && value%3 !=0 && value%5 !=0 ){
             output.push(value)
        }
            
        }
    console.log(output)
    return output;
}

NumberDivisionCheck(100)
NumberDivisionCheck(47)
