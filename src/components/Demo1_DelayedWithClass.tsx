import React from 'react';
import { StartTestButton } from './UI/StartTestButton';
import css from './UI/animations.module.css';

type DelayUnmountingProps = {
    isMounted: boolean;
    delayTime: number;
};

type DelayUnmountingState = {
    shouldRender: boolean;
};

function delayedUnmounting(Component: Function) {
    return class DelayedComponent extends React.Component<DelayUnmountingProps, DelayUnmountingState> {
        state = {
            shouldRender: this.props.isMounted
        };

        componentDidUpdate(prevProps: DelayUnmountingProps) {
            if (prevProps.isMounted && !this.props.isMounted) {
                setTimeout(() => this.setState({ shouldRender: false }), this.props.delayTime);
            } else if (!prevProps.isMounted && this.props.isMounted) {
                this.setState({ shouldRender: true });
            }
        }

        render() {
            return this.state.shouldRender
                ? <Component {...this.props} />
                : null;
        }
    };
}

function BoxDialog({ isMounted }: DelayUnmountingProps) {
    return (
        <div style={{ animation: isMounted ? `${css['demo-bounce-in']} 1s` : `${css['demo-bounce-out']} 1s` }}>
            <div className="animate-bounce text-center">
                ✨✨✨✨✨✨
                ✨✨✨✨✨✨
            </div>
        </div>
    );
}

const DelayedUnmountingBoxDialog = delayedUnmounting(BoxDialog);

type DemoState = {
    isMounted: boolean;
};

export class Demo1_DelayedWithState extends React.Component<{}, DemoState> {
    state = {
        isMounted: false,
    };

    toggle = () => {
        this.setState((state) => ({ isMounted: !state.isMounted }));
    };

    render() {
        return (
            <div className="h-40 flex flex-col">

                <StartTestButton onClick={this.toggle}>Toggle with class components</StartTestButton>

                <div className="">
                    <DelayedUnmountingBoxDialog isMounted={this.state.isMounted} delayTime={1000} />
                </div>
            </div>
        );
    }
}
