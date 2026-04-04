import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSingleProject, getSingleSig } from "@/lib/cms";
import { getSigTemplateStyle } from "@/lib/project-templates";
import { cn } from "@/lib/utils";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getSingleProject(slug);

  if (!project) {
    notFound();
  }

  const sig = await getSingleSig(project.sig);
  const style = getSigTemplateStyle(sig?.projectTemplate, sig?.slug ?? project.sig);

  return (
    <main className="min-h-screen px-6 pt-30 pb-16">
      <article className="mx-auto max-w-5xl">
        <div className={cn("overflow-hidden rounded-3xl border bg-card/90", style.cardBorder)}>
          <div className="relative h-64 w-full md:h-80">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className={cn("absolute inset-0 bg-gradient-to-r", style.sectionAccent)} />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {sig ? (
                  <Link
                    href={`/sigs/${sig.slug}`}
                    className={cn("rounded-full border px-3 py-1 text-xs font-semibold", style.sigChip)}
                  >
                    {sig.title}
                  </Link>
                ) : null}
                <span className={cn("rounded-full border px-3 py-1 text-xs font-semibold", style.statusChip)}>
                  {project.status}
                </span>
                <span className="text-xs font-medium text-gray-200">
                  {project.year}
                </span>
              </div>
              <h1 className="text-3xl font-bold font-display text-white md:text-4xl">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="grid gap-10 p-8 md:grid-cols-[1fr_280px]">
            <section>
              <h2 className="text-xl font-semibold text-white">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted">
                {project.description}
              </p>

              <h3 className="mt-8 text-lg font-semibold text-white">
                Tech Stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={cn("rounded-full border px-3 py-1 text-xs font-semibold", style.tag)}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <aside className={cn("rounded-2xl border bg-white/5 p-5", style.cardBorder)}>
              <h3 className="text-base font-semibold text-white">
                Project Details
              </h3>
              <div className="mt-4 space-y-3 text-sm text-muted">
                <p>
                  <span className="font-semibold text-white">SIG:</span>{" "}
                  {sig?.title ?? "N/A"}
                </p>
                <p>
                  <span className="font-semibold text-white">Leads:</span>{" "}
                  {project.leads.join(", ")}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-full border px-4 py-2 text-center text-sm font-semibold transition-colors",
                      style.button
                    )}
                  >
                    GitHub
                  </a>
                ) : null}
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-full border px-4 py-2 text-center text-sm font-semibold transition-colors",
                      style.button
                    )}
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
