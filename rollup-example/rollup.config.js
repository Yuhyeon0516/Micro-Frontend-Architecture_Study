module.exports = {
    input: "src/main.js",
    output: [
        {
            file: "dist/bundle.js",
            format: "cjs",
        },
        {
            file: "dist/bundle.mjs",
            format: "esm",
        },
    ],
};
