export const AIP_END_POINT = "https://misc.edu-api.programmers.co.kr"

export const request = async (url, options = {}) => {
    try {
        const res = await(fetch(`${AIP_END_POINT}${url}`,
            {
                ...options,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ))

        if(res.ok) {
            return await res.json()
        }

        throw new Error('API 호출에 실패했습니다.')
    } catch (e) {
        alert(e.message)
    }
} 