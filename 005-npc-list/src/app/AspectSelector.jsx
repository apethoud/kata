'use client';

import AspectOption from "./AspectOption";

export default function AspectSelector({ 
  aspectName, 
  aspectOptions,
  selectedAspect,
  setSelectedAspect 
}) {
  return (
    <>
      <div>{ aspectName.charAt(0).toUpperCase() + aspectName.slice(1) }</div>
      {aspectOptions.map(option => (
        <AspectOption 
          key={option.id}
          option={option} 
          selectedAspect={selectedAspect}
          setSelectedAspect={setSelectedAspect}
        />
      ))}
    </>
  )
}