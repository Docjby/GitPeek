interface UserStatsProps {
    repos: number;
    followers: number;
    following: number;
}

export const UserStats: React.FC<UserStatsProps> = ({ repos, followers, following }) => (
    <div className="flex justify-around mt-5 bg-neutral-800/60 rounded-xl py-3 text-center">
        <div>
            <p className="text-neutral-400 text-sm">Repos</p>
            <p className="text-lg font-semibold">{repos}</p>
        </div>
        <div>
            <p className="text-neutral-400 text-sm">Followers</p>
            <p className="text-lg font-semibold">{followers}</p>
        </div>
        <div>
            <p className="text-neutral-400 text-sm">Following</p>
            <p className="text-lg font-semibold">{following}</p>
        </div>
    </div>
);
