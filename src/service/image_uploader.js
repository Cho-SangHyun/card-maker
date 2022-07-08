class ImageUploader{
    // file을 업로드하고 서버에서 업로드된 이미지의 URL을 리턴. 즉 비동기적으로 동작
    async upload(file){
        const url = "https://api.cloudinary.com/v1_1/dwi2vmr4o/image/upload";
        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "oiore9lw");

        const res = await fetch(url, {
            method: "POST",
            body: formData
        });

        return await res.json();
    }
}

export default ImageUploader;