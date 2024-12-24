import { whatWeOffer } from "../constants/index.jsx";
import WhatWeOfferItem from "../components/WhatWeOfferItem.jsx";

const Testimonials = () => {
  const halfLength = Math.floor(whatWeOffer.length / 2);

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative z-2 mr-20 flex-auto">
          <p className="caption mb-5 max-md:mb-2.5"></p>
          <h2 className="h2 max-md:h5 text-p4 uppercase">What we offer</h2>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {whatWeOffer.slice(0, halfLength).map((whatWeOffer) => (
              <WhatWeOfferItem
                key={whatWeOffer.id}
                item={whatWeOffer}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {whatWeOffer.slice(halfLength).map((whatWeOffer) => (
              <WhatWeOfferItem
                key={whatWeOffer.id}
                item={whatWeOffer}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
