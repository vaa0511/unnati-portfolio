import Image from "next/image";
import { Award, Zap, Globe, EarthIcon,MapPin, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-sky-50 pt-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">

          <div>

            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full
bg-blue-100 text-blue-700 font-medium">
             🟢 Available for Immediate Joining
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4">
              Unnati Mandaliya
            </h1>

            <h2 className="mt-6 text-3xl font-bold text-blue-600">
              Technical Team Lead
            </h2>

            <p className="mt-2 text-xl text-slate-600">
                Senior PHP Laravel Developer • IT Project Manager
            </p>

            {/* <p className="text-xl text-gray-700">
              Project Manager
            </p> */}
            <div className="flex gap-6 mt-4 text-slate-600">
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500" />
                    India
                </div>

                <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                    Immediate Joiner
                </div>

                <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-yellow-500" />
                    Remote • Hybrid • Relocation
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="bg-white rounded-2xl border border-blue-100 shadow-sm
hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6">
                <Award className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-3xl font-bold text-blue-600">
                  9+
                </h3>

                <p className="text-slate-500 font-medium mt-2">
                Professional
Experience
                </p>

              </div>

              <div className="bg-white rounded-2xl border border-blue-100 shadow-sm
hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6">
                <Zap className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-3xl font-bold text-blue-600">
                  Immediate
                </h3>

                <p className="text-slate-500">Joiner</p>

              </div>

              <div className="bg-white rounded-2xl border border-blue-100 shadow-sm
hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6">
                <EarthIcon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-3xl font-bold text-blue-600">
                  Open To
                </h3>
                <p className="text-slate-500">Remote</p>
                <p className="text-slate-500">Hybrid</p>
                <p className="text-slate-500">Relocation</p>
              </div>
            </div>

            <p className="mt-8 text-gray-600 text-lg max-w-xl max-w-lg">
              Building scalable web applications, leading high-performing engineering teams, and delivering innovative technology solutions that create measurable business impact.
            </p>

            <div className="mt-10 flex gap-4">

              <button className="bg-blue-600 shadow-lg text-white hover:shadow-xl px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700
transition duration-300">

                Let&apos;s Connect

              </button>

              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl">

                Download CV

              </button>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-br
from-blue-100 to-blue-300 blur-sm"></div>

              <Image
                src="/profile.jpeg"
                alt="Unnati"
                width={450}
                height={450}
                className="relative rounded-full object-cover shadow-2xl border-8
border-white"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
