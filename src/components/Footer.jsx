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

      <div className="relative z-1">
        <Slide direction="up" duration={600} triggerOnce>
          <h1 className="text-3xl pb-2">
            Choose the <span className="font-semibold">better</span> experience.
          </h1>

          <DownloadButton addStyle="my-2 md:my-4 justify-center items-center" />

          <p className="mb-3 md:my-4">OR</p>

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
