// import store from "../../redux/store";

function AppPageTitle() {
    return (
        <div className="app-page-title">
            <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div className="page-title-icon">
                        <i className="pe-7s-car icon-gradient bg-mean-fruit">
                        </i>
                    </div>
                    <div>Analytics Dashboard
                        <div className="page-title-subheading">This is an example dashboard created using build-in elements and components.
                        </div>
                    </div>
                </div>
                <div className="page-title-actions">
                    <div className="d-inline-block dropdown">
                        <button type="button" className="btn-shadow btn btn-info" >
                            <span className="btn-icon-wrapper pr-2 opacity-7">
                                <i className="fa fa-business-time fa-w-20"></i>
                            </span>
                            Buttons
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AppPageTitle }