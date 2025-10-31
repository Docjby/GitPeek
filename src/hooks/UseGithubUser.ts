import { useCallback, useState } from "react";
import type { GithubUser } from "@/types/github";

export const useGithubUser = () => {
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = useCallback(async (username: string) => {
    if (!username.trim()) return;
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data: GithubUser = await res.json();
      setUserData(data);
    } catch {
      setError("User not found");
    } finally {
      setLoading(false);
    }
  }, []);

  // stable function to clear the stored user & errors
  const clearUser = useCallback(() => {
    setUserData(null);
    setError("");
    setLoading(false);
  }, []);

  return { userData, loading, error, fetchUser, clearUser };
};
