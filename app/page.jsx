import Image from "next/image";
import Details from "./components/Details";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
   <div className="w-full grid grid-cols-3">
      <MainPage />
      <Details />
   </div>
  );
}
