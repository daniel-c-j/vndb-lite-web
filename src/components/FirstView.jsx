import {
  PROJECT_DESC,
  PROJECT_REPO_CODEBERG,
  PROJECT_REPO_GITHUB,
} from "../constants/defaults";

export default function FirstView() {
  return (
    <div className="first-view-body">
      <RepositoryButtons />
      <FirstViewContent />
    </div>
  );
}

function RepositoryButtons() {
  const iconStyle = "size-8 mr-4";

  return (
    <div className="absolute top-0 left-0 z-24 p-8 flex flex-row items-start justify-start">
      <a
        href={PROJECT_REPO_GITHUB}
        title="Github repository"
        className={iconStyle}
      >
        <img src="/github.png" alt="Github icon" draggable="false" />
      </a>

      <a
        href={PROJECT_REPO_CODEBERG}
        title="Codeberg repository"
        className={iconStyle}
      >
        <img src="/codeberg.png" alt="Codeberg icon" draggable="false" />
      </a>
    </div>
  );
}

function FirstViewContent() {
  return (
    <div className="p-8 flex flex-row items-center justify-center gap-12 ">
      <div className="flex-none w-[42.5%]">
        <img
          src="/phone-feature-01.png"
          alt="Screenshot1"
          draggable="false"
          className="max-h-[90vh]"
        />
      </div>

      <div className="flex-none w-[40%] text-left">
        <h1 className="text-4xl self-start">
          Introducing <span className="!font-semibold">VNDB Lite</span>
        </h1>

        <p className="text-lg pt-2 pb-4">{PROJECT_DESC}</p>

        <div className="flex flex-row flex-wrap">
          <a
            href=""
            title="Take me to download page"
            className="mb-4 px-4 py-2 mr-2 bg-sky-500 rounded-md border-2 border-sky-500 hover:opacity-90 active:opacity-80"
          >
            Take me to download page
          </a>
          <button
            href=""
            title="I want to know how its built"
            className="mb-4 px-4 py-2 mr-2 bg-none rounded-md border-2 border-sky-500 hover:border-sky-400 hover:bg-gray-300/10 active:border-sky-200 active:bg-gray-500/30"
          >
            I want to know how its built
          </button>
        </div>

        <p>OR</p>

        <div className="my-4">
          <a
            href=""
            className="flex w-52 opacity-85 hover:opacity-100 active:opacity-100"
          >
            <img
              src="/badge_obtainium.png"
              alt="Codeberg icon"
              draggable="false"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
