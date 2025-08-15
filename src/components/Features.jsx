const featuresData = [
  {
    id: "feature1",
    path: "phone-feature-01.png",
    title: "Cozy UI",
    text: "Designed with empathy in mind, welcoming all unfamiliarity, and preparing guidance for the user's journey via its solid interface.",
  },
  {
    id: "feature2",
    path: "phone-feature-02.png",
    title: "Infinite scroll",
    text: "A boundless addictive lazy-loaded journey with dynamicity in each pixels scrolled through.",
  },
  {
    id: "feature3",
    path: "phone-feature-03.png",
    title: "Preference-first",
    text: "A tappable context, a taste to try. Intriguing the mind with unique filter and sort combinations.",
  },
  {
    id: "feature4",
    path: "phone-feature-04.png",
    title: "Minimal yet detailed",
    text: "Embracing the 'lite' approach of information to digest, structured minimally.",
  },
  {
    id: "feature5",
    path: "phone-feature-05.png",
    title: "Multiple selection",
    text: "A management shortcut of your collections, less time, less worry.",
  },
  {
    id: "feature6",
    path: "phone-feature-06.png",
    title: "Deep local search",
    text: "A blended environment data search with each its own syntaxes and beauty.",
  },
];

export default function Features() {
  return (
    <div className="p-12 pt-0">
      {featuresData.map((feature, index) => (
        <FeatureItem
          key={feature.id}
          id={feature.id}
          title={feature.title}
          desc={feature.text}
          imgPath={feature.path}
          textDirection={index % 2 === 0 ? "right" : "left"}
        />
      ))}
      <FeatureEndContent />
    </div>
  );
}

function FeatureItem({ id, textDirection, imgPath, title, desc }) {
  const img = (
    <img
      src={imgPath}
      alt={id}
      className="flex-none max-h-[640px] max-w-[35%]"
      draggable="false"
    />
  );
  const txt = (
    <div className="flex-none max-w-[35%] text-left">
      <h1 className="text-3xl font-semibold my-2">{title}</h1>
      <p className="text-lg">{desc}</p>
    </div>
  );

  return (
    <div className="my-36 flex flex-row justify-center items-center gap-16">
      {textDirection === "right" ? img : txt}
      {textDirection === "left" ? img : txt}
    </div>
  );
}

function FeatureEndContent() {
  const iconStyle = "size-8 mr-2";
  return (
    <>
      <h1 className="text-3xl font-semibold my-2">
        With many other cool features...!
      </h1>
      <div className="flex flex-row justify-center items-center">
        <img
          src="icons/sync.svg"
          title="Synchronization"
          alt="sync"
          className={iconStyle}
        />
        <img
          src="icons/chart.svg"
          title="Ugly pie chart"
          alt="chart"
          className={iconStyle}
        />
        <img
          src="icons/offline.svg"
          title="Offline mode"
          alt="offline"
          className={iconStyle}
        />
        <img
          src="icons/theme.svg"
          title="11 official VNDB theme"
          alt="theme"
          className={iconStyle}
        />
        <img
          src="icons/more.svg"
          title="And more!"
          alt="more"
          className={iconStyle}
        />
      </div>
    </>
  );
}
