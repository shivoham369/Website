import { Metadata } from "next";
import SectionHeaderTop from "@/components/Common/SectionHeaderTop";

export const metadata: Metadata = {
  title: "Press & Media",
  description: "Latest press releases and media coverage from Academics and Career Council.",
};

const pressReleases = [
  {
    title: "AnC Council Launches New Student Support Initiatives",
    date: "June 2026",
    description: "Empowering students through academic and career guidance with new mentorship programs and workshops.",
  },
  {
    title: "IIT Kanpur AnC Hosts Industry Interaction Series",
    date: "May 2026",
    description: "Students connected with leading professionals through webinars, panels, and mentorship sessions.",
  },
];

const mediaCoverage = [
  {
    title: "AnC Council Recognized for Campus Outreach",
    source: "Campus News",
    link: "#",
  },
  {
    title: "Student Success Stories from the AnC Initiative",
    source: "Education Daily",
    link: "#",
  },
];

const PressMediaPage = () => {
  return (
    <main className="pb-20 pt-40">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeaderTop
          headerInfo={{
            title: "Press & Media",
            subtitle: "News and coverage",
            description:
              "Stay up to date with the latest announcements, press releases, and media highlights from AnC Council.",
          }}
        />

        <section className="mt-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm dark:border-strokedark dark:bg-blacksection">
              <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">Press Releases</h2>
              <div className="space-y-6">
                {pressReleases.map((release) => (
                  <article key={release.title} className="rounded-3xl border border-[#F3F4F6] p-6 transition hover:border-primary dark:border-strokedark">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary">{release.date}</p>
                    <h3 className="mt-3 text-xl font-semibold text-black dark:text-white">{release.title}</h3>
                    <p className="mt-3 text-sm text-body-color dark:text-white/70">{release.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#E5E7EB] bg-white p-8 shadow-sm dark:border-strokedark dark:bg-blacksection">
              <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">Media Coverage</h2>
              <div className="space-y-6">
                {mediaCoverage.map((coverage) => (
                  <article key={coverage.title} className="rounded-3xl border border-[#F3F4F6] p-6 transition hover:border-primary dark:border-strokedark">
                    <p className="text-sm uppercase tracking-[0.18em] text-body-color dark:text-white/70">{coverage.source}</p>
                    <h3 className="mt-3 text-xl font-semibold text-black dark:text-white">{coverage.title}</h3>
                    <a href={coverage.link} className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80">
                      Read more
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PressMediaPage;
