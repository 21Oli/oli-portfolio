import type { Metadata } from "next";
import ArticleTemplate from "@/components/learning/ArticleTemplate";

export const metadata: Metadata = {
  title: "Understanding Attention",
  description:
    "A walkthrough of the attention mechanism — how it works, why it was introduced, and why it changed sequence modelling in NLP.",
  openGraph: {
    title: "Understanding Attention",
    description:
      "A walkthrough of the attention mechanism — how it works, why it was introduced, and why it changed sequence modelling in NLP.",
    type: "article",
    authors: ["Oli Bakala"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Understanding Attention",
  description:
    "A walkthrough of the attention mechanism — how it works, why it was introduced, and why it changed sequence modelling in NLP.",
  author: { "@type": "Person", name: "Oli Bakala" },
  inLanguage: "en",
};

export default function AttentionArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c").replace(/>/g, "\\u003e") }}
      />
    <ArticleTemplate
      title="Understanding Attention"
      category="RESEARCH NOTES"
      date="2025-10-01"
      readingTime={8}
    >
      <h2>Why attention?</h2>
      <p>
        Before attention mechanisms became standard, sequence-to-sequence models
        used recurrent networks with a fixed-size context vector to carry
        information from the encoder to the decoder. The problem is that
        compressing an entire input sequence into one vector creates an
        information bottleneck — the longer the sequence, the more the encoder
        has to forget or compress.
      </p>
      <p>
        The attention mechanism addresses this by allowing the decoder to look
        directly at all encoder hidden states at each decoding step, weighted by
        relevance. Instead of one compressed context vector, the decoder attends
        to a dynamically computed mixture of encoder outputs.
      </p>

      <h2>The core idea</h2>
      <p>
        At each step, the attention mechanism computes a score between the
        decoder&apos;s current state and each encoder hidden state. These scores
        are passed through a softmax to produce attention weights — a probability
        distribution over the encoder states. The context vector is then the
        weighted sum of encoder states.
      </p>
      <p>
        This means the decoder can focus on the part of the input that is most
        relevant for generating the next output token. For translation, this
        roughly corresponds to alignment: when translating a word, the model
        attends most strongly to the corresponding input word.
      </p>

      <h2>Scaled dot-product attention</h2>
      <p>
        The Transformer architecture formalised this into scaled dot-product
        attention. Given queries <code>Q</code>, keys <code>K</code>, and
        values <code>V</code>:
      </p>
      <pre><code>{`Attention(Q, K, V) = softmax(QKᵀ / √dₖ) · V`}</code></pre>
      <p>
        The queries, keys, and values are linear projections of the input. The
        dot product of queries and keys measures similarity. Dividing by the
        square root of the key dimension prevents the dot products from becoming
        too large, which would push the softmax into regions with very small
        gradients.
      </p>

      <h2>Multi-head attention</h2>
      <p>
        Rather than computing a single attention function, the Transformer uses
        multiple attention heads in parallel. Each head learns to attend to
        different aspects of the sequence — syntactic relationships, semantic
        roles, co-reference, and so on. The outputs are concatenated and
        projected.
      </p>
      <p>
        Multi-head attention allows the model to jointly attend to information
        from different representation subspaces at different positions, which
        would be averaged out by a single attention head.
      </p>

      <h2>Self-attention</h2>
      <p>
        In a Transformer encoder, each position attends to all other positions
        in the same sequence — this is self-attention. Every word can directly
        attend to every other word regardless of distance, which removes the
        sequential dependency of recurrence. This makes the architecture highly
        parallelisable and allows it to model long-range dependencies more
        effectively than recurrent networks.
      </p>

      <h2>Position encoding</h2>
      <p>
        Because self-attention has no inherent notion of order, the Transformer
        adds positional encodings to the input embeddings. The original paper
        uses sinusoidal functions of different frequencies so that the model can
        learn to attend to relative positions. Learned positional embeddings are
        also common in practice.
      </p>

      <h2>Why it changed NLP</h2>
      <p>
        The attention mechanism decoupled sequence modelling from sequential
        processing. This enabled training on much larger datasets with
        parallelism, which led directly to pre-trained language models like
        BERT, GPT, and their successors. Attention is now the core building
        block in virtually all state-of-the-art NLP and many computer vision
        systems.
      </p>

      <h2>Source</h2>
      <p>
        This note is based on reading &ldquo;Attention Is All You Need&rdquo;
        (Vaswani et al., 2017) and supporting explanations in the deep learning
        literature. The formulas and descriptions above follow the original
        paper&apos;s notation.
      </p>
    </ArticleTemplate>
    </>
  );
}
