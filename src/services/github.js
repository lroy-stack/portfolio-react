import api from './api';

const GITHUB_API = 'https://api.github.com';
const GITHUB_USER = process.env.REACT_APP_GITHUB_USER || 'lroy-stack';

export const getGitHubProfile = async () => {
  try {
    const response = await fetch(`${GITHUB_API}/users/${GITHUB_USER}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch GitHub profile:', error);
    return null;
  }
};

export const getGitHubRepositories = async () => {
  try {
    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USER}/repos?type=public&sort=updated`
    );
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch repositories:', error);
    return [];
  }
};

export const getGitHubStats = async () => {
  try {
    const profile = await getGitHubProfile();
    if (!profile) return null;

    return {
      followers: profile.followers,
      following: profile.following,
      publicRepos: profile.public_repos,
    };
  } catch (error) {
    console.error('Failed to fetch GitHub stats:', error);
    return null;
  }
};
