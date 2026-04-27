import { Loader2Icon } from "lucide-react" // import the Loader2Icon from lucide-react to show a loading spinner while the app is loading
import { useEffect } from "react" // import the useEffect hook from React to perform side effects in the component, in this case to redirect the user after a certain time period


function Loading() { // function for the loading page that shows a spinner and redirects to the home page after 6 seconds
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/" // redirect the user to the home page after 6 seconds
    },6000)

  },[])
  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-center flex-1">
        <Loader2Icon  className="size-7 animate-spin text-indigo-200"/>
      </div>
    </div>
  )
}

export default Loading