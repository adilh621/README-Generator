function generateMarkdown(data, github) {
  return `
# **${data.title}**

## Description 
${data.description}
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
## Installation
        ${data.installation}
## Usage
${data.usage}
## Licence
${data.licence}
## Contributors
${data.contributing}
## Test
${data.test}
## Repository
- [Project Repo](${data.repo})
## GitHub
![Image of me](${github.githubImage})
- ${github.name}
- [GitHub Profile](${github.profile})
- <${github.email}>
`;
}

module.exports = generateMarkdown;