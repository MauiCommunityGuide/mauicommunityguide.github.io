import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Link } from '@docusaurus/router';
import { Follow } from 'react-twitter-widgets';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Command from './Command';

import styles from './Header.module.scss';

const Header = (): React.ReactElement => {
  const { i18n } = useDocusaurusContext();
  return (
    <div className={styles.header}>
      <div className={styles['header--wrap']}>
        <img className={styles['header--imageLogo']} src={useBaseUrl('/img/xamarin_community_guide_brand.svg')} alt="XamarinCommunityGuide Logo" />
        <div className={styles['header--mt-2']}>
          <h1 className={styles['header--title']}>Xamarin Community Guide</h1>
          <p className={styles['header--subtitle']}>
            <Translate>Community guide to creating beautiful applications in Xamarin</Translate>
          </p>
          <div className={styles['header--links']}>
            <a href="https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io" className="link-secondary">
              GITHUB
            </a>
            <Link to={useBaseUrl('/docs/what-is-xamarin-community-guide')} className="link-primary">
              <Translate>GET STARTED</Translate>
            </Link>
            <a href="https://github.com/XamarinCommunityGuide/xamarincommunityguide.github.io/blob/XamarinCommunityGuide-Core/README.md" className="link-secondary">
              <Translate>CONTRIBUTE</Translate>
            </a>
          </div>
        </div>
        <div className={styles['header--m-2']}>
          
        </div>
      </div>
      <div className={styles['header--absolute-links']}>
        <div>
          <Follow username="DanielMonetelli" options={{ size: 'large', dnt: true, lang: i18n.currentLocale }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
