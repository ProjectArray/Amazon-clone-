import axios from "axios";

// try {
    // let source = axios.CancelToken.source();
    const instance = axios.create({
    // baseURL:'http://127.0.0.1:5001/e-clone-47782/us-central1/api'   //The API (cloud function) URL. This is the local cloud functioin url which is operating from our local computer (localhost)
    baseURL:'https://us-central1-e-clone-47782.cloudfunctions.net/api'   //The API (cloud function) URL. This is the live cloud function url which is sitting on the cloud
})
// } catch (error) {
    // if (axios.isCancel(error)) {
        // console.log("soory you refresh it component get unmounted")
    // } else {
        // throw error;
    // }

// }

// Add an interceptor to set up the cancel token for every request
instance.interceptors.request.use((config) => {
    const source = axios.CancelToken.source();
    config.cancelToken = source.token;
    config.cancelSource = source; // Store the source on the request config
    return config;
  });

export default instance