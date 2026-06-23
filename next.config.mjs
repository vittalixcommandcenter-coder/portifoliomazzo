/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Site 100% estático -> exporta HTML/CSS/JS para a pasta `out/`.
  // Ideal para Cloudflare Pages (deploy do diretório de saída, sem servidor).
  output: "export",
  // O export estático não usa o otimizador de imagens do servidor Next.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
