import PropTypes from "prop-types";

import Navbar from "./Navbar.jsx";
import IrisVisualization from "./IrisVisualization.jsx";

App.propTypes = {
    initialCurrentUser: PropTypes.shape({}),
};
App.defaultProps = {
    initialCurrentUser: {},
};

function App({ initialCurrentUser }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <IrisVisualization />
        </div>
    );
}

export default App;