import React from 'react';

const withRenderFunction = (fn) => (Wrapped) => {
    return (props) => <Wrapped {...props} renderItem={fn} />;
};

export default withRenderFunction;