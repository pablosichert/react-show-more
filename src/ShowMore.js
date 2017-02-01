import React, { Component, PropTypes } from 'react';
import Truncate from 'react-truncate';

class ShowMore extends Component {
    static defaultProps = {
        lines: 3,
        more: 'Show more',
        less: 'Show less'
    }

    static propTypes = {
        children: PropTypes.node.isRequired,
        lines: PropTypes.number,
        more: PropTypes.node,
        less: PropTypes.node
    }

    state = {
        expanded: false,
        truncated: false
    }

    handleTruncate = truncated => {
        this.setState({
            truncated
        });
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
            lines
        } = this.props;

        const {
            expanded,
            truncated
        } = this.state;

        return (
            <div>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={(
                        <span>... <a href='#' onClick={this.toggleLines}>{more}</a></span>
                    )}
                    onTruncate={this.handleTruncate}
                >
                    {children}
                </Truncate>
                {!truncated && expanded && (
                    <span> <a href='#' onClick={this.toggleLines}>{less}</a></span>
                )}
            </div>
        );
    }
}

export default ShowMore;
