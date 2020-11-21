import axios from 'axios'
import API_KEY from './keys'

export async function getVideos(SearchValue, setVideoList){
    const response = await  axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY} &type=video&part=snippet&maxResults=16&q=${SearchValue}`)
    if(response.data) setVideoList(response.data);
} 

export async function getChannelImg(channelId, setchannelImg){
    let channelImg = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${API_KEY}`)
    if(channelImg.data){
        setchannelImg(channelImg.data.items[0].snippet.thumbnails.default.url);
    };
}

export async function getVideoComments(videoId, setComments){
    let commentsList = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${API_KEY}&videoId=${videoId}&maxResults=10`);
    if(commentsList.data) setComments(commentsList.data.items);
}