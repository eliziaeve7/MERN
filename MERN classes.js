function bday(day, month){
var today=new Date();
if (today.getDate()==day && today.getMonth()==month-1)
{console.log('Happy Birthday');}
else{ console.log(' ordinary day');}}
day=window.prompt('date?', '')
month=window.prompt('month?','')
    
bday(day, month)

