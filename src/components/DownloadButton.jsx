export default function DownloadButton({ addStyle }) {
  return (
    <div
      className={"flex flex-col sm:flex-row flex-wrap items-center " + addStyle}
    >
      <a
        href="https://github.com/daniel-c-j/vndb-lite/releases/latest"
        title="To download page"
        className="flex flex-row items-center mb-2 text-sm md:text-base px-4 py-2 sm:mr-2 bg-sky-500 rounded-md border-2 border-sky-500 hover:opacity-90 active:opacity-80"
      >
        <img
          src="icons/download.svg"
          alt="Download icon"
          className="size-[12px] lg:size-[15px] invert mr-2 opacity-90"
        />
        Take me to download page
      </a>
      <a
        href="https://github.com/daniel-c-j/vndb-lite#readme-top"
        title="Learn more"
        className="mb-2 px-4 py-2 text-sm md:text-base sm:mr-2 bg-none rounded-md border-2 border-sky-500 hover:border-sky-400 hover:bg-gray-300/10 active:border-sky-200 active:bg-gray-500/30"
      >
        Learn more
      </a>
    </div>
  );
}
