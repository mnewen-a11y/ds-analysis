import type { Meta, StoryObj } from '@storybook/react';
import { ScoreCard } from './ScoreCard';

const meta: Meta<typeof ScoreCard> = {
  title: 'Molecules/ScoreCard',
  component: ScoreCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Score display card with progress visualization.

**Features:**
- Visual score representation
- Semantic color coding based on percentage
- Progress bar with smooth animation
- Responsive design
- Accessibility compliant (ARIA progressbar)

**Used for:**
- HIX Score (0-20)
- SEO Score (0-100)
- BITV Compliance metrics
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    score: {
      control: { type: 'number', min: 0, max: 20 },
    },
    maxScore: {
      control: { type: 'number', min: 1, max: 100 },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '320px', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ScoreCard>;

// HIX Examples
export const HIXExcellent: Story = {
  args: {
    title: 'HIX-Score',
    score: 18.4,
    maxScore: 20,
    interpretation: 'Exzellent',
    description: 'Leichte Sprache / Boulevard-Niveau',
    variant: 'hix',
  },
};

export const HIXGood: Story = {
  args: {
    title: 'HIX-Score',
    score: 14.2,
    maxScore: 20,
    interpretation: 'Gut',
    description: 'Gute Webtexte / breites Publikum',
    variant: 'hix',
  },
};

export const HIXMedium: Story = {
  args: {
    title: 'HIX-Score',
    score: 9.8,
    maxScore: 20,
    interpretation: 'Verbesserbar',
    description: 'Fachartikel, Behördentexte',
    variant: 'hix',
  },
};

export const HIXCritical: Story = {
  args: {
    title: 'HIX-Score',
    score: 4.5,
    maxScore: 20,
    interpretation: 'Kritisch',
    description: 'Wissenschaftlich, expertenlastig',
    variant: 'hix',
  },
};

// SEO Example
export const SEOScore: Story = {
  args: {
    title: 'SEO-Score',
    score: 67,
    maxScore: 100,
    interpretation: 'Gut',
    description: 'Optimierungspotenzial vorhanden',
    variant: 'seo',
  },
};

// BITV Example (Different scale - errors found)
export const BITVErrors: Story = {
  args: {
    title: 'BITV-Konformität',
    score: 88,
    maxScore: 100,
    interpretation: 'Gut',
    description: '12 Optimierungen identifiziert',
    variant: 'bitv',
  },
};

// Dashboard Overview
export const DashboardOverview: Story = {
  name: 'Dashboard Overview (3 Metrics)',
  render: () => (
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '1200px' }}>
      <ScoreCard
        title="HIX-Score"
        score={14.2}
        maxScore={20}
        interpretation="Gut"
        description="Gute Verständlichkeit"
        variant="hix"
      />
      <ScoreCard
        title="SEO-Score"
        score={67}
        maxScore={100}
        interpretation="Gut"
        description="Optimierungspotenzial vorhanden"
        variant="seo"
      />
      <ScoreCard
        title="BITV-Konformität"
        score={88}
        maxScore={100}
        interpretation="Gut"
        description="12 Optimierungen empfohlen"
        variant="bitv"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// All score ranges
export const AllScoreRanges: Story = {
  name: 'All Score Ranges (0-100%)',
  render: () => (
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
      <ScoreCard
        title="Exzellent"
        score={92}
        maxScore={100}
        interpretation="Sehr gut"
        variant="hix"
      />
      <ScoreCard
        title="Gut"
        score={72}
        maxScore={100}
        interpretation="Gut"
        variant="hix"
      />
      <ScoreCard
        title="Mittel"
        score={54}
        maxScore={100}
        interpretation="Verbesserbar"
        variant="hix"
      />
      <ScoreCard
        title="Kritisch"
        score={28}
        maxScore={100}
        interpretation="Handlungsbedarf"
        variant="hix"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
