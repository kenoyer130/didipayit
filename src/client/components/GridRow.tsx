import * as React from "react";

interface IGridRowProps {};

interface IGridRowState {};

class GridRow extends React.Component<IGridRowProps, IGridRowState> {
    public render(): JSX.Element {
        return (<span>Body</span>);
    }
}

export default GridRow;
