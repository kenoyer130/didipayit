import * as React from "react";
import NavigationArrow from "../components/NavigationArrow"
import DateLabel from "./DateLabel"

interface IDateSelectorProps {
    selectedDate: Date
 };

interface IDateSelectorState { };

class DateSelector extends React.Component<IDateSelectorProps, IDateSelectorState> {
    public render() {
        return (
            <div>
                <NavigationArrow />
                <DateLabel />
                <NavigationArrow />
            </div>
        );
    }
}

export default DateSelector;
