const axios = require('axios');
const { decorate } = require('./transaction-decorator.js');
const Uploadcare = require('./uploadcare.js');
const CheckVideo = require('./video-checker.js');
const Attachment = require('../models/attachment.js');

const PREVIEW_SIZE = 300;

class AttachmentService {
  constructor() {
    decorate(this, 'create');
  }

  async createImages(post, groupUrl) {
    const groupUuid = Uploadcare.getGroupUuid(groupUrl);
    const info = await Uploadcare.getGroupInfo(groupUuid);
    const attachments = [];
    for(const f of info.files) {
      const { uuid } = f;
      attachments.push(await post.createAttachment({
        fileId: uuid,
        type: 'image',
        ...Uploadcare.createImageUrl(uuid, PREVIEW_SIZE),
      }));
    }
    return { attachments, groupUuid };
  }

  async createVideo(post, type, url) {
    return await post.createAttachment({
      type: type,
      fullUrl: url,
    });
  }

  async create(post, attachments) {
    try {
      let attachedResources = [];
      let groupUuid;
      for(const { url, type } of attachments) {
        if(type === 'images') {
          const images = await this.createImages(post, url);
          attachedResources = [...attachedResources, ...images.attachments];
          groupUuid = images.groupUuid;
        } else {
          const video = await this.createVideo(post, type, url);
          attachedResources.push(video);
        }
      }

      if(groupUuid) {
        await Uploadcare.storeGroup(groupUuid);
      }
      return attachedResources;
    } catch(error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = AttachmentService;
