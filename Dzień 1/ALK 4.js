// Napisz funkcję partition, która przyjmuje funkcję filtrującą oraz tablicę.
// Następnie zwraca tablicę, w której pierwszy element to tablica z elementami
// spełniającymi funkcję filtrującą, a drugi to tablica z elementami odrzuconymi.
// const items = ["foo", "bar", "moo", "baz"];
// const includesA = text => text.includes("a");
// // zwraca [ ["bar", "baz"], ["foo", "moo"] ]
// partition(includesA, items);

const items = ['foo', 'bar', 'moo', 'baz']
const includesA = text => text.includes('a')

const partition = (filterFn, arry) => {
	let partOK = []
	let partNok = []
	arry.forEach(element => {
		let a = filterFn(element)
		a == true ? partOK.push(element) : partNok.push(element);
	})
	return [partOK, partNok]
}
