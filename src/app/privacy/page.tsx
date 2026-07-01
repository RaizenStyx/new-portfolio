export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the web developer portfolio site.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-semibold">Privacy Policy</h1>

      <section className="mt-6 space-y-6">
        <p>
          This privacy policy explains how information is collected, used, and protected on this web developer portfolio site.
        </p>

        <div>
          <h2 className="text-2xl font-semibold">Information Collected</h2>
          <p className="mt-2">
            When you use the contact form on this website, we collect your name, email address, phone number, and any message content you provide.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">How We Use the Information</h2>
          <p className="mt-2">
            This information is strictly used to respond directly to your project inquiries and professional communications. We do not sell, rent, or share your personal information with third parties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p className="mt-2">
            We implement standard security measures to keep your data safe. However, please remember that no transmission over the internet is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2">
            If you have any questions, reach out to <a href="mailto:me@calexreed.dev" className="text-blue-500 hover:underline">
              me@calexreed.dev
            </a>.
          </p>
        </div>
      </section>
    </main>
  );
}
