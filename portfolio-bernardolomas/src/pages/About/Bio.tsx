export default function Bio() {
  return (
    <section className="max-w-3xl space-y-12 text-zinc-300">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Turning logic into experiences:
        </h1>
        <span className="block text-4xl font-bold text-emerald-300">
          developing software and people
        </span>
      </header>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          About
        </h2>

        <p>
          I am a full stack software developer with experience in both
          technology and education, combining technical problem-solving
          with clear communication and purpose-driven work.
        </p>

        <p>
          Over the past year, I have been building results through academic
          and personal projects, as well as teaching English to more than
          <strong className="text-white"> 20 students</strong>, consistently
          improving their performance through personalized learning
          strategies.
        </p>

        <div className="py-6 text-center">
          <span className="text-2xl font-bold text-emerald-300">
            Learning → Practice → Results
          </span>
        </div>

        <p>
          My focus is on building functional, well-structured systems and
          sharing knowledge in a way that generates real impact.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Real Results
        </h2>

        <ul className="space-y-3">
          <li>
            Built applications in <strong className="text-white">C#</strong>,
            applying Object-Oriented Programming, recursion, and class
            structures to improve execution efficiency and code readability.
          </li>

          <li>
            Developed complete web applications using{" "}
            <strong className="text-white">
              HTML, CSS, and JavaScript
            </strong>
            , with a strong focus on responsiveness and user experience.
          </li>

          <li>
            Implemented simulated APIs with{" "}
            <strong className="text-white">JSON Server</strong> and dynamic
            data integration, delivering functional academic solutions.
          </li>

          <li>
            Acted as <strong className="text-white">technical leader</strong>{" "}
            in group projects, ensuring organized deliveries, code quality,
            and collaboration.
          </li>

          <li>
            Built interactive applications with{" "}
            <strong className="text-white">Node.js and Express</strong>,
            connecting frontend and backend in a modular and efficient way.
          </li>

          <li>
            Taught English using personalized methods, adapting strategies
            to different student profiles and achieving measurable
            improvement in <strong className="text-white">100%</strong> of
            classes.
          </li>
        </ul>
      </div>
    </section>
  );
}
