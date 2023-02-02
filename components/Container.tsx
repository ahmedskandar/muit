import React from "react"

interface ContainerI {
    children: React.ReactNode
}

const Container: React.FC<ContainerI> = ({children}) => {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  )
}

export default Container