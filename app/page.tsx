import "./globals.css";
import LoadingScreen from "../components/loading/loading";
import HomeSlider from "../components/home/home-slider";
import AnnouncementBar from "../components/announcements/announcement-bar";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <LoadingScreen />
      <div className="slider-wrapper">
        <HomeSlider />
      </div>
      <main className="page-content">
      </main>
    </>
  );
}
