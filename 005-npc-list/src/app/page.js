import { supabase } from '../../supabaseClient';
import NpcBuilder from './NpcBuilder';

async function getAttitudes() {
  let { data: attitudes, error } = await supabase.from('attitudes').select('id,name');
  return attitudes;
}

export default async function Home() {
  const attitudes = await getAttitudes();
  return (
    <NpcBuilder 
      attitudes={attitudes}
    />
  )
}
