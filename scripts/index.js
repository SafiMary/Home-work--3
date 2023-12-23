function generateFooter(contacts,title,bgcolor,fontcolor){
    let myString='';
    if( typeof contacts === 'object'){
        myString+= `<div style="display: flex; flex-direction: column; margin-top: 0;width:400px;padding-top: 30px;" >`+
        `<p style="margin: 10px 0 0 10px;">Номер: ${contacts.number}</p>`+
       `<p style="margin: 0 0 0 10px;">Эл. почта: ${contacts.mail}</p>` +
        `<p style="margin: 0 0 0 10px;">Адрес: ${contacts.adress}</p>`+
     `</div> `
    }
 else alert('неверно передан аргумент contacts!!');
   document.write(`<header style="height: 600px;"></header>`+
`<footer style="display: flex; flex-direction: row; justify-content: space-between;background-color:${bgcolor};height: 140px;font-family: Arial, Helvetica, sans-serif;color:${fontcolor};">`+
    `${myString}`+
    `<div style="display: flex; flex-direction: column;justify-content:space-between;width:200px;padding-top: 40px;">`+
        `<p style="text-align: center;">${title} &copy 2000г.</p>`+
        `</div>`+
`</footer>`
     );
   



 }
 let contactDirectory = {
    number: '8-950-540-10-55',
    mail: 'satiop@yandex.ru',
    adress: 'г. Екатеринбург, ул. Заздорная, д 5'
 }

 generateFooter(contactDirectory,'Рога и копыта','blue','white');
       