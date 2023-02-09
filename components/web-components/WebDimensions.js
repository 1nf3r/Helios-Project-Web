import { useState,useEffect } from 'react'

const useWindowDimensions = function () {
    let dimensions = useState({
        width: undefined,
        height: undefined,
    }), windowDimensions = dimensions[0], setWindowDimensions = dimensions[1];
    useEffect(function () {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []); // Empty array ensures that effect is only run on mount
    return windowDimensions;
};

export default useWindowDimensions