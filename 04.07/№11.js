
let onePlaceTables = 5;
let twoPlaceTables = 8;
const clients = [1, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2];

function UnservedClients(onePlaceTables, twoPlaceTables, clients){
	let unserved=0;
	for(let i=0; i<clients.length; i++){
		if(clients[i]==1 && onePlaceTables>0) {onePlaceTables--;}
		else if(twoPlaceTables>0){twoPlaceTables--;}
		else {unserved+=clients[i]}
	}
	return(unserved);
}

unserved=UnservedClients(onePlaceTables, twoPlaceTables, clients);
console.log('Всего необслуженных клиентов: '+unserved);