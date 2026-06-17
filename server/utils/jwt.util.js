import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'netcenter_secret_key';

export function createJwtToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: '2h' }
  );
}

export function verifyJwtToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
