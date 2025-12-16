import { Post } from "@/data/posts";
import { PostItem } from "./PostItem";

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  if (posts.length === 0) {
    return (
      <div className="p-8 text-center text-muted-foreground rounded-2xl bg-card border border-border">
        目前沒有文章。
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-3">
      {posts.map((post, index) => (
        <PostItem key={post.slug} post={post} index={index} />
      ))}
    </section>
  );
};
