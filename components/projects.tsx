import ProjectCard from "./ProjectCard";

const projects = [
  {
     title: "YouTube Chatbot",
    description: "Chat and interact with youtube videos",
    image: "/projects/project-1.png",
    liveSite: "https://personal-blogging-7ap2.vercel.app/",
    github: "https://github.com/notcodesid/personal-blogging",
    techStack: ["Next", "Tailwind", "TypeScript" , "Cloudflare", "Postgres"],
  },
  {
    title: "GPT-2 From Scratch",
    description: "Built the GPT-2 model from scratch and trained on 100 million tokens from the FineWebEdu Dataset",
    image: "/projects/project-7.png",
    liveSite: "#",
    github: "https://github.com/sidmanale643/GPT-2-From-Scratch",
    techStack: ["PyTorch"],
  },
  {
    title: "Distil-CLIP",
    description: "Trained a from scratch implementation of CLIP on the Flickr8K dataset ",
    image: "/projects/project-3.png",
    liveSite: "https://learnwebdev.vercel.app/",
    github: "https://github.com/sidmanale643/Distil-CLIP",
    techStack: ["PyTorch"]
  },
  {
    title: "Travel Map",
    description: "A travel app UI for seeking the satisfaction of seeing the incorruptible beauty of nature.",
    image: "/projects/project-4.png",
    liveSite: "https://travel-app-nine-rho.vercel.app/",
    github: "https://github.com/notcodesid/Travel-app",
    techStack: ["React", "Tailwind"],
  },
  {
    title: "Travel Map",
    description: "A travel app UI for seeking the satisfaction of seeing the incorruptible beauty of nature.",
    image: "/projects/project-4.png",
    liveSite: "https://travel-app-nine-rho.vercel.app/",
    github: "https://github.com/notcodesid/Travel-app",
    techStack: ["React", "Tailwind"],
  },
  {
    title: "Typing Tester",
    description: "A typing tester that lets you check your typing speed.",
    image: "/projects/project-6.png",
    liveSite: "https://typing-tester-phi.vercel.app/",
    github: "https://github.com/notcodesid/typing-tester",
    techStack: ["React", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out some of the projects I have worked on. From web applications to mobile apps, I have built a diverse
            portfolio showcasing my skills and creativity.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}