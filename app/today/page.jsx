import React, { Suspense } from "react";
import TodayTask from "./TodayTask";
import Details from "../components/Details";

async function page() {
  return (
    <div className="w-full grid grid-cols-3">
      <div className='my-7 col-span-2 flex flex-col gap-8'>
        <Suspense fallback={<p>Loading...</p>}>
          {/* <TodayTask /> */}
        </Suspense>
      </div>
      
      <Suspense fallback={<p>Loading...</p>}>
        {/* <Details path={"/today"} /> */}
      </Suspense>
    </div>
  )
}

export default page;
