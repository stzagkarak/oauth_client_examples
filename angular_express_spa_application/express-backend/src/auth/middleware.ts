import { Request, Response , NextFunction } from 'express';

export async function isAuthenticated(req:Request, res:Response, next:NextFunction) {
    if(req.isAuthenticated()) return next();
    return next(401);
}