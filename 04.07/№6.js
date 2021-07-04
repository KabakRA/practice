const Ivan = {
	name: 'Иван',
	age: 44,
	NameAge: function(){
		if (this.age<=17) console.log(this.name + ', имеет возраст ' + this.age + ', он ребенок');
		if (this.age>=18 && this.age<=30) console.log(this.name + ', имеет возраст ' + this.age + ', он молодой');
		if (this.age>=31 && this.age<=55) console.log(this.name + ', имеет возраст ' + this.age + ', он зрелый');
		if (this.age>=56) console.log(this.name + ', имеет возраст ' + this.age + ', он старый');
}
}

const Peter = {
	name: 'Пётр',
	age: 15
}

const Dmitry = {
	name: 'Дмитрий',
	age: 70
}

Ivan.NameAge();
Ivan.NameAge.call(Peter);
Ivan.NameAge.call(Dmitry);