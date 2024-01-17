

const YOUTUBE_API_KEY="AIzaSyDx3K6CpHjD7ISuPQC_jdyCL5R-TN-pvtQ"


export const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY

export const YOUTUBE_API_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${YOUTUBE_API_KEY}&id=`

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_RELATED_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${YOUTUBE_API_KEY}&relatedToVideoId=`


export const YOUTUBE_COMMENTS_API =`https://www.googleapis.com/youtube/v3/commentThreads?key=${YOUTUBE_API_KEY}&textFormat=plainText&part=snippet&maxResults=100&videoId=`
 
export const YOUTUBE_SEARCH_RESULTS_API=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${YOUTUBE_API_KEY}&q=`