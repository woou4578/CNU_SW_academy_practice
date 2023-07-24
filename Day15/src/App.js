import PostsPage from "./PostsPage.js";
import PostEditPage from "./PostEditPage.js";

// url 규칙
// 루트: postsPage 그리기

// /posts/{id} - id에 해당하는 post 생성
// /posts/new - 새 post 생성
export default function App({ $target }) {
    const postsPage = new PostsPage({ 
        $target,
    })
    const postEditPage = new PostEditPage({ 
        $target,
        initialState: {
            postId: 'new',
            post: {
                title: '',
                content: ''
            }
        }
    })

    this.route = () => {
        $target.innerHTML = ''
        const {pathname} = window.location
        if(pathname === '/') {
            postsPage.render()
        } else if (pathname.indexOf('/posts/') === 0) {
            const [, , postId] = pathname.split('/')
            postEditPage.setState({ postId })
        }
    }
    this.route()

    window.addEventListener('route-change', (e) => {
        console.log(e.target.detail)
        // history.pushState(null, null, nextUrl)
        // this.route()
    })
}