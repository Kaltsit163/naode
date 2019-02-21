console.log('before require');

const http = require('./module');

http();

console.log('after require');

http();

console.log(require.cache);

// 当然模块首次被require的时候，方法会暴露，代码会执行
// 但是在此被require的时候，不会执行的；
// 并且执行过一次之后，这个模块的导出就会被缓存到require这个对象里面去, 所以不会在此执行整个module