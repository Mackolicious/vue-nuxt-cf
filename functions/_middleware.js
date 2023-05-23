

const middleware = ({ request, env, next }) => {
    console.log('Lennox secret', env.LENNOX_SECRET)
    return next()
}



export const onRequest = [middleware]
