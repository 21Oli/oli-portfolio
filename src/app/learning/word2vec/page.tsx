import type { Metadata } from "next";
import ArticleTemplate from "@/components/learning/ArticleTemplate";

export const metadata: Metadata = {
  title: "Word2Vec Explained",
  description:
    "How Word2Vec learns dense vector representations of words from text, why distributional similarity works, and what the embeddings capture.",
  openGraph: {
    title: "Word2Vec Explained",
    description:
      "How Word2Vec learns dense vector representations of words from text, why distributional similarity works, and what the embeddings capture.",
    type: "article",
    authors: ["Oli Bakala"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Word2Vec Explained",
  description:
    "How Word2Vec learns dense vector representations of words from text, why distributional similarity works, and what the embeddings capture.",
  author: { "@type": "Person", name: "Oli Bakala" },
  inLanguage: "en",
};

export default function Word2VecPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c").replace(/>/g, "\\u003e") }}
      />
    <ArticleTemplate
      title="Word2Vec Explained"
      category="INSIGHTS"
      date="2025-09-01"
      readingTime={5}
    >
      <h2>The problem with one-hot encoding</h2>
      <p>
        The simplest way to represent words for machine learning is a one-hot
        vector: a sparse vector with a 1 at the index corresponding to the word
        and 0 everywhere else. This has two major problems. First, the vectors
        grow with vocabulary size — a 100,000-word vocabulary produces 100,000
        -dimensional vectors. Second, the encoding tells the model nothing about
        meaning: &ldquo;cat&rdquo; and &ldquo;kitten&rdquo; are completely
        orthogonal even though they are semantically similar.
      </p>

      <h2>The distributional hypothesis</h2>
      <p>
        Word2Vec is based on the distributional hypothesis: words that appear in
        similar contexts tend to have similar meanings. If &ldquo;coffee&rdquo;
        and &ldquo;tea&rdquo; frequently appear next to the same words —
        &ldquo;drink&rdquo;, &ldquo;hot&rdquo;, &ldquo;morning&rdquo; — then
        their vector representations should be close in the embedding space.
      </p>

      <h2>How Word2Vec learns embeddings</h2>
      <p>
        Word2Vec trains a shallow neural network on one of two prediction tasks:
        CBOW (predict the target word from context) or skip-gram (predict
        context words from the target). The model is trained to maximise the
        probability of the correct prediction across a large corpus.
      </p>
      <p>
        The weights of the hidden layer become the word embeddings. The model
        is never directly told what words mean — it learns representations
        purely from co-occurrence patterns in text.
      </p>

      <h2>The embedding space</h2>
      <p>
        After training on a large corpus, the resulting vectors capture
        meaningful structure. Words with similar meanings cluster together.
        Syntactic and semantic relationships appear as consistent directions in
        the space. The classic demonstration is the analogy:
      </p>
      <pre><code>{`vector("king") - vector("man") + vector("woman") ≈ vector("queen")`}</code></pre>
      <p>
        This works because the direction from &ldquo;man&rdquo; to
        &ldquo;woman&rdquo; in the embedding space encodes gender, and the same
        offset exists for many gender-paired words.
      </p>

      <h2>Practical uses</h2>
      <p>
        Pretrained Word2Vec embeddings can be used as input features for
        downstream NLP tasks — sentiment analysis, text classification, named
        entity recognition. They provide a much better starting representation
        than one-hot encoding and can be fine-tuned for the specific task.
      </p>
      <p>
        Libraries like Gensim make it straightforward to train Word2Vec on a
        custom corpus or load pretrained embeddings (Google&apos;s original
        Word2Vec trained on Google News, or GloVe trained on Common Crawl).
      </p>

      <h2>Limitations</h2>
      <p>
        Word2Vec produces a single vector per word, which means polysemous
        words — words with multiple meanings, like &ldquo;bank&rdquo; — get one
        representation that averages over all their senses. Context-dependent
        models like ELMo and BERT address this by producing different
        representations depending on the surrounding context.
      </p>
    </ArticleTemplate>
    </>
  );
}
