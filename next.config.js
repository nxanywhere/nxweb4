const path = require('path');
const withImages = require('next-images');

/** @type {import('next').NextConfig} */

module.exports = withImages({
    reactStrictMode: true,
    images: {
        disableStaticImages: true
    },
    webpack(config, options) {
        return config;
    }
});