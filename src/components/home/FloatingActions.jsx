import whatsappIcon from "../../assets/whatsapp.png";
import phoneIcon from "../../assets/phone.png";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9096527670" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          w-14 h-14
          rounded-full
          bg-[#25D366]
          flex items-center justify-center
          shadow-xl
          hover:scale-110
          transition-transform
        "
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919096527670" // replace with your phone number
        aria-label="Call Us"
        className="
          w-14 h-14
          rounded-full
          bg-[#4A5B6A]
          flex items-center justify-center
          shadow-xl
          hover:scale-110
          transition-transform
        "
      >
        <img
          src={phoneIcon}
          alt="Call"
          className="w-7 h-7 invert"
        />
      </a>

    </div>
  );
}
