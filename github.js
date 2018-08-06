class GitHub {
  constructor() {
    this.client_id = '69e9c9b67c1dec56ed08';
    this.client_secret = '0f9fcf5e643b1387cd5da4d86d54aec3a450a3ce';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}