import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../utilitis/AuthProvider";
import Error from '../pages/Error/Error';

const ProtectedRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {
        return <Error></Error>
    }
    if (!user) {
        return children;
    }
    return;
};
ProtectedRoutes.propTypes = {
    children: PropTypes.object
};

export default ProtectedRoutes;