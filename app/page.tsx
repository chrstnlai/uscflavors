import "./globals.css";
import FloatingParallax from "@/components/effects/floating-parallax";

const floatingImages = [
    {
        src: "/images/home/1.avif",
        top: "75%",
        left: "3%",
        width: "420px",
        height: "280px",
        depth: 15,
    },
    {
        src: "/images/home/2.avif",
        top: "35%",
        left: "8%",
        width: "380px",
        height: "470px",
        depth: 15,
    },
    {
        src: "/images/home/3.avif",
        top: "15%",
        left: "45%",
        width: "420px",
        height: "360px",
        depth: 15,
    },
    {
        src: "/images/home/4.avif",
        top: "45%",
        left: "55%",
        width: "395px",
        height: "450px",
        depth: 20,
    },
    {
        src: "/images/home/5.avif",
        top: "27%",
        left: "75%",
        width: "310px",
        height: "270px",
        depth: 20,
    },
    {
        src: "/images/home/6.avif",
        top: "70%",
        left: "38%",
        width: "250px", 
        height: "320px",
        depth: 20,
    },
    {
        src: "/images/home/7.avif",
        top: "13%",
        left: "5%",
        width: "450px", 
        height: "400px",
        depth: 20,
    },
    {
        src: "/images/home/8.avif",
        top: "38%",
        left: "34%",
        width: "250px", 
        height: "320px",
        depth: 20,
    },
    {
        src: "/images/home/9.avif",
        top: "55%",
        left: "86%",
        width: "150px", 
        height: "280px",
        depth: 20,
    },
    {
        src: "/images/home/10.avif",
        top: "74%",
        left: "73%",
        width: "240px", 
        height: "240px",
        depth: 30,
    },


];

export default function Home() {
    return (
        <FloatingParallax images={floatingImages}>
            <main className="page-content">
                <h1 className="heading">usc flavors</h1>
                <p className="subheading">savor the moment</p>
            </main>
        </FloatingParallax>
    );
}
