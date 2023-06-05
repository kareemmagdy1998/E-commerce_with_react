

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function useAuth() {
  return children => {
    const user = JSON.parse(localStorage.getItem('token'));

    // Only redirect to the login page for the protected routes
    const isProtectedRoute = children && children.props.path && children.props.path.startsWith('/cartpage');
    const isAuthenticated = user !== null && Object.keys(user).length !== 0;

    if (isProtectedRoute && !isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };
}

// export function adminAuth() {
//   return children => {
//     const user = JSON.parse(localStorage.getItem('token'));

//     if (!user || user.role !== 'admin') {
//       return <Navigate to="/notauthorized" />;
//     }

//     return children;
//   };
// }