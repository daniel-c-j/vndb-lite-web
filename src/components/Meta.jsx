import { createPortal } from "react-dom";
import {
  PROJECT_DESC,
  PROJECT_DOMAIN,
  PROJECT_NAME,
  PROJECT_SLUG,
} from "../constants/defaults";
import { memo } from "react";

const keywords = [
  "vndb lite",
  "vndb",
  "vn",
  "visual novel",
  "visual novels",
  "visual novel news",
  "visual novel genres",
  "visual novel reviews",
  "visual novel community",
  "visual novel walkthroughs",
  "visual novel database",
  "anime games",
  "japanese games",
  "retro games",
  "old school games",
  "android",
  "ios",
  "flutter",
  "open source",
  "mobile app",
  "cross platform",
  "application",
];

const Meta = memo(() => {
  const iconUrl = `https://${PROJECT_DOMAIN}/${PROJECT_SLUG}/icon.png`;
  return createPortal(
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content={PROJECT_DESC} />
      <meta name="keywords" content={keywords.join(", ")} />

      <meta property="og:title" content={PROJECT_NAME} />
      <meta property="og:description" content={PROJECT_DESC} />
      <meta property="og:image" content={iconUrl} />

      <link rel="icon" type="image/png" href="icons/icon.png" sizes="32x32" />
      <title>{PROJECT_NAME}</title>
    </>,
    document.getElementById("html-head")
  );
});

export default Meta;
