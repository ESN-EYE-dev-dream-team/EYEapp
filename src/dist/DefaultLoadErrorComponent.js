'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

const DEFAULTS = {
    className: 'data-load-error',
    message: 'An error occurred fetching records from Google Sheets',
    title: 'Data Load Error',
};

const DefaultLoadErrorComponent = function DefaultLoadErrorComponent(_ref) {
    const config = _ref.config;
    return _react['default'].createElement(
        'div',
        {
            className: config.className || DEFAULTS.className,
        },
        _react['default'].createElement(
            'h1',
            {
                className: 'title',
            },
            config.title || DEFAULTS.title,
        ),
        _react['default'].createElement(
            'p',
            {
                className: 'message',
            },
            config.message || DEFAULTS.message,
        ),
    );
};

DefaultLoadErrorComponent.propTypes = {
    config: _propTypes['default'].shape({
        className: _propTypes['default'].string,
        message: _propTypes['default'].string,
        title: _propTypes['default'].string,
    }),
};
DefaultLoadErrorComponent.defaultProps = {
    config: DEFAULTS,
};
const _default = DefaultLoadErrorComponent;
exports['default'] = _default;
