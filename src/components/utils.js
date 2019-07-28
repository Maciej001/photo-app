/**
 * Creates an interesction observer
 * Observer will call the callback whenever target enters/leavs roort vieport
 * More info -> https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/
 *           -> https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * @function createObserver
 * @param {function} callback
 * @returns instance of IntersectionObserver
 */
export const createObserver = callback => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1
    };

    const observer = new IntersectionObserver(callback, options);
    const target = document.querySelector("#last-photo");
    observer.observe(target);

    return observer;
};
