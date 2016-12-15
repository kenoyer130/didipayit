import * as React from "react";

interface IGridProps {};

interface IGridState {};

class Grid extends React.Component<IGridProps, IGridState> {
    public render(): JSX.Element {
        return (<span>Body</span>);
    }
}

export default Grid;
