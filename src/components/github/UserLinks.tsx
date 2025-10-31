import { FiMapPin, FiTwitter, FiLink } from "react-icons/fi";
import { TfiGithub } from "react-icons/tfi";

interface UserLinksProps {
    location: string | null;
    twitter: string | null;
    blog: string | null;
    htmlUrl: string;
}

export const UserLinks: React.FC<UserLinksProps> = ({
    location,
    twitter,
    blog,
    htmlUrl,
}) => (
    <div className="mt-6 space-y-3 text-sm">
        <div className="flex items-center gap-2">
            <FiMapPin className="text-teal-400" />
            <span>{location || "Not Available"}</span>
        </div>

        <div className="flex items-center gap-2">
            <FiTwitter className="text-teal-400" />
            <span>{twitter ? `@${twitter}` : "Not Available"}</span>
        </div>

        <div className="flex items-center gap-2">
            <FiLink className="text-teal-400" />
            {blog ? (
                <a href={blog} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                    {blog}
                </a>
            ) : (
                <span>Not Available</span>
            )}
        </div>

        <div className="flex items-center gap-2">
            <TfiGithub className="text-teal-400" />
            <a href={htmlUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors break-all">
                {htmlUrl}
            </a>
        </div>
    </div>
);
