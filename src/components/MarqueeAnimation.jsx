import React from "react";

function MarqueeAnimation() {
  return (
    <div class="marquee text-5xl marquee--hover-pause uppercase text-primaryDarker">
      <span class="marquee__content inline w-fit ">
        Minimal*Etnico*Vintage*Classico*Moderno*Sportivo*Audace*Elegante*Casual*
      </span>

      {/* <!-- Mirrors the content above --> */}
      <span class="marquee__content inline" aria-hidden="true">
        Minimal*Etnico*Vintage*Classico*Moderno*Sportivo*Audace*Elegante*Casual*
      </span>
    </div>
  );
}

export default MarqueeAnimation;
