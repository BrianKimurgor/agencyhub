import { Role } from '@prisma/client';


/**
 * Authorize middleware function that checks if the user has the required role(s) to access a route.
 * @param {Array|string} roles - The role(s) required to access the route.
 * @returns {Function} Middleware function that checks user role and grants access or returns a 403 Forbidden response.
 */
export const authorize = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    const user = req.user;

    if (!user || (roles.length && !roles.includes(user.role))) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
};
