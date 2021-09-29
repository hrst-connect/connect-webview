/**
 * Asynchronous sleep function
 * @param {Number} ms Sleep time [milliseconds] 
 * @returns Promise that will resolve when sleep is complete
 */
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default sleep