import { useState, useEffect } from "react";
import { useGithubUser } from "@/hooks/UseGithubUser";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SearchBar } from "./components/common/SearchBar";
import { ErrorMessage } from "./components/common/ErrorMessage";
import { UserCard } from "./components/github/UserCard";
import { TfiGithub } from "react-icons/tfi";

function App() {
  const [username, setUsername] = useState("");
  const { userData, loading, error, fetchUser, clearUser } = useGithubUser();

  
  useEffect(() => {
    if (!username.trim()) {
      clearUser();
    }
  }, [username, clearUser]);


  return (
    <div className="h-svh w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-100 to-neutral-600">
          Search GitHub Users
          <TfiGithub className="inline ml-3 w-12 h-12 text-neutral-200" />
        </h1>

        <p className="mt-3 text-center text-neutral-400 text-sm md:text-base">
          Discover GitHub profiles — see user details, followers, and repositories in one search.
        </p>

        <SearchBar
          value={username}
          onChange={setUsername}
          onSearch={() => fetchUser(username)}
          loading={loading}
        />

        {error && <ErrorMessage message={error} />}
        {userData && <UserCard user={userData} />}
      </div>

      <BackgroundBeams />
    </div>
  );
}

export default App;
