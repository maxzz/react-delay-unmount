import React from "react";
import "./App.css";
import { DelayedWithState } from './components/DelayedWithState';
import { DelayedWithHooks } from './components/DelayedWithHooks';

function App() {
    return (
        <div className="App">
            <header className="min-h-screen text-[length:calc(10px+2vmin)] text-white bg-[#282c34] flex flex-col items-center justify-center">
                <div className="grid auto-rows-auto gap-1">
                    <DelayedWithState />
                    <DelayedWithHooks />
                </div>
            </header>
        </div>
    );
}

export default App;
