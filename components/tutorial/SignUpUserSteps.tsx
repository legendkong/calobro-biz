import Link from 'next/link';
import Step from './Step';

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Sign up for a company account">
        <p>
          Head over to the{' '}
          <Link
            href="/login"
            className="font-bold hover:underline text-foreground/80"
          >
            Login
          </Link>{' '}
          page and sign up an account for your company. Provide your company's
          ACRA registration no. too. It's okay to upload an easy-to-make recipe.
          Your awesome recipe will be consumed by many later!
        </p>
      </Step>
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
