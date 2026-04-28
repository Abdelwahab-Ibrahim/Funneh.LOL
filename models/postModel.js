function createPost(data) {
    return {
        authorId: data.authorId,
        username: data.username,
        content: data.content,
        imageUrl: data.imageUrl || null,
        community: data.community || "general",
        likesCount: 0,
        commentsCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    };
}

module.exports = { createPost };