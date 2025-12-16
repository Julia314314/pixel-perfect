import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Post } from "@/data/posts";
import { motion } from "framer-motion";

interface PostItemProps {
  post: Post;
  index?: number;
}

export const formatDate = (iso: string): string => {
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(d);
  } catch {
    return iso;
  }
};

export const PostItem = ({ post, index = 0 }: PostItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="p-4 rounded-2xl bg-card border border-border shadow-card hover:shadow-warm transition-shadow duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="font-mono text-xs text-muted-light mb-1">
            {post.category} • {formatDate(post.date)}
          </div>
          <h3 className="font-bold text-foreground mb-1 line-clamp-2">
            <Link to={`/post/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
        </div>
        <Button variant="ghost" size="sm" asChild className="shrink-0">
          <Link to={`/post/${post.slug}`}>閱讀</Link>
        </Button>
      </div>
      
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-border bg-primary/10 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
};
