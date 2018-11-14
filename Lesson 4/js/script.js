let adv = document.querySelector('.adv'),
	title = document.getElementById('title'),
	li_item = document.querySelectorAll('.menu-item'),
	menuLi = document.querySelector('.menu');

/////////////////////////// 1 //////////////////////////////////

let newLi = document.createElement('li'); 
	newLi.textContent = 'Пятый пункт';
	newLi.classList.add('menu-item');
	menuLi.appendChild(newLi);
	menuLi.replaceChild(li_item[1], li_item[2]);
	menuLi.insertBefore(li_item[2], li_item[1]);

/////////////////////////// 2 //////////////////////////////////

	document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

/////////////////////////// 3 //////////////////////////////////

	title.textContent = 'Мы продаем только подлинную технику Apple'; 
	
/////////////////////////// 4 //////////////////////////////////

	adv.style.display = 'none'; 

/////////////////////////// 5 //////////////////////////////////

function answer(){
	let ask = prompt('Вы пользуетесь техникой Apple?'),   
		block0 = document.getElementById('prompt');
		let block = document.createElement('div');
		block.innerHTML = ask;
		block0.appendChild(block);
}
answer();


