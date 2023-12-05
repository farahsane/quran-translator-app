const allSuraNames = document.querySelector(".sura-lists");

// Getting all sura from API

let getSuraNames = () => {
  let url = "http://api.alquran.cloud/v1/surah";

  //    sending request using axioms
  axios
    .get(url)
    .then((response) => {
      const data = response.data.data;
    //   console.log(data);
      data.map((eachSura) => {
        // console.log("eachSura", eachSura);
        let suraNumber = eachSura.number;
        let suraNames = eachSura.name;
        allSuraNames.innerHTML += `
       <li onClick=handleClick(this.value) class="sura" value="${suraNumber}">${suraNames} </li>
       `;
      });
    })

    .catch((err) => {
      alert(err);
    });
};

window.addEventListener("load", getSuraNames);

let handleClick = (value) => {
  let surahNumber = value;
  console.log(surahNumber);
  localStorage.setItem("apiResponse", JSON.stringify(surahNumber));
  window.location.href = "suurah.html";
};
