import React, { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { searchData } from '../data/data';
import { Context } from '../context/Context';

const NavbarComponent = () => {
	const { runSearch } = useContext(Context);

	const [searchEntry, setSearchEntry] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		runSearch(searchEntry);

		setSearchEntry('');
	};

	return (
		<div className="navbar container d-flex justify-content-center align-items-center py-4 ">
			<div className="p-3 w-100" style={{ maxWidth: '460px' }}>
				<p className="text-center">Photo Generator</p>
				<form onSubmit={(e) => handleSubmit(e)}>
					<Form.Control
						placeholder="Search"
						aria-label="Search"
						aria-describedby="basic-addon1"
						onChange={(e) => setSearchEntry(e.target.value)}
						value={searchEntry}
					/>
					<Button type="submit" variant="primary" className="w-100 my-2">
						Search
					</Button>
				</form>
				<div className="d-flex justify-content-center flex-wrap">
					{searchData.map((item) => {
						return (
							<small
								key={item.id}
								className="subsearch m-1 bg-dark text-light px-3 rounded"
								onClick={() => runSearch(item.name)}
							>
								{item.name}
							</small>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default NavbarComponent;
