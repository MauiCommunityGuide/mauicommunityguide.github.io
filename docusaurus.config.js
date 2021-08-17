/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Xamarin Community Guide',
  tagline: 'Community Guide to creating beautiful interfaces in Xamarin.Forms',
  url: 'https://xamarincommunityguide.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'XamarinCommunityGuide', // Usually your GitHub org/user name.
  projectName: 'xamarincommunityguide.github.io', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Xamarin Commnunity Guide',
      logo: {
        alt: 'Xamarin Commnunity Guide Logo',
        src: 'img/XamarinCommunityGuide_Brand.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io',
          label: 'GitHub',
          position: 'right',
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
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Comunidad Xamarin / .NET MAUI en Español',
              href: 'https://www.facebook.com/groups/xamarindiplomadoitc',
            },
            {
              label: 'Xamarin Latino',
              href: 'https://www.facebook.com/groups/xamarin.latino',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io',
            },
          ],
        },
      ],
      logo: {
        alt: 'Xamarin Community Guide Logo',
        src: 'img/oss_logo.png',
        href: 'https://xamarincommunityguide.github.io',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Xamarin Community Guide. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
