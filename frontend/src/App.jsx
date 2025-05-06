import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";

import Navbar from "./Navbar.jsx";
import IrisVisualization from "./IrisVisualization.jsx";
import Users from "./users/Users.jsx";

App.propTypes = {
    initialCurrentUser: PropTypes.shape({}),
};
App.defaultProps = {
    initialCurrentUser: {},
};

function App({ initialCurrentUser }) {

    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<IrisVisualization/>} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </div>
        </Router>

    );
}

export default App;