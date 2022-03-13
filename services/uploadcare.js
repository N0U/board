const axios = require('axios');
const PUBLIC_KEY = process.env.UPLOADCARE_PUBLIC_KEY;
const UPLOADCARE_TIMEOUT = 0;

const publicApi = axios.create({
  baseURL: 'https://upload.uploadcare.com',
  timeout: UPLOADCARE_TIMEOUT,
  proxy: false,
});

const privateApi = axios.create({
  baseURL: 'https://api.uploadcare.com',
  timeout: UPLOADCARE_TIMEOUT,
  proxy: false,
  headers: {
    'Authorization': `Uploadcare.Simple ${PUBLIC_KEY}:${process.env.UPLOADCARE_SECRET_KEY}`,
  },
});

module.exports.getGroupUuid = function (url) {
  return url.match(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}~\d+/)[0];
}

module.exports.createImageUrl = function (uuid, previewSize) {
  const fullUrl = `https://ucarecdn.com/${uuid}/`;
  const thumbnailUrl = fullUrl + `-/preview/${previewSize}x${previewSize}`;
  return {
    fullUrl,
    thumbnailUrl,
  };
}

module.exports.getGroupInfo  = async function (uuid) {
  const resp = await publicApi.get('/group/info', {
    params: {
      pub_key: PUBLIC_KEY,
      group_id: uuid,
    },
  });
  return resp.data;
}

module.exports.storeGroup = async function (uuid) {
    await privateApi.put(`groups/${uuid}/storage/`);
}
