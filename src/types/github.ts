export interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  twitter_username: string | null;
  blog: string | null;
  created_at: string;
}
