export function generateEmployeeRegistration(company, fullname, email, department, address, dob, maritalStatus, phone, education, joined, userId, password) {
    return (
        `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    color: #333;
                    line-height: 1.6;
                    background-color: #f8f9fa;
                    padding: 30px;
                    margin: 0;
                }
                .container {
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    width: 600px;
                    margin: 0 auto;
                }
                h1 {
                    color: #2c3e50;
                    font-size: 26px;
                    margin-bottom: 20px;
                    text-align: center;
                }
                p {
                    margin-bottom: 15px;
                    font-size: 16px;
                }
                .welcome {
                    font-size: 18px;
                    color: #27ae60;
                    text-align: center;
                    margin-bottom: 30px;
                    font-weight: bold;
                }
                .button {
                    background-color: #3498db;
                    color: #fff;
                    padding: 12px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    display: inline-block;
                    margin-top: 20px;
                    font-size: 16px;
                    text-align: center;
                }
                .footer {
                    font-size: 12px;
                    color: #888;
                    text-align: center;
                    margin-top: 30px;
                }
                .header-logo {
                    display: block;
                    width: 150px;
                    margin: 0 auto;
                }
                .details {
                    background-color: #f1f1f1;
                    padding: 15px;
                    border-radius: 5px;
                    margin-top: 20px;
                }
                .details p {
                    margin: 5px 0;
                }
                .footer p {
                    font-size: 12px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <img src="https://imgs.search.brave.com/eU08RsZCToLd2fIoElL7IntuMTyFlOpKFTHm6--lWmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduaGlsbC5j/b20vcmVzaXplX2lt/Zy5waHA_YXR5cD1w/YWdlX2ZpbGUmcHRo/PWZ0X2NhX2N0fHwy/NTl8fGNvbnRlc3Rm/aWxlXzUmZmxwPTE3/MTUzMTY1NDUtNTQy/NDI5NDA2NjYzZGE3/NDFkZTA2OTAtMjYw/MDM1NjkucG5n" alt="${company} Logo" class="header-logo" />
                <h1>Welcome to ${company}!</h1>
                
                <p class="welcome">We're excited to have you on board, ${fullname}!</p>
                
                <p>We are thrilled to inform you that your account has been successfully created with us. Your journey at ${company} begins now, and we are here to support you every step of the way.</p>
                
                <div class="details">
                    <p><strong>User ID:</strong> ${userId}</p>
                    <p><strong>Password:</strong> ${password}</p>
                </div>
                
                <p>Please log in to your account using the above credentials. Once logged in, we strongly recommend that you update your password to something more secure.</p>
                
                
                <p>If you have any questions or need any assistance, please don't hesitate to contact our support team. We're here to help!</p>
                
                <p>We look forward to seeing you thrive and succeed at ${company}.</p>
                
                <p>Best regards,</p>
                <p><strong>${company} HR Team</strong></p>
            </div>

            <div class="footer">
                <p>For any inquiries, please contact us at support@${company}.com.</p>
                <p>Stay connected with us:</p>
                <p>
                    <a href="https://facebook.com/${company}" target="_blank">Facebook</a> | 
                    <a href="https://twitter.com/${company}" target="_blank">Twitter</a> | 
                    <a href="https://linkedin.com/company/${company}" target="_blank">LinkedIn</a>
                </p>
            </div>
        </body>
        </html>
        `
    );
}
