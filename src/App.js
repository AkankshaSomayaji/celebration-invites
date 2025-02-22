import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import './App.scss';
import "@fontsource/caveat";
import * as urls from "./utils/urls";
import Invite from "./pages/invite/invite";
import NotFoundPage from "./pages/404notFound";

function App() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <div className="App">
                <Router>
                    <Routes>
                        <Route path={urls.DEFAULT_ENDPOINT} element={<Invite />} />
                        <Route path={urls.INVITE_ENDPOINT} element={<Invite/>}/>
                        <Route path={urls.NOT_FOUND_ENDPOINT} element={<NotFoundPage/>}/>
                        <Route path="*" element={<Navigate to={urls.NOT_FOUND_ENDPOINT} replace="true" />}/>
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
