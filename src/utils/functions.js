import DOMPurify from 'dompurify';

const dateFormat = require('dateformat');

export const normalizePath = path => {
    const pathStr = path.split('/');

    // If the path ends with '/' get the second last item
    if (path?.endsWith(`/`)) {
        const strIndex = pathStr.length ? pathStr.length - 2 : '';

        if (strIndex) {
            // eslint-disable-next-line no-param-reassign
            path = `/${pathStr[strIndex]}/`;
        }
    }

    // If the path ends with '/' get the second last item.
    if (!path?.endsWith(`/`)) {
        const strIndex = pathStr.length ? pathStr.length - 1 : '';

        if (strIndex) {
            // eslint-disable-next-line no-param-reassign
            path = `/${pathStr[strIndex]}/`;
        }
    }

    return path;
};
/**
 * Get date in format of m-d-y
 *
 * @param {string} dateString Date string, example 2020-05-03T04:41:12
 *
 * @return {string}
 */
export const getFormattedDate = dateString => {
    if (!dateString) {
        return '';
    }

    const date = new Date(dateString);

    return dateFormat(date, 'mmmm dS, yyyy');
};

/**
 * Remove the trailing slash from a string.
 *
 * @param {String } targetString Target string.
 * @return {string} String with trailing slash removed.
 */
export const removeTrailingSlash = targetString => {
    if (!targetString) {
        return '';
    }

    return targetString.replace(/\/$/, '');
};

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = content => (process.browser ? DOMPurify.sanitize(content) : content);
