import * as React from "react";
import { BillInstance } from "./MainStore"

interface IMainGridProps {
     billInstances: BillInstance[]
};

interface IMainGridState {};

class MainGrid extends React.Component<IMainGridProps, IMainGridState> {
    public render(): JSX.Element {
        return (<span>Body</span>);
    }
}

export default MainGrid;
