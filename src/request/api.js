import Vue from 'vue'

//获取歌曲的歌词
export function getMusicLyric(data) {
    console.log('data', data);
    return $http({
        method: "GET",
        url: `/lyric?id=${data}`
    })
}
