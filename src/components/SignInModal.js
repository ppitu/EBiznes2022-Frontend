import React, {Component} from "react";
import M from "materialize-css";

class SignInModal extends Component {
    componentDidMount() {
        M.Modal.init(this.Modal)
    }
    closeModal = () => {
        M.Modal.getInstance(this.Modal).close();
    }

    navigateTo = (url) => {
        window.location.assign("http://54.38.54.4:1323" + url)
    }

    render() {
        const formId = "sign_in_form";
        const modalId = "sign_in_modal";
        const modalHref = "#" + modalId;

        return (
            <div>
                <a href={modalHref} className="modal-trigger">
                    Sign in
                </a>

                <div ref={Modal => this.Modal = Modal} id={modalId} className="modal authentication-modal">
                    <div className="modal-footer small-margin-bottom">
                        <div className="row auto-margin-bottom">
                            <div className="col s3">
                                <button className="waves-effect waves-light btn blue"
                                        onClick={() => this.navigateTo("/users/auth/google/login")}>
                                    Google
                                </button>
                            </div>
                            <div className="col s3">
                                <button className="waves-effect waves-light btn blue"
                                        onClick={() => this.navigateTo("/users/auth/github/login")}>
                                    Github
                                </button>
                            </div>
                            <div className="col s2">
                                &nbsp;
                            </div>
                            <div className="col s2">
                                <button className="btn-flat" type="reset" form={formId} onClick={this.closeModal}>Cancel
                                </button>
                            </div>
                            <div className="col s2">
                                <button className="waves-effect waves-light btn" type="submit" form={formId}>
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInModal;