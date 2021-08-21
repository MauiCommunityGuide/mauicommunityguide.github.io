import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';

import styles from './UsedBy.module.scss';

import Divider from './Divider';
import SponsorImage from './SponsorImage';

const UsedBy = (): React.ReactElement => (
  <section className={styles.usedBy}>
    <div className={styles['usedBy--main']}>
      <b>
        <Translate>SUPPORT GROUPS</Translate>
      </b>
      {[
        {
          name: 'Xamarin/.NET MAUI Community',
          image: useBaseUrl('/img/sponsors/xamarin_net_maui_community_in_spanish_logo.svg'),
          url: 'https://www.facebook.com/groups/xamarindiplomadoitc',
        },
        {
          name: 'Xamarin Latino',
          image: useBaseUrl('/img/sponsors/xamarin_latino_logo.svg'),
          url: 'https://www.facebook.com/groups/xamarin.latino',
        },
      ].map((sponsor) => (
        <SponsorImage key={sponsor.name} name={sponsor.name} image={sponsor.image} url={sponsor.url} />
      ))}
      <Divider vertical />
      <b>
        <Translate>SPONSORED BY</Translate>
      </b>
      {[
        {
          name: 'El Camino Dev',
          image: useBaseUrl('/img/sponsors/el_camino_dev_logo.svg'),
          url: 'https://elcamino.dev/',
        },
      ].map((sponsor) => (
        <SponsorImage key={sponsor.name} name={sponsor.name} image={sponsor.image} url={sponsor.url} />
      ))}
    </div>
    <p className={styles['usedBy--footer']}>
      <Translate>And many more...</Translate>
    </p>
  </section>
);

export default UsedBy;
