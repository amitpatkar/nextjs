// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("CSP Logging");
  res.status(200).json({ name: 'CSP Logging 1' })
}
