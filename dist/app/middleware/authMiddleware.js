import jwt from 'jsonwebtoken';
import config from '../config';
const JWT_SECRET = config.jwt_secret;
export const verfiyToken = (req, res, nex) => {
    // will get token this format: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MjAzNjQ1NzEsImV4cCI6MTcyMDM2ODE3MX0.rnvvxV5PbDpHxlu_jj599euxbCiGeCCl0eGow1nYla8
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(401).send({ message: 'Invalid token and Access Denied!' });
        return;
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).send({ message: 'Invalid token and Access Denied!' });
            return;
        }
        req.decoded = decoded;
        nex();
    });
};
