/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/pre-register',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSdTS4YPP9S3nv9hRs-eiXlWGjJNhQkyik0h-WDacmlYgZBYug/viewform?usp=sf_link',
        permanent: false,
      },
      // {
      //   source: '/discord',
      //   destination: 'https://discord.gg/AyEycmKE',
      //   permanent: false,
      // },
      // {
      //   source: '/rubric',
      //   destination: 'https://docs.google.com/forms/d/e/1FAIpQLScdQU6D-vqAOQyHoW37foBeUwNXCHJJ6k65XnrAmfe49Oorlg/viewform?usp=sf_link',
      //   permanent: false,
      // }
    ]
  },
}
