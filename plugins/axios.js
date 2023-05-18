import https from 'https';

export default function ({$axios, store}) {
  $axios.defaults.headers.common = { Authorization: `Bearer ${process.env.PRIVATE_TOKEN}` };
  const agent = new https.Agent({
    rejectUnauthorized: false
  });
  $axios.onRequest(config => {
    if (process.env.dev) {
      config.httpsAgent = agent;
    }
  });
}
