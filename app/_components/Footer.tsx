import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-[rgb(4,4,4)] px-10">
      <div className="mx-auto mt-36 flex min-h-[80px] flex-col items-center justify-between gap-8 py-8 sm:flex-row md:max-w-[1220px]">
        <p className="text-[12.5px] font-semibold tracking-[2px] text-white uppercase">
          &copy; {new Date().getFullYear()} Lawal Ridwan{" "}
        </p>

        <div className="flex flex-col gap-5 text-white sm:flex-row">
          <p className="text-[13px] font-medium">Connect with me:</p>
          <ul className="media flex items-center gap-4">
            <li>
              <a
                href="https://github.com/Ridwan-Lawal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="footer-icon" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/ridwan-lawal-162284257/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="footer-icon" />
              </a>
            </li>

            <li>
              <a
                href="https://x.com/ibnCodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="footer-icon" />
              </a>
            </li>

            <li>
              <a href="mailto:lawaridwan507@gmail.com">
                <SiGmail className="footer-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
