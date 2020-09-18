import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from 'theming';
import {Card} from './component-lib';

const theme = {
    color: 'yellow',
    background: 'white',
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Card title={'hello'}/>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
