const axios = require('axios');
const { decorate } = require('./transaction-decorator.js');
const Attachment = require('../models/attachment.js');

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

async function getGroupInfo(uuid) {
  const resp = await publicApi.get('/group/info', {
    params: {
      pub_key: PUBLIC_KEY,
      group_id: groupUuid,
    },
  });
  return resp.data;
}

async function storeGroup(uuid) {
    await privateApi.put(`groups/${groupUuid}/storage/`);
}

class AttachmentService {
  constructor() {
    decorate(this, 'create');
  }

  async getGroupInfo() {

  }
  async create(post, attachmentUrl) {
    try {
      const groupUuid = attachmentUrl.match(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}~\d+/)[0];
      const info = await getGroupInfo(groupUuid);
      const attachments = [];
      for(const f of info.files) {
        const { uuid } = f;
        attachments.push(await post.createAttachment({
          fileId: uuid,
          fullUrl: `https://ucarecdn.com/${uuid}/`,
          thumbnailUrl: `https://ucarecdn.com/${uuid}/-/preview/300x300/`,
        }));
      }
      await storeGroup();
      return attachments;
    } catch(error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = AttachmentService;
