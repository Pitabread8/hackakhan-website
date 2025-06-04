/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/waitlist',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSf63JwhRUEEuEbY0YZ_zgTjztkqPKKCn6TMQPhPVWPL-vWYNg/viewform?usp=dialog',
        permanent: false,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/P7kwYHAEM6',
        permanent: false,
      },
      // {
      //   source: '/rubric',
      //   destination: 'https://docs.google.com/forms/d/e/1FAIpQLScdQU6D-vqAOQyHoW37foBeUwNXCHJJ6k65XnrAmfe49Oorlg/viewform?usp=sf_link',
      //   permanent: false,
      // }
    ]
  },
}
