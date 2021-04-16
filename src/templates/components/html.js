import React from 'react';

const Html = settings => {
    // eslint-disable-next-line camelcase
    const { _css_classes, html } = settings;
    return (
        <div
            // eslint-disable-next-line camelcase
            className={_css_classes}
            settings={settings}
            dangerouslySetInnerHTML={{
                __html: html,
            }}
        />
    );
};

export default Html;
