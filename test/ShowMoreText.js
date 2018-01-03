import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';
import React from 'react';
import ShowMoreText from '../src/ShowMoreText';

const expect = unexpected.clone()
    .use(unexpectedReact)
;

describe('<ShowMoreText />', () => {
    it('should be a React component', () => {
        expect(ShowMoreText, 'to be a', React.Component.constructor);
    });
});
