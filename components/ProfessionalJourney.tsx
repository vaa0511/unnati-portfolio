const cards = [
  {
    title: "Technical Leadership",
    desc: "Leading development teams and project delivery."
  },
  {
    title: "Enterprise Solutions",
    desc: "Building scalable business applications."
  },
  {
    title: "Client Collaboration",
    desc: "Managing stakeholders and requirements."
  },
  {
    title: "Agile Delivery",
    desc: "Driving projects through Agile methodologies."
  },
];

export default function ProfessionalJourney() {
  return (
    <section
      id="journey"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <p className="text-blue-600 uppercase tracking-[4px] font-semibold">
              Professional Journey
            </p>

            <h2 className="text-5xl font-bold mt-4 text-slate-900">
              Building Technology with Purpose
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-9">
              I am a Technical Team Lead with over 9 years of
              experience in software development,
              project delivery,
              and client relationship management.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-9">
              My focus is on creating scalable solutions,
              empowering teams,
              and delivering measurable business value.
            </p>

            <div className="mt-10 p-6 bg-sky-50 rounded-3xl">

              <h3 className="text-2xl font-bold text-blue-600">
                My Approach
              </h3>

              <p className="mt-4 text-slate-600">
                I believe successful products are built
                through collaboration,
                continuous improvement,
                and a strong focus on customer needs.
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="grid grid-cols-2 gap-6">

              {cards.map((card) => (

                <div
                  key={card.title}
                  className="
                  p-8
                  rounded-3xl
                  bg-sky-50
                  border
                  border-blue-100
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition
                  "
                >

                  <h3 className="text-2xl font-bold text-blue-600">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {card.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}