let money,
	name,
	time,
	price;

function start(){ 
    
   money = prompt('Ваш бюджет :', '');

   while (isNaN(money) || money == "" || money == null){
     money = prompt('Ваш бюджет :', '');

   }

   name = prompt('Название вашего магазина :', '').toUpperCase();
   time = 21;

};

//start();

mainList = {

	budget : money,
    storename : name,
    shopGoods : [],
	employers : {},
    open : false,
    discount: false,
    shopItems: [], 
    chooseGoods: function chooseGoods() {

	for (let i = 0; i < 5; i++){
	  let a = prompt('Какой тип товара будем продовать ?', '');

		  	 if ((typeof(a) === 'string' && typeof(a)) === null && a != '' && a.length < 50){
		  	 	console.log('Все верно!');
		  	 	mainList.shopGoods[i] = a;
		  	 } else {
				mainList.shopGoods[i] = a;
		  	 };
		 }
	}, 

	workTime: function workTime(time){
		    if (time < 0){
		      console.log('Такого не может быть');
		    } else if(time > 8 && time < 20 ){
		      console.log('Время работать!');
		      mainList.open = true;  
		      } else if(time < 24) {
		          console.log('Уже слишком поздно');
		          } else {
		             console.log('В сутках только 24 часа');
		          };
	},

	dayBudget: function dayBudget(){
	alert("Ежедневный бюджет" + mainList.budget / 30);
	
	},

	makeDiscount: function makeDiscount(){
		if (mainList.discount == true){
			prise = (prise/100)*80;
		}
	},

	hireEmployers: function hireEmployers(){
		for (let i = 0; i < 4; i++){
			let name = prompt('Имя сотрудника');
			mainList.employers[i] = name;
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt('Перечислите через запятую товары', '');

		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Подождите, еще ', ''));
		mainList.shopItems.sort();

		for ( let key in mainList.shopItems){

			console.log('Наш магазин включает в себя: ' + mainList.shopItems[key])
		}

		mainList.shopItems.forEach(function(item,i,arr){

			console.log('У нас вы можете купить: ' + items);

		});
		
	}	

};