
async function authHandler(ctx, next)
{
    try
    {
        const data = ctx.params.userIdentifier;

        if (data !== 'CoderHouse133546')
        {
             throw new Error('No tiene la identifacion correspondiente.');
        }

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
  authHandler
}
