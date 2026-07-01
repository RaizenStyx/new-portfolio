import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the JSON data sent from the client component
    const body = await request.json();

    // Attach the access key here on the server
    const access_key = process.env.WEB3FORM_ACCESS_KEY;

    const payload = {
      ...body,
      access_key,
    };

    // Forward the request to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      return NextResponse.json({ success: false, message: data.message }, { status: 400 });
    }
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}