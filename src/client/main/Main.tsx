import * as React from "react";
import Page from '../components/Page'
import Header from '../components/Header'

interface IMainProps { };

interface IMainState { };

class Main extends React.Component<IMainProps, IMainState> {
    render() {
        return (
            <Page>
                <Header HeaderText='Did I Pay It?' />
                <main className="mdl-layout__content">
                    <div className='page-content'>
                        <span>Body</span>
                    </div>
                </main>
            </Page>
        );
    }
}

export default Main;
