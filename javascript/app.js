function generateMadLib(noun, adj, verb, adverb) {   
   const madlib = `${adj} ${noun}s, how are they ${adverb} ${verb}ed??`;
   return madlib;
}
console.log(1, '-----------------------')
console.log(generateMadLib('chair','sturdy','fold','carefully'))

const $nounInput = document.querySelector('.noun');
console.log($nounInput);

const $generate = document.querySelector('.create-madlib');

function onGenerateClicked() {

	console.log($nounInput.value);

	console.log(generateMadLib($nounInput.value,'sturdy','fold','carefully'))

	$nounInput.value = '';
}
$generate.addEventListener('click', onGenerateClicked)
