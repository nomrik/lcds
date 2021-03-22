export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}