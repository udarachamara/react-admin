function AppSidebar() {
    return (
        <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
                <div className="logo-src"></div>
                <div className="header__pane ml-auto">
                    <div>
                        <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="app-header__mobile-menu">
                <div>
                    <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="app-header__menu">
                <span>
                    <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                        <span className="btn-icon-wrapper">
                            <i className="fa fa-ellipsis-v fa-w-6"></i>
                        </span>
                    </button>
                </span>
            </div>
            <div className="scrollbar-sidebar">
                <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                        <li className="app-sidebar__heading">MENU</li>
                        <li >
                            <a href="#dashboard">
                                <i className="metismenu-icon pe-7s-display2"></i>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="metismenu-icon pe-7s-ribbon"></i>
                                Tags
                                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="#tags">
                                        <i className="metismenu-icon"></i>
                                        Manage Tags
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="metismenu-icon pe-7s-albums"></i>
                                Posts
                                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="#posts">
                                        <i className="metismenu-icon"></i>
                                        Manage Posts
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="metismenu-icon pe-7s-speaker"></i>
                                Ad Sense
                                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="#ads">
                                        <i className="metismenu-icon"></i>
                                        Manage Ads
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { AppSidebar }