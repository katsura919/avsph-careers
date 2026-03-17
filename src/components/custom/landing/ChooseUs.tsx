import { MessageSquare, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function ChooseUs() {
  const steps = [
    {
      number: "01",
      title: "Submit Your Application",
      description:
        "Create your professional profile and showcase your skills. We're looking for the top Virtual Assistant talent in the Philippines.",
      icon: <MessageSquare className="w-8 h-8 text-white" />,
    },
    {
      number: "02",
      title: "Get Screened & Matched",
      description:
        "Complete our rigorous assessment and interview process. We'll match you with a premium international client that fits your expertise.",
      icon: <Users className="w-8 h-8 text-white" />,
    },
    {
      number: "03",
      title: "Start Your Global Career",
      description:
        "Join an elite team and begin working remotely with full support. Enjoy stable income, growth opportunities, and a global network.",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="section relative overflow-hidden"
      style={{ background: "var(--primary)" }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--secondary) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-wider mb-4 block"
            style={{ color: "var(--background)" }}
          >
            HIRING PROCESS
          </span>
          <h2 className="text-white mb-4">
            Getting Started is{" "}
            <span style={{ color: "var(--accent)" }}>Simple</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            We&apos;ve streamlined the process to help you land your dream
            remote role with top international companies as quickly as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="relative text-center flex flex-col items-center">
                {/* Icon with Step Label */}
                <div className="relative inline-block mb-8">
                  {/* Icon Circle */}
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full"
                    style={{
                      background: "var(--secondary)",
                      color: "var(--primary)",
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/booking"
            className="btn-primary inline-flex items-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}