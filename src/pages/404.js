import React, { useEffect, useState } from "react"
import Loader from "../components/utils/Loader"

export default () => {
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return <Loader />
  }

  return <div>Page Not Found</div>
}
