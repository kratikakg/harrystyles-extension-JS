const harryStylesImages = [
  "https://media.npr.org/assets/img/2020/02/27/wide-use_hpromophoto_helenepambrun-72fdb64792139d94a06f18686d0bb3131a238a70-s1100-c50.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTUxMzU2MTk1OF5BMl5BanBnXkFtZTgwNzg4NjAwMzI@._V1_.jpg",
  "https://assets.teenvogue.com/photos/6287ec0c68ddd37dace7f139/4:3/w_1306,h_979,c_limit/harry%20styles.jpg",
  "https://www.rollingstone.com/wp-content/uploads/2022/08/Rolling-Stone-Harry-Styles-Cover-Story-2022-3.jpg",
  "https://variety.com/wp-content/uploads/2020/12/Harry-Styles-Variety-Hitmakers-5-16x9-1.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1307133948-copy.jpg",
  "https://media.allure.com/photos/623c8cddc15ba4d729fe49f0/4:3/w_2385,h_1789,c_limit/harry%20styles%202.jpg",
  "https://media.allure.com/photos/617ffe4c519588768c086dbf/4:3/w_3706,h_2780,c_limit/harry%20styles.jpg",
  "https://variety.com/wp-content/uploads/2020/12/Harry-Styles-Variety-Hitmakers-5-16x9-1.jpg",
];

function replaceImages() {
  const imgs = document.getElementsByTagName("img");
  for (let i = 0; i < imgs.length; i++) {
    const image = imgs[i];

    // image.src="https://media.npr.org/assets/img/2020/02/27/wide-use_hpromophoto_helenepambrun-72fdb64792139d94a06f18686d0bb3131a238a70-s1100-c50.jpg";

    const randomImg = Math.floor(Math.random() * harryStylesImages.length);
    image.src = harryStylesImages[randomImg];
  }

  //  const headers1 = document.getElementsByTagName("h1");
  //  for (let i = 0; i < headers1.length; i++) {
  //    headers1[i].innerText = "Harry Styles";

  const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  for (let i = 0; i < headers.length; i++) {
    headers[i].textContent = "Harry Styles";
  }


}

window.addEventListener("load", replaceImages);
