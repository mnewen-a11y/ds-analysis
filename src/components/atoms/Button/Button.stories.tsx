import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Download, Plus, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Primary UI component for user interactions.

**Accessibility:**
- WCAG 2.1 AA compliant
- Minimum 4.5:1 contrast ratio
- 44px minimum touch target
- Keyboard navigable
- Focus visible indicator

**Usage:**
- Primary: Main user actions (e.g., "Analyse starten")
- Secondary: Alternative actions (e.g., "Abbrechen")
- Tertiary: Low-emphasis actions (e.g., "Details anzeigen")
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ========================================
// PRIMARY STORIES
// ========================================

export const Primary: Story = {
  args: {
    children: 'Analyse starten',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Abbrechen',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Details anzeigen',
    variant: 'tertiary',
  },
};

// ========================================
// WITH ICONS
// ========================================

export const WithIconLeft: Story = {
  args: {
    children: 'PDF herunterladen',
    variant: 'primary',
    icon: <Download size={20} />,
  },
};

export const WithIconPlus: Story = {
  args: {
    children: 'Neue Analyse',
    variant: 'primary',
    icon: <Plus size={20} />,
  },
};

export const IconOnly: Story = {
  args: {
    children: '',
    variant: 'primary',
    icon: <ArrowRight size={20} />,
  },
};

// ========================================
// SIZES
// ========================================

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="sm">Klein</Button>
      <Button size="md">Mittel</Button>
      <Button size="lg">Groß</Button>
    </div>
  ),
};

// ========================================
// STATES
// ========================================

export const Disabled: Story = {
  args: {
    children: 'Deaktiviert',
    variant: 'primary',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Volle Breite',
    variant: 'primary',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// ========================================
// ALL VARIANTS OVERVIEW
// ========================================

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <h3 style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600 }}>Primary</h3>
      <Button variant="primary">Analyse starten</Button>
      
      <h3 style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, marginTop: '16px' }}>Secondary</h3>
      <Button variant="secondary">Abbrechen</Button>
      
      <h3 style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, marginTop: '16px' }}>Tertiary</h3>
      <Button variant="tertiary">Details anzeigen</Button>
      
      <h3 style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, marginTop: '16px' }}>Disabled States</h3>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="tertiary" disabled>Tertiary</Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// ========================================
// REAL-WORLD EXAMPLES
// ========================================

export const DashboardActions: Story = {
  name: 'Dashboard Use Case',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary" icon={<Plus size={20} />}>
        Neue Analyse
      </Button>
      <Button variant="secondary" icon={<Download size={20} />}>
        Report herunterladen
      </Button>
      <Button variant="tertiary">
        Verlauf anzeigen
      </Button>
    </div>
  ),
};
