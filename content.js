let harryStylesImages=[
    "https://www.last.fm/music/Harry+Styles/+images/9f41276d612203756f6b5c9d4a0271d2",
    "https://www.last.fm/music/Harry+Styles/+images/25d0e8ba8b094bbb2d794cbc9f740eca",
    "https://www.last.fm/music/Harry+Styles/+images/8f7e3d357e1b512958923e37c505658d",
    "https://www.last.fm/music/Harry+Styles/+images/62b7d7e1b66c582fd20ca1de855f0ae9",
    "https://www.last.fm/music/Harry+Styles/+images/45e9213662716ef4d0ec1beba95a104e",
    "https://www.last.fm/music/Harry+Styles/+images/6234a0bd29d67713d1a01c7850e9d142",
    "https://www.last.fm/music/Harry+Styles/+images/5a0cbd49343bed40be23196a819f7fa1",
    "https://www.last.fm/music/Harry+Styles/+images/a638a9a85e851629a246b471c244d302"
];

const imgs=document.getElementsByTagName("img")
for(let i=0;i<imgs.length;i++) {
    const randomImg = Math.floor(Math.random()*harryStylesImages.length); 
    imgs[i].src=harryStylesImages[randomImg];
}