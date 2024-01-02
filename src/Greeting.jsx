import React from 'react';
import { FormattedMessage } from 'react-intl';

function Greeting() {
  return (
    <p>
      <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
    </p>
  );
}
export default Greeting;