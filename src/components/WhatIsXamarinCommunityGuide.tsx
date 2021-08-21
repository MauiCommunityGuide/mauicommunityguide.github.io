import React from 'react';
import Translate from '@docusaurus/Translate';
import { Link } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Divider from './Divider';

import styles from './WhatIsXamarinCommunityGuide.module.scss';

const WhatIs = (): React.ReactElement => (
  <section className={styles.whatIs}>
    <h1 className={styles['whatIs--title']}>
      <Translate values={{ xamarincommunityguide: <i>Xamarin Community Guide</i> }}>
        {'What is {xamarincommunityguide}?'}
      </Translate>
    </h1>
    <p className={styles['whatIs--p']}>
      <Translate>
        Xamarin Community Guide is an ambitious project whose purpose is to guide the creation of harmonious, beautiful
        interfaces, easy to maintain and thinking about their scalability.
      </Translate>
    </p>
    <Link to={useBaseUrl('/docs/what-is-xamarin-community-guide')} className="link-primary">
      <Translate>Xamarin Community Guide Docs</Translate>
    </Link>
    <Divider />
  </section>
);

export default WhatIs;
