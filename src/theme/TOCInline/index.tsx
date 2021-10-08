import React from 'react';
import clsx from 'clsx';
import type { TOCInlineProps } from '@theme/TOCInline';
import styles from './styles.module.scss';
import { TOCItem } from '@docusaurus/types';

/* eslint-disable jsx-a11y/control-has-associated-label */
function HeadingsInline({ toc, isChild }: { toc: readonly TOCItem[]; isChild?: boolean }) {
  if (!toc.length) {
    return null;
  }
  return (
    <ul className={isChild ? '' : 'table-of-contents'}>
      {toc.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: heading.value }}
          />
          <HeadingsInline isChild toc={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function TOCInline({ toc }: TOCInlineProps): JSX.Element {
  return (
    <div className={clsx(styles.tableOfContentsInline)}>
      <HeadingsInline toc={toc} />
    </div>
  );
}

export default TOCInline;
