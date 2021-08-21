import React from 'react';
import Layout from '@theme/Layout';

import Translate, { translate } from '@docusaurus/Translate';
import styles from './contributors.module.scss';

const Contributors = (): React.ReactElement => (
  <Layout
    title="Contributors"
    description="Xamarin Community Guide contributors, thanks to you that this is a reality."
  >
    <div className={styles.wrapper}>
      <header>
        <h1>
          <Translate>Contributors</Translate>
        </h1>
        <p>
          <Translate>
            This project would not be a reality without the help of everyone who contributes to the Xamarin Community
            Guide.
          </Translate>{' '}
          <b>
            <Translate>Thank you very much!</Translate>
          </b>
        </p>
      </header>
      <main>
        <div className={styles['mt-2']}>
          <iframe
            src="https://contrib.rocks/image?repo=XamarinCommunityGuide/xamarincommunityguide.github.io"
            frameBorder="0"
            scrolling="yes"
            title={translate({ message: 'Contributors of Xamarin Community Guide' })}
            width="100%"
            className={styles['h-screen']}
          />
        </div>
      </main>
    </div>
  </Layout>
);
export default Contributors;
