import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';
import React, { Component } from 'react';
import { createRenderer } from 'react-addons-test-utils';
import ShowMoreText from '../src/ShowMoreText';

const expect = unexpected.clone()
    .use(unexpectedReact)
;

describe('<ShowMoreText />', () => {
    it('should be a React component', () => {
        expect(ShowMoreText, 'to be a', Component.constructor);
    });

    it('should render a div', () => {
        const renderer = createRenderer();
        renderer.render(<ShowMoreText />);

        expect(renderer, 'to have rendered', <div />);
    });
});
