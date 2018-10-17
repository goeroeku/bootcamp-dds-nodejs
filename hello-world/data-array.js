const data = {
  first_name: "Sammy",
  last_name: "Shark",
  location: "Ocean",
  websites: [
    {
      description: "work",
      URL: "https://www.digitalocean.com"
    },
    {
      description: "tutorials",
      URL: "https://www.digitalocean.com/community/tutorials"
    }
  ],
  social_media: [
    {
      description: "twitter",
      link: "https://twitter.com/digitalocean"
    },
    {
      description: "facebook",
      link: "https://www.facebook.com/DigitalOceanCloudHosting"
    },
    {
      description: "github",
      link: "https://github.com/digitalocean"
    }
  ]
};

console.log(data);
console.log(data.websites);
console.log(data.websites[0].URL); //manual show data from array

//show data with for each
console.log("==> Show data from array with for each");
data.websites.forEach(row => {
  console.log(row.URL);
});
