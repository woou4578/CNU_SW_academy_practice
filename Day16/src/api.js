const AIP_END_POINT = "https://misc.edu-api.programmers.co.kr"

export const request = async (url) => {
    try {
        const res = await fetch(`${AIP_END_POINT}${url}`)
        if(!res.ok) {
            throw new Error('요청에 실패했습니다.')
        }
        return await res.json()
    } catch (e) {
        alert(e.message)
    }
}