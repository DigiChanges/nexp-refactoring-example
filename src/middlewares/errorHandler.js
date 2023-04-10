
const errorHandler = (err, req, res) =>
{
  console.error(err.stack);
  res.status(500).json({ message: 'Ocurrió un error' });
};

export default errorHandler;
