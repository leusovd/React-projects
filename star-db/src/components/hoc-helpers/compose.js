const compose = (...funcs) => (Component) => {
    return funcs.reduceRight((prev, f) => f(prev), Component);
}

export default compose;