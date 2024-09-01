import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
import PropTypes from 'prop-types';

const PublicRoutes = ({ children }) => {
    const { currentUser } = useAuth();
    console.log(currentUser);

    if (currentUser) {
        return <Navigate to="/" replace={true} />;
    }
    return children;
}

// Add prop types validation
PublicRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PublicRoutes;
