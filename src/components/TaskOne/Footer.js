import React from 'react';

function Footer({ loading }) {
    return loading ? <div>Loading more items...</div> : null;
}

export default Footer;
