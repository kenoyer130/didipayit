import * as React from "react";

interface IPageProps { };

interface IPageState { };

class Page extends React.Component<IPageProps, IPageState> {
    public render() {
        return (
            <div className='mdl-layout mdl-layout--fixed-header'>
                {this.props.children[0]}
                {this.props.children[1]}
            </div>
        );
    }
}

export default Page;
