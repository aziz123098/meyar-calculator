# Meyar 0.3 design

Ivory #f6f5ef, forest #245b46, ink #242d29. Bundled Arabic font, compact outlined icons, 10–16px corner radius and 48px minimum primary tap targets. Dark appearance follows the device or the user selection.

Routes: home, general, gpa, age, finance, loans, vat, zakat, percent, history, reports, settings, welcome, login, signup, forgot, verify, reset-password.

Authentication screens are explicitly unavailable until a secure backend and Sign in with Apple are configured. They validate inputs but do not transmit or persist passwords, create accounts, send email, or show false success. Verification/reset screens are scaffolding only. Account deletion and signed-in profile/logout must be implemented with real authentication.

Reports support selection, optional title, HTML content preview and PDF export/native sharing. History remains local; theme is a separate preference. Existing calculations and saved record format are retained. Native visual QA remains required.

## Screens

![home](images/home-v3.png)
![general](images/general-v3.png)
![login](images/login-v3.png)
![signup](images/signup-v3.png)