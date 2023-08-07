function isValidPhotoName(photoName, imageExtensions){
    if(typeof photoName !== 'string' || !Array.isArray(imageExtensions)){
        return 'please, provide valid inputs';
    }
    else{
        for(let item of imageExtensions){
            if(photoName.toLowerCase().endsWith(item.toLowerCase())){
                return true;
            }
        }
        return false;
    }
}
const photo='image.svg';
const extensions=['.jpg','JPEG','png','gif','ico'];
console.log(isValidPhotoName(photo,extensions));