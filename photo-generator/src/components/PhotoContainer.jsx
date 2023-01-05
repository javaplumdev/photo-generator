import React, { useContext } from 'react';
import { Context } from '../context/Context';

const PhotoContainer = () => {
	const { images, defaultSearch } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center">
				{defaultSearch === '' ? (
					<p>Search anything!</p>
				) : (
					<p>{defaultSearch} pictures</p>
				)}
			</div>

			<div className="text-center">
				{images.photo?.map((item) => {
					return (
						<img
							key={item.id}
							className="images m-1"
							src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
							alt={item.title}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default PhotoContainer;
