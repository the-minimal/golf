export default () => {
	const subs = new Set(); 

	return [
		(handler) => (subs.add(handler), (() => subs.delete(handler))),
		(value) => subs.forEach((handler) => handler(value))
	];
};
