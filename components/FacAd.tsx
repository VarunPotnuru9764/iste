import Image from "next/image";
import { PiEnvelopeSimpleBold, PiLinkedinLogoBold } from "react-icons/pi";

interface FacultyAdvisor {
  name: string;
  department: string;
  role: string;
  image: string;
  about: string;
  linkedin?: string;
  email?: string;
}

const SpecialCard = ({
  name,
  department,
  role,
  image,
  about,
  linkedin,
  email,
}: FacultyAdvisor) => {
  return (
    <div className="p-4 rounded-2xl w-full border border-gray-800 backdrop-blur-xs flex items-center gap-10">

      <div className="">
        <Image
          src={image || "/tparentastro.png"}
          alt={name}
          width={240}
          height={240}
          className="rounded-full border border-gray-700 shrink-0"
        />
      </div>

      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-bold">{name}</h3>

          <p className="text-base text-gray-300 font-medium mt-1">
            {role}
          </p>

          <p className="text-sm text-gray-400 mt-1">
            {department}
          </p>

          <p className="text-base text-gray-300 mt-4 leading-relaxed max-w-2xl">
            {about}
          </p>
        </div>

        <div className="flex gap-3 mt-4">
            {linkedin && (
                <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-15 h-15 flex items-center justify-center rounded-full border border-gray-700 hover:bg-white hover:text-black transition"
                >
                <PiLinkedinLogoBold size={28} />
                </a>
            )}

            {email && (
                <a
                href={`mailto:${email}`}
                className="w-15 h-15 flex items-center justify-center rounded-full border border-gray-700 hover:bg-white hover:text-black transition"
                >
                <PiEnvelopeSimpleBold size={28} />
                </a>
            )}
        </div>

      </div>
    </div>
  );
};

export default SpecialCard;
