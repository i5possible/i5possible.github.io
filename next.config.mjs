/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n can't be used along with output:export
  // i18n: {
  //   locales: ['en', 'zh'],
  //   defaultLocale: 'zh'
  // },
  output: 'export',
  reactStrictMode: false
};

export default nextConfig;
