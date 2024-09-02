import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

// console.log(secretKey);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // Extract the reCAPTCHA token from the request body
  const { recaptchaToken } = req.body;

  console.log(recaptchaToken);

  if (!recaptchaToken) {
    return res
      .status(400)
      .json({ success: false, message: "reCAPTCHA token is missing" });
  }

  try {
    // Send a request to Google's reCAPTCHA verification endpoint
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: recaptchaToken,
        },
      }
    );

    // Handle the response from the reCAPTCHA verification
    if (response.data.success) {
      res.status(200).json({ success: true });
    } else {
      res
        .status(400)
        .json({ success: false, message: "reCAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
