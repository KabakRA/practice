class Table {
  constructor(rows, columns) {
    this.rows = rows; //строки
	this.columns = columns; //столбцы
	this.info = 'Таблица '+this.rows+' на '+this.columns; //информация о строках и столбцах
  }
  //вывод информации 
  createHead(){
	  document.write(this.info);
  } 
  //создание и заполнение таблицы
  createTable(){
	  document.write("<table>");
	  for (let a=0; a < this.rows; a++) {
      document.write("<tr>");
      for(let b=0; b< this.columns; b++) {
      document.write("<td>" + '('+ b + ', ' + a + ')'+ "</td>");
      }
      document.write("</tr>");
      }
      document.write("</table>");
      }
   //рендеринг таблицы
   render(){
	   this.createHead();
	   this.createTable();
   }
}
//пример выполнения
let testTable = new Table(6, 6);
testTable.render();