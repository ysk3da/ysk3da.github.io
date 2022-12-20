
import { Suspense } from 'react';
import { RenderingNotifier } from './RenderingNotifier';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// const AlwaysSuspend = () => {
//   console.log("AlwaysSuspend is rendered");
//   throw sleep(1000);
// };

export const SometimesSuspend = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
};

const SuspenseTest = () => {

  return (
    <>
      <h1 className="text-xl font-bold">Suspense Testページ</h1>
      <RenderingNotifier name="outside-Suspense" />
      <Suspense fallback={<p>Loading...</p>}>
        <RenderingNotifier name="inside-Suspense" />
        {/* <AlwaysSuspend /> */}
        <SometimesSuspend/>
      </Suspense>
    </>
  );
};

export default SuspenseTest;