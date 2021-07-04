function Age(){
	for(let i=1; i<=100; i++){
		if (i<=17) console.log(i + ' - ребенок');
		if (i>=18 && i<=30) console.log(i + ' - молодой');
		if (i>=31 && i<=55) console.log(i + ' - зрелый');
		if (i>=56) console.log(i + ' - старый');
	}
}
Age();