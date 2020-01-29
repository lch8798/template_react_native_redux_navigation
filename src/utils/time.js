export default {
    awaitTimeout(delay) {
        return new Promise(resolve => setTimeout(resolve, delay))
    },
};