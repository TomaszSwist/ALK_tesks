// Wykorzystaj domyślne wartości, aby uniknąć katastrofy.
// function go(options) {
// let {

// speed = 4,
// enable: { hyperdrive = false, frobnifier = true }
// } = options;
// console.log(speed, hyperdrive, frobnifier);
// }
// // TypeError: options.enable is undefined
// go({ speed: 5 });
// // TypeError: options is undefined
// go();

function go(options = {}) {
	let {
		speed = 4,
		enable: { hyperdrive = false, frobnifier = true } = {},
	} = options
	console.log(speed, hyperdrive, frobnifier)
}
// TypeError: options.enable is undefined
go({ speed: 5 })
// TypeError: options is undefined
go()
