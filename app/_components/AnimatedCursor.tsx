"use client";

import dynamic from "next/dynamic";

const DynamicAnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AnimatedCursor = () => {
  return (
    <DynamicAnimatedCursor
      innerSize={8}
      outerSize={35}
      color="255, 255, 255"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
      clickables={[
        "a",
        "button",
        ".link",
        "input",
        "textarea",
        "select",
        ".clickable",
      ]}
    />
  );
};

export default AnimatedCursor;
