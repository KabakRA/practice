class Table {
  constructor(rows, columns) {
this.table = document.createElement('table');
    this.rows = rows; //строки
	this.columns = columns; //столбцы
	this.info = 'Таблица '+this.rows+' на '+this.columns; //информация о строках и столбцах
  }

  //вывод информации 
createHead(){
    let tr = document.createElement('tr');   
    let td = document.createElement('td');
    let text = document.createTextNode(this.info);
    td.appendChild(text); 
    tr.appendChild(td);
    this.table.appendChild(tr);
  } 

  //создание и заполнение таблицы
  createTable(){
	for (let i = 0; i < 6; i++){
    let tr = document.createElement('tr');   

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');

    let text1 = document.createTextNode('(' + (this.columns - 6) + ', ' + i + ')');
    let text2 = document.createTextNode('(' + (this.columns - 5) + ', ' + i + ')');
    let text3 = document.createTextNode('(' + (this.columns - 4) + ', ' + i + ')');
    let text4 = document.createTextNode('(' + (this.columns - 3) + ', ' + i + ')');
    let text5 = document.createTextNode('(' + (this.columns - 2) + ', ' + i + ')');
    let text6 = document.createTextNode('(' + (this.columns - 1) + ', ' + i + ')');

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    td6.appendChild(text6);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    this.table.appendChild(tr);
}
      }
   //рендеринг таблицы
   render(){

	this.createHead();
	this.createTable();
	document.body.appendChild(this.table);
   }
}
//пример выполнения
let testTable = new Table(6, 6);
testTable.render();
