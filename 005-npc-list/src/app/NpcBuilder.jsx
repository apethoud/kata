'use client';

import { useState } from "react";
import AspectSelector from "./AspectSelector";

export default function NpcBuilder({ attitudes }) {
  const [ selectedAttitude, setSelectedAttitude ] = useState(null);
  return (
    <>
      <div>NPC Builder</div>
      <AspectSelector 
        aspectName="attitudes"
        aspectOptions={attitudes}
        selectedAspect={selectedAttitude}
        setSelectedAspect={setSelectedAttitude}
      />
      <div>___ is a ___ who's feeling {selectedAttitude.name}.</div>
    </>
  )
}