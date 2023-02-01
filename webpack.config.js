const path = require("path")

module.exports = {
    entry: "./src/tema-12/index.ts", // Configuramos el punto de entrada
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js"
    }, // Archivo objetivo
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }, // Configuración interna para compilación
    resolve: {
        extensions: [".ts", ".js"]
    }
}