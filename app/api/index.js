/**
 * Created by yatessss on 16/12/9.
 */
// const env = {
//   THEMES: 'http://news-at.zhihu.com/api/4/themes',
//   LATEST_NEWS: 'http://news-at.zhihu.com/api/4/news/latest',
//   NEXT_NEWS: 'http://news.at.zhihu.com/api/4/news/before/',
//   NEWS_INFO: 'http://news-at.zhihu.com/api/4/news/',
//   STORY_EXTRA: 'http://news-at.zhihu.com/api/4/story-extra/',
//   GET_THEME: 'http://news-at.zhihu.com/api/4/theme/',
//   GET_COMMENTS: 'http://news-at.zhihu.com/api/4/story/',
//   GET_SECTION: 'http://news-at.zhihu.com/api/3/section/'
// }
const env = {
  THEMES: 'http://api.yatessss.com:8888/news-at/api/4/themes',
  LATEST_NEWS: 'http://api.yatessss.com:8888/news-at/api/4/news/latest',
  NEXT_NEWS: 'http://api.yatessss.com:8888/news-at/api/4/news/before/',
  NEWS_INFO: 'http://api.yatessss.com:8888/news-at/api/4/news/',
  STORY_EXTRA: 'http://api.yatessss.com:8888/news-at/api/4/story-extra/',
  GET_THEME: 'http://api.yatessss.com:8888/news-at/api/4/theme/',
  GET_COMMENTS: 'http://api.yatessss.com:8888/news-at/api/4/story/',
  GET_SECTION: 'http://api.yatessss.com:8888/news-at/api/3/section/'
}
console.log(process.env.NODE_ENV)

export default env

