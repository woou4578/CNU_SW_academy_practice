const API_END_POINT = "https://cat-photos.edu-api.programmers.co.kr"

export const request = async (url) => {
    try{
        const res = await fetch(`${API_END_POINT}${url}`)
        
        if(!res.ok) {
            throw new Error('API 실패!')
        }

        return await res.json()
    
    } catch(e) {
        alert(e.message)
    }
}