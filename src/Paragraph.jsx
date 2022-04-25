import React from 'react';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

function Paragraph() {
	const context = useContext(ThemeContext);

	return (
		<div className={context.theme}>
			<p>Paragraph</p>
		</div>
	);
}

export default Paragraph;
