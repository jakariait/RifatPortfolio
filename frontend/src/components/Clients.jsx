import ImageComponent from "@/components/ImageComponent";
import AnimatedItem from "@/components/AnimatedItem";

async function getBrands() {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(
    `${apiURL}/getallcarousel`,
    { cache: "no-store" }, // or { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch brands");
  }

  return res.json();
}

const Clients = async () => {
  const brands = await getBrands();

  return (
    <div
      id="testimonial"
      className="bg-black pt-10 p-4 scroll-mt-20"
      style={{
        backgroundImage: "url('/certificate-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="xl:container xl:mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#EF6C00] mb-10">
          Clients I worked with:
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-10">
          {brands.map((brand, index) => (
            <AnimatedItem
              key={index}
              index={index}
              className="flex justify-center items-center"
            >
              <ImageComponent
                imageName={brand.imgSrc}
                alt={`Logo ${index + 1}`}
                className="h-44 w-44 rounded-full object-cover"
              />
            </AnimatedItem>
          ))}
        </div>

        <a
          href="https://wa.me/8801307217573"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#EF6C00] px-6 py-4 rounded-xl font-bold text-white inline-flex items-center gap-2 mt-10"
        >
          Work With Me
        </a>
      </div>
    </div>
  );
};

export default Clients;
