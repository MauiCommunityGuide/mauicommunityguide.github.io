import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FeatureCard from './FeatureCard';

import styles from './Features.module.scss';

const FEATURES = [
  {
    image: '/img/features/harmonic_interfaces.svg',
    title: translate({ message: 'Harmonic interfaces' }),
    subtitle: translate({
      message:
        'The correct balance of your layouts and controls with the dimensions of the devices is one of the main problems we face, here you will find solutions that many Xamarin Developers had to face so that you do not make the same mistake.',
    }),
  },
  {
    image: '/img/features/easy_maintenance.svg',
    title: translate({ message: 'Easy maintenance' }),
    subtitle: translate({
      message:
        'Here you will find topics like Unit tests, UI tests, design skills, etc. that will help you improve the maintenance of your mobile applications.',
    }),
  },
  {
    image: '/img/features/beautiful_applications.svg',
    title: translate({ message: 'Beautiful applications' }),
    subtitle: translate({
      message:
        'Focus on the interaction that users have with your mobile applications so that they are useful, pleasant and accessible, in this guide you will learn to design in XAML, and balance styles applying UI/UX.',
    }),
  },
  {
    image: '/img/features/scalability.svg',
    title: translate({ message: 'Always think scalability' }),
    subtitle: translate({
      message:
        'Using an architecture will determine if your software will be feasible to new changes, in Xamarin Community Guide Docs we care that you adopt the best architecture and go to new horizons.',
    }),
  },
];

const Features = (): React.ReactElement => (
  <section className={styles.features}>
    <div className={styles['features--wrap']}>
      {FEATURES.map(({ image, title, subtitle }) => (
        <FeatureCard key={title} image={useBaseUrl(image)} title={title} subtitle={subtitle} />
      ))}
    </div>
    <div className={styles.linkFeatures}>
    </div>
  </section>
);

export default Features;
