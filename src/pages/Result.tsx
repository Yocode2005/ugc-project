import { useEffect, useState } from "react"
import type { Project } from "../types"
import { dummyGenerations } from "../assets/assets"

function Result() {
  const [project, setProjectData] = useState<Project>({} as Project)
  const [loading,setLoading] = useState(true)
  const [isGenerating,setIsGenerating] = useState(false)


  const fetchProjectData = async () => {
    setTimeout(() => {
      setProjectData(dummyGenerations[0])
      setLoading(false)
    },3000)
  }

  useEffect(() => {
    fetchProjectData();
  },[])

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>Result</div>
  )
}

export default Result