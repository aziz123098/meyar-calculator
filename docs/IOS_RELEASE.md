# iOS release preparation

This branch prepares Meyar for testing. It is not an App Store release.

## Build on a Mac

1. Install supported Xcode and Node.js 22+.
2. Run `npm ci`, `npm test`, and `npm run ios:sync`.
3. Run `npm run ios:open`. Allow Swift Package Manager to resolve packages.
4. Set the App target's Signing & Capabilities development team. Verify `com.aziz123098.meyar` is available; update it in Capacitor configuration and Xcode if needed.
5. Build and run in Simulator and on a physical iPhone. Do not run `ios:add` again: the project already exists.

The native project includes a 1024px icon, branded launch images, Arabic localization metadata, and a privacy manifest declaring FileTimestamp access with reason C617.1 for the Filesystem plugin. Validate the final archive's privacy report and all SDK declarations in Xcode.

## Required device checks

- Test every calculator, reset, Arabic digits, scientific operations, and invalid inputs.
- Check safe areas, keyboard behavior, larger text, VoiceOver, rotation, and small screens. The generated target also supports iPad; test it or intentionally change the supported device family before release.
- Generate PDF and CSV files through the native share sheet. Save to Files, open the output, cancel sharing, and repeat offline.
- Confirm saved history survives closing/reopening; deleting individual results and clearing all history work.
- Review GPA scales against the intended universities and explain assumptions in reports.
- Test first launch in airplane mode; all calculation/report assets should be bundled.
- Perform a real native build and archive. Web smoke checks are not a substitute.

## App Store Connect

- Enroll in Apple Developer and create the matching app record.
- Confirm the support email in `privacy.html`, publish that page at an accessible HTTPS URL, and provide support/privacy URLs in App Store Connect.
- Review privacy answers against the shipped build. This build has no analytics, ads, backend, login, or purchases. Changes require reassessment.
- Supply screenshots captured from the actual native build, description, category, age rating, and review contact. Do not submit browser screenshots as device screenshots.
- Increment the build number, archive with Xcode, validate, and upload to TestFlight.
- Test through TestFlight before submitting for App Review. Acceptance is not guaranteed.

Suggested Arabic description:

معيار يجمع حساباتك اليومية في واجهة عربية واضحة. استخدم الحاسبة العامة والعمليات العلمية، واحسب المعدل والعمر والنسب والضريبة والتقديرات التمويلية. احفظ النتائج على جهازك، ثم شاركها أو صدّر تقارير PDF وسجل CSV. لا يتطلب حسابًا، والتقارير للاستخدام الشخصي وليست مستندات معتمدة.

## Payments

No payment code or paid entitlement exists in this build. Before adding a Pro purchase, implement StoreKit entitlement verification, restore purchases, refund/revocation handling, offline entitlement behavior, and sandbox testing. Review regional App Store rules and complete the Paid Apps Agreement, tax, and banking setup.

Official references:
- https://developer.apple.com/programs/enroll/
- https://developer.apple.com/app-store/review/guidelines/
- https://capacitorjs.com/docs/ios
