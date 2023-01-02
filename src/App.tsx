import React from "react";
import "./App.css";
import { DelayedWithState } from './components/DelayedWithState';
import { DelayedWithHooks } from './components/DelayedWithHooks';

export function App() {
    return (
        <div className="App">
            <header className="min-h-screen text-[length:calc(10px+2vmin)] text-white bg-zinc-800 flex flex-col items-center justify-center">
                <div className="grid grid-cols-3 grid-rows-[50%_50%] gap-24">

                    <div className="col-start-2">
                        <DelayedWithHooks />
                    </div>

                    <div className="col-start-2">
                        <DelayedWithState />
                    </div>
                    
                </div>
            </header>
        </div>
    );
}
