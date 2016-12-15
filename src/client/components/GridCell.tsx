import * as React from "react";

interface IGridCellProps {};

interface IGridCellState {};

class GridCell extends React.Component<IGridCellProps, IGridCellState> {
    public render(): JSX.Element {
        return (<span>Body</span>);
    }
}

export default GridCell;
