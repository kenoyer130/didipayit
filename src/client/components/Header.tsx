import * as React from "react";

interface IHeaderProps {
    HeaderText: string
};

interface IHeaderState { };

class Header extends React.Component<IHeaderProps, IHeaderState> {
    public render() {

        const style = {
            color: 'white',
            backgroundColor: 'rgb(156,39,176)'
        }

        return (
            <header style={style} className='mdl-layout__header' >
                <div className='mdl-layout__header-row'>
                    <span className='mdl-layout-title'>
                        {this.props.HeaderText}
                    </span>
                </div>
            </header >
        );
    }
}

export default Header;
