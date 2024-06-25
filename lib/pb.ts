import PocketBase from 'pocketbase';
declare global {
    var pb: PocketBase | undefined;
  }
  
  const pb = global.pb || new PocketBase(process.env.POCKETBASE_URL);
  const token = process.env.TOKEN;
  if(token){
    pb.authStore.save(token, {verified : false})
  }
  pb.beforeSend = function (url, options) {
    options.timeout = 10000; // Increase timeout to 10 seconds
    return { url, options };
  };
  
  if (process.env.NODE_ENV !== 'production') {
    global.pb = pb;
  }

  export default pb;