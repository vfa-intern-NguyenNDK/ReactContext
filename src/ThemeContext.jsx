import React, { useState } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('dark');

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'ligth' : 'dark');
	};

	const value = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export { ThemeProvider, ThemeContext };
