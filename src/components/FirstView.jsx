import {
  PROJECT_DESC,
  PROJECT_NAME,
  PROJECT_REPO_CODEBERG,
  PROJECT_REPO_GITHUB,
} from "../constants/defaults";
import { ObtainiumBadge, UpcomingBadges } from "./Badges";
import DownloadButton from "./DownloadButton";

export default function FirstView() {
  return (
    <div className="main-layout">
      <img
        src="vndb-bg.png"
        alt="vndb background"
        className="front-face-bg"
        draggable="false"
      />
      <RepositoryButtons />
      <FirstViewContent />
    </div>
  );
}

function RepositoryButtons() {
  const iconStyle = "size-7 sm:size-8 mr-3 md:mr-4";

  return (
    <div className="absolute top-0 left-0 z-24 p-4 sm:p-6 md:p-8 flex flex-row in-slide-down">
      <div className="flex">
        <a
          href={PROJECT_REPO_GITHUB}
          title="Github repository"
          className={iconStyle}
        >
          <img src="icons/github.png" alt="Github icon" draggable="false" />
        </a>

        <a
          href={PROJECT_REPO_CODEBERG}
          title="Codeberg repository"
          className={iconStyle}
        >
          <img src="icons/codeberg.png" alt="Codeberg icon" draggable="false" />
        </a>
      </div>

      {/* <a
        href={PROJECT_REPO_CODEBERG}
        title="Icon"
        className={iconStyle + " !size-16 opacity-80 flex"}
      >
        <img src="icons/iconHD.png" alt="icon" draggable="false" />
      </a> */}
    </div>
  );
}

function FirstViewContent() {
  return (
    <div className="front-face-body">
      <div className="front-face-img">
        <img src="hero-2.png" alt="project image highlight" draggable="false" />
      </div>

      <div className="front-face-txt">
        <FirstViewMainTexts />
        <DownloadButton />

        <p className="my-2">OR</p>

        <div className="my-3">
          <ObtainiumBadge />
          <UpcomingBadges />
        </div>
      </div>
    </div>
  );
}

function FirstViewMainTexts() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl">
        Introducing <span className="!font-semibold">{PROJECT_NAME}</span>
      </h1>
      <p className="sm:text-base md:text-lg pt-2 pb-4">{PROJECT_DESC}</p>
    </>
  );
}
