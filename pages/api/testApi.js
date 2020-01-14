import withSimpleMiddleware from '../../middlewares/testMiddleware';

function handler(req, res) {
	res.json({ message: 'Hello Everyone!' });
}

export default withSimpleMiddleware(handler);