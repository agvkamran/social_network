import React from 'react';
import styles from './profile-info.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: 'act.deact'
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.aboutMe}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.aboutMe} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;