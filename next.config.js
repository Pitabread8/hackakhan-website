/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      // {
      //   source: '/register',
      //   destination: 'https://docs.google.com/forms/d/e/1FAIpQLSf2nxLNU3rzZ-kpiV19vN6uXCsjRBuPSfLY1my7Zhe_rpVHJg/viewform?usp=sf_link',
      //   permanent: false,
      // },
      {
        source: '/waitlist',
        destination: 'https://forms.gle/oWA7iKGEg8WUSXbp8',
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
