datas = [];

const getProject = (event) => {
  event.preventDefault();
  let projectName = document.getElementById("projectname").value;
  let startDate = document.getElementById("startdate").value;
  let endDate = document.getElementById("enddate").value;
  let description = document.getElementById("description").value;
  let img = document.getElementById("blog-img").files;

  let nodejs = document.getElementById("nodejs").checked;
  let nextjs = document.getElementById("nextjs").checked;
  let reactjs = document.getElementById("reactjs").checked;
  let typescript = document.getElementById("typescript").checked;

  let tesNodejs =
    nodejs == true
      ? `<img id="nodejs" src="assets/image/nodejs.png" alt="">`
      : "";
  let tesNextjs =
    nextjs == true
      ? `<img id="nextjs" src="assets/image/nextjs.png" alt="" style="width:23px">`
      : "";
  let tesReactjs =
    reactjs == true
      ? `<img id="reactjs" src="assets/image/reactjs.png" alt="" style="width:28px;">`
      : "";
  let tesTypescript =
    typescript == true
      ? `<img id="typescript" src="assets/image/typescript.png" alt="" style="width:22px">`
      : "";

  img = URL.createObjectURL(img[0]);

  if (projectName == "") {
    return alert("Name tidak Boleh Kosong");
  } else if (startDate == "") {
    return alert("Date harus ke isi");
  } else if (description == "") {
    return alert("Description tidak Boleh Kosong ");
  }

  let data = {
    projectName,
    startDate,
    endDate,
    description,
    img,
    tesNodejs,
    tesNextjs,
    tesReactjs,
    tesTypescript,
  };

  datas.push(data);
  console.log(datas);
  showData();
};

const showData = () => {
  document.getElementById("contents").innerHTML = "";

  for (i = 0; i < datas.length; i++) {
    document.getElementById("contents").innerHTML += `
        
        <div class="card-post">
            <img class="post-img" src="${datas[i].img}">
            <div class="title-date">
                <h1 class="title">${datas[i].projectName}</h1>
                <h3 class="date">${setDuration(
                  datas[i].startDate,
                  datas[i].endDate
                )}</h3>
            </div>
            <div class="post-content">
                <p>${datas[i].description}</p>
            </div>
            <div class="tag-tech" id="tag-tech">
                ${datas[i].tesNodejs}
                ${datas[i].tesNextjs}
                ${datas[i].tesReactjs}
                ${datas[i].tesTypescript}
            </div>
            <div class="post-button">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
        `;
  }
  alert("Sukses masukan data");
};

const setDuration = (start, end) => {
  const dateStart = new Date(start).getTime();
  const dateEnd = new Date(end).getTime();
  const selisih = dateEnd - dateStart;

  let day = selisih / (1000 * 3600 * 24);
  const month = Math.floor(selisih / (1000 * 24 * 3600 * 30));

  const result =
    day < 30
      ? day === 1
        ? `Duration : ${day} day`
        : `Duration : ${day} days`
      : month === 1
      ? `Duration : ${month} month`
      : `Duration : ${month} months`;

  console.log(result);
  return result;
};
