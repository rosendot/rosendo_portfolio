import Link from "next/link";
import Image from "next/image";

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Example Certification",
      issuer: "Issuing Organization",
      date: "January 2025",
      credentialId: "CERT-12345",
      description:
        "Brief description of what this certification demonstrates or the skills it validates.",
      category: "Development",
      // image: "/certificates/example-cert.png", // Uncomment when you add images
    },
    // Add more certifications here as you earn them
  ];

  const licenses = [
    {
      id: 1,
      title: "Example License",
      issuer: "Licensing Body",
      date: "January 2025",
      licenseNumber: "LIC-12345",
      expiryDate: "January 2028",
      description: "Brief description of what this license authorizes.",
      category: "Professional",
      // image: "/licenses/example-license.png", // Uncomment when you add images
    },
    // Add more licenses here as you earn them
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-block mb-8 text-purple-400 hover:text-purple-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Certifications & Licenses
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Professional certifications and licenses demonstrating expertise and
            qualifications.
          </p>

          {/* Certifications Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Certifications
            </h2>

            {certifications.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-purple-500 transition-all overflow-hidden"
                  >
                    {/* Uncomment when you add certificate images
                    {cert.image && (
                      <div className="relative aspect-[16/9] bg-slate-700">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {cert.title}
                          </h3>
                          <p className="text-purple-300 font-medium">
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-xs font-semibold">
                          {cert.category}
                        </span>
                      </div>

                      <p className="text-slate-300 mb-4 text-sm">
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div>
                          <span className="font-semibold">Issued: </span>
                          {cert.date}
                        </div>
                        {cert.credentialId && (
                          <div>
                            <span className="font-semibold">ID: </span>
                            {cert.credentialId}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-12 border border-slate-700 text-center">
                <p className="text-slate-400">
                  Certifications will be added here as they are earned.
                </p>
              </div>
            )}
          </div>

          {/* Licenses Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Licenses</h2>

            {licenses.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {licenses.map((license) => (
                  <div
                    key={license.id}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-purple-500 transition-all overflow-hidden"
                  >
                    {/* Uncomment when you add license images
                    {license.image && (
                      <div className="relative aspect-[16/9] bg-slate-700">
                        <Image
                          src={license.image}
                          alt={license.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {license.title}
                          </h3>
                          <p className="text-purple-300 font-medium">
                            {license.issuer}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-green-600/30 text-green-200 rounded-full text-xs font-semibold">
                          {license.category}
                        </span>
                      </div>

                      <p className="text-slate-300 mb-4 text-sm">
                        {license.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div>
                          <span className="font-semibold">Issued: </span>
                          {license.date}
                        </div>
                        {license.licenseNumber && (
                          <div>
                            <span className="font-semibold">Number: </span>
                            {license.licenseNumber}
                          </div>
                        )}
                        {license.expiryDate && (
                          <div>
                            <span className="font-semibold">Expires: </span>
                            {license.expiryDate}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-12 border border-slate-700 text-center">
                <p className="text-slate-400">
                  Licenses will be added here as they are obtained.
                </p>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {certifications.length}
              </div>
              <div className="text-slate-300">
                {certifications.length === 1
                  ? "Certification"
                  : "Certifications"}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                {licenses.length}
              </div>
              <div className="text-slate-300">
                {licenses.length === 1 ? "License" : "Licenses"}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {certifications.length + licenses.length}
              </div>
              <div className="text-slate-300">Total Credentials</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Committed to Continuous Learning
            </h2>
            <p className="text-purple-100 mb-6">
              I regularly pursue certifications and training to stay current
              with industry best practices and emerging technologies.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-purple-900 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
