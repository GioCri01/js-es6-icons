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
		

		arrObj.forEach((el)=>{
			
			const output = 
			`
			
            <div class="my-card m-4 text-center  d-flex justify-content-center flex-column">
			<i class="${el.prefix}solid ${el.prefix}${el.name}"></i>
                <h2>${el.name}</h2>
            </div>

			`
			console.log(output);
			document.getElementById("container").innerHTML += output;
		})


		