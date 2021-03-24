export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function convertToMs(minutes = 0, seconds = 0) {
    return ((minutes * 60) + seconds) * 1000;
}