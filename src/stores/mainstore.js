import {writable} from "svelte/store"
let date = new Date()
class GalleryObj{
    constructor(title, image){
        this.title = title;
        this.image = image;
        this.id = "46437984u8";
        this.date = date.toLocaleDateString()
    }
}


const storedata = []
const video = [
    new GalleryObj("infinity", "assets/photo/74a91cd00d8745dcaa16e36f44f6380c.mp4")
]

export const data = writable({storedata, video})