const config = {
  columns: [
    {
      name: "School",
      links: [
        {
          name: "Canvas",
          link: "https://lcisd.instructure.com/",
        },
        {
          name: "Office",
          link: "https://www.office.com/?auth=2",
        },
        {
          name: "TAMU NSC",
          link: "https://applicant.tamu.edu/NSC/Applicant/NscRegistered",
        },
      ],
    },
    {
      name: "Git",
      links: [
        {
          name: "Repos",
          link: "https://github.com/denizat?tab=repositories",
        },
      ],
    },
    {
      name: "Social",
      links: [
        {
          name: "Gmail",
          link: "https://mail.google.com/mail/u/0/#inbox",
        },
      ],
    },
  ],
};

let max = 0;
config.columns.forEach((element) => {
  if (Object.keys(element.links).length > max) {
    max = Object.keys(element.links).length;
  }
});

let container = document.getElementById("container");
config.columns.forEach((element) => {
  let col = document.createElement("div");
  let text = document.createElement("p");
  text.innerHTML = element.name;
  col.appendChild(text);

  // element.links.forEach((element) => {
  //   let link = document.createElement("a");
  //   link.setAttribute("href", element.link);
  //   link.innerHTML = element.name;
  //   col.appendChild(link);
  // });

  for (let i = 0; i < max; i++) {
    if (Object.keys(element.links)[i]) {
      let link = document.createElement("a");
      link.setAttribute("href", element.link);
      link.innerHTML = element.name;
      link.className = "link";
      col.appendChild(link);
    } else {
      let link = document.createElement("a");
      link.className = "link null";
      col.appendChild(link);
    }
  }

  container.appendChild(col);
});
