import React, { useContext } from 'react';
import { Context } from '../context/Context';

const PhotoContainer = () => {
	const { images } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center">
				{images.photo.map((item) => {
					return (
						<img
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
