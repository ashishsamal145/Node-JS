const url=require('url');
const urlString="https://github.com/ashishsamal145?tab=repositories"
const parsedUrl=url.parse(urlString,true); //parse yhe url to smal components
console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.search);