import { DefaultTheme } from 'styled-components';
import { lighten, darken, readableColor } from 'polished';

// gutter spacing divided by 100% browser font size.
const baseSpacing = 30 / 16;

const space = {
	xxl: `${baseSpacing * 2}rem`,
	xl: `${baseSpacing * 1.75}rem`,
	lg: `${baseSpacing * 1.5}rem`,
	md: `${baseSpacing}rem`,
	sm: `${baseSpacing * 0.5}rem`,
	xs: `${baseSpacing * 0.25}rem`,
	xxs: `${baseSpacing * 0.125}rem`,
};

// 100% browser font size is 16px.
const baseFontSize = 16;

const font = {
	family: {
		base: '',
		headings: '',
	},
	size: {
		xxl: `${baseFontSize * 1.75}rem`,
		xl: `${baseFontSize * 1.5}rem`,
		lg: `${baseFontSize * 1.17}rem`,
		md: `${baseFontSize}rem`,
		sm: `${baseFontSize * 0.9}rem`,
		xs: `${baseFontSize * 0.8}rem`,
		xxs: `${baseFontSize * 0.7}rem`,
	},
};

const lightTheme: DefaultTheme = {
	body: '#fff',
	text: '#000',
	palette: {
		primary: {
			main: '#fff',
		},
		secondary: {
			main: '#fff',
		},
		error: {
			main: '#fff',
		},
		warning: {
			main: '#fff',
		},
		info: {
			main: '#fff',
		},
		success: {
			main: '#fff',
		},
	},
	space,
	font,
};

const darkTheme: DefaultTheme = {
	body: '#000',
	text: '#fff',
	palette: {
		primary: {
			main: '#000',
		},
		secondary: {
			main: '#000',
		},
		error: {
			main: '#fff',
		},
		warning: {
			main: '#fff',
		},
		info: {
			main: '#fff',
		},
		success: {
			main: '#fff',
		},
	},
	space,
	font,
};

const createThemePaletteColor = (palette: any, newPalette: any) => {
	const main = newPalette?.main ?? palette.main;

	return {
		main,
		light: newPalette?.light ?? lighten(0.2, main),
		dark: newPalette?.dark ?? darken(0.2, main),
		text: newPalette?.text ?? readableColor(main),
	};
};

const createTheme = (
	theme: DefaultTheme,
	newTheme = {
		palette: { primary: {}, secondary: {}, error: {}, warning: {}, info: {}, success: {} },
		space: {},
		font: { size: {}, family: {} },
	},
) => ({
	...theme,
	...newTheme,
	palette: {
		primary: createThemePaletteColor(theme.palette.primary, newTheme?.palette?.primary),
		secondary: createThemePaletteColor(theme.palette.secondary, newTheme?.palette?.secondary),
		error: createThemePaletteColor(theme.palette.error, newTheme?.palette?.error),
		warning: createThemePaletteColor(theme.palette.warning, newTheme?.palette?.warning),
		info: createThemePaletteColor(theme.palette.secondary, newTheme?.palette?.info),
		success: createThemePaletteColor(theme.palette.secondary, newTheme?.palette?.success),
	},
	space: {
		...theme.space,
		...(newTheme?.space ?? {}),
	},
	font: {
		family: {
			...theme.font.family,
			...(newTheme?.font?.family ?? {}),
		},
		size: {
			...theme.font.size,
			...(newTheme?.font?.size ?? {}),
		},
	},
});

export { createTheme, lightTheme, darkTheme };
