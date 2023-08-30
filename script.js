const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

const exclamationArr=[];
users.forEach((value)=>  {
    exclamationArr.push(value[0]+"!");
    console.log(exclamationArr);
})

const questionArr=users.map((value)=> `${value[0]}?`)
console.log(questionArr);


const filterUsers = arr=> {
    arr=JSON.parse(JSON.stringify(arr));

    let filterArray=arr.filter(value => {
        if (value[1]==="red") {
            return value;}
        })

    console.log(filterArray);
    let mapArray=filterArray.map(value => {return `<tr> ${value
        .map((item) => `<td>${item}</td>`)} </tr>`})
console.log(mapArray);

    const summScore=filterArray.map(inner_value=> inner_value[2])
        .reduce((summ,element) =>  summ +=element);

    console.log(summScore);

const THs= ["Name","Command","Score","Data"];
     let thsMap=THs.map(el=> {
         return `<td>${el}</td>`
     })

    let table= `<table class="user_table">
   <thead>
    <tr>
        ${thsMap.join("")}
    </tr>
    </thead>
    <tbody>
    ${mapArray.join("")}
    </tbody>
    <tfoot>
    <tr>
        <td colSpan="4">Total score: ${summScore}</td>
    </tr>
    </tfoot>
</table>`

    console.log(table);

    return table;
}

document.write(filterUsers(users));


