function interestCalculator(Data){
    var interestData = []
    for (index=0; index < Data.length; index ++ ){
        if (Data[index].principal >= 2500 && ( Data[index].time > 1 && Data[index].time < 3) ){
            rate = 3
        }
        else if (Data[index].principal >= 2500 && Data[index].time >= 3){
            rate = 4
        }
        else if (Data[index].principal < 2500 || Data[index].time <= 1){
            rate = 2
        }
        else {
            rate = 1
        }
        p = Data[index].principal
        t = Data[index].time
        r = rate
        interest = ( p * r * t)/100
        interestData[index] = {principal:p , time: t , rate: r, interest: interest }
    }
    console.log(interestData)
    return interestData;
}

data = [{principal:2500 , time: 1.8 },{principal: 1000 , time: 5 },{principal: 3000 , time: 1},{principal: 2000, time: 3 }]
DATA = interestCalculator(data)
/*for (i=0; i < DATA.length; i ++ ){
    document.write(DATA[i].principal, DATA[i].time, DATA[i].rate, DATA[i].interest)
}*/