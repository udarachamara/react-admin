import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/login/Login';
import store from './redux/store';
import { AppFooter } from './widget/app-footer/AppFooter';
import { AppHeader } from './widget/app-header/AppHeader';
import { AppPageTitle } from './widget/app-page-title/AppPageTitle';
import { AppSidebar } from './widget/app-sidebar/AppSidebar';
import { UiThemeSettings } from './widget/ui-theme-settings/UiThemeSettings';
import LoadingOverlay from 'react-loading-overlay';

function App() {
    const { user, loading } = useSelector(() => store.getState())

    return (
        <Fragment>
            <LoadingOverlay
                active={loading}
                spinner
                text='Loading ...'
            >

                <div style={{ display: user.user ? 'block' : 'none' }} className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                    <AppHeader />
                    <UiThemeSettings />
                    <div className="app-main">
                        <AppSidebar />
                        <div className="app-main__outer">
                            <div className="app-main__inner">
                                <AppPageTitle />
                                <Dashboard />
                            </div>
                            <AppFooter />
                        </div>
                    </div>
                    <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
                </div>
                { user.user ? '' : <Login /> }
            </LoadingOverlay>
        </Fragment>
    );
}

export default App;
