import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const API_KEY = process.env.BREVO_API_KEY;

        if (!API_KEY) {
            console.error("BREVO_API_KEY is missing");
            return NextResponse.json({ error: "Newsletter service is misconfigured" }, { status: 500 });
        }

        const response = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "api-key": API_KEY,
            },
            body: JSON.stringify({
                email: email,
            }),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            console.error("Brevo API error:", data);

            // Format common error messages
            let errorMessage = "Failed to subscribe";
            if (data.message) {
                errorMessage = data.message;
            }
            if (data.code === 'duplicate_parameter') {
                errorMessage = "You are already subscribed!";
            }

            return NextResponse.json(
                { error: errorMessage },
                { status: response.status }
            );
        }

        return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });

    } catch (error) {
        console.error("Newsletter API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
