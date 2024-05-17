import DeployButton from '@/components/DeployButton';
import AuthButton from '@/components/AuthButton';
import { createClient } from '@/utils/supabase/server';
import FetchDataSteps from '@/components/tutorial/FetchDataSteps';
import Header from '@/components/Header';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <div className="py-6 font-bold bg-purple-950 text-center">
          This is a protected page that you can only see as an authenticated
          user/business partner of Calobro.
        </div>
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <DeployButton />
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="animate-in flex-1 flex flex-col gap-10 opacity-0 max-w-4xl px-3">
        <Header />
        <div className="text-center">
          <span className="font-bold">Company: </span>
          <span className="text-orange-500">
            BRASH BOYS LLP (Pastry and Coffee)
          </span>
        </div>
        <div className="-mt-5 justify-center text-center">
          <span className="font-bold">ACRA no.: </span>
          <span className="text-orange-500">TLK12345678</span>
        </div>
        <div className="flex gap-4 items-center justify-center">
          {/* Use flex to align buttons side by side */}
          <Link href="/upload">
            {/* Wrap button in Link and set href to '/upload' */}
            <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Upload Recipe
            </button>
          </Link>
          <Link href="/viewrecipes">
            {' '}
            {/* Wrap button in Link and set href to '/viewrecipes' */}
            <button className="bg-blue-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
              View Recipes
            </button>
          </Link>
        </div>
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          <FetchDataSteps />
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>As part of our FYP project</p>
      </footer>
    </div>
  );
}
