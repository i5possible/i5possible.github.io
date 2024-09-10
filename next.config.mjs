/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'

const nextConfig = {
  // i18n can't be used along with output:export
  // i18n: {
  //   locales: ['en', 'zh'],
  //   defaultLocale: 'zh'
  // },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  reactStrictMode: false,
  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  // basePath: "/nextjs-github-pages",
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})


export default withMDX(nextConfig);
