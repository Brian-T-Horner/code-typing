import { GITHUB_TOKEN } from "./config.js"; // Import GitHub token

const MAX_FILES = 5; // Number of code files to fetch
const MAX_LINES_PER_FILE = 20; // Number of lines to extract per file

async function fetchWithAuth(url) {
    return fetch(url, {
        headers: {
            "Accept": "application/vnd.github.v3+json",
            "Authorization": `token ${GITHUB_TOKEN}`
        }
    });
}

// Fetch repository contents (Includes Subdirectories)
async function getRepoContents(repo, path = "", foundFiles = []) {
    if (foundFiles.length >= MAX_FILES) return foundFiles;

    try {
        console.log(`📂 Fetching repo contents: ${repo}${path ? "/" + path : ""}`);

        const response = await fetchWithAuth(`https://api.github.com/repos/${repo}/contents/${path}`);
        const files = await response.json();

        if (!Array.isArray(files)) {
            console.error("❌ API Response is not an array:", files);
            return foundFiles;
        }

        for (let file of files) {
            console.log(`📁 Checking file: ${file.name} (type: ${file.type})`);

            if (foundFiles.length >= MAX_FILES) break;

            if (file.type === "file" && /\.(js|py|cpp|java|ts|cs|rb|go|php|html|css|sh)$/i.test(file.name)) {
                console.log(`✅ Found Code File: ${file.name}`);
                foundFiles.push(file.download_url);
            } else if (file.type === "dir") {
                console.log(`📂 Entering Subdirectory: ${file.name}`);
                await getRepoContents(repo, file.path, foundFiles);
            }
        }

        return foundFiles;
    } catch (error) {
        console.error("❌ Error fetching repo contents:", error);
        return foundFiles;
    }
}

// Fetch and format raw code
async function getCodeFromFile(url) {
    try {
        console.log(`📥 Fetching raw code from: ${url}`);

        const response = await fetchWithAuth(url);
        const code = await response.text();
        
        // Remove unnecessary comments and extract real code
        const filteredCode = code
            .split("\n")
            .filter(line => 
                line.trim() &&
                !line.trim().startsWith("//") &&
                !line.trim().startsWith("/*") && !line.trim().startsWith("*")
            )
            .slice(0, MAX_LINES_PER_FILE)
            .join("\n");

        console.log("📝 Extracted Code:\n", filteredCode);
        return filteredCode;
    } catch (error) {
        console.error("❌ Error fetching code file:", error);
        return "";
    }
}

// Main function to fetch and log code
async function fetchAndLogCode(repo) {
    try {
        const urls = await getRepoContents(repo);
        
        if (urls.length === 0) {
            console.warn("⚠️ No valid code files found.");
            return;
        }

        console.log(`✅ Found ${urls.length} code files. Extracting code...`);

        for (let url of urls) {
            await getCodeFromFile(url);
        }
    } catch (error) {
        console.error("❌ Error during execution:", error);
    }
}

// Run test (Change repo name if needed)
fetchAndLogCode("microsoft/vscode");
