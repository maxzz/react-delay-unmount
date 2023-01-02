import React from "react";
import "./App.css";
import { DelayedWithState } from './components/DelayedWithState';
import { DelayedWithHooks } from './components/DelayedWithHooks';
import { DelayedManualAnimation } from "./components/DelayedManualanimation";

export function App() {
    return (
        <div className="App">
            <header className="min-h-screen text-[length:calc(10px+2vmin)] text-white bg-zinc-800 flex flex-col items-center justify-center">
                <div className="p-4 grid grid-cols-[1fr_minmax(20ch,30ch)_1fr]  gap-y-4">

                    <div className="col-start-2">
                        <DelayedWithState />
                    </div>

                    <div className="col-start-2">
                        <DelayedWithHooks />
                    </div>

                    <div className="col-start-2">
                        <DelayedManualAnimation />
                    </div>

                </div>
            </header>
        </div>
    );
}
