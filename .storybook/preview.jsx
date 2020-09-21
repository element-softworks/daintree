import "!style-loader!css-loader!sass-loader!postcss-loader!normalize.css/normalize.css";
import "../src/styles/styles.scss";
import { themes } from '@storybook/theming';
import React from 'react';
import { ThemeProvider } from "theming";
import * as clientThemes from '../src/styles/themes';

export const globalTypes = {
	locale: {
		name: 'Locale',
		description: 'Internationalization locale',
		defaultValue: 'en',
		toolbar: {
			icon: 'globe',
			items: [
				{ value: 'en', right: '🇺🇸', title: 'English' },
				{ value: 'fr', right: '🇫🇷', title: 'Français' },
				{ value: 'es', right: '🇪🇸', title: 'Español' },
				{ value: 'zh', right: '🇨🇳', title: '中文' },
				{ value: 'kr', right: '🇰🇷', title: '한국어' },
			],
		},
	},
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			// array of plain string values or MenuItem shape (see below)
			items: [
				{ value: 'gundies', right: '📮', title: 'Gundie Awards' },
				{ value: 'skipper', right: '🛥', title: 'Skipper My Boat' },],
		},
	},
};

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	docs: {
		theme: themes.dark,
	},
}
const withThemeProvider = (Story, context) => {
	console.log(23, context.globals.theme);
	console.log(23, clientThemes);
	const theme = clientThemes[context.globals.theme];
	return (
		<ThemeProvider theme={theme}>
			<Story {...context} />
		</ThemeProvider>
	)
}
export const decorators = [withThemeProvider];
