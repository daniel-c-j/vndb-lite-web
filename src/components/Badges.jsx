const obtUrl =
  "http://apps.obtainium.imranr.dev/redirect.html?r=obtainium://app/%7B%22id%22:%22com.vndblite.dcj%22,%22url%22:%22https://github.com/daniel-c-j/vndb-lite%22,%22author%22:%22DanielCJ%22,%22name%22:%22VNDB%20Lite%22,%22preferredApkIndex%22:0,%22additionalSettings%22:%22%7B%5C%22includePrereleases%5C%22:false,%5C%22fallbackToOlderReleases%5C%22:true,%5C%22filterReleaseTitlesByRegEx%5C%22:%5C%22%5C%22,%5C%22filterReleaseNotesByRegEx%5C%22:%5C%22%5C%22,%5C%22verifyLatestTag%5C%22:false,%5C%22dontSortReleasesList%5C%22:false,%5C%22useLatestAssetDateAsReleaseDate%5C%22:false,%5C%22trackOnly%5C%22:false,%5C%22versionExtractionRegEx%5C%22:%5C%22%5C%22,%5C%22matchGroupToUse%5C%22:%5C%22%5C%22,%5C%22versionDetection%5C%22:true,%5C%22releaseDateAsVersion%5C%22:false,%5C%22useVersionCodeAsOSVersion%5C%22:false,%5C%22apkFilterRegEx%5C%22:%5C%22%5C%22,%5C%22invertAPKFilter%5C%22:false,%5C%22autoApkFilterByArch%5C%22:true,%5C%22appName%5C%22:%5C%22VNDB%20Lite%5C%22,%5C%22exemptFromBackgroundUpdates%5C%22:false,%5C%22skipUpdateNotifications%5C%22:false,%5C%22about%5C%22:%5C%22A%20lite,%20open-source,%20mobile%20version%20of%20your%20favorite%20vndb.org%20website.%5C%22,%5C%22appAuthor%5C%22:%5C%22DanielCJ%5C%22%7D%22%7D";

export function ObtainiumBadge() {
  return (
    <a
      href={obtUrl}
      className="flex w-48 lg:w-52 mx-auto sm:mx-0 opacity-85 hover:opacity-100 active:opacity-100"
    >
      <img src="badge-obtainium.png" alt="Obtainium" draggable="false" />
    </a>
  );
}

export function UpcomingBadges() {
  return (
    <div className="flex flex-row w-30 lg:w-38 mt-2 relative -translate-x-[52.5%] mx-auto sm:mx-0 sm:translate-x-0">
      <p className="absolute top-[50%] left-[100%] -translate-[50%] z-1 font-semibold text-base text-shadow-lg text-shadow-neutral-800">
        Upcoming...!
      </p>

      <img
        src="badge-playstore.png"
        alt="Playstore"
        draggable="false"
        className="flex-none mr-2 opacity-60"
      />
      <img
        src="badge-appstore.png"
        alt="Appstore"
        draggable="false"
        className="flex-none mr-2 opacity-60"
      />
    </div>
  );
}
