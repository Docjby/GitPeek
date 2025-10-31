import type { GithubUser } from "@/types/github";
import { UserStats } from "./UserStats";
import { UserLinks } from "./UserLinks";
import { formatDate } from "@/utils/formatDate";

interface UserCardProps {
    user: GithubUser;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div className="mt-4 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 text-neutral-200 shadow-lg shadow-black/50 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-24 h-24 rounded-full border border-neutral-700"
                />

                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h2 className="text-2xl font-bold text-neutral-100">
                            {user.name || "Not Available"}
                        </h2>
                        <p className="text-neutral-500 text-sm">
                            Joined {formatDate(user.created_at)}
                        </p>
                    </div>

                    <p className="text-teal-400">@{user.login}</p>
                    <p className="text-neutral-400 mt-3">{user.bio || ""}</p>

                    <UserStats
                        repos={user.public_repos}
                        followers={user.followers}
                        following={user.following}
                    />

                    <UserLinks
                        location={user.location}
                        twitter={user.twitter_username}
                        blog={user.blog}
                        htmlUrl={user.html_url}
                    />
                </div>
            </div>
        </div>
    );
};
