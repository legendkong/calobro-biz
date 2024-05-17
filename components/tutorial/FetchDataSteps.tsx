import Step from './Step';
import Code from './Code';
import CheckedStep from './checkedStep';

const create = `
create table notes (
  id bigserial primary key,
  title text
);

insert into notes(title)
values
  ('Today I created a Supabase project.'),
  ('I added some data and queried it from Next.js.'),
  ('It was awesome!');
`.trim();

const server = `
import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim();

const client = `
'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim();

export default function FetchDataSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <CheckedStep title="Sign up for a company account">
        <p>
          Head over to the Login page and sign up an account for your company.
          Provide your company's ACRA registration no. too. It's okay to upload
          an easy-to-make recipe. Your awesome recipe will be consumed by many
          later!
        </p>
      </CheckedStep>
      <Step title="Upload your company's food recipe">
        <p>
          Fill in the neccessary details and upload your recipe. You can also
          add a photo of your recipe to make it more appealing.
        </p>
      </Step>
      <Step title="Wait for Calobro's admin approval">
        <p>
          Your recipe will be vetted by Calobro's admin. Once approved, your
          recipe will show up to the public.
        </p>
      </Step>
      <Step title="Get rewarded with incentives and real customers">
        <p>
          If your recipe gains traction, you will be rewarded with incentives
          and real customers. You can also get feedback from your customers to
          improve your recipe.
        </p>
      </Step>
    </ol>
  );
}
