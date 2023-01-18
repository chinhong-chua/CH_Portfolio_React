// export const allIngredients = [
//   { icon: "🍅", label: "Tomato" },
//   { icon: "🥬", label: "Lettuce" },
//   { icon: "🧀", label: "Cheese" },
//   { icon: "🥕", label: "Carrot" },
//   { icon: "🍌", label: "Banana" },
//   { icon: "🫐", label: "Blueberries" },
//   { icon: "🥂", label: "Champers?" },
// ];

// const [tomato, lettuce, cheese] = allIngredients;
// export const initialTabs = [tomato, lettuce, cheese];

// export function getNextIngredient(ingredients) {
//   const existing = new Set(ingredients);
//   return allIngredients.find((ingredient) => !existing.has(ingredient));
// }
import { images } from "../../constants";

// async function getCerts(){
//   let certs = [];
//   const query = '*[_type=="certificates"] | order(orderNum asc)';
//   await client.fetch(query).then((data) => {
//     console.log("cliendata: ", data);
//     data.forEach((item) => {
//       let cert = {
//         iconPath: (item.imgUrl),
//         label: item.name,
//         link: item.certLink,
//       };
//       certs.push(cert);
//     });
    
//   });
//   console.log("certs: ", certs);

//   return certs
// }


export const allCerts = [
  { iconPath: images.sitefinity, label: "Sitefinity", link:"https://www.credly.com/badges/009ca3f0-f188-47b3-942b-a38b6e055aaf/public_url" },
  { iconPath: images.az204, label: "AZ-204", link:"https://www.credly.com/badges/009ca3f0-f188-47b3-942b-a38b6e055aaf/public_url" },
  { iconPath: images.az400, label: "AZ-400", link:"https://www.credly.com/badges/009ca3f0-f188-47b3-942b-a38b6e055aaf/public_url" },
];

const [sitefinity, az204, az400] = allCerts;
export const initialTabs = [sitefinity, az204, az400];

export function getNextCert(certs) {
  const existing = new Set(certs);
  return allCerts.find((cert) => !existing.has(cert));
}
