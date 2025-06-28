export const isAdmin = (req, res, next) => {
    const authenticatedReq = req;
    if (!authenticatedReq.decoded || authenticatedReq.decoded.role !== 'admin') {
        res.status(403).json({ success: false, message: 'You are not authorized to perform this action.' });
        return;
    }
    next();
};
