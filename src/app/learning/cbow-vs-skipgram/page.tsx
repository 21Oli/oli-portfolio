import type { Metadata } from "next";
import ArticleTemplate from "@/components/learning/ArticleTemplate";

export const metadata: Metadata = {
  title: "CBOW vs Skip-gram — Oli Bakala Learning Hub",
  description:
    "Word2Vec's two training objectives compared — what each optimises, how they differ in practice, and when to use each.",
};

export default function CbowSkipgramPage() {
  return (
    <ArticleTemplate
      title="CBOW vs Skip-gram"
      category="INSIGHTS"
      date="2025-09-15"
      readingTime={6}
    >
      <h2>Word2Vec in brief</h2>
      <p>
        Word2Vec is a family of neural network models that learn dense vector
        representations of words from large text corpora. The key insight is the
        distributional hypothesis: words that appear in similar contexts tend to
        have similar meanings. Both Continuous Bag of Words (CBOW) and Skip-gram
        exploit this, but they do so from opposite directions.
      </p>

      <h2>Continuous Bag of Words (CBOW)</h2>
      <p>
        CBOW predicts a target word from its surrounding context words. Given a
        window of context words, the model tries to predict the word in the
        centre. The input is the average of the context word vectors, and the
        output is a probability distribution over the vocabulary.
      </p>
      <p>
        Because CBOW averages the context, it is less sensitive to individual
        word occurrences and tends to produce smoother representations. It is
        generally faster to train because each training example uses multiple
        context words to make a single prediction.
      </p>

      <h2>Skip-gram</h2>
      <p>
        Skip-gram reverses the task: given a target word, predict the
        surrounding context words. For each word in the corpus, the model tries
        to predict each context word within a window around it.
      </p>
      <p>
        This generates more training examples per word — for a window of size
        two, a single word produces up to four context prediction tasks. This
        means rare words get more training signal, which tends to produce better
        representations for infrequent vocabulary. The trade-off is that
        skip-gram is slower to train.
      </p>

      <h2>Practical differences</h2>
      <ul>
        <li>
          <strong>Rare words:</strong> Skip-gram handles rare words better
          because they appear as training targets more often.
        </li>
        <li>
          <strong>Speed:</strong> CBOW is typically faster to train on large
          corpora.
        </li>
        <li>
          <strong>Representation quality:</strong> For common words, CBOW often
          performs comparably to skip-gram. For rare words, skip-gram tends to
          produce better embeddings.
        </li>
        <li>
          <strong>Dataset size:</strong> CBOW is often preferred for very large
          datasets where training speed matters. Skip-gram is often preferred
          when vocabulary coverage, especially for rare terms, is important.
        </li>
      </ul>

      <h2>Negative sampling</h2>
      <p>
        Both CBOW and skip-gram originally use a softmax over the entire
        vocabulary, which is expensive to compute for large vocabularies.
        Negative sampling is a practical approximation: instead of updating
        all vocabulary weights, the model updates only the target word and a
        small sample of randomly chosen &ldquo;negative&rdquo; words. This
        makes training tractable on large corpora.
      </p>

      <h2>What the embeddings capture</h2>
      <p>
        Well-trained Word2Vec embeddings capture semantic and syntactic
        regularities. The classic example is that the vector difference between
        &ldquo;king&rdquo; and &ldquo;queen&rdquo; is similar to the difference
        between &ldquo;man&rdquo; and &ldquo;woman&rdquo;. Syntactically,
        plurals, past tenses, and comparative forms have consistent offsets.
      </p>
      <p>
        These properties emerge from the distributional statistics of the
        training corpus — they are not explicitly supervised.
      </p>
    </ArticleTemplate>
  );
}
