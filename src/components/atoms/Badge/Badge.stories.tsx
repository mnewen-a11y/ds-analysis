import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Status indicator and label component.

**Usage:**
- Success: Positive outcomes, completed states
- Warning: Attention needed, opportunities
- Danger: Errors, critical issues (use sparingly!)
- Info: Neutral information
- Neutral: Default state, non-semantic labels
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Success: Story = {
  args: {
    children: 'Erfolgreich',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Optimierung möglich',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'Handlungsbedarf',
    variant: 'danger',
  },
};

export const Info: Story = {
  args: {
    children: 'Information',
    variant: 'info',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Standard',
    variant: 'neutral',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="success">Gut</Badge>
      <Badge variant="warning">Quick Win</Badge>
      <Badge variant="danger">Kritisch</Badge>
      <Badge variant="info">Tipp</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge size="sm">Klein</Badge>
      <Badge size="md">Mittel</Badge>
      <Badge size="lg">Groß</Badge>
    </div>
  ),
};

// Real-world use case
export const ScoreInterpretations: Story = {
  name: 'Score Interpretations',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>18.4/20</span>
        <Badge variant="success">Exzellent</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>14.2/20</span>
        <Badge variant="info">Gut</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>9.8/20</span>
        <Badge variant="warning">Verbesserbar</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>4.5/20</span>
        <Badge variant="danger">Kritisch</Badge>
      </div>
    </div>
  ),
};
