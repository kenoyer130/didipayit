import * as React from "react";
import Page from '../components/Page'
import Header from '../components/Header'
import DateSelector from "./DateSelector"
import MainViewSelector from "./MainViewSelector"
import { MainView, BillInstance } from "./MainStore"

interface IMainProps {
    selectedDate: Date,
    selectedView: MainView,
    billInstances: BillInstance[]
};

interface IMainState { };

class Main extends React.Component<IMainProps, IMainState> {
    render() {
        return (
            <Page>
                <Header HeaderText='Did I Pay It?' />
                <main className="mdl-layout__content">
                    <div className='page-content'>
                        <DateSelector selectedDate={this.props.selectedDate} />
                        <MainViewSelector selectedView={this.props.selectedView} />
                    </div>
                </main>
            </Page>
        );
    }
}

export default Main;
