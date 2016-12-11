import * as React from "react";
import ValidationPanelContainer from "../components/ValidationPanelContainer"

export interface IAccountSignupProps {
    email: string,
    joinExistingFamily: boolean,
    familyName: string,
    valid: boolean,
    violation?: string,
    onFamilyNameChange: (familyName: string) => void,
    onJoinFamilyChange: (joinFamily: boolean) => void,
    onSave: (email: string, familyName: string, joinExistingFamily: boolean) => void
};

export interface IAccountSignupState { };

class AccountSignup extends React.Component<IAccountSignupProps, IAccountSignupState> {

    onJoinFamilyChange = (event) => {
        this.props.onJoinFamilyChange(event.target.checked);
    }

    onFamilyNameChange = (event) => {
        this.props.onFamilyNameChange(event.target.value);
    }

    onSave = () => {
        this.props.onSave(this.props.email, this.props.familyName, this.props.joinExistingFamily);
    }

    render() {

        return (
            <div>
                <div>{!this.props.valid ? <ValidationPanelContainer /> : ''}</div>
                <div>Your email account name</div>
                <div>{this.props.email}</div>
                <div>
                    <input
                        type='checkbox'
                        defaultChecked={this.props.joinExistingFamily}
                        onChange={this.onJoinFamilyChange} />
                    Join existing family?
                </div>
                <div>Family Name?</div>
                <div> <input
                    type='text'
                    value={this.props.familyName ? this.props.familyName : ''}
                    onChange={this.onFamilyNameChange} />
                </div>
                <div> <input type='button' value='Sign up!' onClick={this.onSave} /> </div>
            </div>
        );
    }
}

export default AccountSignup;
