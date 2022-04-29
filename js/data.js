const arrObj=[
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		}
		];
		
		//Stampa arr di oggetti

		function stampa(arr) {
			arr.forEach((el)=>{
			
				const output = 
				`
				
				<div class="my-card m-4 text-center  d-flex justify-content-center flex-column">
				<span style="color:${el.color};"><i class="${el.prefix}solid ${el.prefix}${el.name}"></i></span>
					<h2>${el.name}</h2>
				</div>
	
				`
				
				
				document.getElementById("container").innerHTML += output;
	
				
				
			})
			
		}

		// divido gli oggetti in diversi array in base al type

		const animal = arrObj.filter((el)=>{
			if(el.type === "animal"){
				return true;
			}
			
		})

		const vegetable = arrObj.filter((el)=>{
			if(el.type === "vegetable"){
				return true;
			}
		})

		const user = arrObj.filter((el)=>{
			if(el.type === "user"){
				return true;
			}
		})

		console.log(animal);
		console.log(vegetable);
		console.log(user);

		const selectBtn = document.getElementById("type")
		selectBtn.addEventListener("change", function() {
			if(selectBtn.value == "0")
			{	reset();
				stampa(arrObj)	;
			}else if(selectBtn.value == "1"){
				reset();
				stampa(animal)	;
			}else if(selectBtn.value == "2"){
				reset();
				stampa(vegetable)	;
			}else if (selectBtn.value == "3"){
				reset();
				stampa(user);
			}
		});
		

		

		function reset() {
			const main = document.getElementById("container");
			main.innerHTML = "";
			
		}

		

		

		
		