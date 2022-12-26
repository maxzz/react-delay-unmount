import React, { useState } from "react";
import "./App.css";
import { DelayedWithState } from './components/DelayedWithState';
import { DelayedWithHooks } from './components/DelayedWithHooks';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="grid auto-rows-auto gap-1">
                    <DelayedWithState />
                    <DelayedWithHooks />
                </div>
            </header>
        </div>
    );
}

export default App;
