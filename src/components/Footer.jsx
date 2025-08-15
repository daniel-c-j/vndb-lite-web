import { PROJECT_NAME } from "../constants/defaults";

export default function Footer() {
  return (
    <div className="main-layout !h-[450px] p-12 mt-18">
      <img
        src="vndb-bg-alt.png"
        alt="vndb background"
        className="absolute top-0 right-0 z-0 h-[100%] object-top-right object-cover clip-diagonal-right"
      />
      <img
        src="icons/iconHD.png"
        alt="icon"
        title="App icon"
        className="size-14 absolute top-6 right-6 opacity-85"
      />

      <div className="relative z-1">
        <h1 className="text-3xl pb-2">
          Choose the <span className="font-semibold">better</span> experience.
        </h1>

        <div className="flex flex-row flex-wrap my-4 justify-center items-center">
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

        <p className="my-2">OR</p>

        <a
          href=""
          className="flex w-52 my-6 opacity-85 hover:opacity-100 active:opacity-100 "
        >
          <img src="/badge-obtainium.png" alt="Obtainium" draggable="false" />
        </a>

        <hr className="w-[80%] my-12 border-t-neutral-300/30" />

        <p className="mt-12">
          © {new Date(Date.now()).getFullYear()} {PROJECT_NAME}, all rights
          reserved.
        </p>
      </div>
    </div>
  );
}
