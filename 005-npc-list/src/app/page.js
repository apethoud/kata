import Image from 'next/image'
import styles from './page.module.css'
import { supabase } from '../../supabaseClient';
import AspectSelector from './AspectSelector';

async function getAttitudes() {
  let { data: attitudes, error } = await supabase.from('attitudes').select('id,name');
  return attitudes;
}

export default async function Home() {
  const attitudes = await getAttitudes();
  return (
    <>
      <div>NPC Builder</div>
      <AspectSelector 
        aspectName="attitudes"
        aspectOptions={attitudes} 
      />
    </>
  )
}
