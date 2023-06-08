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

  const setProperIndefiniteArticle = followingWord => {
    if (!followingWord) {
      return 'a';
    }
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const isFirstLetterVowel = vowels.reduce((accum, vowel) => {
      return accum || followingWord.charAt(0).toLowerCase() === vowel;
    }, false)
    return isFirstLetterVowel ? 'an' : 'a'
  }
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
      <div>{selectedName?.name} is {setProperIndefiniteArticle(selectedRace?.name)} {selectedRace?.name} who's feeling {selectedAttitude?.name}.</div>
    </>
  )
}