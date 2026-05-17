import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// icons
import { Headphones, Send } from "lucide-react";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons/faSquareXTwitter";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

// Images
import paymentMethods from "@/public/payment.webp";

const Footer = () => {
  return (
    <footer className="bg-[#044313] text-white py-10">
      {/* footer top  */}
      <div className="max-w-(--container-width) mx-auto  px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* -- about us --  */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg">About Us</h2>
            <div className="space-y-2">
              <p className="text-sm">Lorem ipsum dolor sit amet,</p>
              <p className="text-sm">consectetueradipiscing elit, sed diam</p>
            </div>

            <div className="flex items-center gap-2">
              <Headphones className="w-10 h-10 text-(--text-green)" />
              <div className="flex flex-col ">
                <span className="text-base font-semibold">Call us 24/7</span>
                <span className="text-base text-(--text-green) font-bold">
                  013 123 4567
                </span>
              </div>
            </div>
          </div>

          {/* -- Store location --  */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg">Store Location</h2>
            <div className="space-y-2">
              <p className="text-sm">
                <b>Office : </b> 123 Main Street, City, Country
              </p>
              <p className="text-sm">
                <b>Mail:</b> support.gmail.com
              </p>
            </div>

            <div>
              <p className="text-sm">Monday – Friday: 8am – 4pm</p>
              <p className="text-sm">Saturday: 9am – 5pm</p>
            </div>
          </div>

          {/* -- Useful Links --  */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg">Useful Links</h2>
            <div className="flex flex-col gap-4">
              {["About", "Contact", "My Account", "Return Policy"].map(
                (link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm hover:text-(--text-green) transition-colors duration-200"
                  >
                    {link}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* -- Newsletter --  */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg">Newsletter</h2>
            <div className="border border-gray-400 flex items-center rounded-2xl px-2 py-2">
              <input
                type="text"
                className="w-full bg-transparent border-none text-sm focus:outline-none"
                placeholder="Enter your email"
                required
              />
              <span className="bg-(--bg-color) p-2 rounded-full cursor-pointer">
                <Send className="w-4 h-4 " />
              </span>
            </div>
            {/* social media icons */}
            <div className="space-x-3">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                className="cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faSquareInstagram}
                className="cursor-pointer"
              />
              <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* footer payment  */}
      <div className="max-w-(--container-width) mx-auto flex items-center justify-between mt-10 px-2">
        <p className="text-sm">Copyright © 2026 Hyori – All Rights Reserved.</p>
        <div className="w-80">
          <Image
            src={paymentMethods}
            className="w-full"
            alt="payment"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
