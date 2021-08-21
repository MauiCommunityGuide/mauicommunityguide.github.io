import Translate from '@docusaurus/Translate';
import React from 'react';
import styles from './Testimonials.module.scss';
import TwitterCarrousel from './TwitterCarrousel';

const Testimonials = (): React.ReactElement => (
  <section className={styles.testimonials}>
    <h3>
      <Translate
        values={{
          italicXamarinCommunityGuide: <i>Xamarin Community Guide</i>,
        }}
      >
        {"Here's what people have to say about {italicXamarinCommunityGuide}"}
      </Translate>
    </h3>
    <div>
      <TwitterCarrousel
        data={[
          ['1425468077127372801', '1426935067084005381', '1426709082656985088'],
          ['1397615819278872576', '1427690736175259652', '1427834246283079685'],
          ['1400140412057178117', '1413595066443108355', '1392250828145242113'],
          ['1425432187202117638', '1399505832140808192', '1427690736175259652'],
          ['822600848471707654', '1405668286898049025', '1173993638734553088'],
          ['1408458211989114888', '1403028690297106432', '1400140412057178117'],
        ]}
      />
    </div>
    <p>
      <Translate>Many greats developers comment on the benefits of 
        Xamarin Community Guide, you can be our next contributor, we are waiting for you!</Translate>
    </p>
  </section>
);

export default Testimonials;
