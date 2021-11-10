
export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=VJ7GTWT3WyvYSVokKtjd73A0Rsa8DwiR`; //encodeURI() nos permite juntar las palabras las palabras en los urls cuando tienen espacios, ej: %20
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}