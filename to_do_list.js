const inputList=[
    {name:'Make dishes',
    inputDate:'2022-12-22'
},
{
    name:'Make dinner',
    inputDate:'2000-12-23'
}];
renderList();
function addClick()
{
    const inputElement=document.querySelector('.js-input-name');
    const name=inputElement.value;
    const inputDateElement=document.querySelector('.js-dueDate-input')
    const inputDate=inputDateElement.value;
    inputList.push({//name:name,
        //dueDate:dueDate
        name,
        inputDate
    });
    console.log(inputList);
    inputElement.value='';
    inputDateElement.value = '';
    renderList();
}
function renderList()
{
    let todoHTML='';
    for(let i=0;i<inputList.length;i++)
    {
        const todoObject=inputList[i];
        //const name=todoObject.name;
        //const date=todoObject.inputDate; 
        //destructing
        const{name,inputDate}=todoObject;
        const valueHTML=
        `
        
            <div>${name}</div>
            <div>${inputDate}</div>
            <button onclick="
            inputList.splice(${i},1);
            renderList();
            " class="del_button">Delete</button>
        `;
        todoHTML+=valueHTML;
    }
    document.querySelector('.js-input-list').innerHTML=todoHTML;
}

