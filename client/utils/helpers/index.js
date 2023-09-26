import JWT from 'jsonwebtoken';

export const formatRelativeDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  const elapsedMilliseconds = now - date;
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);

  if (elapsedDays > 0) {
    return `${elapsedDays} days ago`;
  } else if (elapsedHours > 0) {
    return `${elapsedHours} hours ago`;
  } else if (elapsedMinutes > 0) {
    return `${elapsedMinutes} minutes ago`;
  } else {
    return `${elapsedSeconds} seconds ago`;
  }
};

export const signAccessToken = (user) => {
  return new Promise((resolve, reject) => {
    const payload = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['user'],
        'x-hasura-default-role': 'user',
        'x-hasura-user-id': user.id.toString(),
      },
      email: user.email,
      fullName: user.fullName,
    };
    const options = {
      expiresIn: '1h',
      issuer: 'adesso-okr',
      audience: user.id.toString(),
    };

    JWT.sign(payload, process.env.JWT_SECRET, options, (err, token) => {
      if (err) {
        reject('jwt sign error', err);
      } else {
        resolve(token);
      }
    });
  });
};

export const verifyToken = (token, secret) => {
  return new Promise((resolve, reject) => {
    JWT.verify(token, secret, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};
