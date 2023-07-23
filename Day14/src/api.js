export const API_END_POINT = 'https://cnu2.todo.edu-api.programmers.co.kr'

export const request = async (url, options = {}) => {
    try{
        const res = await fetch(`${API_END_POINT}${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json'
            }   
        })
        if(res.ok) {
            const json = await res.json()
            return json
        }
        throw new Error('API 호출 에러!')
    } catch(e) {
        alert(e.message)
    }
}