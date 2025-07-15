import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const contactInfo = [
  {
    type: "email",
    label: "Email",
    value: "miguel.mendez@miguel-mendez.click",
    icon: <MdEmail className="w-5 h-5" />,
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: "+52 622 145 5047",
    icon: <FaWhatsapp className="w-5 h-5" />,
  },
];