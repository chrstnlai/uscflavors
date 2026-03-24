import "./globals.css";
import LoadingScreen from "../components/loading/loading";
import HomeSlider from "../components/home/home-slider";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <HomeSlider />
      <main className="page-content">
      </main>
    </>
  );
}
