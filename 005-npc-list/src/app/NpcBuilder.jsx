'use client';

import { useState } from "react";
import AspectSelector from "./AspectSelector";

export default function NpcBuilder({ 
  attitudes, 
  names, 
  races 
}) {
  const [ selectedAttitude, setSelectedAttitude ] = useState(null);
  const [ selectedName, setSelectedName ] = useState(null);
  const [ selectedRace, setSelectedRace ] = useState(null);
  return (
    <>
      <div>NPC Builder</div>
      <AspectSelector 
        aspectName="attitudes"
        aspectOptions={attitudes}
        selectedAspect={selectedAttitude}
        setSelectedAspect={setSelectedAttitude}
      />
      <AspectSelector 
        aspectName="names"
        aspectOptions={names}
        selectedAspect={selectedName}
        setSelectedAspect={setSelectedName}
      />
      <AspectSelector 
        aspectName="races"
        aspectOptions={races}
        selectedAspect={selectedRace}
        setSelectedAspect={setSelectedRace}
      />
      <div>{selectedName?.name} is a {selectedRace?.name} who's feeling {selectedAttitude?.name}.</div>
    </>
  )
}