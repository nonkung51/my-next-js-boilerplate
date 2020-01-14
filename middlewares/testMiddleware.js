export default handler => (req, res) => {
    console.log('You have pass inside the middleware!');
    
    return handler(req, res);
};