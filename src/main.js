import App from './App.svelte';
import author from './author.js'

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		version: '1.1.1'
	}
});

console.log(`\n name         : ${author.nm} \n email        : ${author.ml}\n phone airtel : ${author.ph[0]} \n phone tnm    : ${author.ph[1]} \n website      : ${author.st} \n repository   : ${author.rp}`)

export default app;