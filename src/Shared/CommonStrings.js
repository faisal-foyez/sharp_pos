import webconfig from '../webconfig.json';

const conString = webconfig.prodConnectionString;
const connectionString = conString.slice(0, conString.length - 3);


export const iconsUrl = "http://ec2-3-7-145-124.ap-south-1.compute.amazonaws.com/posicons/assets/";
export const uploadImageUrl = connectionString;