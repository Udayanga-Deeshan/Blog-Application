<div className="home">
  <div className="home-posts">
    {posts.map((post) => (
      <div className="post" key={post.id}>
        <div className="post-img">
          <img src={post.img} alt="" />
        </div>
        <div className="post-content">
          <Link className="post-link" to={`/post/${post.id}`}>
            <h1 className="post-title">{post.title}</h1>
          </Link>
          <p className="post-desc">{post.desc}</p>
          <button className="post-button">Read More</button>
        </div>
      </div>
    ))}
  </div>
</div>
