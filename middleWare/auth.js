const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;


const auth = (req, res, next) => {
const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
if (!token) return res.status(401).json({ msg: 'Unauthorized' });


try {
const payload = jwt.verify(token, JWT_SECRET);
req.user = payload; // { id, role }
next();
} catch (err) {
return res.status(401).json({ msg: 'Invalid token' });
}
};


const adminOnly = (req, res, next) => {
if (!req.user) return res.status(401).json({ msg: 'Unauthorized' });
if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Admins only' });
next();
};


module.exports = { auth, adminOnly };