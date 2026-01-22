const withoutArtiflex = [
  {
    title: "Blind security visibility",
    desc: "Fragmented tools, unmanaged endpoints, and misconfigured cloud environments create gaps you can’t clearly see or assess.",
  },
  {
    title: "Reactive incident handling",
    desc: "Alerts pile up without prioritisation, causing delayed responses and extended security incidents.",
  },
  {
    title: "Siloed IT operations",
    desc: "Disconnected dashboards across security, cloud, and infrastructure slow down audits and decision-making.",
  },
  {
    title: "Unclear technology ROI",
    desc: "Overlapping licenses, inefficient infrastructure spend, and limited insight into security effectiveness.",
  },
];

const withArtiflex = [
  {
    title: "End-to-end security clarity",
    desc: "Comprehensive cyber security services across cloud, network, endpoints, and applications—eliminating blind spots.",
  },
  {
    title: "Proactive threat prevention",
    desc: "Early vulnerability detection using ethical hacking, SIEM, PAM, NDR, and continuous risk assessment.",
  },
  {
    title: "Integrated IT & cloud strategy",
    desc: "Unified cloud, infrastructure, and consultancy services delivering scalable and secure IT foundations.",
  },
  {
    title: "Optimised IT investment",
    desc: "Right-sized solutions aligned with business goals, backed by expert consultancy and global delivery.",
  },
];

export default function ArtiflexComparison() {
  return (
    <section className="bg-[#1b1b1b] py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-light
            text-white
          ">
            See the difference.{" "}
            <span className="font-semibold">Make clear decisions</span>
          </h2>

          <p className="
            text-sm
            sm:text-base
            text-gray-400
            max-w-3xl
            mx-auto
            mt-4
          ">
            Artiflex brings clarity across security, cloud, and infrastructure—
            turning fragmented insights into confident action.
          </p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* WITHOUT ARTIFLEX */}
          <div className="border border-gray-700 rounded-xl p-5 sm:p-8">
            <span className="
              inline-block
              mb-6 sm:mb-8
              px-3 py-1
              rounded
              border border-gray-600
              text-xs sm:text-sm
              text-gray-300
            ">
              WITHOUT ARTIFLEX
            </span>

            <div className="space-y-6 sm:space-y-8">
              {withoutArtiflex.map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-gray-200 font-semibold mb-2 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  {idx !== withoutArtiflex.length - 1 && (
                    <div className="mt-5 sm:mt-6 h-px bg-gray-700" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* WITH ARTIFLEX */}
          <div className="bg-blue-200 rounded-xl p-5 sm:p-8 shadow-lg">
            <span className="
              inline-block
              mb-6 sm:mb-8
              px-3 py-1
              rounded
              bg-blue-900
              text-xs sm:text-sm
              text-white
            ">
              WITH ARTIFLEX
            </span>

            <div className="space-y-6 sm:space-y-8">
              {withArtiflex.map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-gray-900 font-semibold mb-2 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  {idx !== withArtiflex.length - 1 && (
                    <div className="mt-5 sm:mt-6 h-px bg-blue-400/60" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
