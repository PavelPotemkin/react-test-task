import React from 'react';
import './styles/App.css';
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header/>
            <AppRouter/>
        </>
    );
}

export default App;
