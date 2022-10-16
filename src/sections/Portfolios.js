import React from 'react';
import Portfolio from './Portfolio';
import mainImg from '../assets/ProjectImage/Shoe-store.png';
import recipe from '../assets/ProjectImage/recipe.png';
import todolist from '../assets/ProjectImage/todolist.png';
import reactWeatherImg from '../assets/ProjectImage/Weather-app.png';
import reactGiphy from '../assets/ProjectImage/React-hooks-giphy.png';
const allData = [
	{
		id: 1,
		name: 'Shopping-cart-react-context-api-local-storage',
		category: 'React',
		image: mainImg,
		url: 'https://shopping-cart-react-local-storage-2n7eni5dl-sayeed0209.vercel.app/',
	},
	{
		id: 2,
		name: 'React-Weather-App',
		category: 'React',
		image: reactWeatherImg,
		url: 'https://react-weather-app-omega-lyart.vercel.app/',
	},
	{
		id: 3,
		name: 'React-Recipe-App',
		category: 'React',
		image: recipe,
		url: 'https://meal-finder-with-react-sayeed0209.vercel.app/',
	},
	{
		id: 4,
		name: 'React-todo-curd-local-storage ',
		category: 'React',
		image: todolist,

		url: 'https://react-crud-todolist-with-local-storage.vercel.app/',
	},
	{
		id: 5,
		name: 'react-hooks-giphy',
		category: 'React',
		image: reactGiphy,

		url: 'https://react-hooks-giphy-sayeed0209.vercel.app/',
	},
];
const Portfolios = () => {
	return (
		<div className="row portfolio-wrapper">
			<div className="spacer" data-height="60"></div>
			{allData.map(item => (
				<div className="col-md-4 col-sm-6 grid-item" key={item.id}>
					<Portfolio {...item} />
				</div>
			))}
		</div>
	);
};

export default Portfolios;
