const requestUrl = "https://api.sampleapis.com/coffee/hot";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data);
  }
};
xhr.send();
