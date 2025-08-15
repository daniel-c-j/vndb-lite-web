import {
  PROJECT_DESC,
  PROJECT_REPO_CODEBERG,
  PROJECT_REPO_GITHUB,
} from "../constants/defaults";

export default function FirstView() {
  return (
    <div className="main-layout">
      <img
        src="vndb-bg.png"
        alt="vndb background"
        className="absolute top-0 left-0 z-0 h-[100%] object-top-left object-cover clip-diagonal-left in-slide-down"
      />
      <RepositoryButtons />
      <FirstViewContent />
    </div>
  );
}

function RepositoryButtons() {
  const iconStyle = "size-8 mr-4";

  return (
    <div className="absolute top-0 left-0 z-24 p-8 flex flex-row in-slide-down">
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
    <div className="relative p-12 flex flex-row items-center justify-center gap-12 z-1">
      <div className="flex-none w-[40%] in-slide-up-fast">
        <img
          src="/hero-2.png"
          alt="Screenshot1"
          draggable="false"
          className="max-h-[85vh]"
        />
      </div>

      <div className="flex-none w-[40%] text-left in-slide-left">
        <FirstViewMainTexts />
        <FirstViewMainButtons />
        <p className="my-2">OR</p>
        <Badges />
      </div>
    </div>
  );
}

function Badges() {
  return (
    <div className="my-3">
      <a
        href=""
        className="flex w-52 opacity-85 hover:opacity-100 active:opacity-100"
      >
        <img src="/badge-obtainium.png" alt="Obtainium" draggable="false" />
      </a>

      <div className="relative">
        <p className="absolute top-3 left-28 z-2 font-semibold text-md text-shadow-lg text-shadow-neutral-800">
          Upcoming...!
        </p>

        <div className="flex flex-row w-38 mt-2 opacity-50 relative">
          <img
            src="/badge-playstore.png"
            alt="Playstore"
            draggable="false"
            className="mr-2"
          />
          <img
            src="/badge-appstore.png"
            alt="Appstore"
            draggable="false"
            className="mr-2"
          />
        </div>
      </div>
    </div>
  );
}

function FirstViewMainTexts() {
  return (
    <>
      {" "}
      <h1 className="text-4xl self-start">
        Introducing <span className="!font-semibold">VNDB Lite</span>
      </h1>
      <p className="text-lg pt-2 pb-4">{PROJECT_DESC}</p>
    </>
  );
}

function FirstViewMainButtons() {
  return (
    <div className="flex flex-row flex-wrap">
      <a
        href="https://github.com/daniel-c-j/vndb-lite/releases/latest"
        title="Take me to download page"
        className="flex flex-row items-center mb-2 px-4 py-2 mr-2 bg-sky-500 rounded-md border-2 border-sky-500 hover:opacity-90 active:opacity-80"
      >
        <img
          src="icons/download.svg"
          alt=""
          className="size-[15px] invert mr-2 opacity-90"
        />
        Take me to download page
      </a>
      <a
        href="https://github.com/daniel-c-j/vndb-lite#readme-top"
        title="Learn more"
        className="mb-2 px-4 py-2 mr-2 bg-none rounded-md border-2 border-sky-500 hover:border-sky-400 hover:bg-gray-300/10 active:border-sky-200 active:bg-gray-500/30"
      >
        Learn more
      </a>
    </div>
  );
}
