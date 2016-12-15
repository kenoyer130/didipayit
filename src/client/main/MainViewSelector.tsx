import * as React from "react";
import { MainView } from "./MainStore"
import ToggleButton from "../components/ToggleButton"

interface IMainViewSelectorProps {
    selectedView: MainView
};

interface IMainViewSelectorState { };

class MainViewSelector extends React.Component<IMainViewSelectorProps, IMainViewSelectorState> {
    public render(): JSX.Element {
        return (
            <div>
                <ToggleButton />
                <ToggleButton />
            </div>
            );
    }
}

export default MainViewSelector;
