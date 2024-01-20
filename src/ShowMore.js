import React, { Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

class ShowMore extends Component {
    static defaultProps = {
        lines: 3,
        more: 'Show more',
        less: 'Show less',
        anchorClass: ''
    }

    static propTypes = {
        children: PropTypes.node,
        lines: PropTypes.number,
        more: PropTypes.node,
        less: PropTypes.node,
        anchorClass: PropTypes.string
    }

    state = {
        expanded: false,
        truncated: false
    }

    handleTruncate = truncated => {
        if (truncated !== this.state.truncated) {
            this.setState({
                truncated
            });
        }
    }

    toggleLines = event => {
        event.preventDefault();

        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const {
            children,
            more,
            less,
            lines,
            anchorClass
        } = this.props;

        const {
            expanded,
            truncated
        } = this.state;

        const ancorElementMore = isValidElement(more) ? React.cloneElement(more, { onClick : this.toggleLines }) : <a href='#' className={anchorClass} onClick={this.toggleLines}>{more}</a>;
        const ancorElementLess = isValidElement(less) ? React.cloneElement(less, { onClick : this.toggleLines }) : <a href='#' className={anchorClass} onClick={this.toggleLines}>{less}</a>;

        return (
            <div>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={(
                        <span><span>...</span> { ancorElementMore }</span>
                    )}
                    onTruncate={this.handleTruncate}
                >
                    {children}
                </Truncate>
                {!truncated && expanded && (
                    <span> { ancorElementLess }</span>
                )}
            </div>
        );
    }
}

export default ShowMore;
