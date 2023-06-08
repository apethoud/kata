'use client';

import AspectOption from "./AspectOption";

export default function AspectSelector({ aspectName, aspectOptions }) {
  console.log("aspectOptions is: ", aspectOptions);
  return (
    <>
      <div>{ aspectName.charAt(0).toUpperCase() + aspectName.slice(1) }</div>
      {aspectOptions.map(option => (
        <AspectOption 
          key={option.id}
          name={option.name} 
        />
      ))}
    </>
  )
}