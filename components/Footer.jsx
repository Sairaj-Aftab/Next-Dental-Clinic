import Link from "next/link";
import backgroundImg from "../public/images/bg_1.jpg";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url('${backgroundImg.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-primary-color bg-opacity-80 px-2 md:px-0">
        <div className="lg:container py-8 flex gap-8 md:flex-row flex-col">
          {/* Coulumn 1 */}
          <div className="column1 flex-1">
            <div className="mb-5">
              <h1 className="text-text-color-white text-2xl font-bold">
                TOOTHCARE
              </h1>
              <p className="text-text-color-white text-sm font-semibold">
                DENTAL CLINIC SERVICES
              </p>
            </div>
            <p className="text-base text-text-color-white font-normal leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              quo fuga at placeat iure aliquam, reiciendis dolore, natus
              voluptatum quidem ipsum impedit earum omnis repellat cumque nobis
              et neque a repudiandae eius? Dolorem earum rem nobis unde sit,
              totam veniam distinctio, accusamus culpa fugiat repudiandae
              provident ea consequatur quidem error.
            </p>
            <ul className="flex gap-2 mt-5">
              <li>
                <a href="">
                  <i class="fi fi-brands-twitter-alt-circle"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fi fi-brands-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fi fi-brands-instagram"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
          {/* Coulumn 2 */}
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-text-color-white mb-5">
              Quick Links
            </h1>
            <ul className="link flex flex-col gap-3 text-base font-normal">
              <li>
                <Link href="/">&#8594; Home</Link>
              </li>
              <li>
                <a href="/">&#8594; Home</a>
              </li>
              <li>
                <a href="/">&#8594; Home</a>
              </li>
              <li>
                <a href="/">&#8594; Home</a>
              </li>
              <li>
                <a href="/">&#8594; Home</a>
              </li>
              <li>
                <a href="/">&#8594; Home</a>
              </li>
              <li>
                <a href="/">&#8594; Home</a>
              </li>
              <li>
                <a href="/">&#8594; Home</a>
              </li>
            </ul>
          </div>
          {/* Coulumn 3 */}
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-text-color-white mb-5">
              Have a Questions?
            </h1>
            <ul className="flex flex-col gap-4 text-text-color-white font-normal text-base">
              <li>
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </li>
              <li>
                <p>+2 392 3929 210</p>
              </li>
              <li>
                <p>info@yourdomain.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="bg-primary-color font-semibold text-sm text-text-color-white text-center py-8">
        Copyright &#169;2024 All rights reserved | This template is made with by{" "}
        <a target="_blank" href="/">
          Sairaj Aftab
        </a>
      </p>
    </div>
  );
};

export default Footer;
