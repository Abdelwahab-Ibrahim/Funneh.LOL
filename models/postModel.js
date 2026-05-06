function createPost(data) {
    if (!data.authorId || !data.username || !data.content || !data.imageUrl) {
        throw new Error('authorId, username, content, and imageUrl are required to create a post');
    }

    return {
        authorId: data.authorId,
        username: data.username,
        content: data.content,
        imageUrl: data.imageUrl,
        likesCount: 0,
        commentsCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    };
}

module.exports = { createPost };