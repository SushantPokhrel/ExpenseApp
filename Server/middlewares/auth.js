const { verifyToken } = require('../authentication/auth');
module.exports = (req, res, next) => {
  // Get token from the Authorization header
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token
    const verified = verifyToken(token);
    req.user = verified; // Attach the verified user data to the request object
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};
