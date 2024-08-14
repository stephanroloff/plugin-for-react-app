// const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
// const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
 
// module.exports = {
//     ...defaultConfig,
//     entry: {
//       // Define tus entry points aquí
//       ...getWebpackEntryPoints(),
//     },
//     plugins: [
//         ...defaultConfig.plugins,
//         new BrowserSyncPlugin({
//           // browse to http://localhost:3000/ during development,
//           // ./public directory is being served
//           host: 'localhost',
//           port: 3000,
//           proxy: 'http://localhost:10130/'
//         })
//     ]
// };

const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const { getWebpackEntryPoints } = require('@wordpress/scripts/utils/config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

// Determinar si estamos en producción o desarrollo
const isProduction = process.env.NODE_ENV === 'production';

// Configurar las URLs para desarrollo y producción
const apiBaseUrl = isProduction
    ? 'https://your-production-url.com' // URL para producción
    : 'http://localhost:10130'; // URL para desarrollo

module.exports = {
    ...defaultConfig,
    entry: {
        ...getWebpackEntryPoints(),
    },
    plugins: [
        ...defaultConfig.plugins,
        new webpack.DefinePlugin({
            // Define la variable de entorno REACT_APP_API_BASE_URL
            'process.env.REACT_APP_API_BASE_URL': JSON.stringify(apiBaseUrl),
        }),
        !isProduction && new BrowserSyncPlugin({
            // Configuración para BrowserSync en desarrollo
            host: 'localhost',
            port: 3000,
            proxy: apiBaseUrl,
            files: [
                {
                    match: ['**/*.php', '**/*.js', '**/*.css'], // Vigilar archivos que cambian en WordPress
                    fn: function (event, file) {
                        if (event === 'change') {
                            const bs = require('browser-sync').get('bs-webpack-plugin');
                            bs.reload();
                        }
                    },
                },
            ],
        }),
    ].filter(Boolean), // Filtra plugins no definidos (BrowserSync solo para desarrollo)
};
