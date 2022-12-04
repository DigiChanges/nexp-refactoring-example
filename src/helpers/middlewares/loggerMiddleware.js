
const loggerMiddleware = async(ctx, next) =>
{
    console.log(`${ctx.method}: ${ctx.path} - ${ctx.ip}`);
    await next();
};

module.exports = {
  loggerMiddleware
}
