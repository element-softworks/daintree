import React from 'react';

type ContextProps = {
	toggle?: Function;
	mode: string;
};

export const ThemeModeContext = React.createContext({ mode: 'light' } as ContextProps);
