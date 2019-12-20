# React Show More Text
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Coverage status][coveralls-image]][coveralls-url]
[![Dependency status][david-dm-image]][david-dm-url]
[![Dev dependency status][david-dm-dev-image]][david-dm-dev-url]

The text surrounded by the component will be truncated. Anything surrounded by the component could be evaluated as text. The component react-show-more-text/ShowMoreText is fork of react-show-more/ShowMore, applied improvements, works with React 16.x.x, added onClick event.

## Demo
[https://www.devzonetech.com/demo/react-show-more-text/build/](https://www.devzonetech.com/demo/react-show-more-text/build/)

## Install
```
$ npm install react-show-more-text
```

## Usage
```js
import ShowMoreText from 'react-show-more-text';

// ...

class Foo extends Component {

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    render() {
        return (
            <ShowMoreText
                /* Default options */
                lines={3}
                more='Show more'
                less='Show less'
                anchorClass=''
                onClick={this.executeOnClick}
                expanded={false}
                width={280}
            >
                {longText}
            </ShowMoreText>
        );
    }
}
```

## API
| Prop | Type | Default | Description | Example |
| ---- | ---- | ------- | ----------- | ------- |
| lines | integer, boolean {false} | 3 | Specifies how many lines of text should be preserved until it gets truncated. `false` and any integer < 1 will result in the text not getting clipped at all. | (`false`, `-1`, `0`), `1`, ...  |
| children | string, React node | | The text to be truncated. Anything that can be evaluated as text. | `'Some text'`, `<p>Some paragraph <a/>with other text-based inline elements<a></p>`, `<span>Some</span><span>siblings</span>` |
| more | string, React node | 'Show more' | The text to display in the anchor element to show more. | `'Show more'`, `<span>Show more</span>`
| less | string, React node | 'Show less' | The text to display in the anchor element to show less. | `'Show less'`, `<span>Show less</span>`
| anchorClass | string | '' | Class name(s) to add to the anchor elements. | `'my-anchor-class'`, `'class-1 class-2'`
| onClick | Function | | Function executed on click on 'Show more' or 'Show less' | `onClick={this.executeOnClick}`
| expanded | boolean | 'false' | Control the text to be shown as expanded | `expanded={true}`
| width | number | `0` | If not `0`, the calculation of the content will be based on this number. | |
| keepNewLines | boolean | 'true' | Controls the new lines in text to be keept or not. If the new lines should be keept, you need to pass the text as Template literal [more info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). | `keepNewLines={true}`

## Developing
Install development dependencies
```
$ npm install
```

Run tests
```
$ npm test
```

Run code linter
```
$ npm run lint
```

Compile to ES5 from /src to /lib
```
$ npm run compile
```

[npm-url]: https://npmjs.org/package/react-show-more-text
[downloads-image]: http://img.shields.io/npm/dm/react-show-more-text.svg
[npm-image]: https://badge.fury.io/js/react-show-more-text.svg
[travis-url]: https://travis-ci.org/One-com/react-show-more-text
[travis-image]: http://img.shields.io/travis/One-com/react-show-more-text.svg
[coveralls-url]:https://coveralls.io/r/One-com/react-show-more-text
[coveralls-image]:https://coveralls.io/repos/One-com/react-show-more-text/badge.svg
[david-dm-url]:https://david-dm.org/One-com/react-show-more-text
[david-dm-image]:https://david-dm.org/One-com/react-show-more-text.svg
[david-dm-dev-url]:https://david-dm.org/One-com/react-show-more-text#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/One-com/react-show-more-text/dev-status.svg
