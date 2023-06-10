/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  
  async redirects() {
    return [
      {
        source: '/waitlist',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSdt9uy6hXMq6LT0aJKJZWOW96olBscj69L01gvKTW_sj5HOAA/viewform?usp=sf_link',
        permanent: false,
      },
      {
        source: '/prospectus',
        destination: 'https://drive.google.com/file/d/1ur_ZsYZbZkSXKHa9fWo_soazs_In-4Ez/view',
        permanent: false,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/AyEycmKE',
        permanent: false,
      },
      {
        source: '/rubric',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLScdQU6D-vqAOQyHoW37foBeUwNXCHJJ6k65XnrAmfe49Oorlg/viewform?usp=sf_link',
        permanent: false,
      }
    ]
  },
}
