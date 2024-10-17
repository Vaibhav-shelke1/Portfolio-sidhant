export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hello! I&apos;m Sidhant Manale, an AI and Data Science enthusiast. I&apos;m passionate about leveraging cutting-edge technologies to solve complex problems and drive innovation in the field of artificial intelligence.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Background</h3>
            <p className="text-muted-foreground">
              I&apos;m currently pursuing a BTech in Artificial Intelligence and Data Science at Marathwada Institute of Technology, expected to graduate in 2025. My academic journey has equipped me with a strong foundation in AI, machine learning, and data analysis techniques.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Skills</h3>
            <p className="text-muted-foreground">
              My core skills include Python, SQL, and R for data analysis and machine learning. I&apos;m proficient with frameworks like PyTorch, Langchain, XGBoost, and HuggingFace. I specialize in working with Transformers, LLMs, Retrieval Augmented Generation (RAG), NLP, and Computer Vision. I&apos;m also experienced with tools such as VSCode, JupyterLabs, WeightsAndBiases, Argilla, Axolotl, UnSlothAI, AutoTrain, and Git for efficient development and experimentation.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Experience and Projects</h3>
            <p className="text-muted-foreground">
              I&apos;ve worked on diverse projects, including developing a comprehensive taxonomy dataset, implementing time series forecasting models with high accuracy, and creating AI-powered applications like KrushiMitra for Indian farmers and MedGENIUS for medical Q&A. My experience spans from data preprocessing and analysis to fine-tuning state-of-the-art language models and developing innovative AI solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}