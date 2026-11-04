import type { Metadata } from "next";
import ArticleTemplate from "@/components/learning/ArticleTemplate";

export const metadata: Metadata = {
  title: "Building Time-Series Features",
  description:
    "Practical feature engineering for time-series data: lag features, rolling windows, seasonal decomposition, and common pitfalls.",
  openGraph: {
    title: "Building Time-Series Features",
    description:
      "Practical feature engineering for time-series data: lag features, rolling windows, seasonal decomposition, and common pitfalls.",
    type: "article",
    authors: ["Oli Bakala"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Building Time-Series Features",
  description:
    "Practical feature engineering for time-series data: lag features, rolling windows, seasonal decomposition, and common pitfalls.",
  author: { "@type": "Person", name: "Oli Bakala" },
  inLanguage: "en",
};

export default function TimeSeriesFeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c").replace(/>/g, "\\u003e") }}
      />
    <ArticleTemplate
      title="Building Time-Series Features"
      category="TUTORIALS"
      date="2025-08-20"
      readingTime={7}
    >
      <h2>Why feature engineering matters for time-series</h2>
      <p>
        Most machine learning models do not natively understand temporal
        ordering. A random forest or gradient boosting model treats each row of
        features as independent. For time-series data, this means the temporal
        structure — trends, seasonality, autocorrelation — has to be made
        explicit through feature engineering before those models can exploit it.
      </p>

      <h2>Lag features</h2>
      <p>
        The simplest form of temporal feature is a lag: the value of a variable
        at a previous time step. For a sales forecasting problem, the sales
        figure from yesterday, last week, and the same day last year are all
        useful lag features.
      </p>
      <pre><code>{`# Create lag features with pandas
df["lag_1"] = df["sales"].shift(1)
df["lag_7"] = df["sales"].shift(7)
df["lag_365"] = df["sales"].shift(365)`}</code></pre>
      <p>
        The appropriate lag periods depend on the domain. Seasonal data often
        benefits from lags that match the seasonal period.
      </p>

      <h2>Rolling window statistics</h2>
      <p>
        Rolling windows summarise recent history. A rolling mean smooths out
        noise and captures the local trend. Rolling standard deviation captures
        recent volatility. Rolling min/max capture recent extremes.
      </p>
      <pre><code>{`df["rolling_mean_7"] = df["sales"].shift(1).rolling(7).mean()
df["rolling_std_7"]  = df["sales"].shift(1).rolling(7).std()`}</code></pre>
      <p>
        Note the <code>shift(1)</code> before the rolling computation. This
        ensures you only use data available before the prediction point —
        omitting it causes data leakage.
      </p>

      <h2>Date and time components</h2>
      <p>
        Extracting components from the timestamp gives the model access to
        calendar patterns: day of week, month, quarter, whether a day is a
        weekend or public holiday, and so on.
      </p>
      <pre><code>{`df["day_of_week"] = df.index.dayofweek
df["month"]       = df.index.month
df["is_weekend"]  = df["day_of_week"].isin([5, 6]).astype(int)`}</code></pre>

      <h2>Expanding window features</h2>
      <p>
        An expanding window uses all data up to the current point rather than a
        fixed window. This is useful for computing cumulative statistics — for
        example, the cumulative mean up to each point captures how the overall
        level changes over time without being affected by seasonality.
      </p>

      <h2>Data leakage in time-series</h2>
      <p>
        The most common mistake when building time-series features is using
        information from the future. Features must only use data available at
        prediction time. Rolling statistics must be shifted before they are
        computed, or computed on a shifted copy of the target.
      </p>
      <p>
        Validation also requires care. Cross-validation that shuffles rows
        randomly will leak future data into the training set. Use
        time-ordered splits instead — train on past data, validate on the
        immediate future.
      </p>

      <h2>Trend and seasonality decomposition</h2>
      <p>
        For exploratory feature engineering, decomposing the series into trend,
        seasonal, and residual components helps identify which patterns are
        worth capturing. Libraries like <code>statsmodels</code> provide
        classical decomposition methods. The residual (unexplained) component
        can sometimes be more useful as a model target than the raw series.
      </p>

      <h2>Feature selection</h2>
      <p>
        Generating many lag and rolling features can lead to highly correlated
        inputs. Feature importance from tree models, Spearman correlation
        analysis, or iterative selection can help identify the most useful
        subset. Retaining too many correlated features increases training time
        without improving prediction.
      </p>
    </ArticleTemplate>
    </>
  );
}
