import jwt_decode from 'jwt-decode';

export const decodeToken = (token: string) => {
  return jwt_decode(token);
};
