export function sessionErrorHandler(err,req,res,next){
    res.status(409).json({message: err.message})
};

export function notFoundHandler(req, res) {
    res.status(404).json({
        message: "La ruta no fue encontrada"
    });
};

export function globalErrorHandler(err, req, res, next){
    res.status(500).json({
        message: "Error interno del servidor"
    });
};