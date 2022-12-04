
async function errorHandler(ctx, next)
{
    try
    {
        await next();
    }
    catch (err)
    {
        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test')
        {
            console.trace(err.stack);
        }

        ctx.status = 500;
        return ctx.body = err;
    }
}

module.exports = {
  errorHandler
}
