export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not configured.');
    return res.status(500).json({ success: false, message: 'Contact form is not configured.' });
  }

  const { name, email, subject, message } = req.body || {};
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({ success: false, message: 'Please complete all required fields.' });
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim() || `New message from ${name.trim()} via Portfolio`,
      message: message.trim(),
      from_name: `${name.trim()} (Portfolio)`,
      replyto: email.trim(),
    }),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    console.error('Web3Forms submission failed:', result);
    return res.status(502).json({ success: false, message: 'Message delivery failed.' });
  }

  return res.status(200).json({ success: true });
}
