function aa(){

	const items = [
	  ['name', '张三'],
	  ['title', 'Author']
	];

	const map = new Map();
	items.forEach(
	  ([key, value]) => map.set(key, value)
	);
	console.log(" aaa ")

}

export function bb(){
	console.log(" bbbb ");
}
 
export function cc(){
	console.log(" ccc ");
} 