import * as React from "react";

interface IValidationPanelProps {
    violation: string
};

interface IValidationPanelState {};

class ValidationPanel extends React.Component<IValidationPanelProps, IValidationPanelState> {
    public render(){
        return (<div>{ this.props.violation}</div>);
    }
}

export default ValidationPanel;
