import Crypto from 'crypto';

const GravatarUrl = (user, size) => {
    const gravatarId = Crypto
      .createHash("md5")
      .update(user.email.toLowerCase())
      .digest("hex");
    return `https://secure.gravatar.com/avatar/${gravatarId}?s=${size}`;
}

export default GravatarUrl;