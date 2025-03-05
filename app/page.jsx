import Details from "./components/Details";
import MainPage from "./components/MainPage";
import TaskList from "./components/TaskList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-3">
      <MainPage>
        <Suspense fallback={<p>Loading...</p>}>
          <TaskList />
        </Suspense>
      </MainPage>

      <Suspense fallback={<p>Loading...</p>}>
        <Details path={"/"} />
      </Suspense>
    </div>
  );
}
