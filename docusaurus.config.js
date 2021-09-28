// @ts-check

const isDeployPreview = process.env.CONTEXT === 'deploy-preview';
const isProductionDeployment = process.env.CONTEXT === 'production';

const localesWithLowRatioOfTranslation = [
  'ar-SA',
  'fil-PH',
  'gl-ES',
  'hi-IN',
  'ja-JP',
  'ko-KR',
  'pt-PT',
  'sr-SP',
  'tg-TJ',
  'ro-RO',
  'zh-CN',
];
/** @type {import('@docusaurus/types').DocusaurusConfig['i18n']} */
const i18nConfig = {
  defaultLocale: 'en',
  locales: isDeployPreview ? ['en'] : ['en', 'es-ES'],
  localeConfigs: {
    ar: {
      direction: 'rtl',
    },
  },
};

const pkgJson = require('./package.json');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Xamarin Community Guide',
  tagline: 'Community guide to creating beautiful applications in Xamarin',
  organizationName: 'XamarinCommunityGuide',
  projectName: 'xamarincommunityguide.github.io',
  url: 'https://xamarincommunityguide.github.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  // i18n: i18nConfig,
  plugins: [
    'docusaurus-plugin-sass',
    isProductionDeployment && ['docusaurus-plugin-sentry', { DSN: 'e494731288eb4948852561c19000c423' }],
  ].filter(Boolean),
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  },
  customFields: {
    description: 'Community guide to creating beautiful applications in Xamarin',
  },
  themeConfig: {
    announcementBar: {
      id: 'announcementBar',
      content:
        'If you like Xamarin Community Guide, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io">GitHub</a>! ⭐',
    },
    algolia: {
      apiKey: '082aaca59b344caf6d08e21b780cc0c4',
      indexName: 'xamarincommunityguide',
      contextualSearch: true,
    },
    gtag: isProductionDeployment
      ? {
          // You can also use your "G-" Measurement ID here.
          trackingID: 'G-3ZJ7Q4HRH7',
        }
      : undefined,
    navbar: {
      title: `Xamarin Community Guide`,
      logo: {
        alt: 'Xamarin Community Guide Logo',
        src: 'img/xamarin_community_guide_brand.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'what-is-xamarin-community-guide',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Community Blog', position: 'left' },
        { to: '/help', label: 'Help', position: 'left' },

        {
          href: 'https://opencollective.com/xamarin-community-guide',
          label: 'Sponsor us',
          position: 'right',
        },
        {
          href: '/contributors',
          label: 'Contributors',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              href: 'https://crowdin.com/project/xamarincommunityguide',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/what-is-xamarin-community-guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/xamarincommunityguide',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/yk5MzThrV4',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/search?q=%23XamarinCommunityGuide&src=typed_query',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Community Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/xamarincguide',
            },
            {
              html: `
                <a href="https://docusaurus.io" target="_blank" rel="noreferrer noopener" aria-label="Made with Docusaurus">
                  <img src="/img/Badges/docusaurus_badge.svg" alt="Made with Docusaurus" />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Xamarin Community Guide`,
    },
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
          editUrl: ({ locale, docPath }) => {
            if (locale !== 'en') {
              return `https://crowdin.com/project/xamarincommunityguide/${locale}`;
            }
            return `https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io/edit/XamarinCommunityGuide-Core/docs/${docPath}`;
          },
        },
        blog: {
          blogTitle: 'Community Blog',
          blogDescription: 'Xamarin Community Guide Blog',
          showReadingTime: true,
          postsPerPage: 5,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Xamarin Community Guide`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          editUrl: ({ locale, blogDirPath, blogPath }) => {
            if (locale !== 'en') {
              return `https://crowdin.com/project/xamarincommunityguide/${locale}`;
            }
            return `https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io/edit/XamarinCommunityGuide-Core/${blogDirPath}/${blogPath}`;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
};
