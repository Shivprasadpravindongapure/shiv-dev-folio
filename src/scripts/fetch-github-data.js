import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USERNAME = 'Shivprasadpravindongapure';
const OUTPUT_PATH = path.join(__dirname, '../data/github.json');

const headers = {
  'User-Agent': 'Node.js Fetch Script',
  // Add a GitHub token here if rate-limited, but public data should be fine for now
};

async function fetchGitHubData() {
  console.log('Fetching GitHub Data...');
  try {
    // 1. Profile Stats
    const profileRes = await fetch(`https://api.github.com/users/${USERNAME}`, { headers });
    const profile = await profileRes.json();
    
    // 2. Pinned/Top Repos (using sort=updated)
    const reposRes = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=10`, { headers });
    const repos = await reposRes.json();

    const topRepos = [];
    const languageCounts = {};
    let totalLanguageBytes = 0;

    for (const repo of repos) {
      topRepos.push({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        topics: repo.topics || [],
        html_url: repo.html_url,
        updated_at: repo.updated_at,
      });

      // 3. Languages for each repo
      try {
        const langRes = await fetch(`https://api.github.com/repos/${USERNAME}/${repo.name}/languages`, { headers });
        const langs = await langRes.json();
        for (const [lang, bytes] of Object.entries(langs)) {
          languageCounts[lang] = (languageCounts[lang] || 0) + bytes;
          totalLanguageBytes += bytes;
        }
      } catch (err) {
        console.error(`Failed to fetch languages for ${repo.name}`, err.message);
      }
    }

    // Calculate language percentages
    const languages = Object.entries(languageCounts)
      .map(([name, bytes]) => ({
        name,
        bytes,
        percentage: ((bytes / totalLanguageBytes) * 100).toFixed(2),
      }))
      .sort((a, b) => b.bytes - a.bytes);

    const data = {
      profile: {
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
        bio: profile.bio,
        location: profile.location,
        avatar_url: profile.avatar_url,
      },
      topRepos,
      languages,
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2));
    console.log(`Successfully wrote data to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
  }
}

fetchGitHubData();
