import { AirdropState } from '@/contexts/AirdropContext';
import { useAirdrop, useAppStats, useCurrentTime } from '@/hooks';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {
  ButtonSkeleton,
  InfoSkeleton,
  StatusSkeleton,
  TimerSkeleton,
} from '@/components/skeletion';
import { useAirdropCountdown } from '@/hooks/useAirdropCountdown';

const ClaimButton = dynamic(
  () => import('@/components/partials/airdrop/ClaimButton'),
  {
    ssr: false,
    loading: () => <ButtonSkeleton />,
  }
);

const Timer = dynamic(() => import('@/components/partials/airdrop/Timer'), {
  ssr: false,
  loading: () => <TimerSkeleton />,
});

const AirdropInfo = dynamic(
  () => import('@/components/partials/airdrop/AirdropInfo'),
  {
    ssr: false,
    loading: () => <InfoSkeleton />,
  }
);
const AirdropStatus = dynamic(
  () => import('@/components/partials/airdrop/AirdropStatus'),
  {
    ssr: false,
    loading: () => <StatusSkeleton />,
  }
);

const Airdrop = () => {
  const { lastClaimedTime, openingTime, closingTime } = useAirdrop();
  const currentTime = useCurrentTime();
  const { status } = useAirdropCountdown(
    currentTime,
    lastClaimedTime,
    closingTime,
    openingTime
  );
  const { airdropWhitelisted } = useAppStats();

  return (
    <>
      <Head>
        <title>Airdrop | Cilistia</title>
        <meta name='description' content='Take part in Cilistia community' />
      </Head>
      <div className='py-24 overflow-hidden sm:py-32'>
        <div className='px-6 mx-auto max-w-7xl lg:px-8'>
          <div className='grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start'>
            <div className='lg:pt-4 lg:pr-4'>
              <div className='lg:max-w-lg'>
                <Timer />
                {status === AirdropState.CLOSED && (
                  <p className='mt-6 text-lg leading-8 text-gray-600 text-center md:text-start'>
                    Woops! Airdrop finished. You can buy token on Uniswap
                  </p>
                )}
                <p className='mt-6 text-lg leading-8 text-gray-600 text-center md:text-start'>
                  {airdropWhitelisted
                    ? `You can take part in Cilistia's airdrop.\
                  Get Airdrop by Clicking Claim Button.`
                    : `In order to participate in Cilistia's airdrop you will\
                  need to have been whitelisted.`}
                </p>
                <ClaimButton />
              </div>
            </div>
            <AirdropInfo />
          </div>
        </div>
        {/* Airdrop Stats Here */}
        <div className='!pt-4 bg-gray-900 pb-4'>
          <div className='px-6 mx-auto max-w-7xl lg:px-8'>
            <div className='max-w-2xl mx-auto lg:max-w-none'>
              <AirdropStatus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Airdrop;
