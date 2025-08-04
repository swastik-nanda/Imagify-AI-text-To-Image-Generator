import Header from "../components/Header";
import { lazy, Suspense } from "react";
const Steps = lazy(() => import("../components/Steps"));
const Description = lazy(() => import("../components/Description"));
const Testimonials = lazy(() => import("../components/Testimonials"));

function Home() {
  return (
    <div>
      <Header></Header>
      <Suspense fallback={<div>Loading steps...</div>}>
        <Steps />
      </Suspense>

      <Suspense fallback={<div>Loading description...</div>}>
        <Description />
      </Suspense>

      <Suspense fallback={<div>Loading testimonials...</div>}>
        <Testimonials />
      </Suspense>
    </div>
  );
}

export default Home;
