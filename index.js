var allItem=[]
let balance=60000
let dlLimit=30000
function submit(){
    if(food.value==""|| tran.value==""||clot.value==""||fee.value==""||main.value==""||date.value==""){
        alert("Fill all input")
    }
    else{
        let eachItem={
            food:food.value,
            tranport:tran.value,
            cloth:clot.value,
            fees:fee.value,
            maintenance:main.value,
            date:date.value,
            total:Number(food.value)+Number(tran.value)+Number(clot.value)+Number(fee.value)+Number(main.value)
        }
        allItem.push(eachItem)
        display()
    }
}
function display(){
    display.innerHTML=""
    for (let index = 0; index < allItem.length; index++) {
        document.getElementById('display').innerHTML+=`
        <table class="" style="width: 120%;">
            <tr style="border-bottom: 1px solid;">
                <td class="text-center" style="width: 50px;">${allItem[index].food}</td>
                <td class="text-center" style="width: 50px;">${allItem[index].tranport}</td>
                <td class="text-center" style="width: 50px;">${allItem[index].cloth}</td>
                <td class="text-center" style="width: 50px;">${allItem[index].fees}</td>
                <td class="text-center" style="width: 50px;">${allItem[index].maintenance}</td>
                <td class="text-center" style="width: 50px;">${allItem[index].date}</td>
                <td class="text-center" style="width: 50px;">${allItem[index].total}</td>
            </tr>
        </table>
        `
        console.log(allItem[index].total);
    }
    console.log(allItem);
    let sumTotal = allItem.reduce((it, i)=>
        it + i.total,0
    )
    console.log(sumTotal);
}

