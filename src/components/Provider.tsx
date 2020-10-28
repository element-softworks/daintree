import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { createTheme, lightTheme, darkTheme } from '@styles/themes';
import useThemeMode from '@styles/useThemeMode';
import GlobalStyles from '@styles/globals';
import { ThemeModeContext } from '@helpers/contexts';

type DaintreeProps = {
	theme:
		| {
				light: DefaultTheme;
				dark: DefaultTheme;
		  }
		| DefaultTheme;
};

export const Provider: React.FC<DaintreeProps> = ({ theme: newTheme, children }) => {
	const [mode, modeToggler, modeMounted] = useThemeMode();

	const hasLightTheme = newTheme.hasOwnProperty('light');
	const hasDarkTheme = newTheme.hasOwnProperty('dark');

	// ensures correct theme variant is being used:
	// if no light theme given and dark theme exists only use dark theme
	// if no dark theme or no light theme or mode equals 'light' use light theme
	// otherwise use dark theme
	const theme = createTheme(
		!hasLightTheme || mode === 'light' ? lightTheme : darkTheme,
		!hasLightTheme ? newTheme : mode === 'light' ? newTheme?.light : newTheme?.dark,
	);

	return (
		<ThemeProvider theme={theme}>
			<ThemeModeContext.Provider value={{ toggle: modeToggler, mode }}>
				<GlobalStyles />
				{children}
			</ThemeModeContext.Provider>
		</ThemeProvider>
	);
};

export default Provider;
