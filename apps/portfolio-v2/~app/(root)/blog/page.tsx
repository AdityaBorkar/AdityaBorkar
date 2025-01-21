const BlogPosts = [
  {
    heroImage: '',
    tags: ['javascript', 'web'],
    title: 'How to disable Javascript to enhance interactivity',
  },
]

export default function BlogPage() {
  return (
    <div className='mx-auto min-h-screen max-w-[64rem] pt-20'>
      <main>Categories</main>

      <div>
        {BlogPosts.map(post => (
          <div key={post.title}>
            <div>
              <img src={post.heroImage} alt='' />
            </div>
            <div>{post.title}</div>
            <div>{post.tags.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
