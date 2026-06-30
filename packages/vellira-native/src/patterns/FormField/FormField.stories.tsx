import { theme } from '@romanbakurov/vellira-tokens';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextInput, View } from 'react-native';

import { FormField } from './FormField';

const controlStyle = {
  width: '100%',
  minHeight: 44,
  paddingHorizontal: theme.tokens.spacing[4],
  paddingVertical: theme.tokens.spacing[3],
  color: theme.components.input.default.fg,
  fontFamily: theme.tokens.typography.family.regular,
  fontSize: theme.tokens.typography.size.md,
  backgroundColor: theme.components.input.default.bg,
  borderColor: theme.components.input.default.border,
  borderRadius: theme.tokens.radius.lg,
  borderWidth: 1,
};

const errorControlStyle = {
  ...controlStyle,
  borderColor: theme.components.input.error.border,
};

const disabledControlStyle = {
  ...controlStyle,
  color: theme.components.input.disabled.fg,
  backgroundColor: theme.components.input.disabled.bg,
  borderColor: theme.components.input.disabled.border,
};

const placeholderTextColor = theme.components.input.default.placeholder;

const meta = {
  title: 'Patterns/FormField',
  component: FormField,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    children: <Text>Field content</Text>,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <View style={{ width: '100%', padding: theme.tokens.spacing[4] }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    label: 'Username',
    description:
      'Use 3–20 characters. Letters, numbers, and underscores are allowed.',
    children: (
      <TextInput
        placeholder='alex_johnson'
        placeholderTextColor={placeholderTextColor}
        style={controlStyle}
      />
    ),
  },
};

export const Required: Story = {
  args: {
    label: 'Full name',
    required: true,
    children: (
      <TextInput
        placeholder='Alex Johnson'
        placeholderTextColor={placeholderTextColor}
        style={controlStyle}
      />
    ),
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    required: true,
    error: 'Enter a valid email',
    children: (
      <TextInput
        placeholder='name@company.com'
        placeholderTextColor={placeholderTextColor}
        style={errorControlStyle}
      />
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    disabled: true,
    children: (
      <TextInput
        editable={false}
        placeholder='Not editable'
        placeholderTextColor={theme.components.input.disabled.placeholder}
        style={disabledControlStyle}
      />
    ),
  },
};

export const CustomContent: Story = {
  args: {
    label: 'Custom content',
    description: 'FormField can wrap any custom form control.',
    children: <Text>Field content</Text>,
  },
};

export const CompleteExample: Story = {
  args: {
    label: 'Email',
    description: 'We will use this email for account notifications.',
    required: true,
    error: 'Email is required',
    children: (
      <TextInput
        placeholder='name@company.com'
        placeholderTextColor={placeholderTextColor}
        style={errorControlStyle}
      />
    ),
  },
};
