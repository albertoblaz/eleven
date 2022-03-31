module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: 'auto',
                exclude: ['transform-regenerator'],
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
}
