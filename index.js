var item = document.getElementsByClassName("list-group-item");
// console.log(item);
console.log(item[1]);
item[1].style.backgroundColor='green';
for(var i=0; i<item.length; i++)
{
    item[i].style.fontWeight='bold';
}