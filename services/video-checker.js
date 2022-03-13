const axios = require('axios');

async function isYoutubeVideoExist(url) {
  try {
    const res = await axios.get(
      `https://www.youtube.com/oembed?url=${url}&format=json`, {
      validateStatus: status => status < 500,
    });
    return res.status === 200 ? res.data : false;
  } catch(error) {
    console.log(error);
    throw error;
  }
}

async function isTikTokVideoExists(url) {
  try {
    const res = await axios.get(
      `https://www.tiktok.com/oembed?url=${url}&format=json`, {
      validateStatus: status => status < 500,
    });
    return res.status === 200 ? res.data : false;
  } catch(error) {
    console.log(error);
    throw error;
  }
}

module.exports = async function(urlString) {
  try {
    const url = new URL(urlString);
    const domain = url.hostname;
    console.log(url, domain);
    if(domain.includes('youtube.com') || domain.includes('youtu.be')) {
      const data = await isYoutubeVideoExist(urlString);
      console.log(data);
      return {
        provider: 'youtube',
        ...data,
      };
    } else if(domain.includes('tiktok.com')) {
      const data = await isTikTokVideoExists(urlString);
      console.log(data);
      return {
        provider: 'tiktok',
        ...data,
      }
    }
  } catch(error) {
    console.log(error);
    if(error instanceof TypeError) {
      return false;
    }
  }
}
