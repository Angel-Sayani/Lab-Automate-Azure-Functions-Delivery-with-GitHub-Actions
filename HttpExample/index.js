module.exports = async function (context, req) {
    const name = (req.query.name || (req.body && req.body.name)) || "CarvedRock";

    context.res = {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: {
            message: `Hello, ${name}! Automated delivery v1 is live.`,
            release: "v1"
        }
    };
};
