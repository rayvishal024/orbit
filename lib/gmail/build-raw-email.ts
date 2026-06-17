
export function buildRawEmail(input: {
     to: string;
     subject: string;
     body: string;
}) {
     const email = [
          `To: ${input.to}`,
          `Subject: ${input.subject}`,
          "MIME-Version: 1.0",
          'Content-Type: text/html; charset="UTF-8"',
          "",
          `
      <html>
        <body>
          ${input.body}
        </body>
      </html>
    `,
     ].join("\r\n");


     return Buffer.from(email)
          .toString("base64")
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
}