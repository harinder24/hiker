
import "./globals.css";
import Nav from "./landingPage/nav/Nav";
import Home from "./landingPage/Home/Home";
import { JoinUsWrap } from "./landingPage/Home/JoinUs";
import About from "./landingPage/About/About";
import Features from "./landingPage/Services/Features";
import Chat from "./landingPage/Chat/Chat";
export default function Landing() {
  return (
    <main className="mons bg-[#eee] flex min-h-[100svh] flex-col items-center relative cursor-default caret-transparent ">
      <Nav />
      <Home/>
      <JoinUsWrap/>
      <Features/>
      <About/>
      <Chat/>

    </main>
  );
}
