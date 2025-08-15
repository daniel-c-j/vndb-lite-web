import { Slide } from "react-awesome-reveal";
import { PROJECT_NAME } from "../constants/defaults";
import DownloadButton from "./DownloadButton";
import { ObtainiumBadge } from "./Badges";

export default function Footer() {
  return (
    <div className="main-layout !max-h-[600px] sm:!max-h-[450px] p-12 mt-18">
      <img
        src="vndb-bg-alt.png"
        alt="vndb background"
        className="footer-bg"
        draggable="false"
      />

      <img
        src="icons/iconHD.png"
        alt="icon"
        title="App icon"
        draggable="false"
        className="size-8 sm:size-10 md:size-12 lg:size-14 absolute top-4 right-4 sm:top-5 md:top-6 sm:right-5 md:right-6 opacity-85"
      />

      <div className="relative z-1">
        <Slide direction="up" duration={600} triggerOnce>
          <h1 className="text-3xl pb-2">
            Choose the <span className="font-semibold">better</span> experience.
          </h1>

          <DownloadButton addStyle="my-4 justify-center items-center" />

          <p className="my-4 md:my-2">OR</p>

          <ObtainiumBadge />
        </Slide>

        <hr className="w-[80%] my-12 border-t-neutral-300/30" />

        <p className="mt-12">
          © {new Date(Date.now()).getFullYear()} {PROJECT_NAME}, all rights
          reserved.
        </p>
      </div>
    </div>
  );
}
