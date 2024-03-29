const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
} 

export {asyncHandler}



// method 1...
// const asyncHandler = (fn) => (req, res, next) => {
//     try {
 
//     } catch (err) {
//        res.status(err.code || 500).json({
//          success: false,
//          message: err.message
//        })
//     }
// }