import { supabase } from '../../supabaseClient';
import NpcBuilder from './NpcBuilder';

async function getAttitudes() {
  let { data: attitudes, error } = await supabase.from('attitudes').select('id,name');
  return attitudes;
}

async function getNames() {
  let { data: names, error } = await supabase.from('names').select('id,name');
  return names;
}

async function getRaces() {
  let { data: races, error } = await supabase.from('races').select('id,name');
  return races;
}

export default async function Home() {
  const attitudes = await getAttitudes();
  const names = await getNames();
  const races = await getRaces();
  return (
    <NpcBuilder 
      attitudes={attitudes}
      names={names}
      races={races}
    />
  )
}
