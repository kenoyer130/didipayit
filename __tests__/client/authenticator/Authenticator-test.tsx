import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import Authenticator from '../../../src/client/authenticator/Authenticator';

it('Shows Authenticator if not hasAuthToken', () => {
    const authenticator = TestUtils.renderIntoDocument(
      <Authenticator hasAuthToken= {false} />
    );
}); 