import React from 'react';

type DelayUnmountingProps = {
    isMounted: boolean;
    delayTime: number;
}

type DelayUnmountingState = {
    shouldRender: boolean;
}

function delayUnmounting(Component: Function) {
    return class extends React.Component<DelayUnmountingProps, DelayUnmountingState> {
        state = {
            shouldRender: this.props.isMounted
        };

        componentDidUpdate(prevProps: DelayUnmountingProps) {
            if (prevProps.isMounted && !this.props.isMounted) {
                setTimeout(() => {
                    this.setState({shouldRender: false});
                }, this.props.delayTime);
            } else if (!prevProps.isMounted && this.props.isMounted) {
                this.setState({shouldRender: true});
            }
        }

        render() {
            return this.state.shouldRender ? <Component {...this.props} /> : null;
        }
    };
}

function BoxDialog() {
    return (
        <div>
            aaaaa
        </div>
    );
}

const DelayUnmounting = delayUnmounting(BoxDialog);

type DemoState = {
    isMounted: boolean;
}

class DemoStateComponent extends React.Component<{}, DemoState> {
    state = {
        isMounted: false,
    }

    toggle = () => {
        this.setState((state) => ({ isMounted: !state.isMounted}));
    }

    render() {
        return (
            <div>
                <DelayUnmounting isMounted={this.state.isMounted} delayTime={500} />

                <button onClick={this.toggle} className="px-2 py-1 border rounded border-gray-200 text-gray-100 hover:bg-gray-700">
                    Toggle
                </button>
            </div>
        );
    }
}

export default DemoStateComponent;