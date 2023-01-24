import React from "react";
import "./App.css";
import { Demo1_DelayedWithState } from './components/Demo1_DelayedWithClass';
import { Demo2_DelayedWithHooks } from './components/Demo2_DelayedWithHooks';
import { Demo3_DelayedManualAnimation } from "./components/Demo3_ManualAnimation";
import { Demo4_NonReactRope } from "./components/Demo4_NonReactRope";

export function App() {
    return (
        <div className="App">
            <header className="min-h-screen text-[length:calc(10px+2vmin)] text-white bg-zinc-800 flex flex-col items-center justify-center">
                <div className="p-4 grid grid-cols-[1fr_minmax(20ch,30ch)_1fr] gap-y-4">

                    <div className="col-start-2 bg-zinc-900/5">
                        <Demo1_DelayedWithState />
                    </div>

                    <div className="col-start-2 bg-zinc-900/5">
                        <Demo2_DelayedWithHooks />
                    </div>

                    <div className="col-start-2 bg-zinc-900/5">
                        <Demo3_DelayedManualAnimation />
                    </div>

                    <div className="col-start-2 bg-zinc-900/5">
                        <Demo4_NonReactRope />
                    </div>

                </div>
            </header>
        </div>
    );
}
