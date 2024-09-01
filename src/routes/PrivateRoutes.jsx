import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { currentUser } = useAuth();
    console.log(currentUser);

    if (!currentUser) {
        return <Navigate to="/signup" replace={true} />;
    }
    return children;
}

// Add prop types validation
PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
