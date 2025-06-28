import { Request, Response, NextFunction } from 'express';

interface DecodedToken {
  role: string;
}
/*
        Why is this needed? By default, the Request object in Express does not have a decoded property. When you decode a JWT in a previous middleware (e.g., an authentication middleware), you often attach the decoded token to the req object. Without this declare global block, TypeScript would complain that req.decoded does not exist on the Request type, leading to type errors. This declaration tells TypeScript that req.decoded is a valid property that might be present.



*/
declare global {
  namespace Express {
    interface Request {
      decoded?: DecodedToken;
    }
  }
}

export const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
  const authenticatedReq = req as Request & { decoded: DecodedToken };
  if (!authenticatedReq.decoded || authenticatedReq.decoded.role !== 'admin') {
    res.status(403).json({ success: false, message: 'You are not authorized to perform this action.' });
    return;
  }
  next();
};