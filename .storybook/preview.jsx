import "!style-loader!css-loader!sass-loader!postcss-loader!normalize.css/normalize.css";
import { themes } from '@storybook/theming';
import React from 'react';
import { ThemeProvider } from "theming";
import * as clientThemes from '../src/styles/themes';
import '@styles/styles.stories.scss';
import '@storybook/addon-console';
import "../src/styles/styles.scss";
import { useGlobals } from '@storybook/api';

export const globalTypes = {
	// locale: {
	// 	name: 'Locale',
	// 	description: 'Internationalization locale',
	// 	defaultValue: 'en',
	// 	toolbar: {
	// 		icon: 'globe',
	// 		items: [
	// 			{ value: 'en', right: '🇺🇸', title: 'English' },
	// 			{ value: 'fr', right: '🇫🇷', title: 'Français' },
	// 			{ value: 'es', right: '🇪🇸', title: 'Español' },
	// 			{ value: 'zh', right: '🇨🇳', title: '中文' },
	// 			{ value: 'kr', right: '🇰🇷', title: '한국어' },
	// 		],
	// 	},
	// },
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'skipper',
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
	backgrounds: {
		defaultValue: 'skipper',
		values: [
			{
				name: 'gundies',
				value: '#1d1d1d'
			},
			{
				name: 'skipper',
				value: '#f8f8f8'
			},
		],
	}
}

const withThemeProvider = (Story, context) => {
	// const [{ theme: themeName }] = useGlobals();
	// console.log({themeName})
	const theme = clientThemes[context.globals.theme];
	parameters.backgrounds.default = context.globals.theme;

	// console.log({theme, clientThemes, 'context.globals.theme': context.globals.theme})

	return (
		<ThemeProvider theme={theme}>
			<Story {...context} />
		</ThemeProvider>
	)
}

export const decorators = [withThemeProvider];
