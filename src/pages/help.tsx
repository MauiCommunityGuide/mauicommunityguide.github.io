import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Follow } from 'react-twitter-widgets';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './help.module.scss';

const Help = (): React.ReactElement => {
  const { i18n } = useDocusaurusContext();
  return (
    <Layout
      title="Help"
      description="Xamarin Community Guide Help, where you'll find all the links to find help and assistance from Xamarin Community Guide contributors"
    >
      <div className={styles.wrapper}>
        <header>
          <h1>
            <Translate>Need help?</Translate>
          </h1>
          <p>
            <Translate>This project is maintained by the Xamarin Community Guide Support.</Translate>
          </p>
        </header>
        <main className={clsx(styles.grid, styles['items-center'], styles['grid-2-1fr'])}>
          <div className={clsx(styles.grid, styles['mt-2'], styles['grid-columns-fill'], styles['gap-2'])}>
            {SUPPORT_LINKS(i18n.currentLocale).map((supportSections) => (
              <article className={styles['article-card']} key={supportSections.title}>
                <h2>{supportSections.title}</h2>
                <p>{supportSections.content}</p>
              </article>
            ))}
          </div>
          <iframe
            className={styles['m-auto']}
            title="Discord Widget of Xamarin Community Guide"
            src="https://discord.com/widget?id=877758367467196466&theme=dark"
            width="350"
            height="500"
            frameBorder="0"
            
          />
        </main>
      </div>
    </Layout>
  );
};

export default Help;

const SUPPORT_LINKS = (lang: string) => [
  {
    title: 'Browse Docs',
    content: (
      <Translate
        values={{
          link: (
            <Link to={useBaseUrl('/docs/what-is-xamarin-community-guide')}>
              <Translate>documentation on this site</Translate>
            </Link>
          ),
        }}
      >
        {'Learn more about Xamarin Community Guide using the {link}'}
      </Translate>
    ),
  },
  {
    title: 'Twitter',
    content: (
      <Translate
        values={{
          follow: <Follow username="DanielMonetelli" options={{ showCount: false, dnt: true, lang }} />,
        }}
      >
        {'You can follow and contact us on {follow}'}
      </Translate>
    ),
  },
  {
    title: 'GitHub Discussions',
    content: (
      <Translate
        values={{
          link: (
            <a href="https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io/discussions">
              <Translate>Discussions section</Translate>
            </a>
          ),
        }}
      >
        {'If the documentation is not helpful enough, you can try navigating our {link}'}
      </Translate>
    ),
  },
  {
    title: 'Stackoverflow',
    content: (
      <Translate
        values={{
          link: (
            <a href="https://stackoverflow.com/questions/tagged/xamarincommunityguide">
              <Translate>Stackoverflow Questions</Translate>
            </a>
          ),
        }}
      >
        {'Browse questions at Stackoverflow also could be useful {link}'}
      </Translate>
    ),
  },
  {
    title: 'Discord',
    content: (
      <Translate
        values={{
          link: <a href="https://discord.gg/yk5MzThrV4">Discord</a>,
        }}
      >
        {'You can also chat with the Xamarin Community Guide on {link}'}
      </Translate>
    ),
  },
];
