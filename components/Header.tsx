import NextLogo from './NextLogo';
import SupabaseLogo from './SupabaseLogo';

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        {/* <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://fatex3x.wixsite.com/calobro" target="_blank" rel="noreferrer">
          <NextLogo />
        </a> */}
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        <span className="font-bold">
          🥦 Calo<span className="text-orange-500">bro.</span>
        </span>{' '}
        <br />
        <span className="text-2xl">Enterprise Platform</span>
        <br />
        <span className="text-sm"> For business users only.</span>
      </p>
    </div>
  );
}
