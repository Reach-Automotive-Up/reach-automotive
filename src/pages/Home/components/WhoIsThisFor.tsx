const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Automotive Studio For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Automotive Studio is ideal wherever automotive seats and
          interiors need realistic 3D visualization to speed design and
          customer decisions.
        </p>

        {/* Automotive OEMs */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Automotive OEMs
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Passenger vehicle, commercial vehicle, and EV manufacturers
              designing seat families, trims, and interior packages across
              variants and model years.
            </li>
            <li>
              Design and marketing teams needing consistent 3D assets for
              reviews, configurators, and launch materials without building
              multiple physical prototypes.
            </li>
          </ul>
        </div>

        {/* Tier-1 suppliers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Tier-1 seat and interior suppliers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Global and regional suppliers that design and manufacture
              complete seating systems, cockpits, and interior modules for
              multiple OEMs.
            </li>
            <li>
              Engineering and styling teams that require fast digital
              prototyping to validate comfort, ergonomics, aesthetics, and
              stitching lines before tooling.
            </li>
          </ul>
        </div>

        {/* Aftermarket brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Aftermarket seat and accessory brands
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Companies producing premium seat covers, sports seats, child
              seats, and interior upgrade kits for dealerships and retail.
            </li>
            <li>
              Brands using 3D visualization to show fabric/leather, colour,
              and stitching combinations to consumers and channel partners.
            </li>
          </ul>
        </div>

        {/* Design studios */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Automotive design studios
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Independent and in-house studios focused on CMF
              (colour–material–finish) and seat/interior concepts for concept
              cars and facelifts.
            </li>
            <li>
              UX/HMI and interior teams that need realistic digital mock-ups
              of seats integrated with console, cockpit, and ambient elements.
            </li>
          </ul>
        </div>

        {/* Dealerships */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Dealerships and customisation centres
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Dealers and customization shops offering bespoke interiors,
              seat upgrades, and personalization packages that benefit from
              on-screen 3D previews.
            </li>
            <li>
              Studios that co-create interior options with customers,
              reducing decision time and mismatched expectations.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Education and training institutes
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Automotive design, transportation design, and trim/upholstery
              programs that want students to learn industry-grade 3D seat
              visualization workflows.
            </li>
            <li>
              Technical training centres preparing talent for digital roles
              in seating design, interior trims, and visualization support
              for OEMs and suppliers.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
