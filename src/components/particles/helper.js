export function autoParagraph(html) {
    if (!html) return null;
    return `<p>${html.split(/\n/).join('</p>\n<p>')}</p>`;
}

export function decodeHTML(html) {
    if (!html) return null;
    // eslint-disable-next-line no-param-reassign
    html = html.replace('amp;', '');
    return html.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
}

/* TODO: Refactor when image?imageFile is possible */
export function isFluid(image) {
    if (!image) return false;
    if (!image.imageFile) return false;
    if (!image.imageFile.childImageSharp) return false;
    if (!image.imageFile.childImageSharp.fluid) return false;
    return true;
}

export function httpTohttps(html) {
    if (!html) return null;
    return html.replace('http://', 'https://');
}

export function isEmptyObject(obj) {
    if (!obj) return null;
    return Object.entries(obj).length === 0 && obj.constructor === Object;
}

export function isInternal(url) {
    if (!url) return false;
    if (url.startsWith('mailto:')) return false;
    if (url.startsWith('tel:')) return false;
    if (url.startsWith('http')) return false;
    return true;
}

export function randomID() {
    return Math.random().toString(36).substring(7);
}

export function removeDimensions(html) {
    if (!html) return null;
    // eslint-disable-next-line no-param-reassign
    html = html.replace(/width="[^"]*"/g, '');
    // eslint-disable-next-line no-param-reassign
    html = html.replace(/height="[^"]*"/g, '');
    return html;
}

export function removeOrphans(html) {
    if (!html) return null;
    return html.replace(/ ([^ ]*)$/, ' $1');
}

export function slugTitle(html) {
    if (!html) return null;
    // eslint-disable-next-line no-param-reassign
    html = html.replace('-', ' ');
    // eslint-disable-next-line no-param-reassign
    html = html.toLowerCase().split(' ');
    for (let i = 0; i < html.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        // eslint-disable-next-line no-param-reassign
        html[i] = html[i].charAt(0).toUpperCase() + html[i].substring(1);
    }
    // Directly return the joined string
    return html.join(' ');
}

export function YouTubeGetID(url) {
    if (!url) return null;
    // eslint-disable-next-line no-param-reassign
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_]/i)[0] : url[0];
}
