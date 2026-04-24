import { useState } from "react"
import type { Project } from "../types"

function Result() {
  const [project, setProjectData] = useState<Project>({} as Project)
  const [loading,setLoading] = useState(true)
  const [isGenerating,setIsGenerating] = useState(false)
  return (
    <div>Result</div>
  )
}

export default Result