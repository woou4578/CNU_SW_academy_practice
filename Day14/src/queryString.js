export const parse = (queryString) => 
    // '?name=roto&position=bassist'
    // &로 쪼갠다.
    // key=value의 조합을 object 형태로 만든다.
    // 만들어진 거 리턴한다.
    queryStrings.split('&').reduce((acc, keyAndValue) => {
        const [key, value] = keyAndValue.split('=')
        if(key && value) {
            acc[key] = value
        }
        return acc
    }, {})
