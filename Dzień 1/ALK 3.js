
// Przypisz do stałej valueOfMachines kod obliczający sumę wszystkich elementów
// typu machine. Wykorzystaj odpowiednie metody tablicowe i funkcje strzałkowe.
// const inventory = [
// { type: "machine", value: 5000 },
// { type: "machine", value: 650 },
// { type: "plant", value: 20 },
// { type: "furniture", value: 1200 },
// { type: "machine", value: 250 }
// ];
// const valueOfMachines = /* MIEJSCE NA TWOJ KOD */;


const inventory = [
	{ type: 'machine', value: 5000 },
	{ type: 'machine', value: 650 },
	{ type: 'plant', value: 20 },
	{ type: 'furniture', value: 1200 },
	{ type: 'machine', value: 250 },
]
const valueOfMachines = inventory => {
    let sum = 0
   inventory.forEach(element => {
    if(element.type == 'machine') {
        sum+=element.value
    }
   });

    return sum
}
