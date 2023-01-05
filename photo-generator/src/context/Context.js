import React, { createContext, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../api/config';

export const Context = createContext();

const ContextProvider = (props) => {
	const [images, setImages] = useState([]);

	const [loading, setLoading] = useState(true);

	const runSearch = (query) => {
		axios
			.get(
				`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
			)
			.then((response) => {
				setImages(response.data.photos);

				setLoading(false);
			})
			.catch((error) => {
				console.log('error', error);
			});
	};

	return (
		<Context.Provider value={{ images, loading, runSearch }}>
			{props.children}
		</Context.Provider>
	);
};

export default ContextProvider;
