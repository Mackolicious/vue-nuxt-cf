
export async function onRequest(context) {
    console.log('Lennox secret', context.env.LENNOX_SECRET)

    try {
        return await context.next();
    } catch (err) {
        return new Response(`${err.message}\n${err.stack}`, { status: 500 });
    }
}