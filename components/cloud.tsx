'use client'

import { useState, useEffect } from 'react'
import IconCloud from "@/components/magicui/icon-cloud"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const categories = {
  "Programming Languages": [
    "python",
    "sql",
    "r",
    "typescript",
    "javascript",
  ],
  "Data Analytics": [
    "pandas",
    "numpy",
    "matplotlib",
    "seaborn",
    "plotly",
    "postgresql",
    "mongodb",
  ],
  "Machine Learning & AI": [
    "scikit-learn",
    "tensorflow",
    "pytorch",
    "xgboost",
    "lightgbm",
    "huggingface",
    "langchain",
    "weightsandbiases",
    "argilla",
    "autotrain",
    "axolotl",
    "unslothai",
  ],
  "Neural Networks & Deep Learning": [
    "keras",
    "transformers",
    "neuralnetworks",
    "deeplearning",
  ],
  "LLMs & NLP": [
    "llms",
    "rag",
    "nlp",
    "bert",
    "gpt",
    "transformers",
  ],
  "Computer Vision": [
    "opencv",
    "pillow",
    "yolo",
    "detectron2",
  ],
  "Tools & Platforms": [
    "jupyterlabs",
    "vscode",
    "git",
    "github",
    "docker",
    "aws",
    "gcp",
    "azure",
    "vercel",
    "firebase",
    "nginx",
    "kubernetes",
  ],
}

export function IconCloudDemo() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [slugs, setSlugs] = useState([])

  useEffect(() => {
    if (selectedCategory === "All") {
      setSlugs(Object.values(categories).flat())
    } else {
      setSlugs(categories[selectedCategory] || [])
    }
  }, [selectedCategory])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-secondary p-8">
      <h2 className="text-3xl font-bold mb-6 text-primary">Data Science & AI Technology Stack</h2>
      
      <div className="relative flex h-[400px] w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg border border-primary/10 bg-secondary/50 px-8 py-12">
        <IconCloud iconSlugs={slugs} />
        <Sparkles className="absolute top-4 right-4 text-primary h-6 w-6 animate-pulse" />
      </div>
      <p className="mt-6 text-center text-muted-foreground max-w-2xl">
        Explore the diverse ecosystem of tools and technologies powering modern data science and AI. 
        From programming languages to deep learning frameworks, LLMs, and specialized tools, 
        this cloud represents the cutting-edge stack used by professionals in the field.
      </p>
    </div>
  )
}