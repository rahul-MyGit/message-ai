"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

//we'll use react query later for this 
export default function UserName() {

  const [image, setImage] = useState(null)
  const [name, setName] = useState("Anonymus")

  useEffect(() => {

  }, [])

  return (
    <div className="text-slate-50">
      {image ? (
        <>
          <Image src={image} alt={"/public/placeholder"}/>
        </>
      ): name }
    </div>
  )

}
