import { CheckCircle } from "lucide-react";

const highlights = [
  "9+ Years Experience",
  "Technical Team Leadership",
  "Laravel & PHP",
  "Project Management",
  "REST API Development",
  "Agile & Scrum",
  "Client Management",
  "Enterprise Solutions",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="text-blue-600 uppercase tracking-[4px] font-semibold">
              About Me
            </p>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              My Professional Journey
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              I am a Technical Team Lead with 9+ years of experience
              in software development, project delivery,
              and client relationship management.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              I specialize in building scalable web applications,
              leading engineering teams,
              and delivering technology solutions
              that create measurable business impact.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="text-blue-600"
                    size={20}
                  />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-sky-50 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-blue-600">
                9+
              </h3>

              <p className="mt-3 text-slate-600">
                Years Experience
              </p>
            </div>

            <div className="bg-sky-50 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-blue-600">
                20+
              </h3>

              <p className="mt-3 text-slate-600">
                Successful Deliveries
              </p>
            </div>

            <div className="bg-sky-50 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-blue-600">
                Team
              </h3>

              <p className="mt-3 text-slate-600">
                Leadership
              </p>
            </div>

            <div className="bg-sky-50 rounded-3xl p-8">
              <h3 className="text-4xl font-bold text-blue-600">
                Business
              </h3>

              <p className="mt-3 text-slate-600">
                Solutions
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}