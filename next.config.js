/** @type {import('next').NextConfig} */
// Configura o caminho do Mockapi  para consumir a api
const nextConfig = {
  env: {
    API_URL: "https://64a54c6300c3559aa9bf7245.mockapi.io",
  },
};

module.exports = nextConfig;
