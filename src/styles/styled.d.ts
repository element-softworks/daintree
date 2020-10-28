// import original module declarations
import 'styled-components';
import { lightTheme } from '@styles/themes';

export interface PaletteColor {
	main: string;
	light?: string;
	dark?: string;
	text?: string;
}

export interface SizeVariants {
	xxl: string;
	xl: string;
	lg: string;
	md: string;
	sm: string;
	xs: string;
	xxs: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		body: string;
		text: string;
		palette: {
			primary: PaletteColor;
			secondary: PaletteColor;
			error: PaletteColor;
			warning: PaletteColor;
			info: PaletteColor;
			success: PaletteColor;
		};
		space: SizeVariants;
		font: {
			family: {
				base: string;
				headings:
					| string
					| {
							h1: string;
							h2: string;
							h3: string;
							h4: string;
							h5: string;
							h6: string;
					  };
			};
			size: SizeVariants;
		};
	}
}
