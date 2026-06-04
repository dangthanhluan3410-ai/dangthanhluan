function printBCC(num)
{
    let result = "";

    let i = 1;
    while(i<=10)
    {
        result += `${num} x ${i} = ${num*i} <br>`;
        i++;
    }
    //đưa kết quả vào thẻ div có id là "result"
    doccument.getElementbyid("result").innerHTML= result;
}
